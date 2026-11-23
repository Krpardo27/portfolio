import { Header } from "@/shared/components/ui/Header";
import "./globals.css";
import { Footer } from "@/shared/components/ui/Footer";
import { NavMobile } from "@/shared/components/ui/NavMobile";
import ToastNotification from "@/shared/components/ui/ToastNotification";
import type { Metadata } from "next";
import localFont from "next/font/local";

const display = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--type-display", weight: "200 800", display: "swap",
});
const body = localFont({
  src: "../node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2",
  variable: "--type-body", weight: "200 900", display: "swap",
});

const siteUrl = "https://portfolio-kpardo.kevcodesdev.cl";
const mono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  variable: "--type-mono",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Portfolio Kevin Pardo",
  title: {
    default: "Kevin Pardo | Full stack",
    template: "%s | Kevin Pardo",
  },
  description:
    "Portfolio profesional de Kevin Pardo, Full stack especializado en React, Next.js, JavaScript y experiencias web modernas.",
  keywords: [
    "Kevin Pardo",
    "Full stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portfolio desarrollador",
  ],
  authors: [{ name: "Kevin Pardo", url: siteUrl }],
  creator: "Kevin Pardo",
  publisher: "Kevin Pardo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Portfolio Kevin Pardo",
    title: "Kevin Pardo | Full stack",
    description:
      "Portfolio profesional de Kevin Pardo, Full stack especializado en React, Next.js, JavaScript y experiencias web modernas.",
  },
  twitter: {
    card: "summary",
    title: "Kevin Pardo | Full stack",
    description:
      "Portfolio profesional de Kevin Pardo, Full stack especializado en React, Next.js, JavaScript y experiencias web modernas.",
  },
  verification: {
    google: "KtKl5OY2v0mvHK87eXJxDyAlF0ffBMz2eEJi1G6akdo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex flex-col min-h-dvh">
        <Header />
        <main
          className="
            flex-1 container mx-auto max-w-6xl px-4"
        >
          {children}
        </main>
        <Footer />
        <NavMobile />
        <ToastNotification />
      </body>
    </html>
  );
}
