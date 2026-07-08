import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    href: "/umzugsreinigung",
    label: "Umzugsreinigung",
    desc: "Mit Abnahmegarantie — bezugsfertig zur Wohnungsübergabe.",
  },
  {
    href: "/wohnungsreinigung",
    label: "Wohnungsreinigung",
    desc: "Einmalig oder regelmässig für Ihr Zuhause.",
  },
  {
    href: "/unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    desc: "Wiederkehrende Pflege in gleichbleibender Qualität.",
  },
  {
    href: "/fensterreinigung",
    label: "Fensterreinigung",
    desc: "Fenster, Glasflächen und Storen streifenfrei.",
  },
  {
    href: "/bueroreinigung",
    label: "Büroreinigung",
    desc: "Diskret und zuverlässig ausserhalb der Geschäftszeiten.",
  },
  {
    href: "/baureinigung",
    label: "Baureinigung",
    desc: "Bauendreinigung vor Übergabe oder Bezug.",
  },
];

/**
 * Grid of the main German service pages, used on city landing pages for
 * internal linking. Title is passed in so each city page phrases it locally.
 */
export function DeServiceLinks({ title }: { title: string }) {
  return (
    <section className="px-5 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-8">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Unsere Leistungen
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.href} delay={i * 70}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl bg-white border border-brand-deep/5 p-6 hover:border-brand-bright/40 transition-colors"
              >
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {s.label}
                  <ArrowRight className="size-4 text-brand-bright opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
