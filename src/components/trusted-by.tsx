export type Client = { name: string; logo: string };

/**
 * Clients shown in the "trusted by" strip. Each logo lives in /public/clients.
 * Displayed with permission of the respective company.
 */
export const CLIENTS: Client[] = [
  { name: "Bosch Scintilla AG", logo: "/clients/bosch-scintilla.webp" },
  { name: "Volken-Group", logo: "/clients/volken.svg" },
  { name: "Augenzentrum Visp", logo: "/clients/augenzentrum-visp.png" },
];

/**
 * Social-proof client logo row. Grayscale by default, colour on hover. Layout
 * is caller-placed (no section wrapper) so it can sit inline in the hero or as
 * a standalone band. `align` switches between a centered band and a left-
 * aligned in-hero strip; `label` follows the page language.
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
        className={`mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 ${
          centered ? "justify-center md:gap-x-16" : "md:gap-x-10"
        }`}
      >
        {CLIENTS.map((client) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            className="h-8 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 md:h-10"
          />
        ))}
      </div>
    </div>
  );
}
