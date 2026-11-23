import Image from "next/image";
import Link from "next/link";
import Heading from "@/shared/components/ui/Heading";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { getProjects } from "@/features/projects/data/projects";
import { FeaturedReveal } from "./FeaturedReveal";

export async function FeaturedProjects() {
  const projects = (await getProjects()).filter(
    (project) => project.featuredSummary,
  );

  return (
    <section aria-labelledby="featured-title" className="mx-auto w-full max-w-6xl px-5 pt-8 pb-12 sm:px-8">
      <FeaturedReveal>
        <SectionHeader
          level={2}
          titleId="featured-title"
          title="Proyectos destacados"
          className="mb-7"
          description={
            <>
              En <Link href="/projects/veterinary-app#case-title" className="text-white underline decoration-slate-500 underline-offset-4 hover:decoration-blue-300">Gestión Veterinaria</Link>,
              conecté cada servicio con los veterinarios que lo ofrecen. En{" "}
              <Link href="/projects/home-estate#case-title" className="text-white underline decoration-slate-500 underline-offset-4 hover:decoration-blue-300">HomeEstate</Link>,
              hice que una búsqueda de vivienda se pueda guardar y compartir con un enlace.
            </>
          }
        />
      </FeaturedReveal>
      <div className="grid gap-9 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => (
          <FeaturedReveal key={project.slug} delay={(index + 1) * 0.06}>
          <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-white/10 bg-slate-950">
              <Image
                src={project.image}
                alt={project.gallery?.find(({ src }) => src === project.image)?.alt ?? `Vista de ${project.title}`}
                title={project.title}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1152px) 520px, (min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <Heading
              level={3}
              className="mt-4 flex justify-between gap-3 group-hover:text-blue-300"
            >
              {project.title}
              <span aria-hidden="true">↗</span>
            </Heading>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
              {project.featuredSummary}
            </p>
          </Link>
          </FeaturedReveal>
        ))}
      </div>
    </section>
  );
}
