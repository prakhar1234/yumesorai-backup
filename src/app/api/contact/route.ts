import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/form-validation";
import {
  checkRateLimit,
  getClientIp,
  createErrorResponse,
  createSuccessResponse,
  logError,
} from "@/lib/api-utils";
import {
  createOrUpdateContact,
  addNote,
} from "@/lib/hubspot";
import {
  sendEmail,
  createContactConfirmationEmail,
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
    const validationResult = contactFormSchema.safeParse(body);
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

    // Create or update contact in HubSpot
    const contact = await createOrUpdateContact({
      firstName: data.name.split(" ")[0],
      lastName: data.name.split(" ").slice(1).join(" ") || "",
      email: data.email,
      company: data.company,
      phone: data.phone,
      message: data.message,
    });

    // Add note to contact
    await addNote(
      contact.id,
      `Contact Form Submission\n\nIndustry: ${data.industry}\n\nMessage: ${data.message}`
    );

    // Send confirmation email to user
    await sendEmail({
      to: data.email,
      subject: "Thank You for Contacting Yumesorai",
      html: createContactConfirmationEmail(data.name.split(" ")[0]),
    });

    // Log success
    console.log(`[Contact API] Submission processed for ${data.email}`);

    return NextResponse.json(
      createSuccessResponse("Your message has been sent successfully", {
        contactId: contact.id,
        email: data.email,
      }),
      { status: 201 }
    );
  } catch (error) {
    logError(error, "Contact API");

    return NextResponse.json(
      createErrorResponse(
        "An error occurred while processing your request. Please try again later."
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
