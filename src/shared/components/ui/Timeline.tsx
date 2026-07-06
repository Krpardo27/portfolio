"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiMapPin } from "react-icons/fi";

type TimelineItem = {
  id: string;
  title?: string;
  subtitle?: string;
  period: string;
  location?: string;
  description: string[];
  tech?: string[];
  logo?: string;
};

type Props = {
  data: TimelineItem[];
};

export function Timeline({ data }: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative pl-8 md:pl-0">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-120px" }}
            className="absolute left-3 top-0 w-[2px] origin-top rounded-full bg-linear-to-b from-blue-400 via-blue-500/40 to-white/5 md:left-1/2 md:-translate-x-1/2"
          />

          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-10 flex flex-col md:mb-14 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute left-3 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0b1220] bg-blue-400 shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_24px_rgba(59,130,246,0.5)] md:left-1/2"
              />

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`
                  group relative flex-1 overflow-hidden rounded-2xl border border-white/10
                  bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur
                  transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06]
                  md:max-w-[calc(50%-4rem)] md:p-6
                  ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}
                `}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-300/50 to-transparent" />

                <div className="mb-5 flex items-start gap-4">
                  {item.logo && (
                    <motion.div
                      whileHover={{ rotate: -4, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-2 shadow-lg shadow-black/20"
                    >
                      <Image
                        src={item.logo}
                        alt={item.title ?? item.subtitle ?? item.id}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </motion.div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 md:hidden">
                      <FiCalendar size={12} />
                      <span>{item.period}</span>
                    </div>

                    {item.title && (
                      <h2 className="text-lg font-semibold leading-tight text-white md:text-xl">
                        {item.title}
                      </h2>
                    )}

                    {item.subtitle && (
                      <p className="mt-1 text-sm font-medium text-blue-300">
                        {item.subtitle}
                      </p>
                    )}

                    {item.location && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                        <FiMapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="mb-5 space-y-3 text-sm text-slate-300"
                >
                  {item.description.map((desc, i) => (
                    <motion.li
                      key={`${item.id}-${i}`}
                      variants={{
                        hidden: { opacity: 0, x: index % 2 === 0 ? 16 : -16 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="flex gap-3 leading-6"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {item.tech && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2, scale: 1.04 }}
                        transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="
                          rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1
                          text-xs font-medium text-blue-300
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>

              <div className="hidden w-32 items-center justify-center md:flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.12 + 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-center text-slate-300 shadow-lg shadow-black/20 backdrop-blur"
                >
                  <FiCalendar className="mx-auto mb-2 text-blue-400" />
                  <span className="text-sm font-medium">{item.period}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
