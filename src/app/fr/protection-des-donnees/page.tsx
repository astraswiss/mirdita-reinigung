import type { Metadata } from "next";

import { BUSINESS } from "@/config/site";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { alternatesFor } from "@/components/site-config";
import { cta } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Protection des données | Mirdita Reinigung Berisha",
  description:
    "Déclaration de protection des données de Mirdita Reinigung Berisha : quelles données nous collectons via le formulaire de contact et comment nous les utilisons.",
  alternates: alternatesFor("/fr/protection-des-donnees"),
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Informations légales
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Déclaration de protection des données
          </h1>
          <p className="mt-3 text-sm text-brand-deep/55">
            Traduction de la version allemande. En cas de divergence, la version allemande fait foi.
          </p>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">1. Responsable du traitement</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Le responsable du traitement des données sur ce site est :
                <br />
                {BUSINESS.legalName}, {BUSINESS.streetAddress}, {BUSINESS.postalCode}{" "}
                {BUSINESS.locality}, Suisse
                <br />
                E-mail :{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  {...cta("email_legal", "legal_page")}
                  className="text-brand-bright hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">2. Données que nous collectons</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Lors de votre visite sur notre site, nous collectons, au moyen de Vercel Analytics,
                Google Analytics 4 et Microsoft Clarity, des statistiques d’utilisation anonymisées
                (p. ex. pages consultées, provenance approximative, type d’appareil, comportement de
                clic et de défilement) afin d’améliorer le site. Aucune donnée de contact n’est
                collectée à cette occasion.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Si vous utilisez notre formulaire de contact, nous collectons en outre les données
                que vous nous communiquez volontairement : nom, adresse e-mail, numéro de téléphone
                (facultatif), type de nettoyage souhaité et votre message.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">3. Finalité du traitement</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Nous utilisons les données transmises via le formulaire de contact exclusivement
                pour traiter votre demande, vous contacter et vous établir une offre pour nos
                services de nettoyage. Elles ne sont pas réutilisées à des fins publicitaires.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">4. Transmission à des tiers</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Pour l’acheminement de votre demande par e-mail, nous faisons appel au prestataire
                Resend (Resend, Inc.) en tant que service technique d’envoi d’e-mails. Le contenu de
                votre formulaire de contact est traité à cette fin pour être transmis à notre
                adresse e-mail professionnelle.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Ce site est hébergé par Vercel Inc. Lors de la consultation du site, des données
                techniques d’accès (p. ex. adresse IP, heure de l’accès) peuvent être enregistrées
                dans les journaux du serveur de l’hébergeur ; elles sont nécessaires au
                fonctionnement et à la sécurité du site.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Pour analyser l’utilisation du site, nous utilisons Vercel Analytics (Vercel Inc.),
                Google Analytics 4 (Google Ireland Limited ou Google LLC) et Microsoft Clarity
                (Microsoft Corporation). Ces services nous aident à comprendre comment les visiteurs
                utilisent nos pages, afin d’améliorer continuellement notre offre. Avec Google
                Analytics, des données peuvent être transmises à des serveurs aux États-Unis. Vous
                pouvez empêcher la collecte par Google Analytics en installant le module
                complémentaire de navigateur pour la désactivation de Google Analytics :{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-bright hover:underline"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">5. Durée de conservation</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les données transmises via le formulaire de contact ne sont conservées que le temps
                nécessaire au traitement de votre demande et à l’exécution d’un éventuel mandat qui
                en découle, ou aussi longtemps que des obligations légales de conservation
                l’exigent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">6. Cookies</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Vercel Analytics fonctionne sans cookies et sans enregistrement d’identifiants
                personnels. Google Analytics 4 et Microsoft Clarity utilisent des cookies pour
                analyser de manière anonymisée l’utilisation du site (notamment pages consultées,
                clics, mouvements de souris et défilement) et améliorer ainsi sa facilité
                d’utilisation. Aucun autre cookie de tiers n’est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">7. Vos droits</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Vous avez le droit d’obtenir des renseignements sur les données que nous avons
                enregistrées à votre sujet, ainsi que d’en demander la rectification, l’effacement
                ou la limitation du traitement. Adressez-vous pour cela à tout moment à l’adresse
                indiquée au point 1.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">8. Modifications de cette déclaration</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Nous pouvons modifier la présente déclaration de protection des données afin de
                l’adapter à l’évolution de la situation juridique ou de notre offre. La version
                actuelle publiée sur cette page fait foi.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">
                9. Contact pour les questions de protection des données
              </h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Pour toute question relative à la protection des données, vous pouvez nous joindre à
                l’adresse{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  {...cta("email_legal", "legal_page")}
                  className="text-brand-bright hover:underline"
                >
                  {BUSINESS.email}
                </a>{" "}
                ou par téléphone au{" "}
                <a
                  href={BUSINESS.phoneHref}
                  {...cta("phone_legal", "legal_page")}
                  className="text-brand-bright hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter lang="fr" />
    </div>
  );
}
