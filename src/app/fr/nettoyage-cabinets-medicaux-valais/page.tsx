import type { Metadata } from "next";
import Link from "next/link";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PROSE_LINK } from "@/components/service-sections";
import { alternatesFor } from "@/components/site-config";
import { GENERIC_PHOTOS } from "@/config/images";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-cabinets-medicaux-valais";
const PHOTO = GENERIC_PHOTOS.office;

export const metadata: Metadata = {
  title: "Nettoyage de cabinet médical en Valais | Mirdita",
  description:
    "Nettoyage de cabinets médicaux, dentaires et de physiothérapie en Valais : hygiène, désinfection des surfaces de contact, hors des heures de consultation.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de cabinet médical en Valais",
    description:
      "Nettoyage et désinfection des salles de soins, salles d’attente et sanitaires — en dehors de vos heures de consultation.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO.src, width: PHOTO.width, height: PHOTO.height }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage de cabinets médicaux Valais",
        description:
          "Nettoyage et désinfection pour cabinets médicaux, dentaires et de physiothérapie, en dehors des heures de consultation, dans tout le Valais.",
        path: PATH,
      }}
      badge="Cabinets médicaux"
      title={
        <>
          Nettoyage de <span className="text-brand-bright">cabinets médicaux</span> en Valais.
        </>
      }
      intro={
        <>
          Dans les cabinets médicaux, dentaires et de thérapie, l’hygiène compte particulièrement.
          Nous nettoyons et désinfectons salles de soins, salles d’attente et sanitaires — avec
          discrétion et en dehors de vos heures de consultation, dans tout le Valais.
        </>
      }
      image={PHOTO.src}
      imageAlt={PHOTO.alt.fr}
      imagePosition="object-left"
      trust="Discrétion et hygiène"
      checklistTitle="Ce qui fait partie du nettoyage de cabinets"
      checklistIntro="En plus de l’entretien courant, nous accordons une attention particulière à l’hygiène : désinfection ciblée des surfaces de contact et produits adaptés aux locaux médicaux."
      checklistGroups={[
        {
          title: "Salles de soins et d’attente",
          items: [
            "Salles de soins : plans de travail, rangements et sols",
            "Salle d’attente : chaises, tables et rangements",
            "Réception et accueil, comptoir compris",
            "Portes, surfaces vitrées et cloisons",
          ],
        },
        {
          title: "Hygiène et désinfection",
          items: [
            "Désinfection des surfaces de contact : poignées, interrupteurs, mains courantes et comptoir",
            "Sanitaires avec des exigences d’hygiène accrues",
            "Lavabos et robinetterie des salles de soins",
            "Produits de nettoyage adaptés aux locaux médicaux",
          ],
        },
        {
          title: "Organisation",
          items: [
            "Nettoyage en dehors des consultations : tôt le matin, le soir ou le week-end",
            "Rythme fixe — chaque jour ou plusieurs fois par semaine",
            "Un interlocuteur fixe pour votre cabinet",
          ],
        },
      ]}
      audience={{
        eyebrow: "Pour qui",
        title: "Les cabinets que nous entretenons",
        intro:
          "Chaque cabinet a ses propres routines. Nous adaptons l’étendue et les horaires à vos locaux et à vos consultations.",
        items: [
          {
            title: "Cabinets médicaux",
            body: "Médecine générale, cabinets de groupe ou spécialistes : salles d’attente et de soins prêtes dès la première consultation.",
          },
          {
            title: "Cabinets dentaires",
            body: "Accueil, salle d’attente, salles de soins et sanitaires — nettoyés à fond, surfaces de contact désinfectées.",
          },
          {
            title: "Physiothérapie",
            body: "Salles de traitement, zones de tables et vestiaires, avec de nombreux patients chaque jour, demandent un rythme fiable.",
          },
          {
            title: "Centres de thérapie",
            body: "Ergothérapie, psychothérapie ou centre de santé : nous adaptons l’entretien à vos locaux et à votre fonctionnement.",
          },
        ],
      }}
      prose={{
        eyebrow: "L’hygiène au quotidien",
        title: "Des locaux propres qui inspirent confiance à vos patients",
        paragraphs: [
          "La salle d’attente est la première impression de votre cabinet. Des sols propres, des sièges soignés et des sanitaires frais montrent à vos patients qu’ils sont entre de bonnes mains — avant même le début de la consultation.",
          "Chaque jour, de nombreuses personnes touchent les mêmes surfaces : poignées de porte, interrupteurs, comptoir d’accueil. Nous désinfectons ces surfaces de contact à chaque passage. Salles de soins et sanitaires sont nettoyés selon des exigences d’hygiène accrues, avec des produits adaptés aux locaux médicaux.",
        ],
      }}
      steps={[
        {
          n: "01",
          title: "Demande & visite",
          body: "Vous nous présentez vos locaux et vos horaires — le plus souvent lors d’une visite sur place.",
        },
        {
          n: "02",
          title: "Devis sous 24 h",
          body: "Vous recevez un devis ferme à prix fixe, matériel compris.",
        },
        {
          n: "03",
          title: "Nettoyage régulier",
          body: "Nous nettoyons de façon fiable en dehors de vos consultations.",
        },
        {
          n: "04",
          title: "Contrôle",
          body: "Échanges réguliers — nous ajustons jusqu’à ce que tout soit parfait.",
        },
      ]}
      processTitle="Le déroulement du nettoyage de votre cabinet"
      area={{
        eyebrow: "Région",
        title: "Nettoyage de cabinets médicaux dans tout le Valais",
        paragraphs: [
          <>
            Depuis notre siège à Naters, nous entretenons des cabinets dans le Haut-Valais autour de
            Brigue et de Viège comme dans le Valais romand, à{" "}
            <Link href="/fr/nettoyage-sion" className={PROSE_LINK}>
              Sion
            </Link>
            ,{" "}
            <Link href="/fr/nettoyage-sierre" className={PROSE_LINK}>
              Sierre
            </Link>
            ,{" "}
            <Link href="/fr/nettoyage-martigny" className={PROSE_LINK}>
              Martigny
            </Link>{" "}
            et{" "}
            <Link href="/fr/nettoyage-monthey" className={PROSE_LINK}>
              Monthey
            </Link>
            .
          </>,
          "Nous planifions nos passages en dehors de vos heures d’ouverture, pour que vos locaux soient prêts chaque matin.",
        ],
      }}
      related={{
        title: "D’autres nettoyages pour votre cabinet",
        links: [
          {
            href: "/fr/nettoyage-bureaux-valais",
            label: "Nettoyage de bureaux",
            desc: "Entretien discret et régulier de vos bureaux et espaces administratifs.",
          },
          {
            href: "/fr/nettoyage-regulier-valais",
            label: "Nettoyage régulier",
            desc: "Un entretien récurrent d’une qualité constante.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres, surfaces vitrées et stores sans traces.",
          },
        ],
      }}
      faq={{
        eyebrow: "Questions fréquentes",
        title: "Questions sur le nettoyage de cabinets",
        items: [
          {
            q: "Quand nettoyez-vous notre cabinet ?",
            a: "En dehors de vos heures de consultation — tôt le matin, le soir ou le week-end. Votre activité n’est pas dérangée et les locaux sont propres dès la première consultation.",
          },
          {
            q: "Quelles surfaces sont désinfectées ?",
            a: "Toutes les surfaces de contact touchées par de nombreuses mains : poignées de porte, interrupteurs, mains courantes, comptoir d’accueil, robinetterie ainsi que chaises et tables de la salle d’attente. S’y ajoutent les sanitaires, nettoyés selon des exigences d’hygiène accrues.",
          },
          {
            q: "Pour quels cabinets travaillez-vous ?",
            a: "Pour les cabinets médicaux et dentaires, la physiothérapie et les centres de thérapie dans tout le Valais — du petit cabinet individuel au cabinet de groupe.",
          },
          {
            q: "À quelle fréquence nettoyez-vous ?",
            a: "Aussi souvent que votre cabinet en a besoin — chaque jour ou plusieurs fois par semaine. Nous fixons le rythme ensemble ; vous avez toujours le même interlocuteur.",
          },
          {
            q: "Combien coûte le nettoyage d’un cabinet ?",
            a: "Le prix dépend de la taille, des locaux et du rythme. Vous recevez sous 24 heures un devis ferme à prix fixe, matériel compris, avec un contenu clairement défini.",
          },
          {
            q: "Êtes-vous assurés ?",
            a: "Oui. Mirdita Reinigung dispose d’une assurance responsabilité civile d’entreprise. Nous travaillons avec discrétion et prenons soin de vos locaux.",
          },
        ],
      }}
      ctaTitle="Une hygiène sur laquelle vous pouvez compter."
      ctaBody="Demandez un devis gratuit pour le nettoyage de votre cabinet — nous planifions autour de vos consultations et vous répondons sous 24 heures."
    />
  );
}
