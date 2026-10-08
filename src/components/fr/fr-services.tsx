import { ArrowRight, Building2, Check, Home as HomeIcon, Sparkles } from "lucide-react";

import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { PHOTO_BUERO, PHOTO_PRIVAT, PHOTO_SPEZIAL } from "@/components/site-config";

const SERVICES: {
  key: string;
  label: string;
  icon: typeof HomeIcon;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}[] = [
  {
    key: "particuliers",
    label: "Particuliers",
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

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.key} delay={i * 80} className="flex">
                <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-white border border-brand-deep/5 shadow-[0_20px_50px_-30px_rgba(0,21,63,0.2)]">
                  <Photo
                    src={s.image}
                    alt={s.imageAlt}
                    objectPosition={s.imagePosition}
                    className="aspect-[16/10] w-full"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold">
                      <Icon className="size-3.5" />
                      {s.label}
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-brand-deep/65 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-brand-deep/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#kontakt"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-brand-bright transition-all hover:gap-3"
                    >
                      Demander un devis
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
