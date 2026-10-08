import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

const STEPS = [
  { n: "01", title: "Demande", body: "Vous nous contactez par formulaire ou par téléphone." },
  { n: "02", title: "Devis", body: "Sous 24 h, vous recevez une offre transparente." },
  {
    n: "03",
    title: "Nettoyage",
    body: "Notre équipe travaille de façon fiable et dans les délais.",
  },
  {
    n: "04",
    title: "Remise",
    body: "Remise garantie — nous restons jusqu’à ce que tout soit parfait.",
  },
];

/** French version of the four-step process section. */
export function FrProcessSteps({
  eyebrow = "Comment ça marche",
  title = "En quatre étapes, un résultat impeccable",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="px-5 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-12 md:text-center md:mx-auto">
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
              <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
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
