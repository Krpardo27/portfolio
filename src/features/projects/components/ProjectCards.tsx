"use client";

import Image from "next/image";
import { Project } from "../types/project.types";

interface ProjectsCardsProps {
  projects: Project[];
}

export default function ProjectsCards({ projects }: ProjectsCardsProps) {
  return (
    <div className="w-full max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-4 my-4">
      {projects.map((project) => (
        <a
          key={project.slug}
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article
            className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
          >
            {/* IMAGE */}
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-4 grow">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 backdrop-blur transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-[1.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA INTEGRADO */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm text-gray-400">Ver proyecto</span>

                <span className="text-blue-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition">
                  ↗
                </span>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
