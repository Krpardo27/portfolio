import { z } from "zod";
import { CONTACT_MESSAGE_MAX_LENGTH, CONTACT_PHONE_DIGITS } from "../constants";
import { sanitizePhone } from "../utils/sanitize-contact-field";

const stringField = (value: unknown) =>
  typeof value === "string" ? value : "";

export const contactFormSchema = z.object({
  name: z.preprocess(
    stringField,
    z
      .string()
      .trim()
      .min(2, "El nombre es requerido")
      .max(80, "El nombre es demasiado largo")
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),
  ),
  phone: z.preprocess(
    stringField,
    z.string().transform(sanitizePhone).refine(
      (value) => value.length === CONTACT_PHONE_DIGITS,
      `Debe tener ${CONTACT_PHONE_DIGITS} dígitos`,
    ),
  ),
  email: z.preprocess(
    stringField,
    z
      .string()
      .trim()
      .toLowerCase()
      .max(160, "El email es demasiado largo")
      .pipe(z.email("Email inválido")),
  ),
  message: z.preprocess(
    stringField,
    z
      .string()
      .trim()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(CONTACT_MESSAGE_MAX_LENGTH, "El mensaje es demasiado largo"),
  ),
  website: z.string().max(0, "Formulario inválido").optional(),
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactInput = z.output<typeof contactFormSchema>;
