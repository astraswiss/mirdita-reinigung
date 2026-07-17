"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide contact tracking. A single delegated click listener catches every
 * phone / e-mail / WhatsApp link anywhere on the site (header, footer, contact
 * cards, city pages) so we don't have to wire each link individually. Fires a
 * GA4 `contact_click` event with the contact method. Form submissions are
 * tracked separately (as `generate_lead`) from their submit handlers, since
 * those should only count on a successful send.
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

      const method = contactMethod(anchor.getAttribute("href") ?? "");
      if (!method) return;

      trackEvent("contact_click", { method });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
