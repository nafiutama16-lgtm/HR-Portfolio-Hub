import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email, and message are required." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    res.status(500).json({ error: "Email service is not configured." });
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "nafiutama16@gmail.com",
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <h3 style="color: #374151;">Message:</h3>
        <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    res.status(500).json({ error: "Failed to send email. Please try again." });
    return;
  }

  res.status(200).json({ success: true });
});

export default router;
