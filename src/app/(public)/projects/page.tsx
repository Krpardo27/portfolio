import Link from "next/link";
import { getProjects } from "../../features/projects/data";
import Image from "next/image";

export default async function ProjectsPage() {
  const projectsData = await getProjects();
  return (
    <section className="section-container">
      {/* HEADER */}
     <div className="flex justify-center items-center w-full">
       <header className="text-center mb-20 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Proyectos
        </h2>

        <div className="w-20 h-1 bg-slate-400 mx-auto mt-6 mb-8 rounded-full" />

        <p className="text-slate-400 leading-relaxed">
          Proyectos donde aplico arquitectura moderna, performance y UX.
        </p>
      </header>
     </div>

      {/* GRID */}
      <div className="w-full max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <article
              className="
                rounded-2xl overflow-hidden
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                transition-all duration-300
                hover:border-[var(--color-primary)]/40
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="text-sm text-[var(--color-muted)] line-clamp-2">
                  {project.description}
                </p>

                {/* TAGS */}
                {/* <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs px-2.5 py-1 rounded-md
                        bg-[var(--color-primary)]/10
                        text-[var(--color-primary)]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* CTA */}
                <div className="mt-3 text-sm text-[var(--color-accent)] group-hover:underline">
                  Ver proyecto →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
