// ProjectTechStack.tsx
import { ProjectTechStack as ProjectTechStackType } from "../types/project.types";

type Props = {
  techStack?: ProjectTechStackType;
};

const techStackLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de datos",
  auth: "Autenticación",
  testing: "Testing",
  services: "Servicios",
};

// Orden explícito para que la "profundidad" tenga sentido real,
// en vez de depender del orden en que vengan las keys del objeto.
const LAYER_ORDER = [
  "frontend",
  "auth",
  "backend",
  "database",
  "testing",
  "services",
];

export default function ProjectTechStack({ techStack }: Props) {
  const entries = Object.entries(techStack ?? {})
    .filter((entry): entry is [string, string[]] => Boolean(entry[1]?.length))
    .sort(
      ([a], [b]) =>
        LAYER_ORDER.indexOf(a) - LAYER_ORDER.indexOf(b),
    );

  if (!entries.length) return null;

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/15">
      <div className="border-b border-white/10 p-6 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Tecnologías usadas
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Stack técnico
          </h2>
        </div>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:mt-0 sm:text-right">
          Capas del proyecto ordenadas de arriba hacia abajo: desde la interfaz
          hasta la base de datos.
        </p>
      </div>

      <div className="space-y-3 p-6">
        {entries.map(([group, items], index) => {
          // Cada capa se indenta un poco más que la anterior,
          // sugiriendo profundidad (de UI a infraestructura).
          const indent = index * 16;

          return (
            <div
              key={group}
              className="relative rounded-xl border border-white/10 bg-slate-950/50 p-4 shadow-inner shadow-white/5 transition hover:border-blue-300/25"
              style={{ marginLeft: `${indent}px` }}
            >
              {index > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-3 left-4 h-3 w-px bg-white/15"
                />
              )}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-300/20 bg-blue-500/10 text-[10px] font-semibold text-blue-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="whitespace-nowrap text-sm font-semibold text-white">
                    {techStackLabels[group] ?? group}
                  </h3>
                </div>

                <div className="flex flex-1 flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}