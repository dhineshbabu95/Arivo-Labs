import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, 10000);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = sanitizeString(body.name);
    const email = sanitizeString(body.email);
    const company = sanitizeString(body.company);
    const message = sanitizeString(body.message);

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Name is required and must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message is required and must be at least 10 characters" },
        { status: 400 }
      );
    }

    // TODO: Add your preferred notification method here
    // Examples: Send to email (Resend, SendGrid), save to database, Slack webhook
    // For now, we validate and return success
    // console.log({ name, email, company, message });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. I'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
