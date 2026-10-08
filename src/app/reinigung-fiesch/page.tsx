import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_SPEZIAL } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-fiesch";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Fiesch — Mirdita Reinigung",
  description:
    "Reinigung in Fiesch im Goms: Endreinigung von Ferienwohnungen und Chalets, Grund-, Fenster- und Umzugsreinigung mit Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Fiesch — Mirdita Reinigung",
    description: "Ferienwohnungs- und Chaletreinigung in Fiesch im Goms.",
    url: PATH,
    images: [{ url: PHOTO_SPEZIAL, width: 2048, height: 1536 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Fiesch"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Fiesch: Endreinigung von Ferienwohnungen und Chalets, Grund-, Fenster- und Umzugsreinigung."
      badge="Fiesch im Goms"
      intro="Als bekanntestes Ferienzentrum im Goms lebt Fiesch vom Wechsel der Gäste. Wir übernehmen die Endreinigung von Ferienwohnungen und Chalets, die Grundreinigung zum Saisonstart und -ende, Fensterreinigung mit Blick ins Rhonetal sowie Umzugsreinigungen mit Abnahmegarantie."
      image={PHOTO_SPEZIAL}
      imageAlt="Mirdita Mitarbeiter reinigt eine grosse Glasfläche in Fiesch"
      proseEyebrow="Ferienort im Goms"
      proseTitle="Reinigung in Fiesch"
      paragraphs={[
        "Fiesch liegt auf rund 1'100 Metern im Goms und gehört zur Aletsch Arena. Von hier führt die Luftseilbahn über die Fiescheralp aufs Eggishorn mit Blick auf den Grossen Aletschgletscher, Teil des UNESCO-Welterbes Jungfrau-Aletsch.",
        "Für Vermieter von Ferienwohnungen und Chalets zählt vor allem eines: dass die Wohnung beim nächsten Gast perfekt ist. Wir reinigen zwischen den Aufenthalten nach Ihrer Checkliste — Küche, Bad, Betten, Böden — und melden uns, wenn etwas auffällt.",
        "Vor und nach der Saison übernehmen wir die Grundreinigung inklusive Fenster, Storen und Teppiche. Und für Einheimische und Saisonangestellte, die umziehen, gilt bei der Umzugsreinigung unsere Abnahmegarantie.",
      ]}
      servicesTitle="Was wir in Fiesch für Sie reinigen"
      processTitle="In vier Schritten zur sauberen Ferienwohnung in Fiesch"
      ctaTitle="Ferienwohnung in Fiesch zu reinigen?"
      ctaBody="Von der Endreinigung zwischen Gästen bis zur Grundreinigung zum Saisonstart: Wir melden uns innert 24 Stunden mit einer Offerte."
    />
  );
}
