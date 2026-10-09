import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-visp";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Visp — Mirdita Reinigung",
  description:
    "Reinigung in Visp: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie. Für Privathaushalte und Betriebe im Oberwallis — zuverlässig und termingerecht. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Visp — Mirdita Reinigung",
    description: "Zuverlässige Reinigung in Visp und im Oberwallis — mit Abnahmegarantie.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Visp"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Visp: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie."
      badge="Im Raum Visp"
      intro="Visp ist der Verkehrs- und Wirtschaftsknoten des Oberwallis — und für uns von Naters aus in wenigen Minuten erreichbar. Wir übernehmen Umzugsreinigungen mit Abnahmegarantie, die Reinigung von Wohnungen und Häusern sowie Büro-, Praxis- und Gewerbereinigung für Betriebe in und um Visp. Zuverlässig, termingerecht und nach Schweizer Standard."
      proseEyebrow="Im Herzen des Oberwallis"
      proseTitle="Reinigung in Visp und Eyholz"
      paragraphs={[
        "Visp ist Verkehrsknoten des Oberwallis und Umsteigeort Richtung Zermatt und Saas-Fee. Mit dem Lonza-Werk, dem grössten Arbeitgeber der Region, ist die Gemeinde in den letzten Jahren stark gewachsen — und mit ihr die Zahl der Wohnungen, Büros und Gewerbeflächen.",
        "Viele ziehen für die Arbeit nach Visp oder innerhalb der Region um. Entsprechend häufig übernehmen wir hier Umzugsreinigungen mit Abnahmegarantie, vom Studio in Bahnhofsnähe bis zum Einfamilienhaus in Eyholz. Neue Wohnungen reinigen wir nach Bauabschluss bezugsfertig.",
        "Für Betriebe, Praxen und Büros in Visp bieten wir die regelmässige Unterhaltsreinigung im Schichtrhythmus Ihrer Wahl an — früh morgens, abends oder am Wochenende. Von Naters aus sind wir schnell vor Ort, auch wenn kurzfristig etwas anfällt.",
      ]}
      servicesTitle="Unsere Leistungen in Visp und Eyholz"
      processTitle="In vier Schritten zur Reinigung in Visp"
      ctaTitle="Reinigung in Visp oder Eyholz gesucht?"
      ctaBody="Für Ihre Wohnung, Ihren Neubau oder Ihren Betrieb: Schildern Sie uns kurz Ihr Anliegen — Sie erhalten innert 24 Stunden eine transparente Offerte."
    />
  );
}
