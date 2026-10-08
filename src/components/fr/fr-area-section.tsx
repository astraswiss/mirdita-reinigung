import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";

// Places we serve; those with a French landing page link to it.
const REGIONS: { name: string; href?: string }[] = [
  { name: "Brigue-Glis" },
  { name: "Naters" },
  { name: "Viège" },
  { name: "Baltschieder" },
  { name: "Eyholz" },
  { name: "Stalden" },
  { name: "Rarogne" },
  { name: "Gampel" },
  { name: "Loèche" },
  { name: "Susten" },
  { name: "Sion", href: "/fr/nettoyage-sion" },
  { name: "Sierre" },
  { name: "Martigny" },
  { name: "Monthey" },
  { name: "Saas-Fee" },
  { name: "Zermatt" },
  { name: "Mörel" },
  { name: "Fiesch" },
];

/**
 * French service-area section. Wording makes clear that Mirdita intervenes in
 * these regions from its Naters base — it does not claim offices elsewhere.
 */
export function FrAreaSection() {
  return (
    <section id="einsatzgebiet" className="px-5 md:px-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-10 md:text-center">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Région d’intervention
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Dans tout le Valais <span className="whitespace-nowrap">pour vous</span>
          </h2>
          <p className="mt-4 text-brand-deep/65 max-w-xl md:mx-auto">
            De Brigue à Martigny — nous nettoyons dans tout le Valais, Haut-Valais et Bas-Valais.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-start md:justify-center gap-3">
          {REGIONS.map((region) =>
            region.href ? (
              <Link
                key={region.name}
                href={region.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-bright/30 px-4 py-2 text-sm font-semibold text-brand-deep hover:border-brand-bright hover:text-brand-bright transition-colors"
              >
                <MapPin className="size-3.5 text-brand-bright shrink-0" />
                {region.name}
                <ArrowRight className="size-3.5 text-brand-bright shrink-0" />
              </Link>
            ) : (
              <span
                key={region.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-deep/10 px-4 py-2 text-sm font-medium text-brand-deep/60"
              >
                <MapPin className="size-3.5 text-brand-deep/35 shrink-0" />
                {region.name}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
