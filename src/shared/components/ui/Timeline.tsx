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
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />

          {data.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="relative mb-14 pl-8 last:mb-0 md:mb-20 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
              >
                {/* Timeline point */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-blue-500 md:left-1/2 md:-translate-x-1/2"
                />

                {/* Content */}
                <div
                  className={`md:col-span-1 ${
                    isEven ? "md:col-start-1 md:text-right" : "md:col-start-2"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-5 ${
                      isEven ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    {/* Header */}
                    <div
                      className={`flex gap-4 ${
                        isEven ? "md:flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {item.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white p-2">
                          <Image
                            src={item.logo}
                            alt={item.title ?? item.subtitle ?? item.id}
                            width={48}
                            height={48}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}

                      <div>
                        {item.title && (
                          <h2 className="text-lg font-medium tracking-tight text-white sm:text-xl">
                            {item.title}
                          </h2>
                        )}

                        {item.subtitle && (
                          <p className="mt-1 text-sm text-blue-400">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div
                      className={`flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FiCalendar size={13} className="text-slate-600" />
                        <span>{item.period}</span>
                      </div>

                      {item.location && (
                        <div className="flex items-center gap-2">
                          <FiMapPin size={13} className="text-slate-600" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <ul
                      className={`max-w-xl space-y-3 text-sm leading-6 text-slate-400 ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {item.description.map((desc, i) => (
                        <li key={`${item.id}-${i}`} className="relative">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.tech && item.tech.length > 0 && (
                      <div
                        className={`flex flex-wrap gap-x-4 gap-y-2 ${
                          isEven ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-slate-600 transition-colors duration-200 hover:text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date on opposite side */}
                <div
                  className={`hidden md:flex md:items-start ${
                    isEven
                      ? "md:col-start-2 md:justify-start"
                      : "md:col-start-1 md:row-start-1 md:justify-end"
                  }`}
                >
                  <span className="pt-1 font-mono text-xs text-slate-600">
                    {item.period}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
