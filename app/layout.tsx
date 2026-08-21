import { Header } from "@/shared/components/ui/Header";
import "./globals.css";
import { Footer } from "@/shared/components/ui/Footer";
import { NavMobile } from "@/shared/components/ui/NavMobile";
import ToastNotification from "@/shared/components/ui/ToastNotification";
import type { Metadata } from "next";

const siteUrl = "https://portfolio-kpardo.kevcodesdev.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Portfolio Kevin Pardo",
  title: {
    default: "Kevin Pardo | Frontend Developer",
    template: "%s | Kevin Pardo",
  },
  description:
    "Portfolio profesional de Kevin Pardo, Frontend Developer especializado en React, Next.js, JavaScript y experiencias web modernas.",
  keywords: [
    "Kevin Pardo",
    "Frontend Developer",
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
    title: "Kevin Pardo | Frontend Developer",
    description:
      "Portfolio profesional de Kevin Pardo, Frontend Developer especializado en React, Next.js, JavaScript y experiencias web modernas.",
  },
  twitter: {
    card: "summary",
    title: "Kevin Pardo | Frontend Developer",
    description:
      "Portfolio profesional de Kevin Pardo, Frontend Developer especializado en React, Next.js, JavaScript y experiencias web modernas.",
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
    <html lang="es">
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
