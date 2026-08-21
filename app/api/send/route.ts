import { sendContactEmail } from "@/features/contact/lib/send-contact-email";
import { CONTACT_API_MAX_CONTENT_LENGTH } from "@/features/contact/constants";

function isJsonRequest(req: Request) {
  return req.headers.get("content-type")?.includes("application/json") ?? false;
}

function isSameOriginRequest(req: Request) {
  const origin = req.headers.get("origin");

  if (!origin) return true;

  const host = req.headers.get("host");
  const forwardedHost = req.headers.get("x-forwarded-host");
  const protocol = req.headers.get("x-forwarded-proto") ?? "https";
  const allowedHost = forwardedHost ?? host;

  return allowedHost ? origin === `${protocol}://${allowedHost}` : false;
}

export async function POST(req: Request) {
  try {
    if (!isSameOriginRequest(req)) {
      return Response.json(
        { success: false, errors: [{ message: "Origen no permitido" }] },
        { status: 403 },
      );
    }

    if (!isJsonRequest(req)) {
      return Response.json(
        { success: false, errors: [{ message: "Content-Type inválido" }] },
        { status: 415 },
      );
    }

    const contentLength = Number(req.headers.get("content-length") || 0);

    if (contentLength > CONTACT_API_MAX_CONTENT_LENGTH) {
      return Response.json(
        { success: false, errors: [{ message: "Solicitud demasiado grande" }] },
        { status: 413 },
      );
    }

    const body = await req.json();
    const identifier =
      req.headers.get("x-forwarded-for")?.split(",").at(0)?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const result = await sendContactEmail(body, identifier);

    if (!result.success) {
      return Response.json(
        { success: false, errors: result.errors },
        { status: result.status },
      );
    }

    return Response.json({ success: true, message: result.message });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, errors: [{ message: "Solicitud inválida" }] },
      { status: 400 },
    );
  }
}
