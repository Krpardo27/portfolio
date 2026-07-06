"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "../types/project.types";

interface ProjectsCardsProps {
  projects: Project[];
}

const categoryLabels: Record<string, string> = {
  landings: "Landing",
  fullstack: "Fullstack",
};

function getProjectType(project: Project) {
  const category = project.categories?.find((item) => item !== "all");

  return category ? categoryLabels[category] ?? category : "Proyecto";
}

export default function ProjectsCards({ projects }: ProjectsCardsProps) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        const visibleTags = project.tags?.slice(0, 4) ?? [];

        return (
          <motion.a
            key={project.slug}
            href={project.demo ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.34,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3 }}
            className="group block h-full"
          >
            <article
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/20 backdrop-blur transition duration-300 group-hover:border-blue-400/35 group-hover:bg-white/[0.055] group-hover:shadow-blue-950/25"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-blue-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={index === 0}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1220] via-[#0b1220]/25 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {getProjectType(project)}
                </div>
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-blue-500">
                  <FiArrowUpRight size={18} />
                </div>
              </div>

              <div className="flex grow flex-col gap-4 p-5">
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-white transition group-hover:text-blue-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 overflow-hidden text-sm leading-6 text-slate-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/15 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200/85 backdrop-blur transition group-hover:border-blue-300/30 group-hover:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-slate-300">Ver proyecto</span>
                </div>
              </div>
              </article>
            </motion.a>
          );
        })}
      </div>
  );
}
