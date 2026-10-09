import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_PUTZEN } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-lalden";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Lalden — Mirdita Reinigung",
  description:
    "Reinigung in Lalden zwischen Brig und Visp: Wohnungs-, Umzugs- und Unterhaltsreinigung mit Abnahmegarantie. Nur wenige Minuten von Naters. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Lalden — Mirdita Reinigung",
    description: "Wohnungs- und Umzugsreinigung in Lalden — schnell aus Naters vor Ort.",
    url: PATH,
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Lalden"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Lalden: Wohnungs-, Umzugs- und Unterhaltsreinigung mit Abnahmegarantie."
      badge="Zwischen Brig und Visp"
      intro="Lalden ist ruhig gelegen und doch mitten im Oberwallis — ideal für alle, die in Brig oder Visp arbeiten. Wir nehmen Ihnen die Reinigung ab: regelmässige Wohnungspflege für Berufstätige, Umzugsreinigung mit Abnahmegarantie und gründliche Fensterreinigung."
      image={PHOTO_PUTZEN}
      imagePosition="object-left"
      imageAlt="Mirdita Mitarbeiter reinigt eine Küche in Lalden"
      proseEyebrow="Ruhig wohnen, sauber übergeben"
      proseTitle="Ihre Reinigung in Lalden"
      paragraphs={[
        "Lalden liegt am nördlichen Rand der Rhoneebene, gegenüber von Visp und mit diesem seit dem Mittelalter über eine Brücke verbunden. Um den alten Dorfkern sind in den letzten Jahrzehnten viele neue Wohnhäuser entstanden — Lalden ist heute ein beliebter Wohnort für Familien und Pendler.",
        "Wer täglich nach Brig, Visp oder weiter pendelt, hat wenig Zeit für den Hausputz. Genau dafür bieten wir die Unterhaltsreinigung an: in einem festen Rhythmus, mit einem festen Ansprechpartner und gleichbleibender Qualität. Für Mietwohnungen übernehmen wir zudem die Umzugsreinigung inklusive Abnahmegarantie.",
        "Von Naters aus sind wir in wenigen Minuten in Lalden. Das macht uns flexibel — etwa wenn die Wohnungsübergabe kurzfristig vorgezogen wird oder nach einer Renovation schnell gereinigt werden muss.",
      ]}
      servicesTitle="Unsere Leistungen für Lalden"
      processTitle="In vier Schritten zur sauberen Wohnung in Lalden"
      ctaTitle="Reinigung in Lalden gesucht?"
      ctaBody="Ob regelmässig oder einmalig vor dem Auszug: Wir sind in wenigen Minuten bei Ihnen. Jetzt kostenlose Offerte anfordern."
    />
  );
}
