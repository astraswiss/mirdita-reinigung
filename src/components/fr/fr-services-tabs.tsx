"use client";

import { useState } from "react";
import { ArrowRight, Building2, Check, Home as HomeIcon, Sparkles } from "lucide-react";

import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { PHOTO_BUERO, PHOTO_PRIVAT, PHOTO_SPEZIAL } from "@/components/site-config";

type Key = "particuliers" | "entreprises" | "special";

const SERVICES: Record<
  Key,
  {
    label: string;
    icon: typeof HomeIcon;
    title: string;
    description: string;
    items: string[];
    image: string;
    imageAlt: string;
    imagePosition?: string;
  }
> = {
  particuliers: {
    label: "Particuliers",
    icon: HomeIcon,
    title: "Le nettoyage de votre logement",
    description:
      "Déménagement, grand nettoyage ou entretien régulier — nous laissons votre logement impeccable. Avec garantie de remise pour les fins de bail.",
    items: [
      "Nettoyage fin de bail avec garantie de remise",
      "Nettoyage d’appartement et de maison",
      "Nettoyage régulier et d’entretien",
      "Vitres, fenêtres et stores",
      "Nettoyage de tapis et moquettes",
    ],
    image: PHOTO_PRIVAT,
    imageAlt: "Collaboratrice de Mirdita nettoyant une cuisine dans le Valais",
    imagePosition: "object-bottom",
  },
  entreprises: {
    label: "Entreprises & commerces",
    icon: Building2,
    title: "La propreté de votre entreprise",
    description:
      "Des locaux soignés sont votre carte de visite. Nous intervenons avec discrétion, si vous le souhaitez en dehors de vos horaires — de façon fiable.",
    items: [
      "Nettoyage de bureaux",
      "Cabinets médicaux et espaces sensibles",
      "Commerces et surfaces de vente",
      "Nettoyage de fin de chantier",
      "Contrats d’entretien réguliers",
    ],
    image: PHOTO_BUERO,
    imageAlt: "Bureau moderne après le nettoyage par Mirdita dans le Valais",
    imagePosition: "object-left",
  },
  special: {
    label: "Nettoyages spéciaux",
    icon: Sparkles,
    title: "Demandes particulières",
    description:
      "Pour tout ce qui va au-delà du nettoyage classique. Nous apportons l’équipement adapté et l’expérience nécessaire.",
    items: [
      "Nettoyage de vitres et surfaces vitrées",
      "Nettoyage de tapis en profondeur",
      "Conciergerie et entretien d’immeubles",
      "Nettoyage en profondeur",
      "Nettoyage après travaux",
    ],
    image: PHOTO_SPEZIAL,
    imageAlt: "Collaborateur de Mirdita nettoyant une grande surface vitrée dans le Valais",
  },
};

/** French services section — interactive tabs, mirroring the German homepage. */
export function FrServicesTabs() {
  const [active, setActive] = useState<Key>("particuliers");
  const current = SERVICES[active];
  const ActiveIcon = current.icon;

  return (
    <section className="px-5 md:px-10 py-20">
      <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
        <Reveal className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Services
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Que pouvons-nous nettoyer ?
            </h2>
          </div>
          <p className="text-brand-deep/65 md:max-w-sm">
            Choisissez votre domaine — nous vous montrons concrètement ce que nous prenons en
            charge.
          </p>
        </Reveal>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(SERVICES) as Key[]).map((key) => {
            const s = SERVICES[key];
            const Icon = s.icon;
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all border ${
                  isActive
                    ? "bg-brand-deep text-white border-brand-deep"
                    : "bg-white text-brand-deep/75 border-brand-deep/10 hover:border-brand-deep/30"
                }`}
              >
                <Icon className="size-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <Reveal
          delay={100}
          className="rounded-[28px] bg-white border border-brand-deep/5 overflow-hidden shadow-[0_20px_50px_-30px_rgba(0,21,63,0.2)]"
        >
          <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[600px]">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 w-fit rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold">
                <ActiveIcon className="size-3.5" />
                {current.label}
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">
                {current.title}
              </h3>
              <p className="mt-4 text-brand-deep/65 leading-relaxed">{current.description}</p>
              <ul className="mt-6 space-y-3">
                {current.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-brand-deep/85">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="mt-8 inline-flex items-center gap-2 w-fit bg-brand-bright text-white rounded-full px-5 py-3 text-sm font-semibold hover:brightness-110 transition-all"
              >
                Devis pour {current.label}
                <ArrowRight className="size-4" />
              </a>
            </div>
            <Photo
              src={current.image}
              alt={current.imageAlt}
              objectPosition={current.imagePosition}
              className="hidden lg:block min-h-[320px] lg:min-h-full aspect-[16/10] lg:aspect-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
