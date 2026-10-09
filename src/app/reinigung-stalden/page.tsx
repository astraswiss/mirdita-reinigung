import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-stalden";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Stalden — Mirdita Reinigung",
  description:
    "Reinigung in Stalden am Eingang von Matter- und Saastal: Umzugs-, Wohnungs- und Treppenhausreinigung mit Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Stalden — Mirdita Reinigung",
    description: "Umzugs-, Wohnungs- und Treppenhausreinigung in Stalden.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Stalden"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Stalden: Umzugs-, Wohnungs- und Treppenhausreinigung mit Abnahmegarantie."
      badge="Tor zu Matter- und Saastal"
      intro="Stalden liegt dort, wo sich die Wege nach Zermatt und Saas-Fee trennen — ein Wohnort mit kurzen Wegen in beide Täler und nach Visp. Wir reinigen Wohnungen beim Auszug mit Abnahmegarantie, pflegen Treppenhäuser von Mehrfamilienhäusern und übernehmen die Grundreinigung von Häusern in Hanglage."
      proseEyebrow="Das Brückendorf"
      proseTitle="Reinigung in Stalden"
      paragraphs={[
        "Stalden ist auf einem Felsrücken über dem Zusammenfluss von Matter- und Saaser Vispa gebaut und wird deshalb auch Brückendorf genannt. Mit Bahnhof und Strassenanschluss in alle Richtungen ist es ein Verkehrsknoten für die Vispertäler.",
        "Viele, die in Zermatt, Saas-Fee oder Visp arbeiten, wohnen in Stalden — und ziehen entsprechend häufig um. Für Mietwohnungen übernehmen wir die Umzugsreinigung mit Abnahmegarantie, für Verwaltungen und Eigentümer die regelmässige Reinigung von Treppenhäusern und Allgemeinflächen.",
        "Die steilen Lagen und alten Steinhäuser im Dorf brauchen eine gründliche, aber materialschonende Reinigung. Wir bringen das passende Equipment mit und reinigen Böden, Fenster und Nasszellen so, dass alles für die Übergabe oder den Neubezug bereit ist.",
      ]}
      servicesTitle="Was wir in Stalden für Sie reinigen"
      processTitle="Ihre Reinigung in Stalden in vier Schritten"
      ctaTitle="Reinigung in Stalden gesucht?"
      ctaBody="Für Wohnung, Treppenhaus oder Auszug: Schildern Sie uns Ihr Anliegen — Sie erhalten innert 24 Stunden eine transparente Offerte."
    />
  );
}
