import Projects from "@/features/projects/components/Projects";
import { getProjects } from "@/features/projects/data/projects";
import Heading from "@/shared/components/ui/Heading";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <header className="max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Portfolio
          </span>
        </div>

        <Heading level={1}>Proyectos</Heading>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
          Una selección de proyectos en los que he trabajado, desde interfaces
          web hasta aplicaciones y herramientas digitales.
        </p>
      </header>

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <Projects projects={projects} />
      </div>
    </section>
  );
}