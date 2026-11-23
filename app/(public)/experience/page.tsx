import { ExperienceTimeline } from "@/features/experience/components/ExperienceTimeline";
import { AnimatedSectionHeader } from "@/shared/components/ui/AnimatedSectionHeader";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <AnimatedSectionHeader level={1} eyebrow="Trayectoria" title="Experiencia" description="Mi trayectoria profesional en desarrollo web, trabajando con diferentes tecnologías y proyectos digitales." />

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <ExperienceTimeline />
      </div>
    </section>
  );
}