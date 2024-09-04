// pages/api/send.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Check if fields inside Contact Form are filled correctly
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }

    // E-Mail-Configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.goneo.de",
      port: 587, // 465 for SSL, 587 for TLS
      secure: false, // true for 465 / SSL, false for different ports
      auth: {
        user: process.env.SMTP_USER, // SMTP-Username
        pass: process.env.SMTP_PASS, // SMTP-Password
      },
    });

    try {
      // Send E-Mail
      await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: "info@fit-mit-mary.de",
        subject: `Neue Kudenanfrage von ${firstName} ${lastName}`,
        text: `
          Name: ${firstName} ${lastName}
          E-Mail: ${email}
          Telefonnummer: ${phoneNumber}
          Nachricht: ${message}
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
      res.status(500).json({ error: "Fehler beim Senden der Nachricht" });
    }
  } else {
    res.status(405).json({ error: "Methode nicht erlaubt" });
  }
}
