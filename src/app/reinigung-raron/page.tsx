import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-raron";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Raron — Mirdita Reinigung",
  description:
    "Reinigung in Raron und St. German: Umzugs-, Wohnungs- und Fensterreinigung mit Abnahmegarantie. Von Naters aus schnell vor Ort. Jetzt kostenlose Offerte anfordern.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Raron — Mirdita Reinigung",
    description: "Zuverlässige Reinigung in Raron und St. German — mit Abnahmegarantie.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Raron"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Raron und St. German: Umzugs-, Wohnungs- und Fensterreinigung mit Abnahmegarantie."
      badge="Raron & St. German"
      intro="Zwischen Burghügel und Rhoneebene verbindet Raron alte Dorfhäuser mit neuen Wohnquartieren. Wir reinigen hier Wohnungen und Einfamilienhäuser beim Auszug, pflegen Fenster und Böden im Unterhalt und sind auch in St. German für Sie da — mit Abnahmegarantie bei jeder Umzugsreinigung."
      proseEyebrow="Zwischen Burghügel und Rhone"
      proseTitle="Reinigung in Raron und St. German"
      paragraphs={[
        "Raron ist Hauptort des Bezirks Westlich Raron und weit über das Wallis hinaus bekannt: für die Burgkirche, auf deren Friedhof Rainer Maria Rilke begraben liegt, und für die in den Fels gebaute Michaelskirche. Zur Gemeinde gehört auch St. German, umgeben von Rebbergen am Sonnenhang.",
        "So unterschiedlich wie die Bauten sind auch die Reinigungsaufgaben: In den älteren Häusern im Dorfkern brauchen Holzböden, Sprossenfenster und Natursteintreppen eine schonende Pflege. In den neueren Einfamilienhäusern und Mehrfamilienhäusern in der Ebene geht es oft um die Umzugsreinigung vor der Wohnungsübergabe.",
        "Von unserem Sitz in Naters sind wir über die Kantonsstrasse schnell in Raron. Termine für Umzugs-, Fenster- oder Unterhaltsreinigung sind deshalb auch kurzfristig möglich — und bei Wohnungsübergaben gilt unsere Abnahmegarantie.",
      ]}
      servicesTitle="Was wir in Raron für Sie reinigen"
      processTitle="So einfach kommen Sie in Raron zur sauberen Wohnung"
      ctaTitle="Reinigung in Raron oder St. German geplant?"
      ctaBody="Ob Auszug, Frühlingsputz oder Fenster: Schildern Sie uns kurz Ihr Anliegen — Sie erhalten innert 24 Stunden eine transparente Offerte."
    />
  );
}
