import { Check, ChevronDown } from "lucide-react";

import { Reveal } from "@/components/reveal";

/**
 * Building blocks for the long-form service pages (Baureinigung,
 * Praxisreinigung and their FR versions). Visual style matches the existing
 * checklist card, the "So arbeiten wir" cards and the FAQ on the about page.
 */

export type ChecklistGroup = { title: string; items: string[] };

/** Checklist split into sub-groups, each with its own H3. */
export function ChecklistGroups({ groups }: { groups: ChecklistGroup[] }) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-semibold text-lg">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-brand-deep/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** "Für wen" section: H2 + cards with H3. */
export function AudienceSection({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="px-5 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {intro && <p className="mt-4 text-brand-deep/65 leading-relaxed">{intro}</p>}
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="rounded-2xl bg-white border border-brand-deep/5 p-6"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export type FaqItem = { q: string; a: string };

/** FAQ accordion with FAQPage structured data built from the same items. */
export function FaqSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: FaqItem[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="px-5 md:px-10 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <Reveal className="mb-8 md:text-center">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        </Reveal>
        <div className="space-y-3">
          {items.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-white border border-brand-deep/5 px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-semibold">{f.q}</h3>
                <ChevronDown className="size-5 shrink-0 text-brand-bright transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-brand-deep/65 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Shared style for inline links inside prose. */
export const PROSE_LINK =
  "font-medium text-brand-deep underline decoration-brand-bright/40 underline-offset-2 hover:text-brand-bright";
