export type Client = { name: string; logo: string; sizeClass: string };

/**
 * Clients shown in the "trusted by" strip. Each logo lives in /public/clients.
 * Displayed with permission of the respective company. `sizeClass` tunes each
 * logo's height individually so marks with different proportions (e.g. the
 * stacked Volken lockup vs. the wide Augenzentrum wordmark) read at a balanced
 * optical size on a shared centre line.
 */
export const CLIENTS: Client[] = [
  { name: "Bosch Scintilla AG", logo: "/clients/bosch-scintilla.webp", sizeClass: "h-7 md:h-8" },
  { name: "Volken-Group", logo: "/clients/volken.svg", sizeClass: "h-7 md:h-8" },
];

/**
 * Social-proof client logo row. Grayscale by default, colour on hover. Logos
 * are vertically centred on a shared line (items-center). Layout is caller-
 * placed (no section wrapper) so it can sit inline in the hero or as a
 * standalone band; `align` switches the heading/row alignment and `label`
 * follows the page language.
 */
export function TrustedBy({
  label = "Diese Unternehmen vertrauen uns",
  align = "center",
  className = "",
}: {
  label?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={className}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep/45 ${
          centered ? "text-center" : ""
        }`}
      >
        {label}
      </p>
      <div
        className={`mt-6 flex flex-wrap items-center gap-x-10 gap-y-5 md:gap-x-14 ${
          centered ? "justify-center" : ""
        }`}
      >
        {CLIENTS.map((client) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            className={`w-auto object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 ${client.sizeClass}`}
          />
        ))}
      </div>
    </div>
  );
}
