"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";
import { SectionHeader } from "./SectionHeader";

export function AnimatedSectionHeader(props: ComponentProps<typeof SectionHeader>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0, 1], y: [16, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SectionHeader {...props} />
    </motion.div>
  );
}