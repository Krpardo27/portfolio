import { EducationTimeline } from "@/features/about/components/EducationTimeline";
import Heading from "@/shared/components/ui/Heading";

export default function AboutPage() {
  return (
    <section className="section-container py-24 w-full max-w-7xl flex flex-col items-center">
      <header className="text-center mb-16 px-4">
        <Heading level={1}>
          Acerca <span className="text-blue-500">de mi</span>
        </Heading>
        <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
          Frontend Developer enfocado en React y JavaScript, con experiencia
          construyendo interfaces modernas, accesibles y orientadas a
          mantenibilidad. Mi foco está en código limpio y experiencias digitales
          bien pensadas.
        </p>
      </header>
      <EducationTimeline />
    </section>
  );
}
