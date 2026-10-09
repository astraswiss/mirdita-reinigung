import { NextResponse } from "next/server";
import { Resend } from "resend";

import { BUSINESS } from "@/config/site";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitByIp = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitByIp.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";
}

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 2 * 1024 * 1024;

/** Validates the browser-compressed photos (JPEG, base64) sent by the form. */
function parsePhotos(value: unknown): { filename: string; content: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, MAX_PHOTOS)
    .filter(
      (p): p is { name: string; data: string } =>
        !!p &&
        typeof p.data === "string" &&
        /^[A-Za-z0-9+/=]+$/.test(p.data) &&
        p.data.length * 0.75 <= MAX_PHOTO_BYTES,
    )
    .map((p, i) => ({
      filename: `foto-${i + 1}-${
        sanitize(p.name)
          .replace(/[^\w.-]+/g, "_")
          .slice(0, 60) || "bild.jpg"
      }`,
      content: p.data,
    }));
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const { name, email, phone, type, message, website, page, photos } = body as Record<
    string,
    unknown
  >;

  // Honeypot: real users never fill this hidden field. Pretend success without sending.
  if (sanitize(website)) {
    return NextResponse.json({ ok: true });
  }

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

  const attachments = parsePhotos(photos);

  const resend = new Resend(apiKey);
  const cleanPhone = sanitize(phone);
  const cleanType = sanitize(type);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Mirdita Webseite <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? BUSINESS.email,
      replyTo: cleanEmail,
      subject: `Neue Anfrage von ${cleanName}${cleanType ? ` – ${cleanType}` : ""}`,
      text: [
        `Name: ${cleanName}`,
        `E-Mail: ${cleanEmail}`,
        `Telefon: ${cleanPhone || "-"}`,
        `Art der Reinigung: ${cleanType || "-"}`,
        `Seite: ${sanitize(page) || "-"}`,
        `Fotos: ${attachments.length ? `${attachments.length} (im Anhang)` : "-"}`,
        "",
        "Nachricht:",
        typeof message === "string" && message.trim() ? message.trim() : "-",
      ].join("\n"),
      attachments,
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
