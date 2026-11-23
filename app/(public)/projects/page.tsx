import Projects from "@/features/projects/components/Projects";
import { getProjects } from "@/features/projects/data/projects";
import { AnimatedSectionHeader } from "@/shared/components/ui/AnimatedSectionHeader";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <AnimatedSectionHeader level={1} eyebrow="Portfolio" title="Proyectos" description="Una selección de proyectos en los que he trabajado, desde interfaces web hasta aplicaciones y herramientas digitales." />

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <Projects projects={projects} />
      </div>
    </section>
  );
}