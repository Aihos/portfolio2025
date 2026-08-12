import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(pages)/_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio2025.netlify.app"),
  title: {
    default: "Hugo Leray — Développeur Web | Portfolio",
    template: "%s | Hugo Leray — Développeur Web",
  },
  description:
    "Portfolio de Hugo Leray, développeur web indépendant : sites vitrines, applications web et jeux vidéo en Next.js, React et TypeScript. Découvrez mes projets et contactez-moi.",
  applicationName: "Hugo Leray — Développeur Web",
  authors: [{ name: "Hugo Leray" }],
  creator: "Hugo Leray",
  publisher: "Hugo Leray",
  keywords: [
    "Hugo Leray",
    "développeur web",
    "web developer",
    "développeur web indépendant",
    "portfolio développeur web",
    "création de sites web",
    "Next.js",
    "React",
    "TypeScript",
    "site vitrine",
    "application web",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio2025.netlify.app/",
    siteName: "Hugo Leray — Développeur Web",
    title: "Hugo Leray — Développeur Web | Portfolio",
    description:
      "Portfolio de Hugo Leray, développeur web indépendant : sites vitrines, applications web et jeux vidéo en Next.js, React et TypeScript.",
  },
  twitter: {
    card: "summary",
    title: "Hugo Leray — Développeur Web | Portfolio",
    description:
      "Portfolio de Hugo Leray, développeur web indépendant : sites vitrines, applications web et jeux vidéo en Next.js, React et TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Leray",
  url: "https://portfolio2025.netlify.app/",
  jobTitle: "Développeur web indépendant",
  description:
    "Développeur web indépendant spécialisé dans les sites vitrines, applications web et jeux vidéo.",
  knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Unity", "Développement web"],
  email: "mailto:hugoleray53@gmail.com",
  sameAs: ["https://github.com/yourusername"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*    <BubbleMenu /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
