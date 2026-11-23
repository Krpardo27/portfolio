import { EducationTimeline } from "@/features/about/components/EducationTimeline";
import { AnimatedSectionHeader } from "@/shared/components/ui/AnimatedSectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de mí",
  description:
    "Conoce a Kevin Pardo, Full stack especializado en React, JavaScript y desarrollo de interfaces web.",
  keywords: [
    "Kevin Pardo",
    "Full stack",
    "React",
    "JavaScript",
    "Next.js",
    "desarrollo frontend",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Acerca de mí | Kevin Pardo",
    description:
      "Conoce a Kevin Pardo, Full stack especializado en React, JavaScript y desarrollo de interfaces web.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <AnimatedSectionHeader level={1} eyebrow="Sobre mí" title="Acerca de mí" description="Soy Desarrollador Full Stack con experiencia principalmente en React,
          Next.js, JavaScript y TypeScript. Me interesa construir aplicaciones
          web modernas, accesibles y fáciles de mantener, combinando una buena
          experiencia de usuario con código limpio, eficiente y escalable. Tengo
          experiencia integrando APIs REST, trabajando con bases de datos y
          desplegando aplicaciones en entornos cloud. Actualmente continúo
          fortaleciendo mi formación en Ingeniería en Computación e
          Informática." />

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <EducationTimeline />
      </div>
    </section>
  );
}