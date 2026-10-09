/**
 * Analytics helpers. Thin wrapper around the GA4 gtag() function — safe to
 * call anywhere: when analytics is disabled (no measurement ID, so gtag never
 * loads) or during SSR, the calls are silently no-ops instead of throwing.
 *
 * CTA tracking: spread `cta(name, location)` onto any link or button. The
 * site-wide listener in <AnalyticsEvents> turns clicks on such elements into a
 * single `cta_click` event — adding a new CTA is one line.
 */

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
  }
}

export type CtaName =
  | "offerte_header"
  | "kontakt_header"
  | "phone_header"
  | "whatsapp_floating"
  | "offerte_hero"
  | "leistungen_hero"
  | "phone_hero"
  | "offerte_card_privat"
  | "offerte_card_firmen"
  | "offerte_card_spezial"
  | "phone_contact_card"
  | "whatsapp_contact_card"
  | "email_contact_card"
  | "maps_contact_card"
  | "phone_footer"
  | "email_footer"
  | "maps_footer"
  | "about_footer"
  | "maps_reviews"
  | "phone_legal"
  | "email_legal";

export type CtaLocation =
  | "header"
  | "hero"
  | "service_cards"
  | "contact_card"
  | "footer"
  | "floating_button"
  | "reviews"
  | "legal_page";

export type CtaAttributes = { "data-cta": CtaName; "data-cta-location": CtaLocation };

/** Spread onto a CTA element: `<a {...cta("phone_footer", "footer")} …>` */
export function cta(name: CtaName, location: CtaLocation): CtaAttributes {
  return { "data-cta": name, "data-cta-location": location };
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
}

/** One event for every CTA click on the site. */
export function trackCtaClick(ctaName: string, ctaLocation: string): void {
  if (typeof window === "undefined") return;
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  });
}

/** Lead conversion — call only after the form was accepted by the server. */
export function trackLead(formName: "offerte_formular"): void {
  trackEvent("generate_lead", { form_name: formName });
}
