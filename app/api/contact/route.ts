import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiKey = process.env.BREVO_API_KEY || "";
    const toEmail = process.env.BREVO_TO_EMAIL || "";
    const fromEmail = process.env.BREVO_FROM_EMAIL || "";

    // Email to business
    const adminResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: fromEmail,
          name: "Lesedi Smart Solutions",
        },
        to: [{ email: toEmail }],
        replyTo: {
          email,
          name,
        },
        subject: `New Enquiry from ${name}`,
        htmlContent: `
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      }),
    });

    if (!adminResponse.ok) {
      const error = await adminResponse.text();
      console.log("Admin Email Error:", error);
      return NextResponse.json(
        { error: "Failed to send enquiry" },
        { status: 500 }
      );
    }

    // Auto reply to sender
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: fromEmail,
          name: "Lesedi Smart Solutions",
        },
        to: [{ email }],
        subject: "We Received Your Email",
        htmlContent: `
          <p>Dear ${name || "Sender"},</p>

          <p>Thank you for reaching out to Lesedi Smart Solutions.</p>

          <p>This is an automated confirmation that we have received your email. A member of our team will review your message and get back to you shortly.</p>

          <p><strong>🗓 Our Operating Hours:</strong><br/>
          Monday – Friday | 08:00 – 17:00</p>

          <p>Please note that we are closed on weekends and public holidays. Emails received outside of business hours will be attended to on the next available working day.</p>

          <p>If your matter is urgent, please include <strong>URGENT</strong> in the subject line of your reply and we will prioritise your request.</p>

          <p>We appreciate your patience and look forward to assisting you.</p>

          <p>
          Warm regards,<br/>
          Lesedi Smart Solutions<br/>
          📧 info@lesedismartsolutions.co.za<br/>
          🌐 www.lesedismartsolutions.co.za
          </p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Server Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}