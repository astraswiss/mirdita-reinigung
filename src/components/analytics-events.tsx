"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide interaction tracking. A single delegated click listener catches
 * every relevant link anywhere on the site (header, footer, contact cards,
 * city and service pages) so we don't have to wire each link individually:
 *   - phone / e-mail / WhatsApp links  -> `contact_click`
 *   - "Offerte" / "Devis" CTAs (links to #kontakt) -> `cta_click`
 * Form submissions are tracked separately (as `generate_lead`) from their
 * submit handlers, since those should only count on a successful send.
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
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      const method = contactMethod(href);
      if (method) {
        trackEvent("contact_click", { method });
        return;
      }

      // Quote CTAs everywhere point at the contact section (#kontakt).
      if (href.includes("#kontakt")) {
        trackEvent("cta_click", { target: "contact", label: anchor.textContent?.trim() || "" });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
