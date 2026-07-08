import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_PUTZEN, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-fin-de-bail-valais";

export const metadata: Metadata = {
  title: "Nettoyage fin de bail Valais avec garantie de remise | Mirdita",
  description:
    "Nettoyage fin de bail dans tout le Valais avec garantie de remise : cuisine, salle de bains, sols, vitres et stores. Appartements et maisons à Sion, Sierre, Martigny, Monthey. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage fin de bail Valais avec garantie de remise",
    description:
      "Nettoyage complet avant l’état des lieux et la remise des clés, dans tout le Valais. Garantie de remise et contrôle final soigné.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage fin de bail Valais",
        description:
          "Nettoyage complet de fin de bail avec garantie de remise pour appartements, maisons et biens immobiliers dans tout le Valais.",
        path: PATH,
      }}
      badge="Nettoyage fin de bail"
      title={
        <>
          Nettoyage fin de bail dans le <span className="text-brand-bright">Valais</span>, avec
          garantie de remise.
        </>
      }
      intro={
        <>
          Le déménagement est déjà assez stressant — la remise du logement ne doit pas l’être. Nous
          nettoyons votre appartement ou votre maison avant l’état des lieux, de la profondeur du
          four jusqu’au dernier angle de fenêtre. Avec notre garantie de remise, si quelque chose
          est signalé lors de la remise des clés, nous repassons sans frais.
        </>
      }
      image={PHOTO_PUTZEN}
      imageAlt="Collaborateur de Mirdita nettoyant une cuisine avant la remise des clés dans le Valais"
      imagePosition="object-left"
      trust="Garantie de remise incluse"
      checklistTitle="Ce qui fait partie du nettoyage fin de bail"
      checklistIntro="Nous nettoyons chaque pièce de votre logement de manière assez approfondie pour que la remise à la régie ou au propriétaire devienne une simple formalité — avec garantie de remise écrite."
      items={[
        "Cuisine : four, hotte, plaques, réfrigérateur et armoires",
        "Salle de bains & WC : calcaire, joints et robinetterie",
        "Sols, plinthes, seuils et encadrements de portes",
        "Fenêtres intérieur/extérieur, cadres et rebords",
        "Stores, volets et lamelles selon l’état du logement",
        "Balcon, cave et garage sur demande",
        "Contrôle final soigné, pièce par pièce",
        "Garantie de remise : en cas de remarque, nous repassons sans frais",
      ]}
      processTitle="De la demande à la remise des clés"
      ctaTitle="Prêt pour la remise de votre logement ?"
      ctaBody="Demandez dès maintenant un devis gratuit pour votre nettoyage de fin de bail — clair, sans engagement et avec garantie de remise."
    />
  );
}
