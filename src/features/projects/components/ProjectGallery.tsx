"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ProjectGalleryImage } from "../types/project.types";

type Props = {
  images: ProjectGalleryImage[];
};

function toFakeUrl(alt: string) {
  const slug = alt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${slug || "app"}.dev`;
}

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex h-9 shrink-0 items-center gap-3 rounded-t-2xl border-b border-white/10 bg-slate-900/80 px-4">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="flex-1 truncate rounded-md bg-slate-950/60 px-3 py-1 text-center font-mono text-[11px] text-slate-500">
        {label}
      </div>
    </div>
  );
}

export default function ProjectGallery({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const activeImage = images[activeIndex];

  function handleLightboxView(index: number) {
    setLightboxIndex(index);
    setActiveIndex(index);
  }

  return (
    <section className="mt-14">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Vista del producto
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Galería</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-right">
          Capturas reales del flujo y pantallas principales del proyecto.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <button
          type="button"
          onClick={() => setLightboxIndex(activeIndex)}
          className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-left shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-blue-300/35"
        >
          <BrowserChrome label={toFakeUrl(activeImage.alt)} />
          <div className="relative aspect-16/10">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1220]/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
              Ampliar
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
            <span className="text-sm font-medium text-white">{activeImage.alt}</span>
            <span className="shrink-0 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[11px] font-medium text-slate-300">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </button>

        <aside className="overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-xl shadow-black/15 lg:w-75 lg:shrink-0">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-xs font-semibold text-white">Capturas</p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Selecciona una vista
              </p>
            </div>
            <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-100">
              {images.length} imgs
            </span>
          </div>

          <div className="project-gallery-scroll flex gap-3 overflow-x-auto p-3 lg:max-h-130 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto">
            {images.map((image, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group relative w-44 shrink-0 overflow-hidden rounded-xl border bg-slate-950 text-left transition lg:w-full ${
                    isActive
                      ? "border-blue-300/70 shadow-lg shadow-blue-950/25"
                      : "border-white/10 hover:border-blue-300/35"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 z-10 h-full w-1 transition ${
                      isActive ? "bg-blue-300" : "bg-transparent"
                    }`}
                  />

                  <div className="flex h-5 items-center gap-1 border-b border-white/10 bg-slate-900/80 px-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="relative aspect-16/10">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="176px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    {!isActive && (
                      <div className="absolute inset-0 bg-[#0b1220]/40 transition group-hover:bg-[#0b1220]/10" />
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 py-2">
                    <span className="truncate text-[11px] font-medium text-slate-300">
                      {image.alt}
                    </span>
                    <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>
      </div>

      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
        }))}
        plugins={[Thumbnails, Zoom]}
        carousel={{ finite: images.length <= 1 }}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index }) => handleLightboxView(index) }}
      />
    </section>
  );
}