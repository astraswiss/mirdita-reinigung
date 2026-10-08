import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";

// Places we serve. Those with their own landing page link to it, so every
// page carrying this section also cross-links the city pages.
const CITIES: { name: string; href?: string }[] = [
  { name: "Brig-Glis", href: "/reinigung-brig-glis" },
  { name: "Naters", href: "/reinigung-naters" },
  { name: "Ried-Brig", href: "/reinigung-ried-brig" },
  { name: "Lalden", href: "/reinigung-lalden" },
  { name: "Visp", href: "/reinigung-visp" },
  { name: "Baltschieder", href: "/reinigung-baltschieder" },
  { name: "Eyholz", href: "/reinigung-visp" },
  { name: "Stalden", href: "/reinigung-stalden" },
  { name: "Raron", href: "/reinigung-raron" },
  { name: "Steg", href: "/reinigung-steg" },
  { name: "Gampel", href: "/reinigung-gampel" },
  { name: "Leuk", href: "/reinigung-leuk" },
  { name: "Susten", href: "/reinigung-leuk" },
  { name: "Sion", href: "/fr/nettoyage-sion" },
  { name: "Sierre", href: "/fr/nettoyage-sierre" },
  { name: "Martigny", href: "/fr/nettoyage-martigny" },
  { name: "Monthey", href: "/fr/nettoyage-monthey" },
  { name: "Saas-Fee", href: "/reinigung-saas-fee" },
  { name: "Zermatt", href: "/reinigung-zermatt" },
  { name: "Mörel", href: "/reinigung-moerel" },
  { name: "Fiesch", href: "/reinigung-fiesch" },
];

export function EinsatzgebietSection() {
  return (
    <section id="einsatzgebiet" className="px-5 md:px-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-10 md:text-center">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Einsatzgebiet
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Im ganzen Wallis <span className="whitespace-nowrap">für Sie da</span>
          </h2>
          <p className="mt-4 text-brand-deep/65 max-w-xl md:mx-auto">
            Von Brig bis Martigny — wir reinigen im ganzen Wallis, Ober- und Unterwallis.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-start md:justify-center gap-3">
          {CITIES.map((city) =>
            city.href ? (
              <Link
                key={city.name}
                href={city.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-bright/30 px-4 py-2 text-sm font-semibold text-brand-deep hover:border-brand-bright hover:text-brand-bright transition-colors"
              >
                <MapPin className="size-3.5 text-brand-bright shrink-0" />
                {city.name}
                <ArrowRight className="size-3.5 text-brand-bright shrink-0" />
              </Link>
            ) : (
              <span
                key={city.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-deep/10 px-4 py-2 text-sm font-medium text-brand-deep/60"
              >
                <MapPin className="size-3.5 text-brand-deep/35 shrink-0" />
                {city.name}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
