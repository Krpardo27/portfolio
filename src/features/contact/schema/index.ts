import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
  .string()
  .trim()
  .min(2, "El nombre es requerido")
  .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),
  phone: z
  .string()
  .transform((v) => v.replace(/\D/g, ""))
  .refine((v) => /^[0-9]{8}$/.test(v), {
    message: "Debe tener 8 dígitos",
  }),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactInput = z.infer<typeof contactFormSchema>;
