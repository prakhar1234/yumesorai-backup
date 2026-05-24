import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[Resend] RESEND_API_KEY not configured. Running in development mode without email service."
        );
        // Return a mock client that won't be used
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return null as any;
      }
      throw new Error("RESEND_API_KEY environment variable is not configured");
    }

    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<{ id: string }> {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.log(`[Resend Dev Mode] Would send email to ${options.to} with subject "${options.subject}"`);
        return { id: `dev_email_${Date.now()}` };
      }
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = getResendClient();

    const response = await resend.emails.send({
      from: options.from || "noreply@yumesorai.com",
      to: options.to,
      subject: options.subject,
      html: options.html,
      ...(options.replyTo && { reply_to: options.replyTo }),
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return { id: response.data?.id || "" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export function createContactConfirmationEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 40px 20px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You!</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for reaching out to Yumesorai. We've received your message and appreciate your interest in our AI-driven legacy modernization platform.</p>
            <p>Our team will review your information and get back to you shortly to discuss how we can help transform your legacy systems.</p>
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will reach out within 24-48 business hours</li>
              <li>We'll discuss your specific needs and challenges</li>
              <li>We'll explore how Yumesorai can accelerate your digital transformation</li>
            </ul>
            <p>In the meantime, feel free to explore more about our platform and solutions on our website.</p>
            <p>Best regards,<br><strong>The Yumesorai Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Yumesorai. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function createAssessmentConfirmationEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 40px 20px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Assessment Received!</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for completing the Yumesorai Assessment. We're excited to help you understand your legacy modernization opportunities.</p>
            <p>Your assessment has been recorded, and our experts will analyze your responses to provide personalized insights and recommendations tailored to your organization.</p>
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Our team will prepare a detailed assessment report</li>
              <li>We'll schedule a call to review the findings and recommendations</li>
              <li>Together, we'll explore a roadmap for your transformation</li>
            </ul>
            <p>If you have any questions in the meantime, don't hesitate to reach out.</p>
            <p>Best regards,<br><strong>The Yumesorai Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Yumesorai. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function createDemoConfirmationEmail(
  name: string,
  demoDate?: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 40px 20px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Demo Booking Confirmed!</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for booking a demo with Yumesorai! We're looking forward to showing you how our AI-driven platform can transform your legacy systems.</p>
            ${demoDate ? `<p><strong>Your Demo:</strong> ${demoDate}</p>` : ""}
            <p><strong>What to Expect:</strong></p>
            <ul>
              <li>A 30-minute interactive walkthrough of the Yumesorai platform</li>
              <li>Live demonstration of key features relevant to your industry</li>
              <li>Q&A session with our product specialists</li>
              <li>Discussion of next steps and how we can support your transformation</li>
            </ul>
            <p>Our team will send you calendar details shortly. Please check your email for the meeting invite.</p>
            <p>If you need to reschedule or have any questions, please reply to this email.</p>
            <p>Best regards,<br><strong>The Yumesorai Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Yumesorai. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
