import { Building2, Home as HomeIcon, Sparkles } from "lucide-react";

export const LOGO = "/mirdita-logo.svg";
export const PHOTO_HERO = "/hero.jpg";
export const PHOTO_PRIVAT = "/Privatkunden.jpeg";
export const PHOTO_SPEZIAL = "/spezialreinigung.jpg";
export const PHOTO_PUTZEN = "/putzen.jpg";
export const PHOTO_BUERO = "/buero.jpg";

export const NAV = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export type ServiceKey = "privat" | "firmen" | "spezial";

export const SERVICES: Record<
  ServiceKey,
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
  privat: {
    label: "Privathaushalt",
    icon: HomeIcon,
    title: "Reinigung für Ihr Zuhause",
    description:
      "Ob Umzug, Frühlingsputz oder regelmässige Pflege — wir hinterlassen Ihr Zuhause makellos sauber. Mit Abnahmegarantie bei Wohnungsübergaben.",
    items: [
      "Umzugsreinigung mit Abnahmegarantie",
      "Wohnungs- & Hausreinigung",
      "Unterhalts- & Frühlingsputz",
      "Fenster, Storen & Rollläden",
      "Teppich- & Polsterpflege",
    ],
    image: PHOTO_PRIVAT,
    imageAlt: "Mirdita Mitarbeiter reinigt eine Küchenarbeitsplatte",
    imagePosition: "object-bottom",
  },
  firmen: {
    label: "Firmen & Gewerbe",
    icon: Building2,
    title: "Sauberkeit für Ihren Betrieb",
    description:
      "Repräsentative Räume sind Ihre Visitenkarte. Wir reinigen diskret ausserhalb Ihrer Geschäftszeiten — zuverlässig und nach Schweizer Standard.",
    items: [
      "Büro- & Praxisreinigung",
      "Ladenlokale & Showrooms",
      "Fitness- & Wellnessbereiche",
      "Baureinigung & Bauendreinigung",
      "Regelmässige Wartungsabos",
    ],
    image: PHOTO_BUERO,
    imageAlt: "Modernes Büro nach professioneller Reinigung",
    imagePosition: "object-left",
  },
  spezial: {
    label: "Spezialreinigungen",
    icon: Sparkles,
    title: "Spezielle Anforderungen",
    description:
      "Für alles, was über die klassische Reinigung hinausgeht. Wir bringen das richtige Equipment und die Erfahrung mit.",
    items: [
      "Fassaden- & Glasflächenreinigung",
      "Teppich- & Polster-Tiefenreinigung",
      "Desinfektion & Geruchsneutralisation",
      "Steinboden- & Parkettpflege",
      "Wasser- & Brandschadenreinigung",
    ],
    image: PHOTO_SPEZIAL,
    imageAlt: "Mirdita Mitarbeiter reinigt eine grosse Glasfront",
  },
};

export const STEPS = [
  { n: "01", title: "Anfrage", body: "Sie kontaktieren uns per Formular oder Telefon." },
  { n: "02", title: "Offerte", body: "Innert 24 h erhalten Sie ein transparentes Angebot." },
  { n: "03", title: "Reinigung", body: "Unser Team arbeitet zuverlässig und termingerecht." },
  { n: "04", title: "Abnahme", body: "Garantierte Übergabe — wir bleiben bis alles stimmt." },
];

export const AREA_SERVED = [
  "Kanton Wallis",
  "Canton du Valais",
  "Naters",
  "Brig-Glis",
  "Visp",
  "Sion",
  "Sierre",
  "Martigny",
  "Monthey",
  "Crans-Montana",
  "Zermatt",
  "Saas-Fee",
  "Verbier",
];

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mirdita Reinigung Berisha",
  image: "https://mirdita.ch/hero.jpg",
  url: "https://mirdita.ch",
  telephone: "+41762027984",
  email: "info@mirdita.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Belalpstrasse 2",
    postalCode: "3904",
    addressLocality: "Naters",
    addressRegion: "Wallis",
    addressCountry: "CH",
  },
  areaServed: AREA_SERVED,
};

/**
 * Maps every German route to its French (/fr) equivalent. Single source of
 * truth for the header language switcher, per-page hreflang alternates and the
 * sitemap. Keep the German homepage first so lookups on unmapped routes can
 * safely fall back to the pair at index 0.
 */
export const ROUTE_ALTERNATES: { de: string; fr: string }[] = [
  { de: "/", fr: "/fr" },
  { de: "/umzugsreinigung", fr: "/fr/nettoyage-fin-de-bail-valais" },
  { de: "/wohnungsreinigung", fr: "/fr/nettoyage-appartement-valais" },
  { de: "/unterhaltsreinigung", fr: "/fr/nettoyage-regulier-valais" },
  { de: "/fensterreinigung", fr: "/fr/nettoyage-vitres-valais" },
  { de: "/teppichreinigung", fr: "/fr/nettoyage-tapis-valais" },
  { de: "/bueroreinigung", fr: "/fr/nettoyage-bureaux-valais" },
  { de: "/praxisreinigung", fr: "/fr/nettoyage-cabinets-medicaux-valais" },
  { de: "/baureinigung", fr: "/fr/nettoyage-fin-de-chantier-valais" },
  { de: "/hauswartung", fr: "/fr/conciergerie-valais" },
  { de: "/grundreinigung", fr: "/fr/nettoyage-en-profondeur-valais" },
];

/** hreflang alternates for a page, given either its DE or FR path. */
export function alternatesFor(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const pair = ROUTE_ALTERNATES.find((p) => p.de === path || p.fr === path) ?? ROUTE_ALTERNATES[0];
  return {
    canonical: path,
    languages: {
      "de-CH": pair.de,
      "fr-CH": pair.fr,
      "x-default": pair.de,
    },
  };
}
