import Link from "next/link";
import { MapPin } from "lucide-react";

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
  { name: "Eyholz" },
  { name: "Stalden" },
  { name: "Raron", href: "/reinigung-raron" },
  { name: "Steg", href: "/reinigung-steg" },
  { name: "Gampel", href: "/reinigung-gampel" },
  { name: "Leuk", href: "/reinigung-leuk" },
  { name: "Susten" },
  { name: "Sion" },
  { name: "Sierre" },
  { name: "Martigny" },
  { name: "Monthey" },
  { name: "Saas-Fee" },
  { name: "Zermatt" },
  { name: "Mörel" },
  { name: "Fiesch" },
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
          {CITIES.map((city) => {
            const chip = (
              <>
                <MapPin className="size-3.5 text-brand-bright shrink-0" />
                {city.name}
              </>
            );
            const base =
              "inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-deep/10 px-4 py-2 text-sm font-medium text-brand-deep/80";
            return city.href ? (
              <Link
                key={city.name}
                href={city.href}
                className={`${base} hover:border-brand-bright/40 hover:text-brand-bright transition-colors`}
              >
                {chip}
              </Link>
            ) : (
              <span key={city.name} className={base}>
                {chip}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
