import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Qualités autorisées pour le composant <Image /> (évite les artefacts
    // de compression sur les visuels graphiques de la galerie).
    qualities: [75, 90, 95, 100],
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
