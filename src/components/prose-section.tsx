import { Reveal } from "@/components/reveal";

/**
 * Simple prose block (eyebrow + H2 + paragraphs). Used to give each city
 * landing page its own unique, locally relevant copy so the pages are not
 * near-duplicates of one another.
 */
export function ProseSection({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="px-5 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-brand-deep/70 leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
