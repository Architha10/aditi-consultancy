import type { ReactNode } from "react";

/* ─── PALETTE
   cream:  #FEFAF7  |  teal: #154D57
   taupe:  #B7A08B  |  white: #FFFFFF  |  black: #000000
──────────────────────────────────────────────────────── */

export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] font-medium ${center ? "justify-center" : ""}`}
      style={{ color: "#154D57" }}
    >
      <span className="h-px w-8" style={{ background: "#154D57" }} />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center mb-5" : "mb-5"}>
          <Eyebrow center={align === "center"}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className="leading-[1.05]"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
          color: "#000000",
        }}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed" style={{ color: "#6b6057" }}>
          {intro}
        </p>
      )}
    </div>
  );
}