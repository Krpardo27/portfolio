import { experienceData } from "../../../src/features/experience/data";
import { ExperienceTimeline } from "../../../src/features/experience/components/ExperienceTimeline";
import Heading from "@/src/shared/components/ui/Heading";
console.log(experienceData);

export default function ExperiencePage() {
  return (
    <section className="section-container w-full max-w-7xl flex flex-col items-center py-24">
      <header className="text-center mb-16 px-4">
        <Heading level={1}>
          Experiencia <span className="text-blue-500">Laboral</span>
        </Heading>
        <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
          Trayectoria profesional en desarrollo web y tecnologías relacionadas.
        </p>
      </header>
      <ExperienceTimeline />
    </section>
  );
}
