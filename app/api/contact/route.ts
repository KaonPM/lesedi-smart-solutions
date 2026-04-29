export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.BREVO_TO_EMAIL || "info@lesedismartsolutions.co.za";
    const fromEmail =
      process.env.BREVO_FROM_EMAIL || "info@lesedismartsolutions.co.za";

    if (!brevoApiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Lesedi Smart Solutions",
          email: fromEmail,
        },
        to: [
          {
            email: toEmail,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: "New enquiry from Lesedi Smart Solutions website",
        htmlContent: `
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Message could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Message could not be sent. Please try again." },
      { status: 500 }
    );
  }
}