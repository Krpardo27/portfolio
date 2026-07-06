import { getProjectBySlug, getProjects } from "@/features/projects/data/projects";
import ProjectGallery from "@/features/projects/components/ProjectGallery";
import ProjectHighlights from "@/features/projects/components/ProjectHighlights";
import ProjectTechStack from "@/features/projects/components/ProjectTechStack";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <article className="section-container">
      <Link
        href="/projects"
        className="mb-8 inline-flex text-sm font-medium text-blue-300 transition hover:text-blue-200"
      >
        Volver a proyectos
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25">
          <div className="relative aspect-16/10 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1220]/70 via-transparent to-transparent" />
          </div>
        </div>

        <header className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Proyecto fullstack
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
          </div>

          <p className="text-base leading-8 text-slate-300 md:text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-400/15 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
            >
              Ver demo
            </a>
          ) : null}
        </header>
      </div>

      {project.gallery?.length ? <ProjectGallery images={project.gallery} /> : null}

      <ProjectHighlights
        features={project.features}
        architecture={project.architecture}
      />

      <ProjectTechStack techStack={project.techStack} />
    </article>
  );
}
