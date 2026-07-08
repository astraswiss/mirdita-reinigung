import { MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";

const REGIONS = [
  "Naters",
  "Brig-Glis",
  "Viège",
  "Sion",
  "Sierre",
  "Martigny",
  "Monthey",
  "Crans-Montana",
  "Verbier",
  "Zermatt",
  "Saas-Fee",
  "Loèche",
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
            Dans tout le <span className="whitespace-nowrap">Canton du Valais</span>
          </h2>
          <p className="mt-4 text-brand-deep/65 max-w-xl md:mx-auto">
            Basés à Naters, nous intervenons dans tout le Valais — du Haut-Valais au Bas-Valais, en
            passant par le Valais central.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-start md:justify-center gap-3">
          {REGIONS.map((region) => (
            <span
              key={region}
              className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-deep/10 px-4 py-2 text-sm font-medium text-brand-deep/80"
            >
              <MapPin className="size-3.5 text-brand-bright shrink-0" />
              {region}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
