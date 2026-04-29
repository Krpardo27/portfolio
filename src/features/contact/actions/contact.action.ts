"use server";

import { rateLimit } from "@/src/shared/lib/rate-limit";
import { contactFormSchema, ContactInput } from "../schema";
import { headers } from "next/headers";
import { ContactEmail } from "@/src/shared/emails/ContactEmail";
import { getResend } from "@/src/shared/lib/resend";

export async function sendContactForm(data: ContactInput) {
  // 1. Validación
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues,
    };
  }

  const { name, email, message } = result.data;

  // 2. Headers
  const headersList = await headers();

  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "unknown";

  // 3. Rate limit
  const limit = rateLimit(ip || crypto.randomUUID());

  if (!limit.success) {
    return {
      success: false,
      errors: [{ message: "Demasiadas solicitudes. Intenta más tarde." }],
    };
  }

  // 4. Email
  try {
    const resend = getResend();

    const from = process.env.EMAIL_FROM;
    if (!from) {
      throw new Error("Missing EMAIL_FROM");
    }

    const { error } = await resend.emails.send({
      from,
      to: ["kpardoveas@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return {
        success: false,
        errors: [{ message: "Error enviando correo" }],
      };
    }

    return {
      success: true,
      errors: [],
      message: "Mensaje enviado correctamente 🚀",
    };
  } catch (err) {
    console.error("❌ Server error:", err);
    return {
      success: false,
      errors: [{ message: "Error interno del servidor" }],
    };
  }
}