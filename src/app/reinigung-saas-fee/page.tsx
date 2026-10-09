import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-saas-fee";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Saas-Fee — Mirdita Reinigung",
  description:
    "Reinigung in Saas-Fee: Endreinigung von Ferienwohnungen und Chalets, Saison-Grundreinigung, Hotel- und Umzugsreinigung. Zuverlässig im autofreien Dorf. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Saas-Fee — Mirdita Reinigung",
    description: "Ferienwohnungs-, Chalet- und Grundreinigung in Saas-Fee.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Saas-Fee"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Saas-Fee: Endreinigung von Ferienwohnungen und Chalets, Saison-Grundreinigung und Umzugsreinigung."
      badge="Im autofreien Saas-Fee"
      intro="Im autofreien Gletscherdorf Saas-Fee folgt ein Gast dem nächsten. Wir sorgen dafür, dass Ihre Ferienwohnung oder Ihr Chalet jedes Mal einladend sauber ist — mit Endreinigung zwischen den Aufenthalten, Grundreinigung zum Saisonwechsel und Umzugsreinigung mit Abnahmegarantie."
      proseEyebrow="Gletscherdorf ohne Autos"
      proseTitle="Reinigung in Saas-Fee"
      paragraphs={[
        "Saas-Fee liegt zuhinterst im Saastal, umgeben von Viertausendern und Gletschern. Seit den 1950er-Jahren ist das Dorf autofrei — Gäste und Material kommen über das Parkhaus am Dorfeingang und mit Elektrofahrzeugen weiter. Wir planen unsere Einsätze entsprechend ein.",
        "Ein Grossteil der Wohnungen sind Ferienwohnungen und Chalets. Für Eigentümer und Vermieter übernehmen wir die Endreinigung zwischen den Gästen, das Beziehen der Betten nach Absprache und die Kontrolle auf Schäden oder fehlendes Inventar.",
        "Zwischen Winter- und Sommersaison ist Zeit für die Grundreinigung: Fenster, Teppiche, Polster und Böden werden gründlich aufgefrischt. Für Saisonangestellte und Einheimische bieten wir zudem die Umzugsreinigung mit Abnahmegarantie an.",
      ]}
      servicesTitle="Unsere Leistungen in Saas-Fee"
      processTitle="So läuft Ihre Reinigung in Saas-Fee ab"
      ctaTitle="Reinigung in Saas-Fee gesucht?"
      ctaBody="Für Ferienwohnung, Chalet oder Saisonwechsel: Schildern Sie uns Ihr Objekt — Sie erhalten innert 24 Stunden eine transparente Offerte."
    />
  );
}
