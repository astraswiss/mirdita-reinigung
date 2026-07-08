import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrRelated } from "@/components/fr/fr-related";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_PUTZEN, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-fin-de-bail-valais";

export const metadata: Metadata = {
  title: "Nettoyage fin de bail Valais avec garantie de remise | Mirdita",
  description:
    "Nettoyage fin de bail dans tout le Valais avec garantie de remise : cuisine, salle de bains, sols, vitres et stores. Appartements et maisons à Sion, Sierre, Martigny, Monthey. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage fin de bail Valais avec garantie de remise",
    description:
      "Nettoyage complet avant l’état des lieux et la remise des clés, dans tout le Valais. Garantie de remise et contrôle final soigné.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

const ROOMS: { title: string; body: string }[] = [
  {
    title: "Cuisine",
    body: "Four, hotte, plaques, réfrigérateur, plans de travail, armoires et joints — dégraissés et détartrés.",
  },
  {
    title: "Salle de bains & WC",
    body: "Douche, baignoire, WC, robinetterie, miroirs et joints : calcaire et traces éliminés.",
  },
  {
    title: "Sols",
    body: "Aspiration et lavage de tous les sols, plinthes, seuils et encadrements de portes.",
  },
  {
    title: "Vitres",
    body: "Fenêtres intérieur et extérieur, cadres et rebords, pour un rendu sans traces.",
  },
  {
    title: "Stores & volets",
    body: "Stores, lamelles et volets dépoussiérés et nettoyés selon l’état du logement.",
  },
  {
    title: "Balcon, cave & garage",
    body: "Balcon, cave et garage nettoyés sur demande pour une remise complète.",
  },
];

const INCLUDED = [
  "Contrôle final soigné, pièce par pièce",
  "Garantie de remise : en cas de remarque, nous repassons sans frais",
  "Préparation pour l’état des lieux et la remise des clés",
  "Intervention rapide selon les disponibilités",
  "Devis clair et transparent, sans surprise",
  "Possibilité d’envoyer des photos par WhatsApp pour un devis rapide",
];

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage fin de bail Valais"
        description="Nettoyage complet de fin de bail avec garantie de remise pour appartements, maisons et biens immobiliers dans tout le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage fin de bail"
        title={
          <>
            Nettoyage fin de bail dans le <span className="text-brand-bright">Valais</span>, avec
            garantie de remise.
          </>
        }
        intro={
          <>
            Le déménagement est déjà assez stressant — la remise du logement ne doit pas l’être.
            Nous nettoyons votre appartement ou votre maison avant l’état des lieux, de la
            profondeur du four jusqu’au dernier angle de fenêtre. Avec notre garantie de remise, si
            quelque chose est signalé lors de la remise des clés, nous repassons sans frais.
          </>
        }
        image={PHOTO_PUTZEN}
        imageAlt="Collaborateur de Mirdita nettoyant une cuisine avant la remise des clés dans le Valais"
        imagePosition="object-left"
        trust="Garantie de remise incluse"
        devisLabel="Demander un devis gratuit"
      />

      {/* Message principal */}
      <section className="px-5 md:px-10 pb-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="rounded-[28px] bg-brand-deep text-white p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-3xl">
              Un nettoyage complet, prêt pour l’état des lieux
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed max-w-3xl">
              Nettoyage complet de fin de bail avec garantie de remise, pour appartements, maisons
              et biens immobiliers dans tout le Valais. Nous intervenons pour les particuliers qui
              rendent leur logement, mais aussi pour les régies, les propriétaires et les
              administrations immobilières. Nous nettoyons dans la région de Sion, Sierre, Martigny,
              Monthey et dans tout le Haut-Valais et le Valais central.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck className="size-4 text-brand-bright" />
              Garantie de remise · Contrôle final soigné · Réponse sous 24 h
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pièce par pièce */}
      <section className="px-5 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Ce que nous nettoyons
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Pièce par pièce, jusqu’au moindre détail
            </h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed">
              Nous nettoyons chaque pièce de votre logement de manière assez approfondie pour que la
              remise à la régie ou au propriétaire devienne une simple formalité.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROOMS.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 60}
                className="rounded-2xl bg-white border border-brand-deep/5 p-6"
              >
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclus + garantie */}
      <section className="px-5 md:px-10 pb-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              La garantie de remise
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Vous ne portez pas le risque de la remise
            </h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">
              Nous préparons votre logement pour l’état des lieux et la remise des clés. Si la régie
              ou le propriétaire signale un point de nettoyage lors de la remise, nous revenons et
              corrigeons sans frais supplémentaires.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {INCLUDED.map((item) => (
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

      <FrProcessSteps title="De la demande à la remise des clés" />

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-appartement-valais",
            label: "Nettoyage d’appartement",
            desc: "Nettoyage ponctuel ou régulier de votre appartement dans le Valais.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et fenêtres sans traces, en complément de la fin de bail.",
          },
          {
            href: "/fr/nettoyage-en-profondeur-valais",
            label: "Nettoyage en profondeur",
            desc: "Pour les logements très encrassés ou après une longue occupation.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage fin de bail" />

      <FrCtaBanner
        title="Prêt pour la remise de votre logement ?"
        body="Demandez dès maintenant un devis gratuit pour votre nettoyage de fin de bail — clair, sans engagement et avec garantie de remise."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
