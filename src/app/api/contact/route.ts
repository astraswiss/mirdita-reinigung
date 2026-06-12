import { NextResponse } from "next/server";
import { Resend } from "resend";

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const { name, email, phone, type, message } = body as Record<string, unknown>;
  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);

  if (!cleanName || !cleanEmail) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ist nicht konfiguriert");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const cleanPhone = sanitize(phone);
  const cleanType = sanitize(type);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Mirdita Webseite <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "info@mirdita.ch",
      replyTo: cleanEmail,
      subject: `Neue Anfrage von ${cleanName}${cleanType ? ` – ${cleanType}` : ""}`,
      text: [
        `Name: ${cleanName}`,
        `E-Mail: ${cleanEmail}`,
        `Telefon: ${cleanPhone || "-"}`,
        `Art der Reinigung: ${cleanType || "-"}`,
        "",
        "Nachricht:",
        typeof message === "string" && message.trim() ? message.trim() : "-",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Fehler beim Versenden der Kontaktanfrage:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
