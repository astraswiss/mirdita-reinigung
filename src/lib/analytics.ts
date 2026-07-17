/**
 * Thin wrapper around the GA4 gtag() function. Safe to call anywhere: when
 * analytics is disabled (no measurement ID, so gtag never loads) or during SSR,
 * the calls are silently no-ops instead of throwing.
 */

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
}
