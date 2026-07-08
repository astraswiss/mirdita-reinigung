"use client";

import { useEffect } from "react";

/**
 * Sets the document language for French routes.
 *
 * The App Router emits `<html lang="de">` from the single root layout, so there
 * is no server-rendered per-route lang without middleware-based i18n routing.
 * This client component flips `document.documentElement.lang` to `fr` while a
 * French page is mounted and restores `de` on unmount (for client-side nav back
 * to the German site). Combined with a `lang="fr"` wrapper on the page content
 * and reciprocal hreflang alternates, this keeps language signals correct.
 */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
