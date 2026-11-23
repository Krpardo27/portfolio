import type { ReactNode } from "react";
import clsx from "clsx";
import Heading, { type HeadingLevel } from "./Heading";

type Props = {
  title: ReactNode;
  level: HeadingLevel;
  eyebrow?: string;
  description?: ReactNode;
  titleId?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({ title, level, eyebrow, description, titleId, className, children }: Props) {
  return (
    <header className={clsx("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          <span aria-hidden="true" className="h-px w-7 bg-blue-400" />{eyebrow}
        </p>
      )}
      <Heading level={level} id={titleId}>{title}</Heading>
      {description && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>}
      {children}
    </header>
  );
}