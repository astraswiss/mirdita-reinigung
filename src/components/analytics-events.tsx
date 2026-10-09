"use client";

import { useEffect } from "react";

import { trackCtaClick } from "@/lib/analytics";

/**
 * Site-wide CTA tracking. A single delegated click listener sends `cta_click`
 * for every element marked with `{...cta(name, location)}` (see
 * src/lib/analytics.ts). Safety net: an unmarked phone / e-mail / WhatsApp link
 * is still tracked as `<method>_other` (location "unknown") and logs a warning
 * in development so it can be given a proper name.
 * Form submissions are tracked separately (`generate_lead`) from the submit
 * handler, and only after the server accepted the request.
 */
function contactMethod(href: string): "phone" | "email" | "whatsapp" | null {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me") || href.includes("api.whatsapp.com")) return "whatsapp";
  return null;
}

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      const tagged = target?.closest<HTMLElement>("[data-cta]");
      if (tagged) {
        trackCtaClick(tagged.dataset.cta ?? "unknown", tagged.dataset.ctaLocation ?? "unknown");
        return;
      }

      const href = target?.closest("a")?.getAttribute("href") ?? "";
      const method = contactMethod(href);
      if (method) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`[analytics] Untagged ${method} link (${href}) — add {...cta(...)}`);
        }
        trackCtaClick(`${method}_other`, "unknown");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
