// ProjectHighlights.tsx
type Props = {
  features?: string[];
  architecture?: string[];
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-300"
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeaturesList({ items }: { items: string[] }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
      <h2 className="text-xl font-semibold text-white">Funcionalidades</h2>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ArchitectureFlow({ items }: { items: string[] }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
      <h2 className="text-xl font-semibold text-white">Arquitectura</h2>
      <ol className="relative mt-6 space-y-6 pl-2">
        <div
          aria-hidden
          className="absolute left-[15px] top-1 bottom-1 w-px bg-linear-to-b from-blue-300/50 via-white/10 to-transparent"
        />
        {items.map((item, index) => (
          <li key={item} className="relative flex gap-4 pl-0">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-slate-950 text-xs font-semibold text-blue-100">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="pt-1.5 text-sm leading-6 text-slate-300">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function ProjectHighlights({ features, architecture }: Props) {
  if (!features?.length && !architecture?.length) return null;

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      {features?.length ? <FeaturesList items={features} /> : null}
      {architecture?.length ? <ArchitectureFlow items={architecture} /> : null}
    </div>
  );
}