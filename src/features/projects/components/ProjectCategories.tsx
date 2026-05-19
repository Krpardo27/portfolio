"use client";

import { projectCategories } from "../data/categories";

export type ProjectCategory =
  | "all"
  // | "restaurants"
  | "landings"
  // | "pages";

export default function ProjectCategories({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {projectCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.slug)}
          className={`
            px-4 py-2 rounded-full text-sm whitespace-nowrap
            transition
            ${active === cat.slug
              ? "bg-white text-black"
              : "bg-white/5 text-white/70 hover:bg-white/10"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}