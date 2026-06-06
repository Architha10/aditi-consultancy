import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import blueprint from "@/assets/blueprint-bg.jpg";
import { services, structures, packages } from "#/assets/data/site";
import { ArrowUpRight, Check } from "lucide-react";

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
      {
        name: "description",
        content:
          "Structural design, RCC, Steel & PEB structures, project consultancy, building permissions, site supervision and Vaasthu.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FEFAF7" }}>
      <img
        src={blueprint}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.04, mixBlendMode: "multiply" }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#154D57" }} />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10" style={{ background: "#154D57" }} />
          <span
            className="text-[10px] uppercase tracking-[0.38em] font-medium"
            style={{ color: "#154D57" }}
          >
            Services
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <h1
              className="leading-[0.96] tracking-tight"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(3rem,6.5vw,6rem)",
                color: "#000000",
              }}
            >
              Engineering,
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>
                end
              </em>{" "}
              to{" "}
              <em className="not-italic" style={{ color: "#154D57" }}>
                end
              </em>
              .
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p
              className="text-base leading-relaxed mb-6 max-w-lg"
              style={{ color: "#6b6057" }}
            >
              Eight disciplines under one roof — from the first structural calculation to the final
              site visit. Residential, commercial, industrial and beyond, all delivered with the
              same uncompromising standard since 2001.
            </p>
            <div className="flex flex-wrap gap-2">
              {["RCC", "Steel", "PEB", "Pre-Stressed", "Bridge"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] border"
                  style={{
                    borderColor: "#B7A08B",
                    color: "#154D57",
                    background: "rgba(180,160,139,0.08)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service count strip */}
        <div
          className="mt-16 pt-8 border-t grid grid-cols-3 sm:grid-cols-4 gap-6"
          style={{ borderColor: "#e4dbd2" }}
        >
          {[
            { v: "08", l: "Service Disciplines" },
            { v: "63ft", l: "Record RCC Span" },
            { v: "3", l: "Regulatory Bodies" },
            { v: "5+", l: "Sectors Covered" },
          ].map((s) => (
            <div key={s.l}>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.8rem",
                  color: "#154D57",
                  lineHeight: 1,
                }}
              >
                {s.v}
              </div>
              <div
                className="mt-1.5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "#B7A08B" }}
              >
                {s.l}
              </div>
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
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "#154D57" }}
              >
                What We Design
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                color: "#000",
                lineHeight: 1.1,
              }}
            >
              Every structure type,
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>
                expertly handled
              </em>
              .
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
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#154D57" }}
                  />
                  <span className="text-sm" style={{ color: "#3a3530" }}>
                    {s}
                  </span>
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
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "#154D57" }}
          >
            All Services
          </span>
        </div>
        <h2
          className="mb-16 leading-[1.06]"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2rem,3.8vw,3.2rem)",
            color: "#000",
          }}
        >
          A disciplined suite of{" "}
          <em className="not-italic" style={{ color: "#154D57" }}>
            engineering
          </em>{" "}
          capabilities.
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
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 48px rgba(21,77,87,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e0d8";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 16px rgba(21,77,87,0.04)";
              }}
            >
              {/* Card header bar */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{
                  background: "rgba(21,77,87,0.04)",
                  borderBottom: "1px solid #e8e0d8",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center transition-colors"
                    style={{ background: "rgba(21,77,87,0.10)" }}
                  >
                    <s.icon size={18} style={{ color: "#154D57" }} />
                  </div>
                  <div>
                    <div
                      className="text-[9px] uppercase tracking-[0.3em]"
                      style={{ color: "#B7A08B" }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.25rem",
                        color: "#000",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.t}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end max-w-40">
                  {s.sectors.map((sec) => (
                    <span
                      key={sec}
                      className="text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(183,160,139,0.15)",
                        color: "#B7A08B",
                      }}
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
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b6057" }}>
                  {s.d}
                </p>
                <ul className="space-y-2.5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "#3a3530" }}
                    >
                      <div
                        className="w-5 h-5 rounded-full grid place-items-center shrink-0"
                        style={{ background: "rgba(21,77,87,0.10)" }}
                      >
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

/* ─── PACKAGES ──────────────────────────────────────────────────── */

const PACKAGE_ACCENTS: Record<string, { border: string; badge: string; badgeText: string; highlight: boolean }> = {
  silver: {
    border: "#e8e0d8",
    badge: "rgba(183,160,139,0.15)",
    badgeText: "#B7A08B",
    highlight: false,
  },
  gold: {
    border: "#e8e0d8",
    badge: "rgba(183,160,139,0.15)",
    badgeText: "#B7A08B",
    highlight: false,
  },
  "star-gold": {
    border: "#154D57",
    badge: "rgba(21,77,87,0.10)",
    badgeText: "#154D57",
    highlight: true,
  },
  platinum: {
    border: "#e8e0d8",
    badge: "rgba(183,160,139,0.15)",
    badgeText: "#B7A08B",
    highlight: false,
  },
};

function Packages() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#154D57" }} />
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "#154D57" }}
          >
            Packages
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-6">
            <h2
              className="leading-[1.06]"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem,3.8vw,3.2rem)",
                color: "#000",
              }}
            >
              Transparent pricing,
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>
                scoped to your project
              </em>
              .
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-sm leading-relaxed" style={{ color: "#6b6057" }}>
              All packages are priced per square foot of built-up area. Choose the scope that
              matches your project stage — drawings only, full structural, or a complete
              multi-discipline package with BOQ.
            </p>
          </div>
        </div>

        {/* Package cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => {
            const accent = PACKAGE_ACCENTS[pkg.id] ?? PACKAGE_ACCENTS["silver"];
            return (
              <div
                key={pkg.id}
                className="relative rounded-3xl border overflow-hidden flex flex-col transition-all hover:-translate-y-1"
                style={{
                  background: accent.highlight ? "#154D57" : "#FEFAF7",
                  borderColor: accent.border,
                  boxShadow: accent.highlight
                    ? "0 20px 56px rgba(21,77,87,0.22)"
                    : "0 2px 16px rgba(21,77,87,0.04)",
                }}
              >
                {/* Most popular badge */}
                {accent.highlight && (
                  <div
                    className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                    style={{ background: "rgba(183,160,139,0.25)", color: "#B7A08B" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div
                  className="px-7 pt-8 pb-6"
                  style={{
                    borderBottom: `1px solid ${accent.highlight ? "rgba(254,250,247,0.10)" : "#e8e0d8"}`,
                  }}
                >
                  <div
                    className="text-[9px] uppercase tracking-[0.3em] mb-2"
                    style={{ color: accent.highlight ? "#B7A08B" : "#B7A08B" }}
                  >
                    {pkg.id.replace("-", " ")}
                  </div>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.3rem",
                      color: accent.highlight ? "#FEFAF7" : "#000",
                      lineHeight: 1.2,
                    }}
                  >
                    {pkg.name}
                  </div>
                </div>

                {/* Specs list */}
                <div className="px-7 py-6 flex flex-col gap-3 flex-1">
                  {pkg.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5"
                        style={{
                          background: accent.highlight
                            ? "rgba(254,250,247,0.12)"
                            : "rgba(21,77,87,0.10)",
                        }}
                      >
                        <Check
                          size={11}
                          style={{
                            color: accent.highlight ? "#FEFAF7" : "#154D57",
                          }}
                        />
                      </div>
                      <span
                        className="text-sm leading-snug"
                        style={{
                          color: accent.highlight ? "rgba(254,250,247,0.80)" : "#3a3530",
                        }}
                      >
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-7 pb-8">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition hover:opacity-90"
                    style={
                      accent.highlight
                        ? { background: "#FEFAF7", color: "#154D57" }
                        : {
                            background: "rgba(21,77,87,0.08)",
                            color: "#154D57",
                          }
                    }
                  >
                    Get a Quote <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          className="mt-10 text-center text-xs leading-relaxed"
          style={{ color: "#B7A08B" }}
        >
          Prices are indicative and may vary based on project complexity, site conditions, and
          structural requirements.{" "}
          <Link
            to="/contact"
            className="underline underline-offset-2 hover:opacity-80"
            style={{ color: "#154D57" }}
          >
            Contact us for a detailed estimate.
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ─── HOW WE WORK ───────────────────────────────────────────────── */
function HowWeWork() {
  const steps = [
    {
      n: "01",
      h: "Initial Consultation",
      d: "We understand your project — site, programme, budget and timeline — before committing to any approach.",
    },
    {
      n: "02",
      h: "Structural Concept",
      d: "We develop the structural system: spans, load paths, foundation strategy and material choices.",
    },
    {
      n: "03",
      h: "Design & Drawings",
      d: "Full structural calculations, GFC drawings, and coordination with your architect and contractor.",
    },
    {
      n: "04",
      h: "Permissions",
      d: "Where required, we handle GHMC/HMDA/DTCP submissions and follow through to approval.",
    },
    {
      n: "05",
      h: "Site Supervision",
      d: "Periodic site visits to verify execution, catch deviations early and ensure design intent is upheld.",
    },
  ];

  return (
    <section style={{ background: "#154D57" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "#B7A08B" }} />
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "#B7A08B" }}
          >
            How We Work
          </span>
        </div>
        <h2
          className="mb-16 leading-[1.06]"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2rem,3.8vw,3.2rem)",
            color: "#FEFAF7",
          }}
        >
          A process built on{" "}
          <em className="not-italic" style={{ color: "#B7A08B" }}>
            clarity at every step
          </em>
          .
        </h2>

        {/* Horizontal step flow */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-7 left-0 right-0 h-px"
            style={{ background: "rgba(183,160,139,0.25)" }}
          />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                {/* Step dot */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 relative z-10"
                  style={{
                    background: "#FEFAF7",
                    border: "2px solid rgba(183,160,139,0.4)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1rem",
                      color: "#154D57",
                      fontWeight: 600,
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#FEFAF7",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.h}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(254,250,247,0.55)" }}
                >
                  {step.d}
                </p>
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
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "#154D57" }}
              >
                Regulatory Expertise
              </span>
            </div>
            <h2
              className="leading-[1.06] mb-5"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                color: "#000",
              }}
            >
              Three bodies.
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>
                One point of contact
              </em>
              .
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b6057" }}>
              Navigating GHMC, HMDA and DTCP permissions simultaneously is complex. We manage all
              three — drawing preparation, document submission and follow-through — so your project
              doesn't stall waiting for approvals.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-4">
            {[
              {
                code: "GHMC",
                name: "Greater Hyderabad Municipal Corporation",
                area: "Municipal limits",
              },
              {
                code: "HMDA",
                name: "Hyderabad Metropolitan Development Authority",
                area: "Peripheral areas",
              },
              {
                code: "DTCP",
                name: "Directorate of Town & Country Planning",
                area: "State-level projects",
              },
            ].map((b) => (
              <div
                key={b.code}
                className="rounded-2xl p-6 text-center border"
                style={{ background: "#FEFAF7", borderColor: "#e4dbd2" }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.8rem",
                    color: "#154D57",
                    lineHeight: 1,
                  }}
                >
                  {b.code}
                </div>
                <div
                  className="mt-3 text-[11px] leading-snug"
                  style={{ color: "#6b6057" }}
                >
                  {b.name}
                </div>
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
          <img
            src={blueprint}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: 0.04, mixBlendMode: "screen" }}
          />

          <div className="md:col-span-8 relative">
            <div
              className="text-[10px] uppercase tracking-[0.35em] mb-4"
              style={{ color: "rgba(183,160,139,0.7)" }}
            >
              Start a Project
            </div>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem,3.2vw,2.8rem)",
                color: "#FEFAF7",
                lineHeight: 1.1,
              }}
            >
              Not sure which service you need?
            </h3>
            <p
              className="mt-4 text-sm leading-relaxed max-w-lg"
              style={{ color: "rgba(254,250,247,0.60)" }}
            >
              Share your project details and we'll tell you exactly where to begin — and what the
              structural approach should be.
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
      <Packages />
      <HowWeWork />
      <Permissions />
      <CTA />
    </Layout>
  );
}