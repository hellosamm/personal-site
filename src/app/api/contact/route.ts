import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Contact Form <contact@sammbakerr.com>",
      to: `${process.env.CONTACT_EMAIL}`,
      replyTo: email,
      subject: "New message from contact form",
      text: `From: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "something went wrong" },
      { status: 500 }
    );
  }
}
