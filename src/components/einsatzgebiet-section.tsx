import { MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";

const CITIES = [
  "Brig-Glis",
  "Naters",
  "Visp",
  "Baltschieder",
  "Eyholz",
  "Stalden",
  "Raron",
  "Gampel",
  "Leuk",
  "Susten",
  "Sion",
  "Sierre",
  "Martigny",
  "Monthey",
  "Saas-Fee",
  "Zermatt",
  "Mörel",
  "Fiesch",
];

export function EinsatzgebietSection() {
  return (
    <section className="px-5 md:px-10 py-16">
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
          {CITIES.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-deep/10 px-4 py-2 text-sm font-medium text-brand-deep/80"
            >
              <MapPin className="size-3.5 text-brand-bright shrink-0" />
              {city}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
