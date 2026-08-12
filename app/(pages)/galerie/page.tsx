import type { Metadata } from "next";
import GalerieEnsemble from "./_component/galerieEnsemble";
import GalerieHeader from "./_component/galerieHeader";

export const metadata: Metadata = {
  title: "Projets & Réalisations",
  description:
    "Découvrez les projets de Hugo Leray, développeur web indépendant : sites vitrines, applications web, jeux vidéo et créations graphiques. Next.js, React, TypeScript, Unity.",
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio2025.netlify.app/galerie",
    title: "Projets & Réalisations | Hugo Leray — Développeur Web",
    description:
      "Découvrez les projets de Hugo Leray : sites vitrines, applications web, jeux vidéo et créations graphiques.",
  },
};

export default function PageGalerie() {
  return (
    <div className="min-h-screen">
      <GalerieHeader />
      <GalerieEnsemble />
    </div>
  );
}
