"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiMapPin } from "react-icons/fi";

type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string[];
  tech?: string[];
  logo?: string;
};

type Props = {
  title: string;
  description: string;
  data: TimelineItem[];
};

export function Timeline({ title, description, data }: Props) {
  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 mb-8 rounded-full" />

          <p className="text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* 🔥 Línea animada */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2 origin-top"
          />

          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15, // 🔥 stagger
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >

              {/* CARD */}
              <div
                className={`
                  group p-6 rounded-2xl 
                  border border-white/10 
                  bg-white/5 backdrop-blur
                  transition-all duration-300
                  hover:border-blue-400/30
                  hover:-translate-y-1
                  flex-1 mx-4
                  ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                `}
              >
                {/* HEADER */}
                <div className="flex gap-4 mb-4">
                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt={item.subtitle}
                      width={48}
                      height={48}
                      className="
                        w-12 h-12 object-contain 
                        rounded-lg bg-white/5 p-1
                        transition
                      "
                    />
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {item.subtitle}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <FiMapPin size={12} />
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <ul className="space-y-2 text-sm text-slate-300 mb-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                {item.tech && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          text-xs px-2.5 py-1 rounded-md
                          bg-blue-500/10 text-blue-400
                          border border-blue-500/20
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* FECHA */}
              <div className="hidden md:flex items-center justify-center w-32">
                <div className="text-center text-slate-400">
                  <FiCalendar className="mx-auto mb-1 text-blue-400" />
                  <span className="text-sm">{item.period}</span>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden flex items-center gap-2 text-slate-400 mb-3 ml-4">
                <FiCalendar className="text-blue-400" />
                <span className="text-sm">{item.period}</span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}