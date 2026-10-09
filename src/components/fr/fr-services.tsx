"use client";

import { Building2, Home as HomeIcon, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ServiceCards, type ServiceCard } from "@/components/service-cards";
import { PHOTO_BUERO, PHOTO_PRIVAT, PHOTO_SPEZIAL } from "@/components/site-config";

const SERVICES: ServiceCard[] = [
  {
    key: "particuliers",
    label: "Particuliers",
    shortLabel: "Particuliers",
    icon: HomeIcon,
    title: "Le nettoyage de votre logement",
    description:
      "Déménagement, grand nettoyage de printemps ou entretien régulier — nous laissons votre logement impeccable. Avec garantie de remise lors de la restitution de l’appartement.",
    items: [
      "Nettoyage fin de bail avec garantie de remise",
      "Nettoyage d’appartement et de maison",
      "Entretien régulier et nettoyage de printemps",
      "Fenêtres, stores et volets roulants",
      "Entretien de tapis et rembourrages",
    ],
    image: PHOTO_PRIVAT,
    imageAlt: "Collaborateur de Mirdita nettoyant un plan de travail de cuisine",
    imagePosition: "object-[center_70%]",
  },
  {
    key: "entreprises",
    label: "Entreprises & commerces",
    shortLabel: "Entreprises",
    icon: Building2,
    title: "La propreté de votre entreprise",
    description:
      "Des locaux soignés sont votre carte de visite. Nous nettoyons avec discrétion en dehors de vos heures d’ouverture — de façon fiable et selon les standards suisses.",
    items: [
      "Nettoyage de bureaux et de cabinets",
      "Commerces et showrooms",
      "Espaces fitness et wellness",
      "Nettoyage de chantier et de fin de chantier",
      "Abonnements d’entretien réguliers",
    ],
    image: PHOTO_BUERO,
    imageAlt: "Bureau moderne après un nettoyage professionnel",
    imagePosition: "object-left",
  },
  {
    key: "special",
    label: "Nettoyages spéciaux",
    shortLabel: "Spéciaux",
    icon: Sparkles,
    title: "Exigences particulières",
    description:
      "Pour tout ce qui va au-delà du nettoyage classique. Nous apportons l’équipement adapté et l’expérience nécessaire.",
    items: [
      "Nettoyage de façades et de surfaces vitrées",
      "Nettoyage en profondeur de tapis et rembourrages",
      "Désinfection et neutralisation des odeurs",
      "Entretien des sols en pierre et du parquet",
      "Nettoyage après dégâts d’eau et d’incendie",
    ],
    image: PHOTO_SPEZIAL,
    imageAlt: "Collaborateur de Mirdita nettoyant une grande façade vitrée",
  },
];

/** French services section — 3-card grid, mirroring the German homepage. */
export function FrServices() {
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
            Des particuliers aux entreprises jusqu’aux nettoyages spéciaux — tout d’une seule main.
          </p>
        </Reveal>

        <ServiceCards services={SERVICES} ctaLabel="Demander un devis" />
      </div>
    </section>
  );
}
