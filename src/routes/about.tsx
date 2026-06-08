import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import venk from "@/assets/team/venkateshwara-rao.jpeg";
import vandana from "@/assets/team/vandana-rao.jpg";
import about from "@/assets/about-studio.jpg";
import blueprint from "@/assets/blueprint-bg.jpg";
import { ArrowUpRight, Award, BookOpen, Building2, Users, CheckCircle2 } from "lucide-react";
import { architects, builders, timeline } from "#/assets/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aditi Consultants" },
      { name: "description", content: "Aditi Consultants — founded 2001 by P. Venkateshwara Rao, licensed structural engineer with 26+ years of practice." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FEFAF7" }}>
      {/* Blueprint texture */}
      <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ opacity: 0.04, mixBlendMode: "multiply" }} />
      {/* Teal left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#154D57" }} />
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }} />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.38em] font-medium" style={{ color: "#154D57" }}>About the Practice</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1
              className="leading-[0.97] tracking-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(3rem,6.5vw,6rem)", color: "#000000" }}
            >
              A quarter
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>century</em> of
              <br />
              structural
              <br />
              conviction.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-3">
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6b6057" }}>
              Aditi Consultants is a structural and project engineering consultancy based in Hyderabad.
              Founded in 2001, we provide structural design and project coordination — honest work,
              delivered with the patience that real engineering demands.
            </p>
            <blockquote
              className="pl-5 border-l-2 text-lg italic"
              style={{ borderColor: "#B7A08B", fontFamily: "Georgia, serif", color: "#154D57" }}
            >
              "A building is only as honest as its skeleton."
            </blockquote>
          </div>
        </div>

        {/* Quick facts strip */}
        <div className="mt-16 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6" style={{ borderColor: "#e4dbd2" }}>
          {[
            { v: "26+", l: "Years of Practice" },
            { v: "1500+", l: "Architectural and structural projects" },
            { v: "90ft", l: "Max Span (Chruch at Chandrakal)" },
            { v: "5+", l: "Sectors Served" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2.8rem", color: "#154D57", lineHeight: 1 }}>{s.v}</div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.24em]" style={{ color: "#B7A08B" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STUDIO IMAGE ──────────────────────────────────────────────── */
function StudioImage() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-10">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "21/8" }}>
          <img src={about} alt="Aditi Consultants studio" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(21,77,87,0.55) 0%, transparent 50%)" }} />
          <div className="absolute left-10 bottom-10">
            <div className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "rgba(183,160,139,0.9)" }}>Est.</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "4rem", color: "#FEFAF7", lineHeight: 1 }}>2001</div>
            <div className="text-sm mt-1" style={{ color: "rgba(254,250,247,0.65)" }}>Hyderabad, Telangana</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOUNDERS ──────────────────────────────────────────────────── */
function Founders() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>The People</span>
        </div>
        <h2 className="mb-14 leading-[1.06]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}>
          The two partners behind <em className="not-italic" style={{ color: "#154D57" }}>every project</em>.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Venkateshwara Rao */}
          <div className="group rounded-3xl overflow-hidden border transition-all hover:shadow-2xl" style={{ background: "#FFFFFF", borderColor: "#e8e0d8" }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={venk}
                alt="P. Venkateshwara Rao"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: "center 15%" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(21,77,87,0.6) 0%, transparent 55%)" }} />
              <div className="absolute left-6 bottom-6">
                <div className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(183,160,139,0.9)" }}>Chief Consultant</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#FEFAF7" }}>P. Venkateshwara Rao</div>
              </div>
            </div>
            <div className="p-8">
              {/* Credentials grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: BookOpen, label: "M.E. Structures", sub: "BITS Pilani, 1996" },
                  { icon: Award, label: "GHMC Licensed", sub: "Lic. No. 166/Stru.Engr./TP10/MCH" },
                  { icon: Building2, label: "26 Years Experience", sub: "Structural Design & Site" },
                  { icon: Users, label: "IIT Madras & J.J. Associates", sub: "Early Career Associations" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#FEFAF7" }}>
                    <div className="w-8 h-8 rounded-lg grid place-items-center shrink-0 mt-0.5" style={{ background: "rgba(21,77,87,0.10)" }}>
                      <Icon size={14} style={{ color: "#154D57" }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#000" }}>{label}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#B7A08B" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6057" }}>
                As chief structural engineer, P. Venkateshwara Rao personally oversees every design — from
                RCC foundations to pre-engineered steel spans. His career has encompassed villas, multi-storied
                apartments, industries, theatres and temple structures across Hyderabad and beyond.
              </p>
            </div>
          </div>

          {/* Vandana Rao */}
          <div className="group rounded-3xl overflow-hidden border transition-all hover:shadow-2xl" style={{ background: "#FFFFFF", borderColor: "#e8e0d8" }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={vandana}
                alt="P. Vandana Rao"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(21,77,87,0.6) 0%, transparent 55%)" }} />
              <div className="absolute left-6 bottom-6">
                <div className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(183,160,139,0.9)" }}>Managing Partner</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#FEFAF7" }}>P. Vandana Rao</div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: BookOpen, label: "M.Com", sub: "Post-Graduate in Commerce, 1996" },
                  { icon: Award, label: "Vaasthu Consultant", sub: "Traditional Planning Principles" },
                  { icon: Users, label: "Business Partner", sub: "Life & professional partner" },
                  { icon: CheckCircle2, label: "Art of Living Teacher", sub: "Certified Instructor" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#FEFAF7" }}>
                    <div className="w-8 h-8 rounded-lg grid place-items-center shrink-0 mt-0.5" style={{ background: "rgba(183,160,139,0.15)" }}>
                      <Icon size={14} style={{ color: "#B7A08B" }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#000" }}>{label}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#B7A08B" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6057" }}>
                P. Vandana Rao is both life partner and business partner to the chief consultant. She manages
                firm accounts and operations, offers Vaasthu consultancy to clients seeking traditional spatial
                alignment, and brings a steadying presence to every client relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TIMELINE ──────────────────────────────────────────────────── */
function Timeline() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Our Journey</span>
        </div>
        <h2 className="mb-16 leading-[1.06]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}>
          Milestones of a steady <em className="not-italic" style={{ color: "#154D57" }}>practice</em>.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[2.2rem] md:left-1/2 top-0 bottom-0 w-px" style={{ background: "#e4dbd2" }} />

          <ul className="space-y-10">
            {timeline.map((m, i) => (
              <li key={m.y} className="relative grid md:grid-cols-2 gap-4 md:gap-16">
                {/* Dot */}
                <div
                  className="absolute left-[2.2rem] md:left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full border-2 grid place-items-center z-10"
                  style={{ background: "#FFFFFF", borderColor: "#154D57" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: "#154D57" }} />
                </div>

                {/* Content — alternating sides on desktop */}
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"}`}>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.28em] font-medium mb-3"
                    style={{ background: "rgba(21,77,87,0.08)", color: "#154D57" }}
                  >
                    {m.y}
                  </div>
                  <h4 style={{ fontFamily: "Georgia, serif", fontSize: "1.35rem", color: "#000", lineHeight: 1.2 }}>{m.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6b6057" }}>{m.d}</p>
                </div>

                {i % 2 === 0 && <div className="hidden md:block" />}
                {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── PHILOSOPHY ────────────────────────────────────────────────── */
function Philosophy() {
  return (
    <section style={{ background: "#154D57" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-8 md:px-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8" style={{ background: "#B7A08B" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#B7A08B" }}>Engineering Philosophy</span>
          <div className="h-px w-8" style={{ background: "#B7A08B" }} />
        </div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "3rem", color: "#B7A08B", lineHeight: 1, opacity: 0.5 }}>"</div>
        <p
          className="mt-4 leading-[1.35]"
          style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", color: "#FEFAF7" }}
        >
          We are responsible to provide our clients with the{" "}
          <em className="not-italic" style={{ color: "#B7A08B" }}>appropriate solution</em> to
          problems encountered in the design and construction of every project.
        </p>
        <div className="mt-8 text-sm" style={{ color: "rgba(254,250,247,0.45)" }}>— Aditi Consultants, Hyderabad</div>

        {/* Three pillars */}
        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          {[
            { h: "Honest", d: "Transparent architectural and structural decisions. No over-engineering, no cutting corners." },
            { h: "Imaginative", d: "Creative solutions to complex span, load and site-specific challenges." },
            { h: "Responsible", d: "Every drawing bears the weight of the lives that will occupy the project." },
          ].map((p) => (
            <div key={p.h} className="rounded-2xl p-6 text-left" style={{ background: "rgba(254,250,247,0.07)", border: "1px solid rgba(183,160,139,0.2)" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#B7A08B" }}>{p.h}</div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(254,250,247,0.55)" }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NETWORK ───────────────────────────────────────────────────── */
function Network() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Our Network</span>
        </div>
        <h2 className="mb-14 leading-[1.06]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}>
          Architects & builders we've <em className="not-italic" style={{ color: "#154D57" }}>worked with</em>.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Architects", count: architects.length, list: architects, accent: "#154D57" },
            { title: "Builders", count: builders.length, list: builders, accent: "#B7A08B" },
            
          ].map((g) => (
            <div key={g.title} className="rounded-3xl border p-8 md:p-10" style={{ background: "#FEFAF7", borderColor: "#e4dbd2" }}>
              <div className="flex items-baseline justify-between mb-8">
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#000" }}>{g.title}</h3>
                <span
                  className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em]"
                  style={{ background: "rgba(21,77,87,0.08)", color: "#154D57" }}
                >
                  {g.count} partners
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
                {g.list.map((n, i) => (
                  <li key={n} className="flex gap-3 items-center py-2.5 border-b" style={{ borderColor: "#e4dbd2" }}>
                    <span className="text-[10px] font-mono w-5 shrink-0" style={{ color: "#B7A08B" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm" style={{ color: "#3a3530" }}>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: "#FEFAF7" }} className="pb-28 md:pb-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-8 md:items-center md:justify-between"
          style={{ background: "#154D57" }}
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(183,160,139,0.7)" }}>Begin a Project</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#FEFAF7", lineHeight: 1.1 }}>
              Have a project in mind?
            </h3>
            <p className="mt-3 text-sm leading-relaxed max-w-md" style={{ color: "rgba(254,250,247,0.6)" }}>
              We'd be glad to walk you through how we'd approach it. A short conversation often defines the direction of an entire project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition hover:opacity-90"
              style={{ background: "#FEFAF7", color: "#154D57" }}
            >
              Book Consultation <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://wa.me/919246270133"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm border-2 transition hover:opacity-80"
              style={{ borderColor: "rgba(183,160,139,0.5)", color: "#FEFAF7" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
function AboutPage() {
  return (
    <Layout>
      <Hero />
      <StudioImage />
      <Founders />
      <Timeline />
      <Philosophy />
      <Network />
      <CTA />
    </Layout>
  );
}