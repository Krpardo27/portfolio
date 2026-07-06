"use server";

import { ContactInput } from "../schema";
import { headers } from "next/headers";
import { sendContactEmail } from "../lib/send-contact-email";

export async function sendContactForm(data: ContactInput) {
  const headersList = await headers();
  const identifier =
    headersList.get("x-forwarded-for")?.split(",").at(0)?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";

  return sendContactEmail(data, identifier);
}
