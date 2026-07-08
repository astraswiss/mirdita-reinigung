import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";

/**
 * White card with an eyebrow, H2, intro paragraph and a two-column checklist.
 * The shared "what's included" block for French service pages.
 */
export function FrChecklist({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <section className="px-5 md:px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto scroll-mt-20">
        <Reveal className="rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">{intro}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-brand-deep/85">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
