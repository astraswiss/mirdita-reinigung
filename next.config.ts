import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Carpet, upholstery and mattress cleaning are no longer offered: send the
  // former service pages to the services overview with a permanent 301.
  async redirects() {
    return [
      { source: "/teppichreinigung", destination: "/#leistungen", statusCode: 301 },
      { source: "/fr/nettoyage-tapis-valais", destination: "/fr#leistungen", statusCode: 301 },
    ];
  },
};

export default nextConfig;
