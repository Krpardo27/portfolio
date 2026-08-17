"use client";

import { FiFilter } from "react-icons/fi";
import { projectCategories } from "../data/categories";

export type ProjectCategory =
  | "all"
  // | "restaurants"
  | "landings"
  | "fullstack";

export default function ProjectCategories({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
        <FiFilter className="text-blue-300" />
        <span>Filtrar proyectos</span>
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-inner shadow-white/5">
        {projectCategories.map((cat) => {
          const isActive = active === cat.slug;

          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.slug)}
              className={`whitespace-nowrap cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-500/20 text-white shadow-sm shadow-blue-950/30"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}