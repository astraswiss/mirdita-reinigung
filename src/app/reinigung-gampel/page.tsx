import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_BUERO } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-gampel";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Gampel — Mirdita Reinigung",
  description:
    "Reinigung in Gampel-Bratsch am Eingang zum Lötschental: Umzugs-, Büro- und Baureinigung mit Abnahmegarantie. Zuverlässig und termingerecht. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Gampel — Mirdita Reinigung",
    description: "Umzugs-, Büro- und Baureinigung in Gampel-Bratsch.",
    url: PATH,
    images: [{ url: PHOTO_BUERO, width: 1280, height: 854 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Gampel"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Gampel-Bratsch: Umzugs-, Büro- und Baureinigung mit Abnahmegarantie."
      badge="Gampel-Bratsch"
      intro="Am Ausgang des Lötschentals ist Gampel Wohnort, Gewerbestandort und jeden August Festivalgemeinde. Wir reinigen Wohnungen beim Umzug mit Abnahmegarantie, Büros und Betriebe im Unterhalt sowie Neubauten und Umbauten vor dem Bezug."
      image={PHOTO_BUERO}
      imagePosition="object-left"
      imageAlt="Sauberes Büro nach der Reinigung durch Mirdita in Gampel"
      proseEyebrow="Am Tor zum Lötschental"
      proseTitle="Reinigung in Gampel und Bratsch"
      paragraphs={[
        "Seit 2009 bilden Gampel und Bratsch die Gemeinde Gampel-Bratsch im Bezirk Leuk. Gampel liegt an der Lonza, dort wo das Lötschental ins Rhonetal mündet — und ist landesweit bekannt für das Open Air Gampel, eines der grössten Musikfestivals der Schweiz.",
        "Im Dorf und in der Ebene wird rege gebaut und umgebaut. Wir übernehmen die Baureinigung und Bauendreinigung, damit neue Wohnungen und Gewerberäume termingerecht und bezugsbereit übergeben werden können. Für Betriebe vor Ort reinigen wir Büros, Werkstatt-Nebenräume und Sanitäranlagen im Unterhalt.",
        "Für Mieter und Eigentümer in Gampel und Bratsch bieten wir die Umzugsreinigung mit Abnahmegarantie an: Wird bei der Wohnungsübergabe etwas beanstandet, bessern wir kostenlos nach.",
      ]}
      servicesTitle="Was wir in Gampel-Bratsch für Sie reinigen"
      processTitle="Ihre Reinigung in Gampel in vier Schritten"
      ctaTitle="Reinigung in Gampel-Bratsch gesucht?"
      ctaBody="Für Umzug, Büro oder Neubau: Schildern Sie uns Ihr Projekt — Sie erhalten innert 24 Stunden eine verbindliche Offerte."
    />
  );
}
