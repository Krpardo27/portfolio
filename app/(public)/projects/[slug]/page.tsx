import { getProjectBySlug, getProjects } from "@/features/projects/data/projects";
import ProjectGallery from "@/features/projects/components/ProjectGallery";
import ProjectHighlights from "@/features/projects/components/ProjectHighlights";
import ProjectTechStack from "@/features/projects/components/ProjectTechStack";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();

  const { title, description, image } = project;
  const url = `/projects/${project.slug}`;
  const images = [{ url: image, alt: title }];
  return {
    title, description, alternates: { canonical: url },
    openGraph: { type: "website", locale: "es_CL", siteName: "Portfolio Kevin Pardo", title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

const projectTypeLabels: Record<string, string> = {
  landings: "Proyecto landing",
  frontend: "Proyecto frontend",
  fullstack: "Proyecto fullstack",
};

function getProjectTypeLabel(categories?: string[]) {
  const category = categories?.find((item) => item !== "all");

  return category ? projectTypeLabels[category] ?? "Proyecto" : "Proyecto";
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
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

        <div className="flex flex-col gap-6">
          <SectionHeader level={1} eyebrow={getProjectTypeLabel(project.categories)} title={project.title} description={project.description} />

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

          <div className="flex flex-wrap items-center gap-5">
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
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-300 hover:underline">Ver código en GitHub</a>
          )}
          </div>
          {project.demoNote && <p className="max-w-prose text-sm leading-6 text-slate-300">{project.demoNote}</p>}
        </div>
      </div>

      {project.caseStudy && (
        <section aria-labelledby="case-title" className="mt-14 border-y border-white/10 py-8">
          <SectionHeader level={2} titleId="case-title" eyebrow="Caso de estudio" title={project.caseStudy.title} className="[&_h2]:scroll-mt-24" />
          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            {[["El problema", project.caseStudy.problem], ["La decisión", project.caseStudy.decision], ["Cómo comprobarlo", project.caseStudy.check]].map(([label, text]) => (
              <div key={label}>
                <dt className="font-semibold text-white">{label}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-300">{text}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.gallery?.length ? <ProjectGallery images={project.gallery} /> : null}

      <ProjectHighlights
        features={project.features}
        architecture={project.architecture}
      />

      <ProjectTechStack techStack={project.techStack} />
    </article>
  );
}
