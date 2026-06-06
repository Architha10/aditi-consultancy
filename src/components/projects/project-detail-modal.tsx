import { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  Layers,
  Calendar,
  ArrowUpRight,
  ZoomIn,
  ImageOff,
} from "lucide-react";
import type { Project } from "#/types/project";
import { statusStyle, type Status } from "#/assets/data/project-data";
 
export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [visible, setVisible] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const open = project !== null;
  const images = project?.gallery ?? [];
  const hasImages = images.length > 0;

  /* Animate in */
  useEffect(() => {
    if (open) {
      setActive(0);
      setZoomed(false);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
    } else {
      setVisible(false);
    }
  }, [open, project?.title]);

  /* Scroll active thumb into view */
  useEffect(() => {
    if (!thumbsRef.current) return;
    const thumb = thumbsRef.current.children[active] as HTMLElement | null;
    thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false);
        else onClose();
      }
      if (e.key === "ArrowLeft"  && hasImages) prev();
      if (e.key === "ArrowRight" && hasImages) next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, zoomed, prev, next, hasImages, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !project) return null;

  const ss = statusStyle[project.status as Status] ?? statusStyle.Ongoing;

  /* Spec rows — only render if value exists */
  const specs: { icon: React.ReactNode; label: string; value: string | undefined }[] = [
    { icon: <Building2 size={11} />, label: "Sector",    value: project.cat },
    { icon: <Layers size={11} />,    label: "Structure", value: project.note },
    { icon: <MapPin size={11} />,    label: "Location",  value: project.loc },
    {
      icon: <Calendar size={11} />,
      label: "Status",
      value: project.status + (project.year ? ` · ${project.year}` : ""),
    },
  ].filter((s) => s.value);

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
        style={{
          background: "rgba(8,14,16,0.90)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.28s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* MODAL SHELL */}
        <div
          className="relative w-full md:max-w-6xl bg-white rounded-t-[2rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row"
          style={{
            maxHeight: "93vh",
            transform: visible ? "translateY(0)" : "translateY(52px)",
            transition: "transform 0.4s cubic-bezier(.22,.68,0,1.2)",
            boxShadow: "0 40px 100px rgba(10,18,20,0.40)",
          }}
        >
          {/* Mobile drag handle */}
          <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-300" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full grid place-items-center transition hover:scale-110"
            style={{ background: "rgba(21,77,87,0.10)", color: "#154D57" }}
          >
            <X size={18} />
          </button>

          {/* ══ LEFT — GALLERY ══ */}
          <div
            className="relative flex flex-col bg-[#0c1a1d] overflow-hidden md:w-[56%] shrink-0"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden shrink-0"
              style={{ height: "clamp(240px, 42vw, 520px)" }}
            >
              {hasImages ? (
                <>
                  <img
                    key={active}
                    src={images[active].src}
                    alt={images[active].caption ?? project.title}
                    className="w-full h-full object-cover"
                    style={{ animation: "imgFadeIn 0.36s ease both" }}
                  />

                  {/* Gradient over image */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,18,20,0.75) 0%, transparent 50%)",
                    }}
                  />

                  {/* Caption */}
                  {images[active].caption && (
                    <div
                      className="absolute bottom-0 left-0 right-0 px-5 py-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,18,20,0.82) 0%, transparent 100%)",
                      }}
                    >
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(254,250,247,0.55)" }}
                      >
                        {images[active].caption}
                      </p>
                    </div>
                  )}

                  {/* Counter */}
                  <div
                    className="absolute top-4 left-4 text-[9px] font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(10,18,20,0.60)",
                      color: "rgba(254,250,247,0.55)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </div>

                  {/* Zoom */}
                  <button
                    onClick={() => setZoomed(true)}
                    className="absolute top-4 right-16 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest transition hover:opacity-80"
                    style={{
                      background: "rgba(254,250,247,0.12)",
                      backdropFilter: "blur(6px)",
                      color: "#FEFAF7",
                    }}
                  >
                    <ZoomIn size={10} /> View full
                  </button>

                  {/* Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full grid place-items-center transition hover:scale-105"
                        style={{
                          background: "rgba(254,250,247,0.16)",
                          backdropFilter: "blur(6px)",
                          color: "#FEFAF7",
                        }}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full grid place-items-center transition hover:scale-105"
                        style={{
                          background: "rgba(254,250,247,0.16)",
                          backdropFilter: "blur(6px)",
                          color: "#FEFAF7",
                        }}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ color: "rgba(254,250,247,0.22)" }}
                >
                  <ImageOff size={38} />
                  <p className="text-xs tracking-widest uppercase">
                    No renders available
                  </p>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div
                ref={thumbsRef}
                className="flex gap-2 p-3 overflow-x-auto shrink-0"
                style={{ background: "#0a1416", scrollbarWidth: "none" }}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="shrink-0 rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      width: 70,
                      height: 48,
                      outline:
                        i === active
                          ? "2px solid #B7A08B"
                          : "2px solid transparent",
                      opacity: i === active ? 1 : 0.45,
                      transform: i === active ? "scale(1.06)" : "scale(1)",
                    }}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ══ RIGHT — INFO ══ */}
          <div
            className="flex flex-col overflow-y-auto flex-1"
            style={{
              background: "#FEFAF7",
              scrollbarWidth: "none",
              minWidth: "min(100%, 310px)",
            }}
          >
            <div className="flex flex-col gap-5 p-7 md:p-9">
              {/* Category eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-7" style={{ background: "#154D57" }} />
                <span
                  className="text-[8.5px] uppercase tracking-[0.38em]"
                  style={{ color: "#B7A08B" }}
                >
                  {project.cat}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)",
                    color: "#000",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h2>
                <div className="flex items-center gap-1.5 mt-2">
                  <MapPin size={11} style={{ color: "#B7A08B" }} />
                  <span className="text-sm" style={{ color: "#6b6057" }}>
                    {project.loc}
                  </span>
                </div>
              </div>

              {/* Status + year */}
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9.5px] uppercase tracking-[0.22em] font-medium"
                  style={{ background: ss.bg, color: ss.color }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: ss.dot }}
                  />
                  {project.status}
                </span>
                {project.year && (
                  <span
                    className="text-[11px] font-mono"
                    style={{ color: "#B7A08B" }}
                  >
                    {project.year}
                  </span>
                )}
              </div>

              <div className="h-px" style={{ background: "#e4dbd2" }} />

              {/* Specs */}
              {specs.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5">
                  {specs.map(({ icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl p-3.5"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #e4dbd2",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span style={{ color: "#154D57" }}>{icon}</span>
                        <span
                          className="text-[8px] uppercase tracking-[0.26em]"
                          style={{ color: "#B7A08B" }}
                        >
                          {label}
                        </span>
                      </div>
                      <p
                        className="text-[11.5px] font-medium leading-[1.45]"
                        style={{ color: "#000" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {project.description && (
                <div>
                  <h3
                    className="text-[8.5px] uppercase tracking-[0.3em] mb-2.5"
                    style={{ color: "#154D57" }}
                  >
                    About this project
                  </h3>
                  <p
                    className="text-[13px] leading-[1.8]"
                    style={{ color: "#6b6057" }}
                  >
                    {project.description}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(21,77,87,0.045)",
                    border: "1px solid rgba(21,77,87,0.10)",
                  }}
                >
                  <h3
                    className="text-[8.5px] uppercase tracking-[0.3em] mb-3.5"
                    style={{ color: "#154D57" }}
                  >
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-[12.5px] leading-[1.65]"
                        style={{ color: "#5a4f48" }}
                      >
                        <span
                          className="mt-1.75 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#B7A08B" }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <a
                href="/contact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:opacity-90 mt-2"
                style={{ background: "#154D57", color: "#FEFAF7" }}
              >
                Enquire about this project <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ZOOM */}
      {zoomed && hasImages && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.97)" }}
          onClick={() => setZoomed(false)}
        >
          <img
            src={images[active].src}
            alt={images[active].caption ?? project.title}
            className="max-w-full max-h-full object-contain"
            style={{ padding: 20 }}
          />
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full grid place-items-center"
            style={{
              background: "rgba(254,250,247,0.12)",
              color: "#FEFAF7",
            }}
          >
            <X size={18} />
          </button>
          {images[active].caption && (
            <p
              className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(254,250,247,0.35)" }}
            >
              {images[active].caption}
            </p>
          )}
        </div>
      )}

      <style>{`
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(1.025); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
