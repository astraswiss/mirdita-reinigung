import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

import { FrCtaRow } from "@/components/fr/fr-cta-row";
import { Photo } from "@/components/photo";

/**
 * Shared French service hero: eyebrow badge, single H1, intro and the CTA row.
 * Content (title, intro, badge, image) is passed in per page so each page keeps
 * its own unique copy.
 */
export function FrHero({
  badge,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "object-center",
  trust,
  devisLabel,
}: {
  badge: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  trust?: string;
  devisLabel?: string;
}) {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
            <span className="size-1.5 rounded-full bg-brand-bright" />
            {badge}
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">{intro}</p>

          <FrCtaRow devisLabel={devisLabel} />

          {trust && (
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>{trust}</span>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <Photo
            src={image}
            alt={imageAlt}
            className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            objectPosition={imagePosition}
          />
        </div>
      </div>
    </section>
  );
}
