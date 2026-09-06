import { ContactEmail } from "@/shared/emails/ContactEmail";
import { rateLimit } from "@/shared/lib/rate-limit";
import { getResend } from "@/shared/lib/resend";
import { contactFormSchema } from "../schema";
import { GENERIC_CONTACT_SEND_ERROR } from "../constants";

const CONFIGURATION_ERROR =
  "Falta la configuración del email. Revisa RESEND_API_KEY y EMAIL_FROM.";

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

export async function sendContactEmail(
  data: unknown,
  identifier: string,
): Promise<ContactResult> {
  const limit = await rateLimit(identifier);

  if (!limit.success) {
    return {
      success: false,
      errors: [{ message: "Demasiadas solicitudes. Intenta más tarde." }],
      status: 429,
    };
  }

  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map((issue) => ({ message: issue.message })),
      status: 400,
    };
  }

  const { name, email, phone, message } = result.data;

  try {
    const from = process.env.EMAIL_FROM;
    const apiKey = process.env.RESEND_API_KEY;

    if (!from || !apiKey) {
      console.error("Missing email config", {
        hasEmailFrom: Boolean(from),
        hasResendApiKey: Boolean(apiKey),
      });
      return {
        success: false,
        errors: [{ message: CONFIGURATION_ERROR }],
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
        errors: [{ message: GENERIC_CONTACT_SEND_ERROR }],
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
    const message =
      error instanceof Error ? error.message : "Error desconocido al enviar email";

    console.error("Contact form error:", message);
    return {
      success: false,
      errors: [{ message: GENERIC_CONTACT_SEND_ERROR }],
      status: 500,
    };
  }
}