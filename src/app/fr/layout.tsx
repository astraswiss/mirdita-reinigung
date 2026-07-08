import { HtmlLang } from "@/components/html-lang";

/**
 * Segment layout for the French site. Does not emit its own <html>/<body>
 * (only the root layout may) — it just flips the document language to French
 * for everything under /fr via the HtmlLang client component.
 */
export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="fr" />
      {children}
    </>
  );
}
