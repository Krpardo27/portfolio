"use server";

import { contactFormSchema, ContactInput } from "../schema";

export async function sendContactForm(data: ContactInput) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues,
    };
  }

  console.log("📩 Datos completos:", JSON.stringify(result.data, null, 2));

  return {
    success: true,
    errors: [],
    message: "Formulario enviado correctamente",
  };
}
