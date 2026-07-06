import { sendContactEmail } from "@/features/contact/lib/send-contact-email";

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);

    if (contentLength > 10_000) {
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
