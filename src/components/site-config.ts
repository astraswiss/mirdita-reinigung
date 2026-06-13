import { Building2, Home as HomeIcon, Sparkles } from "lucide-react";

export const LOGO = "/mirdita-logo.svg";
export const PHOTO_HERO = "/hero.jpg";
export const PHOTO_DETAIL = "/detail-kueche.svg";
export const PHOTO_TEAM = "/team-reinigung.svg";
export const PHOTO_PRIVAT = "/Privatkunden.jpeg";
export const PHOTO_SPEZIAL = "/spezialreinigung.jpg";
export const PHOTO_FENSTER = "/hero-fenster.svg";
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
    imageAlt: "Mirdita Mitarbeiterin bei der Reinigung einer Küchenfront",
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
  areaServed: "Wallis",
};
