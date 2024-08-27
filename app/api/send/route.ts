import { resend } from "@/lib/resend";
import { AnfragenTemplate } from "@/components/emails/AnfragenTemplate";

export async function POST(req: Request) {
  try {
    console.log("Request erhalten:", req.body);
    const { name, email, message, phoneNumber } = await req.json();

    console.log("Parsed Daten:", { name, email, message, phoneNumber });

    const { data, error } = await resend.emails.send({
      from: "anfrage@fit-mit-mary.de",
      to: ["info@fit-mit-mary.de"],
      subject: `Neue Buchungsanfrage | ${name}`,
      react: AnfragenTemplate({
        name: name,
        email: email,
        message: message,
        phoneNumber: phoneNumber,
      }),
    });

    if (error) {
      console.error("Error beim Senden der E-Mail:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    console.log("Email erfolgreich gesendet:", data);
    return new Response(JSON.stringify(data));
  } catch (error: any) {
    console.error("Catch-Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
