import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Les deux familles déjà utilisées par le site actuel (thème The Photograph).
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lelabodepoxy.fr"),
  title: "Le Labo d’Époxy : bijoux, jeux et déco en résine faits main à Nantes",
  description:
    "Échiquiers fleuris, dominos, créoles à pampilles interchangeables et ateliers d’initiation à Nantes. Pièces uniques en résine, coulées à la main par Claire.",
  openGraph: {
    title: "Le Labo d’Époxy",
    description: "Bijoux, jeux et déco en résine, pièces uniques faites main à Nantes.",
    images: ["/img/echiquier-or.webp"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
