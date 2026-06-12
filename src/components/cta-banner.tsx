import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title,
  body,
  ctaLabel = "Kostenlose Offerte",
  ctaHref = "/#kontakt",
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="px-5 md:px-10 py-20">
      <div className="max-w-7xl mx-auto rounded-[28px] bg-brand-deep text-white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-3 text-white/70 leading-relaxed">{body}</p>
        </div>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all w-fit shrink-0"
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
