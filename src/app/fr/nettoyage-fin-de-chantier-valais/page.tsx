import type { Metadata } from "next";
import Link from "next/link";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PROSE_LINK } from "@/components/service-sections";
import { alternatesFor } from "@/components/site-config";
import { GENERIC_PHOTOS } from "@/config/images";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-fin-de-chantier-valais";
const PHOTO = GENERIC_PHOTOS.construction;

export const metadata: Metadata = {
  title: "Nettoyage de fin de chantier en Valais | Mirdita",
  description:
    "Nettoyage de fin de chantier en Valais : nettoyage grossier et fin après construction, transformation ou rénovation. Devis sous 24 h, prix fixe convenu.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de fin de chantier en Valais",
    description:
      "Nettoyage grossier et fin après construction, transformation ou rénovation — des locaux prêts à être remis, dans tout le Valais.",
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
        name: "Nettoyage de fin de chantier Valais",
        description:
          "Nettoyage grossier et fin après construction, transformation ou rénovation, avant la remise des locaux, dans tout le Valais.",
        path: PATH,
      }}
      badge="Fin de chantier"
      title={
        <>
          Nettoyage de <span className="text-brand-bright">fin de chantier</span> en Valais.
        </>
      }
      intro={
        <>
          Notre travail commence après le dernier coup de pinceau. Nous éliminons les résidus de
          travaux, la poussière de ponçage, les traces de peinture et de colle, et remettons vos
          locaux prêts à être habités dans les délais — construction neuve, transformation ou
          rénovation, dans tout le Valais.
        </>
      }
      image={PHOTO.src}
      imageAlt={PHOTO.alt.fr}
      trust="Dans les délais du chantier"
      checklistTitle="Ce qui fait partie du nettoyage de fin de chantier"
      checklistIntro="Un nettoyage de fin de chantier se fait en deux étapes : le nettoyage grossier juste après les gros travaux, puis le nettoyage fin peu avant la remise des clés. Nous assurons les deux, séparément ou ensemble, et respectons la date convenue."
      checklistGroups={[
        {
          title: "Nettoyage grossier après les travaux",
          items: [
            "Retrait des résidus de chantier, films, emballages et rubans adhésifs",
            "Évacuation des petits déchets",
            "Poussière grossière sur sols, escaliers et rebords de fenêtres",
            "Éclaboussures de ciment, de mortier et de plâtre",
          ],
        },
        {
          title: "Nettoyage fin avant la remise",
          items: [
            "Vitres avec cadres, feuillures et rebords, sans traces de peinture",
            "Sols selon le matériau : résidus de vitrification et salissures",
            "Sanitaires : lavabos, douches, WC et robinetterie prêts à l’emploi",
            "Cuisine : façades, tiroirs et appareils intérieur et extérieur",
            "Poussière fine sur portes, cadres, prises, interrupteurs et radiateurs",
            "Stores et volets roulants débarrassés de la poussière",
          ],
        },
      ]}
      audience={{
        eyebrow: "Pour qui",
        title: "Pour qui nous intervenons",
        intro:
          "Maison individuelle, immeuble ou surface commerciale : nous adaptons l’étendue et le déroulement à votre projet.",
        items: [
          {
            title: "Maîtres d’ouvrage",
            body: "Vous emménagez dans votre nouveau logement ou avez rénové ? Nous veillons à ce que vous entriez dans des pièces propres, sans poussière dans les armoires ni les joints.",
          },
          {
            title: "Architectes",
            body: "Nous suivons votre planning de chantier et nettoyons par étapes, pour que réceptions et remises se fassent à temps.",
          },
          {
            title: "Entreprises générales",
            body: "Plusieurs appartements ou un bâtiment entier ? Nous planifions le nettoyage par unité et remettons appartement après appartement.",
          },
          {
            title: "Régies immobilières",
            body: "Après une rénovation ou une transformation, nous préparons logements et parties communes pour la remise en location.",
          },
        ],
      }}
      steps={[
        {
          n: "01",
          title: "Demande & visite",
          body: "Vous nous décrivez le bien — dans la plupart des cas, nous le visitons sur place.",
        },
        {
          n: "02",
          title: "Devis sous 24 h",
          body: "Vous recevez un devis ferme à prix fixe, matériel compris.",
        },
        {
          n: "03",
          title: "Nettoyage grossier & fin",
          body: "Nous nettoyons par étapes, selon votre planning de chantier.",
        },
        {
          n: "04",
          title: "Remise",
          body: "Contrôle commun — nous reprenons jusqu’à ce que tout soit parfait.",
        },
      ]}
      processTitle="Le déroulement de votre nettoyage de fin de chantier"
      area={{
        eyebrow: "Région",
        title: "Nettoyage de fin de chantier dans tout le Valais",
        paragraphs: [
          <>
            Depuis notre siège à Naters, nous intervenons dans tout le Valais — dans le Haut-Valais
            autour de Brigue et de Viège comme dans le Valais romand, à{" "}
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
          "Si votre planning de chantier évolue, nous replanifions l’étape concernée avec vous, afin que la remise des locaux reste à la date prévue.",
        ],
      }}
      related={{
        title: "Après le chantier : d’autres nettoyages",
        links: [
          {
            href: "/fr/nettoyage-en-profondeur-valais",
            label: "Nettoyage en profondeur",
            desc: "Un nettoyage intensif quand un bien demande plus qu’un entretien habituel.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres, surfaces vitrées et stores sans traces — aussi après les travaux.",
          },
          {
            href: "/fr/conciergerie-valais",
            label: "Conciergerie",
            desc: "Entretien régulier des cages d’escalier et parties communes après l’emménagement.",
          },
        ],
      }}
      faq={{
        eyebrow: "Questions fréquentes",
        title: "Questions sur le nettoyage de fin de chantier",
        items: [
          {
            q: "Quelle est la différence entre nettoyage grossier et nettoyage fin ?",
            a: "Le nettoyage grossier a lieu juste après les gros travaux : nous retirons films, emballages, résidus de chantier et la poussière grossière. Le nettoyage fin suit peu avant la remise et rend toutes les surfaces, vitres, sols, la cuisine et les sanitaires prêts à l’emploi.",
          },
          {
            q: "Quand faut-il planifier le nettoyage de fin de chantier ?",
            a: "Dès que la date de remise est connue. Le nettoyage fin a lieu quand tous les corps de métier ont terminé. Contactez-nous tôt : nous réservons la date en fonction de votre planning.",
          },
          {
            q: "Intervenez-vous aussi après une transformation ou une rénovation ?",
            a: "Oui. Nous nettoyons après une construction neuve comme après une transformation, un assainissement ou une rénovation — d’un seul appartement à un bâtiment entier.",
          },
          {
            q: "Comment le prix est-il calculé ?",
            a: "Dans la plupart des cas, nous visitons le bien au préalable — ou à votre demande. Vous recevez ensuite sous 24 heures un devis ferme à prix fixe, matériel compris, avec un contenu clairement défini.",
          },
          {
            q: "Que se passe-t-il avec les déchets de chantier ?",
            a: "Les petits résidus comme films, emballages et restes de chantier sont retirés et évacués lors du nettoyage grossier. La prise en charge de plus grandes quantités est fixée à l’avance dans le devis.",
          },
          {
            q: "Êtes-vous assurés ?",
            a: "Oui. Mirdita Reinigung dispose d’une assurance responsabilité civile d’entreprise — votre bien est couvert pendant notre intervention.",
          },
        ],
      }}
      ctaTitle="Une date de remise ? Nous nous y adaptons."
      ctaBody="Demandez un devis gratuit pour votre nettoyage de fin de chantier — nous planifions selon votre calendrier et vous répondons sous 24 heures."
    />
  );
}
