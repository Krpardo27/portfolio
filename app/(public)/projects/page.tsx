import Projects from "@/features/projects/components/Projects";
import { getProjects } from "@/features/projects/data/projects";
import Heading from "@/shared/components/ui/Heading";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="py-24">
      <header className="text-center mb-16 px-4">
        <Heading level={1}>
          Proyectos <span className="text-blue-500">Destacados</span>
        </Heading>
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
