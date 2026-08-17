import { ExperienceTimeline } from "@/features/experience/components/ExperienceTimeline";
import Heading from "@/shared/components/ui/Heading";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <header className="max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Trayectoria
          </span>
        </div>

        <Heading level={1}>Experiencia</Heading>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
          Mi trayectoria profesional en desarrollo web, trabajando con
          diferentes tecnologías y proyectos digitales.
        </p>
      </header>

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <ExperienceTimeline />
      </div>
    </section>
  );
}