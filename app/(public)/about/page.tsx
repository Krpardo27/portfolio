import { EducationTimeline } from "@/features/about/components/EducationTimeline";
import Heading from "@/shared/components/ui/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de mí",
  description:
    "Conoce a Kevin Pardo, Frontend Developer enfocado en React, JavaScript, accesibilidad, rendimiento web y desarrollo de interfaces digitales.",
  keywords: [
    "Kevin Pardo",
    "Frontend Developer React",
    "desarrollador frontend Chile",
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
      "Conoce a Kevin Pardo, Frontend Developer enfocado en React, JavaScript, accesibilidad, rendimiento web y desarrollo de interfaces digitales.",
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
          Soy Desarrollador Full Stack con experiencia principalmente en React,
          Next.js, JavaScript y TypeScript. Me interesa construir aplicaciones
          web modernas, accesibles y fáciles de mantener, combinando una buena
          experiencia de usuario con código limpio, eficiente y escalable. Tengo
          experiencia integrando APIs REST, trabajando con bases de datos y
          desplegando aplicaciones en entornos cloud. Actualmente continúo
          fortaleciendo mi formación en Ingeniería en Computación e
          Informática.
        </p>
      </header>

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <EducationTimeline />
      </div>
    </section>
  );
}
