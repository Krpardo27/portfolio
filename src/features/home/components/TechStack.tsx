"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/shared/components/ui/Heading";
import { stackByCategory, type StackItem } from "../data/stack";

function StackIcon({ icon, iconSrc, name }: StackItem) {
  if (iconSrc) {
    return (
      <Image
        src={iconSrc}
        alt=""
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
        <header className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <h2 className="font-bold uppercase tracking-[0.2em]">
              Stack
            </h2>
          </div>

          <Heading level={2}>Tecnologías con las que trabajo.</Heading>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Herramientas que utilizo habitualmente para desarrollar interfaces,
            aplicaciones web, APIs y sistemas.
          </p>
        </header>

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
                <h3 className="text-sm font-medium text-white">
                  {category.title}
                </h3>

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
