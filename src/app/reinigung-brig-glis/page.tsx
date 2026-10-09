import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-brig-glis";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Brig-Glis — Mirdita Reinigung",
  description:
    "Reinigung in Brig-Glis und Umgebung: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie. Direkt aus dem benachbarten Naters — kurze Wege, schnelle Termine. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Brig-Glis — Mirdita Reinigung",
    description: "Zuverlässige Reinigung in Brig-Glis — aus dem benachbarten Naters.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Brig-Glis"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Brig-Glis und Umgebung: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie."
      badge="Im Raum Brig-Glis"
      intro="Brig-Glis liegt gleich neben unserem Sitz in Naters — für uns Heimspiel. Das bedeutet kurze Anfahrtswege und schnelle Termine für Ihre Umzugs-, Wohnungs- oder Büroreinigung. Ob Wohnungsübergabe mit Abnahmegarantie, Geschäftsräume in der Bahnhofstrasse oder wiederkehrende Unterhaltsreinigung: Wir sind zuverlässig zur Stelle."
      proseEyebrow="Schnell vor Ort"
      proseTitle="Reinigung in Brig, Glis, Gamsen und Brigerbad"
      paragraphs={[
        "Brig-Glis entstand 1972 aus dem Zusammenschluss von Brig, Glis und Brigerbad; auch Gamsen gehört dazu. Vom Stockalperschloss über die Bahnhofstrasse bis zu den Wohnquartieren in Glis ist die grösste Gemeinde des Oberwallis für uns nur eine Brücke von Naters entfernt.",
        "Rund um Bahnhof und Altstadt reinigen wir Büros, Praxen und Ladenlokale — diskret am frühen Morgen oder nach Geschäftsschluss, damit Ihr Betrieb ungestört bleibt. In Glis und Gamsen, wo viele Mehrfamilienhäuser und Neubauten stehen, übernehmen wir Treppenhausreinigung, Hauswartung und Bauendreinigung.",
        "Brig ist als Bahnknoten Richtung Simplon, Lötschberg und Zermatt ein Ort mit vielen Zu- und Wegzügen. Für Mieterinnen und Mieter bieten wir die Umzugsreinigung mit Abnahmegarantie an — so wird die Wohnungsübergabe zur reinen Formsache.",
      ]}
      servicesTitle="Was wir in Brig-Glis für Sie reinigen"
      processTitle="Ihre Reinigung in Brig-Glis in vier Schritten"
      ctaTitle="Reinigung in Brig-Glis geplant?"
      ctaBody="Ob Geschäftsräume an der Bahnhofstrasse, Treppenhaus in Glis oder Wohnungsübergabe: Wir sind aus dem Nachbarort Naters schnell bei Ihnen. Jetzt kostenlose Offerte anfordern."
    />
  );
}
