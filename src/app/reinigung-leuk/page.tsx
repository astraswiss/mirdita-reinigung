import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_SPEZIAL } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-leuk";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Leuk & Susten — Mirdita Reinigung",
  description:
    "Reinigung in Leuk-Stadt, Susten und Umgebung: Umzugs-, Büro- und Grundreinigung mit Abnahmegarantie. Erfahren mit Altbauten und Gewerbe. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Leuk & Susten — Mirdita Reinigung",
    description: "Reinigung in Leuk-Stadt und Susten — für Altbau, Wohnung und Gewerbe.",
    url: PATH,
    images: [{ url: PHOTO_SPEZIAL, width: 2048, height: 1536 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Leuk"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Leuk und Susten: Umzugs-, Büro- und Grundreinigung mit Abnahmegarantie."
      badge="Leuk-Stadt & Susten"
      intro="Historische Altstadt am Hang, lebendiges Zentrum in Susten unten in der Ebene: In der Gemeinde Leuk reinigen wir Wohnungen beim Umzug, Büros und Ladenlokale im Unterhalt und Altbauten nach Renovationen — gründlich, materialgerecht und mit Abnahmegarantie."
      image={PHOTO_SPEZIAL}
      imageAlt="Mirdita Reinigung bei der Glasflächenreinigung in Leuk"
      proseEyebrow="Altstadt und Ebene"
      proseTitle="Reinigung in Leuk-Stadt und Susten"
      paragraphs={[
        "Leuk ist Hauptort des gleichnamigen Bezirks und war im Mittelalter eine der wichtigsten Städte des Oberwallis. Das Ortsbild prägen das Bischofsschloss mit der Glaskuppel von Mario Botta und das Viztumsschloss, heute das Rathaus. Seit 2013 gehört auch Erschmatt zur Gemeinde.",
        "Die Altstadt von Leuk-Stadt stellt eigene Anforderungen: enge Gassen, dicke Mauern, alte Holz- und Steinböden. Wir arbeiten mit schonenden Mitteln und passen die Grundreinigung an das Material an. In Susten, wo Gewerbe, Läden und neue Wohnungen nahe am Bahnhof liegen, übernehmen wir Büro- und Unterhaltsreinigungen ausserhalb der Öffnungszeiten.",
        "Als Tor nach Leukerbad ist Leuk auch Wohnort für viele, die im Tourismus arbeiten — mit entsprechend vielen Wohnungswechseln. Bei jeder Umzugsreinigung in Leuk und Susten gilt unsere Abnahmegarantie: Wird bei der Übergabe etwas beanstandet, bessern wir kostenlos nach.",
      ]}
      servicesTitle="Was wir in Leuk und Susten für Sie reinigen"
      processTitle="Ihre Reinigung in Leuk — in vier Schritten"
      ctaTitle="Reinigung in Leuk oder Susten gesucht?"
      ctaBody="Vom Altstadthaus bis zum Ladenlokal in Susten: Fordern Sie jetzt Ihre kostenlose Offerte an — wir melden uns innert 24 Stunden."
    />
  );
}
