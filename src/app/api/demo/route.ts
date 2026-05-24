import { NextRequest, NextResponse } from "next/server";
import { demoBookingSchema } from "@/lib/form-validation";
import {
  checkRateLimit,
  getClientIp,
  createErrorResponse,
  createSuccessResponse,
  logError,
} from "@/lib/api-utils";
import {
  createOrUpdateContact,
  createDeal,
  addNote,
} from "@/lib/hubspot";
import {
  sendEmail,
  createDemoConfirmationEmail,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    const isAllowed = await checkRateLimit(clientIp);
    if (!isAllowed) {
      return NextResponse.json(
        createErrorResponse(
          "Too many requests. Please try again later."
        ),
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        createErrorResponse("Invalid request body"),
        { status: 400 }
      );
    }

    // Validate request data
    const validationResult = demoBookingSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        createErrorResponse("Validation failed", { errors }),
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Validate that the requested time is in the future
    const requestedDate = new Date(data.preferredDate);
    if (requestedDate < new Date()) {
      return NextResponse.json(
        createErrorResponse("Requested date must be in the future"),
        { status: 400 }
      );
    }

    // Create or update contact in HubSpot
    const contact = await createOrUpdateContact({
      firstName: data.name.split(" ")[0],
      lastName: data.name.split(" ").slice(1).join(" ") || "",
      email: data.email,
      company: data.company,
      phone: data.phone,
      jobTitle: data.jobTitle,
    });

    // Create a deal for the demo booking
    const formattedDate = requestedDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const deal = await createDeal(contact.id, {
      dealname: `Product Demo - ${data.company}`,
      dealstage: "negotiation", // "negotiation" stage typically represents demos/calls
      description: `Demo requested for ${data.company}\n\nPreferred Date/Time: ${formattedDate}\nTimezone: ${data.timezone}\nIndustry: ${data.industry}\n\nNotes: ${data.message || "None"}`,
      closedate: requestedDate.getTime().toString(),
    });

    // Add note to contact
    const demoNote = `
Demo Booking Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Industry: ${data.industry}
Job Title: ${data.jobTitle || "N/A"}
Phone: ${data.phone || "N/A"}

Preferred Date/Time: ${formattedDate}
Timezone: ${data.timezone}

Notes: ${data.message || "None"}

Deal ID: ${deal.id}`;

    await addNote(contact.id, demoNote);

    // Send confirmation email to user
    await sendEmail({
      to: data.email,
      subject: "Demo Booking Confirmed - Yumesorai",
      html: createDemoConfirmationEmail(
        data.name.split(" ")[0],
        formattedDate
      ),
    });

    // Log success
    console.log(
      `[Demo API] Booking processed for ${data.email} on ${formattedDate}`
    );

    return NextResponse.json(
      createSuccessResponse(
        "Your demo has been booked successfully. Check your email for confirmation details.",
        {
          contactId: contact.id,
          dealId: deal.id,
          email: data.email,
          demoDate: formattedDate,
        }
      ),
      { status: 201 }
    );
  } catch (error) {
    logError(error, "Demo API");

    return NextResponse.json(
      createErrorResponse(
        "An error occurred while booking your demo. Please try again later."
      ),
      { status: 500 }
    );
  }
}

// Optional: Support other HTTP methods with proper error responses
export async function GET() {
  return NextResponse.json(
    createErrorResponse("Method not allowed"),
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    createErrorResponse("Method not allowed"),
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    createErrorResponse("Method not allowed"),
    { status: 405 }
  );
}
