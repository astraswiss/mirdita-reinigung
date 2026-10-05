export type Client = { name: string; logo: string };

/**
 * Clients shown in the "trusted by" strip. Each logo lives in /public/clients.
 * Displayed with permission of the respective company.
 */
export const CLIENTS: Client[] = [
  { name: "Bosch Scintilla AG", logo: "/clients/bosch-scintilla.svg" },
  { name: "Volken-Group", logo: "/clients/volken.svg" },
  { name: "Augenzentrum Visp", logo: "/clients/augenzentrum-visp.svg" },
];

/**
 * Social-proof logo strip, placed just below the hero. Grayscale by default,
 * colour on hover. The label follows the page language via the `label` prop.
 */
export function TrustedBy({ label = "Diese Unternehmen vertrauen uns" }: { label?: string }) {
  return (
    <section className="px-5 md:px-10 pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep/45">
          {label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-8 md:gap-x-16">
          {CLIENTS.map((client) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-9 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 md:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
