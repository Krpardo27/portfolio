import { getProjects } from "../../../src/features/projects/data/projects";
import Projects from "@/src/features/projects/components/Projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="py-24">
      <header className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Proyectos <span className="text-blue-500">Destacados</span>
        </h2>
        <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
          Soluciones digitales construidas con enfoque en escalabilidad y
          experiencia de usuario.
        </p>
      </header>
      <div className="max-w-6xl mx-auto px-4">
        <Projects projects={projects} />
      </div>
    </section>
  );
}
