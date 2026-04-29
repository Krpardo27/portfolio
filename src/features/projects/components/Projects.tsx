"use client";

import { useState, useMemo } from "react";
import ProjectCategories from "./ProjectCategories";
import ProjectsCards from "./ProjectCards";
import { Project } from "../types/project.types";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter(p => 
      p.categories?.includes(activeCategory)
    );
  }, [projects, activeCategory]);

  return (
    <>
      <ProjectCategories
        active={activeCategory}
        onChange={setActiveCategory}
      />
      
      <ProjectsCards projects={filtered} />
    </>
  );
}