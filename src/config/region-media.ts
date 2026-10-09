import type { Metadata } from "next";

import { GENERIC_PHOTOS, OG_DEFAULT } from "@/config/images";
import { getRegionPage } from "@/config/pages";

/**
 * Hero photo for a region page: its own photo if one is set in
 * src/config/pages.ts, otherwise the generic photo with its fixed, neutral alt.
 */
export function regionHero(path: string, lang: "de" | "fr") {
  const region = getRegionPage(path);
  if (region.image) return { ...region.image, position: "object-center", own: true };
  const generic = GENERIC_PHOTOS[region.photo];
  return {
    src: generic.src,
    alt: generic.alt[lang],
    width: generic.width,
    height: generic.height,
    position: region.photoPosition ?? "object-center",
    own: false,
  };
}

/** og:image for a region page: its own photo, else the 1200×630 brand image. */
export function regionOgImages(
  path: string,
  lang: "de" | "fr",
): NonNullable<Metadata["openGraph"]>["images"] {
  const region = getRegionPage(path);
  if (region.image) {
    const { src, alt, width, height } = region.image;
    return [{ url: src, alt, width, height }];
  }
  return [OG_DEFAULT[lang]];
}
