// /app/contact/actions.ts
"use server";

import nodemailer from "nodemailer";

export async function sendEmail(data: FormData) {
  console.log("sendEmail invoked");

  const firstName = data.get("firstName")?.toString();
  const lastName = data.get("lastName")?.toString();
  const email = data.get("email")?.toString();
  const phoneNumber = data.get("phoneNumber")?.toString();
  const message = data.get("message")?.toString();

  console.log("Form Data:", {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  if (!firstName || !lastName || !email || !message) {
    console.error("Validation failed - missing required fields");
    throw new Error("Bitte alle Felder ausfüllen");
  }

  try {
    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Konfiguriere deinen SMTP-Server über Umgebungsvariablen
      port: 465 | 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("Transporter created, sending email...");

    const info = await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "your-email@example.com", // Zieladresse
      subject: "Neue Kontaktanfrage",
      text: `
        Name: ${firstName} ${lastName}
        E-Mail: ${email}
        Telefonnummer: ${phoneNumber}
        Nachricht: ${message}
      `,
    });

    console.log("Email sent successfully:", info);

    return { success: true };
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    throw new Error("Fehler beim Senden der Nachricht");
  }
}
