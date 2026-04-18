import { ContactEmail } from "@/src/shared/emails/ContactEmail";
import { resend } from "@/src/shared/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: ["kpardoveas@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      react: ContactEmail({ name, email, message }), 
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Error enviando correo" }, { status: 500 });
  }
}
