import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type Props = ComponentPropsWithoutRef<"h2"> & { level: HeadingLevel; size?: HeadingLevel };

const sizes: Record<HeadingLevel, string> = {
    1: "text-4xl md:text-5xl",
    2: "text-2xl md:text-3xl",
    3: "text-lg md:text-xl",
    4: "text-base",
    5: "text-sm",
    6: "text-xs",
};

export default function Heading({ children, level, size = level, className, ...props }: Props) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      {...props}
      className={clsx("font-display font-semibold tracking-tight text-white", sizes[size], className)}
    >
      {children}
    </Tag>
  );
}
