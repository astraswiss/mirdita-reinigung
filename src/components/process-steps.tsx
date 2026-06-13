import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { STEPS } from "@/components/site-config";

export function ProcessSteps({
  eyebrow = "So einfach geht's",
  title = "In vier Schritten zum sauberen Ergebnis",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="px-5 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="relative rounded-2xl bg-white border border-brand-deep/5 p-6"
            >
              <div className="text-xs font-bold text-brand-bright tracking-widest">{s.n}</div>
              <h4 className="mt-2 font-semibold text-lg">{s.title}</h4>
              <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{s.body}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 size-5 text-brand-deep/20" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
