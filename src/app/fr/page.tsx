import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaRow } from "@/components/fr/fr-cta-row";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_HERO, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Mirdita Reinigung — Entreprise de nettoyage dans le Valais",
  description:
    "Entreprise de nettoyage professionnelle basée à Naters, active dans tout le Canton du Valais. Nettoyage fin de bail avec garantie de remise, appartements, bureaux et immeubles. Devis gratuit.",
  alternates: alternatesFor("/fr"),
  openGraph: {
    title: "Mirdita Reinigung — Nettoyage professionnel dans le Valais",
    description:
      "Nettoyage fin de bail, appartements, bureaux et immeubles dans tout le Valais. Devis gratuit, réponse rapide.",
    url: "/fr",
    locale: "fr_CH",
    images: [{ url: "/hero.jpg", width: 1200, height: 844 }],
  },
};

const SERVICES = [
  {
    href: "/fr/nettoyage-fin-de-bail-valais",
    label: "Nettoyage fin de bail",
    desc: "Nettoyage complet avant la remise des clés, avec garantie de remise.",
  },
  {
    href: "/fr/nettoyage-appartement-valais",
    label: "Nettoyage d’appartement",
    desc: "Nettoyage d’appartements et de maisons, ponctuel ou régulier.",
  },
  {
    href: "/fr/nettoyage-bureaux-valais",
    label: "Nettoyage de bureaux",
    desc: "Entretien discret et régulier de vos bureaux et locaux commerciaux.",
  },
  {
    href: "/fr/nettoyage-fin-de-chantier-valais",
    label: "Nettoyage fin de chantier",
    desc: "Nettoyage après travaux avant la remise ou l’utilisation des locaux.",
  },
  {
    href: "/fr/conciergerie-valais",
    label: "Conciergerie d’immeubles",
    desc: "Entretien régulier des parties communes pour PPE et régies.",
  },
  {
    href: "/fr/nettoyage-vitres-valais",
    label: "Nettoyage de vitres",
    desc: "Vitres, fenêtres et surfaces vitrées, à l’intérieur comme à l’extérieur.",
  },
];

const USP = [
  "Devis gratuit et réponse rapide",
  "Travail propre, fiable et soigné",
  "Nettoyage fin de bail avec garantie de remise",
  "Intervention dans tout le Valais, depuis Naters",
];

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      {/* Hero */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="size-1.5 rounded-full bg-brand-bright" />
              Nettoyage dans tout le Valais
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Entreprise de nettoyage dans le{" "}
              <span className="text-brand-bright">Canton du Valais</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Mirdita Reinigung est une entreprise de nettoyage professionnelle basée à Naters,
              active dans tout le Valais — du Haut-Valais au Bas-Valais. Particuliers, entreprises,
              régies, PPE, bureaux, cabinets médicaux, chantiers, chalets et Airbnb : nous
              travaillons proprement, avec fiabilité et soin.
            </p>

            <FrCtaRow />

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>Nettoyage fin de bail avec garantie de remise</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              src={PHOTO_HERO}
              alt="Collaborateur de Mirdita Reinigung nettoyant une façade vitrée dans le Valais"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* USP band */}
      <section className="px-5 md:px-10 pb-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USP.map((u, i) => (
            <Reveal
              key={u}
              delay={i * 70}
              className="flex items-start gap-3 rounded-2xl bg-white border border-brand-deep/5 p-5 text-sm"
            >
              <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-brand-deep/85">{u}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
          <Reveal className="max-w-xl mb-10">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Services
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Nos prestations de nettoyage
            </h2>
            <p className="mt-4 text-brand-deep/65">
              Pour les particuliers comme pour les entreprises, les régies et les PPE — choisissez
              le service adapté à votre besoin.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl bg-white border border-brand-deep/5 p-6 hover:border-brand-bright/40 transition-colors"
                >
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    {s.label}
                    <ArrowRight className="size-4 text-brand-bright opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FrProcessSteps />

      {/* About */}
      <section className="px-5 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              À propos
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-balance">
              Un travail concret, sans mauvaises surprises.
            </h2>
            <p className="mt-4 text-brand-deep/70 leading-relaxed">
              Nous définissons à l’avance ce qui sera nettoyé, à quel prix et pour quelle date —
              puis nous nous y tenons. Pour les nettoyages de fin de bail, nous allons plus loin :
              nous nettoyons votre appartement avant la remise des clés, avec un contrôle final
              soigné et une garantie de remise. En cas de remarque lors de l’état des lieux, nous
              repassons sans frais.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              { v: "24 h", l: "Réponse au devis" },
              { v: "100%", l: "Garantie de remise" },
              { v: "Valais", l: "Haut au Bas" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl bg-white border border-brand-deep/5 p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-deep">{s.v}</div>
                <div className="mt-1 text-xs text-brand-deep/60 leading-tight">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrAreaSection />

      <FrContact />

      <SiteFooter lang="fr" />
    </div>
  );
}
