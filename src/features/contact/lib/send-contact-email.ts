import { ContactEmail } from "@/shared/emails/ContactEmail";
import { rateLimit } from "@/shared/lib/rate-limit";
import { getResend } from "@/shared/lib/resend";
import { contactFormSchema } from "../schema";

type ContactResult =
  | {
      success: true;
      errors: [];
      message: string;
      status: 200;
    }
  | {
      success: false;
      errors: { message: string }[];
      status: 400 | 429 | 500;
    };

const GENERIC_SEND_ERROR =
  "No se pudo enviar el mensaje. Intenta nuevamente más tarde.";

export async function sendContactEmail(
  data: unknown,
  identifier: string,
): Promise<ContactResult> {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map((issue) => ({ message: issue.message })),
      status: 400,
    };
  }

  const limit = await rateLimit(identifier);

  if (!limit.success) {
    return {
      success: false,
      errors: [{ message: "Demasiadas solicitudes. Intenta más tarde." }],
      status: 429,
    };
  }

  const { name, email, phone, message } = result.data;

  try {
    const from = process.env.EMAIL_FROM;

    if (!from) {
      console.error("Missing EMAIL_FROM");
      return {
        success: false,
        errors: [{ message: GENERIC_SEND_ERROR }],
        status: 500,
      };
    }

    const resend = getResend();
    const { error } = await resend.emails.send({
      from,
      to: ["kpardoveas@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      react: ContactEmail({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        errors: [{ message: GENERIC_SEND_ERROR }],
        status: 500,
      };
    }

    return {
      success: true,
      errors: [],
      message: "Mensaje enviado correctamente.",
      status: 200,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      errors: [{ message: GENERIC_SEND_ERROR }],
      status: 500,
    };
  }
}