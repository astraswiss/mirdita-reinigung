import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import { ContactSection } from "@/components/contact-section";
import { EinsatzgebietSection } from "@/components/einsatzgebiet-section";
import { FrAreaSection } from "@/components/fr/fr-area-section";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustedBy } from "@/components/trusted-by";
import { ADDRESS_LINE } from "@/config/site";
import type { GoogleReviewsData } from "@/lib/google-reviews";

export const OWNER = {
  name: "Mergim Berisha",
  photo: "/team/mergim-berisha.jpg",
};

type Lang = "de" | "fr";

const COPY = {
  de: {
    eyebrow: "Über uns",
    title: (
      <>
        Sauberkeit mit <span className="text-brand-bright">Gesicht</span>.
      </>
    ),
    intro:
      "Mirdita Reinigung ist Ihr Reinigungsunternehmen mit Sitz in Naters. Bei uns haben Sie vom ersten Anruf bis zur Abnahme einen persönlichen Ansprechpartner — und jeder Auftrag wird so sorgfältig erledigt, als wäre es unser eigenes Zuhause.",
    ownerRole: "Inhaber & Geschäftsführer",
    seat: `Sitz: ${ADDRESS_LINE}`,
    ctaPrimary: "Kostenlose Offerte",
    ctaPrimaryHref: "#kontakt",
    photoAlt: "Mergim Berisha, Inhaber und Geschäftsführer von Mirdita Reinigung",
    quote:
      "Unser wichtigstes Ziel ist, dass Sie rundum glücklich sind. Ein Auftrag ist für uns erst dann erledigt, wenn Sie mit dem Ergebnis voll und ganz zufrieden sind.",
    valuesEyebrow: "So arbeiten wir",
    valuesTitle: "Worauf Sie sich verlassen können",
    values: [
      {
        icon: BadgeCheck,
        title: "Fester Preis, klare Leistung",
        body: "Vor dem Einsatz legen wir schriftlich fest, was gereinigt wird, zu welchem Preis und bis wann. Ohne Nachverhandlungen.",
      },
      {
        icon: ShieldCheck,
        title: "Abnahmegarantie",
        body: "Wird bei der Wohnungsübergabe etwas beanstandet, bessern wir kostenlos nach. Das Risiko tragen wir.",
      },
      {
        icon: Clock,
        title: "Pünktlich und zuverlässig",
        body: "Vereinbarte Termine halten wir ein. Und wir bleiben, bis alles stimmt.",
      },
      {
        icon: MessageCircle,
        title: "Ein fester Ansprechpartner",
        body: "Sie erreichen uns direkt per Telefon oder WhatsApp — auf Deutsch und Französisch.",
      },
    ],
    stats: {
      rating: "Google-Bewertung",
      reviews: "Google-Bewertungen",
      offer: "Offerte innert",
      guarantee: "Abnahmegarantie",
    },
    trustedLabel: "Diese Unternehmen vertrauen uns",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Gut zu wissen",
    faq: [
      {
        q: "Wie schnell erhalte ich eine Offerte?",
        a: "Innert 24 Stunden. Am schnellsten geht es, wenn Sie uns ein paar Fotos per WhatsApp schicken.",
      },
      {
        q: "Was bedeutet die Abnahmegarantie?",
        a: "Bei Umzugsreinigungen gilt: Wird bei der Wohnungsübergabe etwas beanstandet, kommen wir zurück und bessern kostenlos nach.",
      },
      {
        q: "Sind Sie versichert?",
        a: "Ja. Mirdita Reinigung ist betriebshaftpflichtversichert — Ihr Eigentum ist während unserer Arbeit abgesichert.",
      },
      {
        q: "Erhalte ich einen festen Preis?",
        a: "Ja. Sie erhalten vorab eine verbindliche Offerte mit klarem Leistungsumfang. Der vereinbarte Preis gilt.",
      },
      {
        q: "In welchen Regionen sind Sie tätig?",
        a: "Im ganzen Kanton Wallis — von unserem Sitz in Naters aus im Ober- und Unterwallis, von Fiesch bis Monthey.",
      },
    ],
    ctaTitle: "Lernen wir uns kennen",
    ctaBody:
      "Erzählen Sie uns von Ihrem Anliegen — Mergim Berisha meldet sich persönlich innert 24 Stunden mit einer Offerte.",
  },
  fr: {
    eyebrow: "À propos",
    title: (
      <>
        La propreté, avec un <span className="text-brand-bright">visage</span>.
      </>
    ),
    intro:
      "Mirdita Reinigung est votre entreprise de nettoyage basée à Naters. Du premier appel à la remise, vous avez un interlocuteur personnel — et chaque mandat est réalisé avec le même soin que si c’était chez nous.",
    ownerRole: "Propriétaire & directeur",
    seat: `Siège : ${ADDRESS_LINE}`,
    ctaPrimary: "Demander un devis",
    ctaPrimaryHref: "#kontakt",
    photoAlt: "Mergim Berisha, propriétaire et directeur de Mirdita Reinigung",
    quote:
      "Notre objectif principal, c’est que vous soyez pleinement satisfait. Pour nous, un mandat n’est terminé que lorsque le résultat vous rend vraiment heureux.",
    valuesEyebrow: "Notre façon de travailler",
    valuesTitle: "Ce sur quoi vous pouvez compter",
    values: [
      {
        icon: BadgeCheck,
        title: "Prix fixe, prestation claire",
        body: "Avant l’intervention, nous fixons par écrit ce qui sera nettoyé, à quel prix et pour quand. Sans renégociation.",
      },
      {
        icon: ShieldCheck,
        title: "Garantie de remise",
        body: "Si une remarque est faite lors de l’état des lieux, nous repassons sans frais. Le risque, c’est nous qui le portons.",
      },
      {
        icon: Clock,
        title: "Ponctuels et fiables",
        body: "Nous respectons les dates convenues. Et nous restons jusqu’à ce que tout soit parfait.",
      },
      {
        icon: MessageCircle,
        title: "Un interlocuteur unique",
        body: "Vous nous joignez directement par téléphone ou WhatsApp — en français et en allemand.",
      },
    ],
    stats: {
      rating: "Note Google",
      reviews: "Avis Google",
      offer: "Devis sous",
      guarantee: "Garantie de remise",
    },
    trustedLabel: "Ces entreprises nous font confiance",
    faqEyebrow: "Questions fréquentes",
    faqTitle: "Bon à savoir",
    faq: [
      {
        q: "En combien de temps reçois-je un devis ?",
        a: "Sous 24 heures. Le plus rapide : envoyez-nous quelques photos par WhatsApp.",
      },
      {
        q: "Que signifie la garantie de remise ?",
        a: "Pour les nettoyages de fin de bail : si une remarque est faite lors de l’état des lieux, nous revenons et corrigeons sans frais.",
      },
      {
        q: "Êtes-vous assurés ?",
        a: "Oui. Mirdita Reinigung dispose d’une assurance responsabilité civile d’entreprise — vos biens sont couverts pendant notre intervention.",
      },
      {
        q: "Le prix est-il fixe ?",
        a: "Oui. Vous recevez à l’avance un devis ferme avec un contenu clairement défini. Le prix convenu est celui que vous payez.",
      },
      {
        q: "Dans quelles régions intervenez-vous ?",
        a: "Dans tout le Valais — depuis notre siège à Naters, du Haut-Valais au Bas-Valais, de Fiesch à Monthey.",
      },
    ],
    ctaTitle: "Faisons connaissance",
    ctaBody:
      "Parlez-nous de votre besoin — Mergim Berisha vous répond personnellement sous 24 heures avec un devis.",
  },
} as const;

/** "About us" page (DE /ueber-uns, FR /fr/a-propos) — same layout, per-language copy. */
export function AboutPage({
  lang,
  googleReviews,
}: {
  lang: Lang;
  googleReviews: GoogleReviewsData;
}) {
  const t = COPY[lang];
  const stats = [
    { v: `${googleReviews.rating.toFixed(1)} ★`, l: t.stats.rating },
    { v: `${googleReviews.total}`, l: t.stats.reviews },
    { v: "24 h", l: t.stats.offer },
    { v: "100%", l: t.stats.guarantee },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div lang={lang} className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="size-1.5 rounded-full bg-brand-bright" />
              {t.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">{t.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={t.ctaPrimaryHref}
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                {t.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-sm text-brand-deep/70">
                <MapPin className="size-4 text-brand-bright" />
                {t.seat}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-brand-deep/5 shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]">
                <Image
                  src={OWNER.photo}
                  alt={t.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-[0_20px_40px_-20px_rgba(0,21,63,0.4)]">
                <div className="font-bold text-lg leading-tight">{OWNER.name}</div>
                <div className="text-sm text-brand-deep/60">{t.ownerRole}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-5 md:px-10 py-12">
        <Reveal className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center text-brand-bright">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-balance">
            „{t.quote}“
          </blockquote>
          <div className="mt-6 text-sm text-brand-deep/60">
            <span className="font-semibold text-brand-deep">{OWNER.name}</span> · {t.ownerRole}
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="px-5 md:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-xl mb-10">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              {t.valuesEyebrow}
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{t.valuesTitle}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {t.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl bg-white border border-brand-deep/5 p-6"
                >
                  <span className="size-10 rounded-xl bg-brand-bright/10 text-brand-bright grid place-items-center">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{v.body}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl bg-brand-deep text-white p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                <div className="mt-1 text-xs text-white/60 leading-tight">{s.l}</div>
              </div>
            ))}
          </Reveal>

          <TrustedBy label={t.trustedLabel} className="mt-16" />
        </div>
      </section>

      {lang === "fr" ? (
        <ReviewsSection
          googleReviews={googleReviews}
          eyebrow="Avis"
          title="Ce que disent nos clients"
          reviewsLabel="avis"
        />
      ) : (
        <ReviewsSection googleReviews={googleReviews} />
      )}

      {/* FAQ */}
      <section className="px-5 md:px-10 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8 md:text-center">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              {t.faqEyebrow}
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{t.faqTitle}</h2>
          </Reveal>
          <div className="space-y-3">
            {t.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white border border-brand-deep/5 px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-brand-bright transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-brand-deep/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {lang === "fr" ? <FrAreaSection /> : <EinsatzgebietSection />}

      <ContactSection lang={lang} title={t.ctaTitle} intro={t.ctaBody} />

      <SiteFooter lang={lang} />
    </div>
  );
}
