import { z } from "zod";

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
    z
      .string()
      .transform((v) => v.replace(/\D/g, ""))
      .refine((v) => /^[0-9]{8}$/.test(v), {
        message: "Debe tener 8 dígitos",
      }),
  ),
  email: z.preprocess(
    stringField,
    z
      .string()
      .trim()
      .toLowerCase()
      .email("Email inválido")
      .max(160, "El email es demasiado largo"),
  ),
  message: z.preprocess(
    stringField,
    z
      .string()
      .trim()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(1500, "El mensaje es demasiado largo"),
  ),
  website: z.string().max(0, "Formulario inválido").optional(),
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactInput = z.output<typeof contactFormSchema>;
