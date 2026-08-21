import { EducationTimeline } from "@/features/about/components/EducationTimeline";
import Heading from "@/shared/components/ui/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de mí",
  description:
    "Conoce a Kevin Pardo, Frontend Developer especializado en React, JavaScript y desarrollo de interfaces web.",
  keywords: [
    "Kevin Pardo",
    "Frontend Developer",
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
      "Conoce a Kevin Pardo, Frontend Developer especializado en React, JavaScript y desarrollo de interfaces web.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <header className="max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Sobre mí
          </span>
        </div>

        <Heading level={1}>Acerca de mí</Heading>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
          Soy Frontend Developer y trabajo principalmente con React y Next.js. Me enfoco en construir interfaces claras,
          accesibles y fáciles de mantener, cuidando tanto la experiencia de
          usuario como la calidad del código.
        </p>
      </header>

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <EducationTimeline />
      </div>
    </section>
  );
}