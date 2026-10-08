import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_HERO } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-moerel";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Mörel-Filet — Mirdita Reinigung",
  description:
    "Reinigung in Mörel-Filet an der Talstation zur Riederalp: Ferienwohnungs-, Umzugs- und Fensterreinigung mit Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Mörel-Filet — Mirdita Reinigung",
    description: "Ferienwohnungs-, Umzugs- und Fensterreinigung in Mörel-Filet.",
    url: PATH,
    images: [{ url: PHOTO_HERO, width: 1200, height: 1600 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Mörel"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Mörel-Filet: Ferienwohnungs-, Umzugs- und Fensterreinigung mit Abnahmegarantie."
      badge="Mörel-Filet"
      intro="Mörel ist das Tor zur Aletsch Arena: Von hier fahren die Seilbahnen auf die autofreie Riederalp. Wir reinigen Wohnungen und Häuser im Tal, übernehmen die Endreinigung von Ferienwohnungen und sorgen bei jeder Umzugsreinigung mit unserer Abnahmegarantie für eine sorgenfreie Übergabe."
      image={PHOTO_HERO}
      imagePosition="object-top"
      imageAlt="Mirdita Mitarbeiter reinigt eine Glasfront mit Bergsicht in Mörel"
      proseEyebrow="Am Fuss der Aletsch Arena"
      proseTitle="Reinigung in Mörel und Filet"
      paragraphs={[
        "Seit 2009 bilden Mörel und Filet die Gemeinde Mörel-Filet im Bezirk Östlich Raron. Das Dorf liegt am rechten Rhoneufer, nur wenige Minuten rhoneaufwärts von Naters — und an der Talstation der Seilbahnen auf die Riederalp.",
        "Viele Eigentümer haben hier oder oben auf der Alp eine Ferienwohnung. Wir übernehmen die Reinigung zwischen zwei Aufenthalten, die Grundreinigung vor und nach der Saison sowie die Fensterreinigung — zuverlässig, auch wenn Sie selbst nicht vor Ort sind.",
        "Für Einheimische reinigen wir Wohnungen und Häuser regelmässig oder einmalig, etwa beim Auszug. Weil wir von Naters aus schnell in Mörel sind, lassen sich Termine flexibel und auch kurzfristig einrichten.",
      ]}
      servicesTitle="Unsere Reinigungen in Mörel-Filet"
      processTitle="So einfach kommen Sie in Mörel zur Reinigung"
      ctaTitle="Ferienwohnung oder Zuhause in Mörel?"
      ctaBody="Ob Endreinigung zwischen Gästen oder Umzugsreinigung mit Abnahmegarantie: Fordern Sie jetzt Ihre kostenlose Offerte an."
    />
  );
}
