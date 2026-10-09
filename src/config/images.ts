/**
 * Generic stock photos of the business. Each has ONE fixed, honest alt text
 * per language describing what is actually visible — never rebuilt with a
 * place name, since these photos were not taken in the places they appear on.
 */
export type GenericPhotoKey = "glass" | "kitchenFront" | "office" | "construction" | "worktop";

export const GENERIC_PHOTOS: Record<
  GenericPhotoKey,
  { src: string; width: number; height: number; alt: { de: string; fr: string } }
> = {
  glass: {
    src: "/hero.jpg",
    width: 1200,
    height: 1600,
    alt: {
      de: "Mirdita Mitarbeiter reinigt eine grosse Glasfront",
      fr: "Collaborateur de Mirdita nettoyant une grande baie vitrée",
    },
  },
  kitchenFront: {
    src: "/Privatkunden.jpeg",
    width: 1200,
    height: 1600,
    alt: {
      de: "Mirdita Mitarbeiterin wischt eine Küchenfront ab",
      fr: "Collaboratrice de Mirdita essuyant une façade de cuisine",
    },
  },
  office: {
    src: "/buero.jpg",
    width: 1280,
    height: 854,
    alt: {
      de: "Helles Büro mit Schreibtischen und Bürostühlen",
      fr: "Bureau lumineux avec postes de travail",
    },
  },
  construction: {
    src: "/spezialreinigung.jpg",
    width: 2048,
    height: 1536,
    alt: {
      de: "Neubau mit Baugerüst",
      fr: "Nouvelle construction avec échafaudage",
    },
  },
  worktop: {
    src: "/putzen.jpg",
    width: 1536,
    height: 1426,
    alt: {
      de: "Mirdita Mitarbeiter reinigt eine Küchenarbeitsplatte",
      fr: "Collaborateur de Mirdita nettoyant un plan de travail",
    },
  },
};

/** Brand share images (1200×630) for pages without a photo of their own. */
export const OG_DEFAULT = {
  de: { url: "/og-default.jpg", width: 1200, height: 630 },
  fr: { url: "/og-default-fr.jpg", width: 1200, height: 630 },
} as const;
