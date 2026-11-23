"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/shared/components/ui/Heading";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { stackByCategory, type StackItem } from "../data/stack";

function StackIcon({ icon, iconSrc, name }: StackItem) {
  if (iconSrc) {
    return (
      <Image
        src={iconSrc}
        alt={`Logotipo de ${name}`}
        title={name}
        aria-hidden="true"
        width={18}
        height={18}
        className="h-[18px] w-[18px] object-contain"
      />
    );
  }

  const Icon = icon;

  if (!Icon) {
    return (
      <span
        aria-hidden="true"
        className="flex h-[18px] w-[18px] items-center justify-center font-mono text-xs text-slate-500"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return <Icon aria-hidden="true" className="h-[18px] w-[18px]" />;
}

export function TechStack() {
  return (
    <section className="section-container lg:py-20 py-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <SectionHeader className="mb-12" level={2} eyebrow="Stack" title="Tecnologías con las que trabajo." description="Herramientas que utilizo habitualmente para desarrollar interfaces, aplicaciones web, APIs y sistemas." />

        {/* Categories */}
        <div className="border-t border-white/10">
          {stackByCategory.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: categoryIndex * 0.05,
              }}
              className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-[220px_1fr] md:gap-12 md:py-10"
            >
              {/* Category */}
              <div>
                <Heading level={3} size={4}>
                  {category.title}
                </Heading>

                <span className="mt-1 block font-mono text-xs text-slate-600">
                  {String(category.items.length).padStart(2, "0")} tecnologías
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-x-7 gap-y-5">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-2.5 text-sm text-slate-500 transition-colors duration-200 hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors duration-200 group-hover:text-blue-400">
                      <StackIcon
                        name={item.name}
                        icon={item.icon}
                        iconSrc={item.iconSrc}
                      />
                    </span>

                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
