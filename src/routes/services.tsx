import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import blueprint from "@/assets/blueprint-bg.jpg";
import {
  ArrowUpRight, Ruler, Building2, HardHat, Factory,
  ClipboardCheck, ShieldCheck, Compass, Sparkles, Check,
} from "lucide-react";

/* ─── PALETTE
   cream:   #FEFAF7
   teal:    #154D57
   taupe:   #B7A08B
   white:   #FFFFFF
   black:   #000000
──────────────────── */

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Aditi Consultants" },
      { name: "description", content: "Structural design, RCC, Steel & PEB structures, project consultancy, building permissions, site supervision and Vaasthu." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: Ruler,
    num: "01",
    t: "Structural Design",
    tagline: "From concept to construction drawings.",
    d: "Complete structural design for all building typologies — from the first layout sketch to fully coordinated GFC drawings with calculations, detailing and BOQ-ready specifications.",
    points: ["Concept to GFC drawings", "Earthquake & wind load analysis", "BOQ-ready steel & concrete detailing", "Coordination with architectural intent"],
    sectors: ["Residential", "Commercial", "Industrial"],
  },
  {
    icon: Building2,
    num: "02",
    t: "RCC Structures",
    tagline: "Reinforced concrete expertise, every typology.",
    d: "Deep expertise in RCC design for villas, multi-storied apartments, commercial complexes, theatres, temples and industrial buildings. Includes long-span design — our record is a 63-foot pillar-to-pillar structure at Moulali Industrial Area.",
    points: ["Long-span design up to 63 ft", "High-rise stability analysis", "Foundation & pile design", "Pre-stressed concrete elements"],
    sectors: ["Apartments", "Commercial", "Religious", "Hospitality"],
  },
  {
    icon: HardHat,
    num: "03",
    t: "Steel Structures",
    tagline: "Hot-rolled frames built for economy & strength.",
    d: "Steel-frame buildings, mezzanines and industrial structures designed for structural performance, construction economy and long service life.",
    points: ["Hot-rolled structural steel", "Connection & joint design", "Erection sequence planning", "Composite beam systems"],
    sectors: ["Industrial", "Commercial", "Institutional"],
  },
  {
    icon: Factory,
    num: "04",
    t: "PEB Structures",
    tagline: "Pre-engineered buildings & their RCC foundations.",
    d: "Pre-Engineered Building structural design and RCC foundation engineering for large industrial halls, warehouses and logistics sheds — including crane gantry and long-span roof systems.",
    points: ["PEB foundation design", "Crane gantry systems", "Long-span industrial sheds", "RCC anchor bolt design"],
    sectors: ["Industrial", "Warehousing", "Logistics"],
  },
  {
    icon: ClipboardCheck,
    num: "05",
    t: "Project Consultancy",
    tagline: "One thread connecting builder, architect & owner.",
    d: "We coordinate between all project stakeholders — builder, architect and landlord — to keep the project moving smoothly without obstacles, delays or miscommunication.",
    points: ["Stakeholder coordination", "Schedule & milestone management", "Technical risk advisory", "Builder–architect liaison"],
    sectors: ["All typologies"],
  },
  {
    icon: ShieldCheck,
    num: "06",
    t: "Building Permissions",
    tagline: "GHMC, HMDA & DTCP approvals, end to end.",
    d: "We handle building permission applications with the full suite of Hyderabad's regulatory bodies — from drawing preparation to document submission and approval follow-through.",
    points: ["GHMC / HMDA / DTCP approvals", "Permission drawing preparation", "Document compilation", "Approval follow-up"],
    sectors: ["Residential", "Commercial", "Institutional"],
  },
  {
    icon: Compass,
    num: "07",
    t: "Site Supervision",
    tagline: "Engineering oversight through construction.",
    d: "Periodic and continuous on-site supervision to ensure that structural execution matches design intent — catching deviations early so they don't become costly corrections.",
    points: ["Periodic site visits", "Structural quality checks", "Deviation identification", "Contractor guidance"],
    sectors: ["All typologies"],
  },
  {
    icon: Sparkles,
    num: "08",
    t: "Vaasthu Consultancy",
    tagline: "Traditional spatial alignment, responsibly applied.",
    d: "Vaasthu consultancy services by our Managing Partner, P. Vandana Rao — aligning plot orientation, room placement and spatial flow with traditional Vaasthu Shastra principles.",
    points: ["Plot & site evaluation", "Architectural plan alignment", "Direction & zone analysis", "Remedies & practical advice"],
    sectors: ["Residential", "Commercial", "Religious"],
  },
];

const structures = [
  "Villas","Multi-storied Apartments","Commercial Complexes","Industries",
  "Theatres","Temples & Religious Structures","Hotels & Hospitality",
  "College Campuses","Hostels & Guest Houses","Bridges","Pre-Stressed Structures",
];

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FEFAF7" }}>
      <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "multiply" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#154D57" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }} />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.38em] font-medium" style={{ color: "#154D57" }}>
            Services
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <h1
              className="leading-[0.96] tracking-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(3rem,6.5vw,6rem)", color: "#000000" }}
            >
              Engineering,
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>end</em> to{" "}
              <em className="not-italic" style={{ color: "#154D57" }}>end</em>.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ color: "#6b6057" }}>
              Eight disciplines under one roof — from the first structural calculation to the final
              site visit. Residential, commercial, industrial and beyond, all delivered with the same
              uncompromising standard since 2001.
            </p>
            <div className="flex flex-wrap gap-2">
              {["RCC","Steel","PEB","Pre-Stressed","Bridge"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] border"
                  style={{ borderColor: "#B7A08B", color: "#154D57", background: "rgba(180,160,139,0.08)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service count strip */}
        <div className="mt-16 pt-8 border-t grid grid-cols-3 sm:grid-cols-4 gap-6" style={{ borderColor: "#e4dbd2" }}>
          {[
            { v: "08", l: "Service Disciplines" },
            { v: "63ft", l: "Record RCC Span" },
            { v: "3", l: "Regulatory Bodies" },
            { v: "5+", l: "Sectors Covered" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2.8rem", color: "#154D57", lineHeight: 1 }}>{s.v}</div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em]" style={{ color: "#B7A08B" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT WE DESIGN ────────────────────────────────────────────── */
function WhatWeDesign() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>What We Design</span>
            </div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#000", lineHeight: 1.1 }}>
              Every structure type,
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>expertly handled</em>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6b6057" }}>
              From a single-plot villa to a 9-floor commercial-cum-residential tower, our structural
              work spans virtually every building typology in Hyderabad and beyond.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {structures.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl border"
                  style={{ background: "#FEFAF7", borderColor: "#e8e0d8" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#154D57" }} />
                  <span className="text-sm" style={{ color: "#3a3530" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICE CARDS ─────────────────────────────────────────────── */
function ServiceCards() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>All Services</span>
        </div>
        <h2 className="mb-16 leading-[1.06]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}>
          A disciplined suite of{" "}
          <em className="not-italic" style={{ color: "#154D57" }}>engineering</em> capabilities.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.t}
              className="group rounded-3xl border overflow-hidden transition-all hover:-translate-y-1"
              style={{
                background: "#FFFFFF",
                borderColor: "#e8e0d8",
                boxShadow: "0 2px 16px rgba(21,77,87,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#154D57";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(21,77,87,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e0d8";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(21,77,87,0.04)";
              }}
            >
              {/* Card header bar */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ background: "rgba(21,77,87,0.04)", borderBottom: "1px solid #e8e0d8" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center transition-colors"
                    style={{ background: "rgba(21,77,87,0.10)" }}
                  >
                    <s.icon size={18} style={{ color: "#154D57" }} />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "#B7A08B" }}>{s.num}</div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", color: "#000", lineHeight: 1.2 }}>{s.t}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[10rem]">
                  {s.sectors.map((sec) => (
                    <span
                      key={sec}
                      className="text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(183,160,139,0.15)", color: "#B7A08B" }}
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <p
                  className="text-base italic mb-5"
                  style={{ fontFamily: "Georgia, serif", color: "#154D57" }}
                >
                  {s.tagline}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b6057" }}>{s.d}</p>
                <ul className="space-y-2.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm" style={{ color: "#3a3530" }}>
                      <div className="w-5 h-5 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(21,77,87,0.10)" }}>
                        <Check size={11} style={{ color: "#154D57" }} />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW WE WORK ───────────────────────────────────────────────── */
function HowWeWork() {
  const steps = [
    { n: "01", h: "Initial Consultation", d: "We understand your project — site, programme, budget and timeline — before committing to any approach." },
    { n: "02", h: "Structural Concept", d: "We develop the structural system: spans, load paths, foundation strategy and material choices." },
    { n: "03", h: "Design & Drawings", d: "Full structural calculations, GFC drawings, and coordination with your architect and contractor." },
    { n: "04", h: "Permissions", d: "Where required, we handle GHMC/HMDA/DTCP submissions and follow through to approval." },
    { n: "05", h: "Site Supervision", d: "Periodic site visits to verify execution, catch deviations early and ensure design intent is upheld." },
  ];

  return (
    <section style={{ background: "#154D57" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#B7A08B" }} />
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#B7A08B" }}>How We Work</span>
        </div>
        <h2 className="mb-16 leading-[1.06]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#FEFAF7" }}>
          A process built on{" "}
          <em className="not-italic" style={{ color: "#B7A08B" }}>clarity at every step</em>.
        </h2>

        {/* Horizontal step flow */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px" style={{ background: "rgba(183,160,139,0.25)" }} />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                {/* Step dot */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 relative z-10"
                  style={{ background: "#FEFAF7", border: "2px solid rgba(183,160,139,0.4)" }}
                >
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#154D57", fontWeight: 600 }}>{step.n}</span>
                </div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#FEFAF7", lineHeight: 1.2, marginBottom: "0.5rem" }}>{step.h}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(254,250,247,0.55)" }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PERMISSIONS CALLOUT ───────────────────────────────────────── */
function Permissions() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Regulatory Expertise</span>
            </div>
            <h2 className="leading-[1.06] mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#000" }}>
              Three bodies.
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>One point of contact</em>.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b6057" }}>
              Navigating GHMC, HMDA and DTCP permissions simultaneously is complex. We manage all three —
              drawing preparation, document submission and follow-through — so your project doesn't stall
              waiting for approvals.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-4">
            {[
              { code: "GHMC", name: "Greater Hyderabad Municipal Corporation", area: "Municipal limits" },
              { code: "HMDA", name: "Hyderabad Metropolitan Development Authority", area: "Peripheral areas" },
              { code: "DTCP", name: "Directorate of Town & Country Planning", area: "State-level projects" },
            ].map((b) => (
              <div
                key={b.code}
                className="rounded-2xl p-6 text-center border"
                style={{ background: "#FEFAF7", borderColor: "#e4dbd2" }}
              >
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", color: "#154D57", lineHeight: 1 }}>{b.code}</div>
                <div className="mt-3 text-[11px] leading-snug" style={{ color: "#6b6057" }}>{b.name}</div>
                <div
                  className="mt-3 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full inline-block"
                  style={{ background: "rgba(183,160,139,0.15)", color: "#B7A08B" }}
                >
                  {b.area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center"
          style={{ background: "#154D57" }}
        >
          {/* Blueprint faint overlay */}
          <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "screen" }} />

          <div className="md:col-span-8 relative">
            <div className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(183,160,139,0.7)" }}>Start a Project</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.2vw,2.8rem)", color: "#FEFAF7", lineHeight: 1.1 }}>
              Not sure which service you need?
            </h3>
            <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: "rgba(254,250,247,0.60)" }}>
              Share your project details and we'll tell you exactly where to begin — and what the structural
              approach should be.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap md:justify-end gap-3 relative">
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
function ServicesPage() {
  return (
    <Layout>
      <Hero />
      <WhatWeDesign />
      <ServiceCards />
      <HowWeWork />
      <Permissions />
      <CTA />
    </Layout>
  );
}