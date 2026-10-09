import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-steg";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Steg & Hohtenn — Mirdita Reinigung",
  description:
    "Reinigung in Steg-Hohtenn: Bau-, Gewerbe-, Fenster- und Umzugsreinigung mit Abnahmegarantie. Von Naters aus zuverlässig vor Ort. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Steg & Hohtenn — Mirdita Reinigung",
    description: "Bau-, Gewerbe- und Umzugsreinigung in Steg und Hohtenn.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Steg"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Steg-Hohtenn: Bau-, Gewerbe-, Fenster- und Umzugsreinigung mit Abnahmegarantie."
      badge="Steg-Hohtenn"
      intro="Zwischen Rhoneebene und Lötschberg-Südrampe liegt Steg-Hohtenn — ein Ort mit Gewerbe, Bahnanschluss und ruhigen Wohnlagen am Hang. Wir übernehmen Bau- und Gewerbereinigungen, Fensterreinigung und die Umzugsreinigung mit Abnahmegarantie."
      proseEyebrow="Ebene und Südrampe"
      proseTitle="Reinigung in Steg und Hohtenn"
      paragraphs={[
        "Die Gemeinde Steg-Hohtenn im Bezirk Westlich Raron entstand 2009 aus dem Zusammenschluss von Steg und Hohtenn. Steg liegt am Eingang zum Lötschental und teilt sich mit Gampel den Bahnhof Gampel-Steg; Hohtenn liegt höher an der Lötschberg-Südrampe, bekannt durch den gleichnamigen Höhenweg.",
        "In Steg treffen Wohnquartiere auf Gewerbe- und Industrieflächen. Für Betriebe bieten wir die regelmässige Unterhaltsreinigung von Büros, Garderoben und Sanitärräumen an — und nach Bau- oder Umbauarbeiten die Bauendreinigung, damit die Räume ohne Verzögerung genutzt werden können.",
        "In Hohtenn reinigen wir Häuser in Hanglage, Fenster mit Weitsicht und Ferienwohnungen. Wer in Steg-Hohtenn umzieht, profitiert von unserer Umzugsreinigung mit Abnahmegarantie.",
      ]}
      servicesTitle="Was wir in Steg-Hohtenn für Sie reinigen"
      processTitle="In vier Schritten zur Reinigung in Steg"
      ctaTitle="Reinigung in Steg oder Hohtenn gesucht?"
      ctaBody="Ob Gewerberaum, Neubau oder Wohnung: Wir sind von Naters aus zuverlässig vor Ort. Jetzt kostenlose Offerte anfordern."
    />
  );
}
