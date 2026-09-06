import { CONTACT_PHONE_DIGITS } from "../constants";

export function sanitizeName(value: string) {
  return value
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
    .replace(/\s{2,}/g, " ");
}

export function sanitizePhone(value: string) {
  return value.replace(/\D/g, "").slice(0, CONTACT_PHONE_DIGITS);
}
