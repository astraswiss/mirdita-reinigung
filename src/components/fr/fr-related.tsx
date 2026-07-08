import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

export type FrRelatedLink = { href: string; label: string; desc: string };

/**
 * Internal-linking block: cards pointing to related French service pages.
 * Every French service page links to one or two relevant siblings.
 */
export function FrRelated({
  title = "Autres services dans le Valais",
  links,
}: {
  title?: string;
  links: FrRelatedLink[];
}) {
  return (
    <section className="px-5 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-8">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            En savoir plus
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <Reveal key={l.href} delay={i * 80}>
              <Link
                href={l.href}
                className="group flex h-full flex-col rounded-2xl bg-white border border-brand-deep/5 p-6 hover:border-brand-bright/40 transition-colors"
              >
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {l.label}
                  <ArrowRight className="size-4 text-brand-bright opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{l.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
