import { NextRequest, NextResponse } from "next/server";
import { assessmentFormSchema } from "@/lib/form-validation";
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
  createAssessmentConfirmationEmail,
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
    const validationResult = assessmentFormSchema.safeParse(body);
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
      jobTitle: data.jobTitle,
    });

    // Add detailed note to contact with assessment data
    const assessmentNote = `
Assessment Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Industry: ${data.industry}
Job Title: ${data.jobTitle || "N/A"}
Phone: ${data.phone || "N/A"}

Current Tech Stack: ${data.currentStack}
Pain Points: ${data.painPoints.join(", ")}
Timeline: ${data.timeline}

Submission Type: Assessment`;

    await addNote(contact.id, assessmentNote);

    // Send confirmation email to user
    await sendEmail({
      to: data.email,
      subject: "Assessment Received - Yumesorai",
      html: createAssessmentConfirmationEmail(data.name.split(" ")[0]),
    });

    // Log success
    console.log(`[Assessment API] Submission processed for ${data.email}`);

    return NextResponse.json(
      createSuccessResponse(
        "Your assessment has been submitted successfully",
        {
          contactId: contact.id,
          email: data.email,
        }
      ),
      { status: 201 }
    );
  } catch (error) {
    logError(error, "Assessment API");

    return NextResponse.json(
      createErrorResponse(
        "An error occurred while processing your assessment. Please try again later."
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
