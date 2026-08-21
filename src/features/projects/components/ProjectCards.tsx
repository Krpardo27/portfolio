"use client";

import type { Project } from "../types/project.types";
import ProjectCard from "./ProjectCard";

interface ProjectsCardsProps {
  projects: Project[];
}

export default function ProjectsCards({ projects }: ProjectsCardsProps) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
