import type { GenericPhotoKey } from "@/config/images";

/**
 * Page registry for the sitemap. `updatedAt` (YYYY-MM-DD) is the date the
 * page's CONTENT last changed — update it by hand whenever you edit a page's
 * text, so search engines get a truthful <lastmod>. Do not derive it from the
 * build date.
 */
export type PageEntry = { path: string; updatedAt: string };

export type RegionPage = PageEntry & {
  /** Generic photo used while the region has no photo of its own. */
  photo: GenericPhotoKey;
  /** Tailwind object-position class for the generic photo crop. */
  photoPosition?: string;
  /**
   * A real photo taken in this place (hero + og:image). Put the file in
   * /public/regionen/<slug>.jpg and describe what is visible in `alt`.
   */
  image?: { src: string; alt: string; width: number; height: number };
};

export const PAGES: PageEntry[] = [
  { path: "/", updatedAt: "2026-10-09" },
  { path: "/fr", updatedAt: "2026-10-09" },
  { path: "/umzugsreinigung", updatedAt: "2026-10-09" },
  { path: "/wohnungsreinigung", updatedAt: "2026-10-09" },
  { path: "/unterhaltsreinigung", updatedAt: "2026-10-09" },
  { path: "/fensterreinigung", updatedAt: "2026-10-09" },
  { path: "/teppichreinigung", updatedAt: "2026-10-09" },
  { path: "/bueroreinigung", updatedAt: "2026-10-09" },
  { path: "/praxisreinigung", updatedAt: "2026-10-09" },
  { path: "/baureinigung", updatedAt: "2026-10-09" },
  { path: "/hauswartung", updatedAt: "2026-10-09" },
  { path: "/grundreinigung", updatedAt: "2026-10-09" },
  { path: "/fr/nettoyage-fin-de-bail-valais", updatedAt: "2026-07-08" },
  { path: "/fr/nettoyage-appartement-valais", updatedAt: "2026-10-08" },
  { path: "/fr/nettoyage-regulier-valais", updatedAt: "2026-10-09" },
  { path: "/fr/nettoyage-vitres-valais", updatedAt: "2026-10-08" },
  { path: "/fr/nettoyage-tapis-valais", updatedAt: "2026-10-08" },
  { path: "/fr/nettoyage-bureaux-valais", updatedAt: "2026-07-08" },
  { path: "/fr/nettoyage-cabinets-medicaux-valais", updatedAt: "2026-07-08" },
  { path: "/fr/nettoyage-fin-de-chantier-valais", updatedAt: "2026-07-08" },
  { path: "/fr/conciergerie-valais", updatedAt: "2026-10-08" },
  { path: "/fr/nettoyage-en-profondeur-valais", updatedAt: "2026-07-08" },
  { path: "/ueber-uns", updatedAt: "2026-10-09" },
  { path: "/fr/a-propos", updatedAt: "2026-10-09" },
  { path: "/impressum", updatedAt: "2026-06-12" },
  { path: "/datenschutz", updatedAt: "2026-07-17" },
  { path: "/agb", updatedAt: "2026-06-12" },
];

/** City/region landing pages (German and French). */
export const REGION_PAGES: RegionPage[] = [
  { path: "/reinigung-naters", updatedAt: "2026-10-09", photo: "glass" },
  {
    path: "/reinigung-brig-glis",
    updatedAt: "2026-10-09",
    photo: "office",
    photoPosition: "object-left",
  },
  {
    path: "/reinigung-ried-brig",
    updatedAt: "2026-10-09",
    photo: "glass",
    photoPosition: "object-top",
  },
  {
    path: "/reinigung-lalden",
    updatedAt: "2026-10-09",
    photo: "worktop",
    photoPosition: "object-left",
  },
  {
    path: "/reinigung-visp",
    updatedAt: "2026-10-09",
    photo: "worktop",
    photoPosition: "object-left",
  },
  {
    path: "/reinigung-baltschieder",
    updatedAt: "2026-10-09",
    photo: "kitchenFront",
    photoPosition: "object-[center_70%]",
  },
  {
    path: "/reinigung-stalden",
    updatedAt: "2026-10-09",
    photo: "worktop",
    photoPosition: "object-left",
  },
  {
    path: "/reinigung-saas-fee",
    updatedAt: "2026-10-09",
    photo: "kitchenFront",
    photoPosition: "object-[center_70%]",
  },
  {
    path: "/reinigung-zermatt",
    updatedAt: "2026-10-09",
    photo: "office",
    photoPosition: "object-left",
  },
  { path: "/reinigung-raron", updatedAt: "2026-10-09", photo: "kitchenFront" },
  {
    path: "/reinigung-steg",
    updatedAt: "2026-10-09",
    photo: "construction",
    photoPosition: "object-right",
  },
  {
    path: "/reinigung-gampel",
    updatedAt: "2026-10-09",
    photo: "office",
    photoPosition: "object-left",
  },
  { path: "/reinigung-leuk", updatedAt: "2026-10-09", photo: "construction" },
  {
    path: "/reinigung-moerel",
    updatedAt: "2026-10-09",
    photo: "glass",
    photoPosition: "object-top",
  },
  { path: "/reinigung-fiesch", updatedAt: "2026-10-09", photo: "construction" },
  {
    path: "/fr/nettoyage-sierre",
    updatedAt: "2026-10-09",
    photo: "kitchenFront",
    photoPosition: "object-[center_70%]",
  },
  {
    path: "/fr/nettoyage-sion",
    updatedAt: "2026-10-09",
    photo: "worktop",
    photoPosition: "object-left",
  },
  { path: "/fr/nettoyage-martigny", updatedAt: "2026-10-09", photo: "construction" },
  {
    path: "/fr/nettoyage-monthey",
    updatedAt: "2026-10-09",
    photo: "office",
    photoPosition: "object-left",
  },
];

export function getRegionPage(path: string): RegionPage {
  const region = REGION_PAGES.find((r) => r.path === path);
  if (!region) throw new Error(`[pages] No REGION_PAGES entry for ${path}`);
  return region;
}
