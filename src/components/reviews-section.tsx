"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews";

function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="w-[320px] md:w-[380px] shrink-0 rounded-2xl bg-white border border-brand-deep/5 p-6 flex flex-col">
      <div className="flex text-brand-bright mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-current" />
        ))}
      </div>
      <p className="text-brand-deep/80 leading-relaxed text-sm line-clamp-6">
        „{review.text}&quot;
      </p>
      <div className="mt-5 pt-5 border-t border-brand-deep/5">
        <div className="font-semibold text-sm">{review.name}</div>
        <div className="text-xs text-brand-deep/55">{review.time}</div>
      </div>
    </div>
  );
}

function ReviewsMarquee({ reviews }: { reviews: GoogleReview[] }) {
  const items = [...reviews, ...reviews];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const SPEED = 40; // px per second
    let frameId: number;
    let lastTime: number | null = null;

    function tick(now: number) {
      if (lastTime === null) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      if (!draggingRef.current) {
        offsetRef.current -= (SPEED * dt) / 1000;
      }

      const track = trackRef.current;
      if (track) {
        const setWidth = track.scrollWidth / 2;
        if (setWidth > 0) {
          let o = offsetRef.current % setWidth;
          if (o > 0) o -= setWidth;
          offsetRef.current = o;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    offsetRef.current = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current);
  }

  function handlePointerUp() {
    draggingRef.current = false;
  }

  return (
    <div className="relative -mx-5 md:-mx-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-brand-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-brand-light to-transparent" />
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="flex w-max cursor-grab touch-pan-y gap-5 px-5 select-none active:cursor-grabbing md:px-10"
      >
        {items.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection({ googleReviews }: { googleReviews: GoogleReviewsData }) {
  const [reviews, setReviews] = useState(googleReviews.reviews);

  useEffect(() => {
    setReviews((current) => {
      const shuffled = [...current];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, []);

  return (
    <section className="px-5 md:px-10 py-20">
      <div id="bewertungen" className="max-w-7xl mx-auto scroll-mt-20">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Bewertungen
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Was unsere Kund:innen sagen
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold">{googleReviews.rating.toFixed(1)}</div>
            <div>
              <div className="flex text-brand-bright">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <a
                href="https://www.google.com/maps/place/Mirdita+Reinigung,+Belalpstrasse+2,+3904+Naters/@0,0,22z/data=!4m2!3m1!1s0x42c5237190cbda61:0xdc13d84cf19fc3d0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 flex items-center gap-1.5 text-xs text-brand-deep/60 hover:text-brand-bright transition-colors"
              >
                <GoogleLogo className="size-3.5" />
                {googleReviews.total} Bewertungen
              </a>
            </div>
          </div>
        </Reveal>
        <ReviewsMarquee reviews={reviews} />
      </div>
    </section>
  );
}
