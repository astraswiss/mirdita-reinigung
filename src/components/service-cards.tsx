"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export type ServiceCard = {
  key: string;
  label: string;
  /** Short pill label for the phone category switcher. */
  shortLabel: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

/**
 * The three service category cards. Desktop/tablet: a plain grid. Phone: the
 * full cards sit in a horizontal swipe row (next card peeking in) with category
 * pills above, so visitors see at once that there are three and can jump to
 * one — without hiding any of the card content.
 */
export function ServiceCards({
  services,
  ctaLabel,
}: {
  services: ServiceCard[];
  ctaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Keep the active pill in sync with the card scrolled into view.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      if (!track) return;
      const origin = track.getBoundingClientRect().left + 20;
      const dists = Array.from(track.children).map((c) =>
        Math.abs(c.getBoundingClientRect().left - origin),
      );
      setActive(dists.indexOf(Math.min(...dists)));
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(i: number) {
    const track = trackRef.current;
    const card = track?.children[i];
    if (!track || !card) return;
    const offset = card.getBoundingClientRect().left - track.getBoundingClientRect().left - 20;
    track.scrollBy({ left: offset, behavior: "smooth" });
    setActive(i);
  }

  return (
    <>
      {/* Category pills — phone only */}
      <div className="md:hidden grid grid-cols-3 gap-2">
        {services.map((s, i) => {
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => goTo(i)}
              aria-pressed={active === i}
              className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-2 py-2.5 text-sm font-semibold transition-all ${
                active === i
                  ? "bg-brand-deep text-white border-brand-deep"
                  : "bg-white text-brand-deep/75 border-brand-deep/10"
              }`}
            >
              <span className="truncate">{s.shortLabel}</span>
            </button>
          );
        })}
      </div>

      <Reveal delay={80}>
        <div
          ref={trackRef}
          className="mt-5 md:mt-10 -mx-5 px-5 scroll-px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.key} className="flex w-[86%] shrink-0 snap-start md:w-auto">
                <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-white border border-brand-deep/5 shadow-[0_20px_50px_-30px_rgba(0,21,63,0.2)]">
                  <Photo
                    src={s.image}
                    alt={s.imageAlt}
                    objectPosition={s.imagePosition}
                    className="aspect-[16/10] w-full"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold">
                      <Icon className="size-3.5" />
                      {s.label}
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-brand-deep/65 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-brand-deep/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#kontakt"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-brand-bright transition-all hover:gap-3"
                    >
                      {ctaLabel}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Position dots — phone only */}
      <div className="md:hidden mt-4 flex justify-center gap-2" aria-hidden="true">
        {services.map((s, i) => (
          <span
            key={s.key}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-6 bg-brand-bright" : "w-1.5 bg-brand-deep/20"
            }`}
          />
        ))}
      </div>
    </>
  );
}
