import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}