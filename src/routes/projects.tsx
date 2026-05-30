import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Layout } from "@/components/site/Layout";
import { ArrowUpRight, MapPin } from "lucide-react";
import blueprint from "@/assets/blueprint-bg.jpg";

import pBegumpet from "@/assets/projects/commercial-begumpet.jpg";
import pLBNagar from "@/assets/projects/residential-lbnagar.jpg";
import pKalyan from "@/assets/projects/apartment-kalyannagar.jpg";
import pHostel from "@/assets/projects/jntu-hostel.jpg";
import pGuest from "@/assets/projects/jntu-guesthouse.jpg";
import pLibrary from "@/assets/projects/jntu-library.jpg";
import pChurch from "@/assets/projects/methodist-church.jpg";
import pJubilee from "@/assets/projects/jubilee-commercial.jpg";
import pSaroor from "@/assets/projects/saroornagar-apartment.jpg";
import pBrewdog from "@/assets/projects/brewdog-hotel.jpg";
import pTemple from "@/assets/projects/vijaya-ganapathi-temple.jpg";
import pChampapet from "@/assets/projects/champapet-apartment.jpg";
import pKacheguda from "@/assets/projects/kacheguda-mixed.jpg";
import pTolichowki from "@/assets/projects/tolichowki-residential.jpg";
import pGadwal from "@/assets/projects/gadwal-apartment.jpg";
import pDilshuk from "@/assets/projects/dilshuk-nagar-residential.jpg";
import pAlwal from "@/assets/projects/alwal-apartment.jpg";

/* ─── PALETTE
   cream:  #FEFAF7  |  teal: #154D57
   taupe:  #B7A08B  |  white: #FFFFFF  |  black: #000000
──────────────────────────────────────────────────────── */

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Aditi Consultants" },
      { name: "description", content: "A portfolio of residential, commercial, educational, religious and hospitality projects engineered by Aditi Consultants." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

type Cat = "All" | "Commercial" | "Residential" | "Educational" | "Religious" | "Hospitality";
type Status = "Completed" | "Ongoing" | "Upcoming";

const projects: { img: string; t: string; loc: string; cat: Exclude<Cat,"All">; status: Status; year?: string; note?: string }[] = [
  // Completed
  { img: pTemple,    t: "Vijaya Ganapathi Temple",          loc: "Kukatpally",      cat: "Religious",    status: "Completed", year: "2014" },
  { img: pBegumpet,  t: "Commercial Complex",               loc: "Begumpet",        cat: "Commercial",   status: "Completed" },
  { img: pLBNagar,   t: "Residential Building",             loc: "L.B. Nagar",      cat: "Residential",  status: "Completed" },
  { img: pKalyan,    t: "Residential Apartment",            loc: "Kalyan Nagar",    cat: "Residential",  status: "Completed" },
  { img: pHostel,    t: "JNTU Boys Hostel",                 loc: "Kalikiri Campus", cat: "Educational",  status: "Completed", year: "2018" },
  { img: pGuest,     t: "JNTU Guest House",                 loc: "Kalikiri Campus", cat: "Educational",  status: "Completed", year: "2018" },
  { img: pLibrary,   t: "JNTU Library Building",            loc: "Kalikiri Campus", cat: "Educational",  status: "Completed", year: "2018" },
  { img: pChurch,    t: "Methodist Church",                 loc: "Mehdipatnam",     cat: "Religious",    status: "Completed" },
  { img: pJubilee,   t: "Commercial Complex",               loc: "Jubilee Hills",   cat: "Commercial",   status: "Completed" },
  { img: pSaroor,    t: "Residential Apartment",            loc: "Saroor Nagar",    cat: "Residential",  status: "Completed" },
  // Ongoing
  { img: pBrewdog,   t: "Brewdog Hotel",                    loc: "Jubilee Hills",   cat: "Hospitality",  status: "Ongoing" },
  { img: pChampapet, t: "Residential Apartment",            loc: "Champapet",       cat: "Residential",  status: "Ongoing" },
  { img: pKacheguda, t: "Commercial cum Residential",       loc: "Kacheguda",       cat: "Commercial",   status: "Ongoing", note: "Cellar + Stilt 1 + Stilt 2 + 9 Floors" },
  { img: pTolichowki,t: "Residential Building",             loc: "Tolichowki",      cat: "Residential",  status: "Ongoing" },
  { img: pGadwal,    t: "Residential Apartment",            loc: "Gadwal",          cat: "Residential",  status: "Ongoing" },
  // Upcoming (featured image cards)
  { img: pDilshuk,   t: "Residential Building",             loc: "Dilshuk Nagar",   cat: "Residential",  status: "Upcoming" },
  { img: pAlwal,     t: "Residential Apartment",            loc: "Alwal",           cat: "Residential",  status: "Upcoming" },
];

const upcomingList = [
  { t: "Commercial Complex",          loc: "Banjara Hills, Road No. 10" },
  { t: "Commercial Complex",          loc: "Ghatkesar" },
  { t: "Commercial Complex",          loc: "Gachibowli" },
  { t: "Pharma Building",             loc: "Shamirpet" },
  { t: "Airport Project (TAAIL)",     loc: "Madurai, Tamil Nadu" },
  { t: "Residential Building",        loc: "Vanasthali Puram" },
  { t: "Residential Apartment",       loc: "Madhapur" },
  { t: "Commercial cum Residential",  loc: "Madhapur" },
  { t: "Service Apartment",           loc: "Madhapur" },
  { t: "VBIT Engineering College",    loc: "Avushapur" },
];

const cats: Cat[] = ["All", "Commercial", "Residential", "Educational", "Religious", "Hospitality"];

const statusStyle: Record<Status, { bg: string; color: string; dot: string }> = {
  Completed: { bg: "rgba(21,77,87,0.10)",   color: "#154D57",  dot: "#154D57" },
  Ongoing:   { bg: "rgba(183,160,139,0.20)", color: "#8a6f56",  dot: "#B7A08B" },
  Upcoming:  { bg: "rgba(21,77,87,0.06)",   color: "#154D57",  dot: "#B7A08B" },
};

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  const completedCount = projects.filter(p => p.status === "Completed").length;
  const ongoingCount  = projects.filter(p => p.status === "Ongoing").length;

  return (
    <section className="relative overflow-hidden" style={{ background: "#FEFAF7" }}>
      <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "multiply" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#154D57" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }} />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.38em] font-medium" style={{ color: "#154D57" }}>Portfolio</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <h1 className="leading-[0.96] tracking-tight" style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(3rem,6.5vw,6rem)", color: "#000" }}>
              Selected
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>works</em>.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#6b6057" }}>
              Five sectors, 120+ structures — each one a commitment to structural integrity and
              careful engineering, built across Hyderabad and beyond over 26 years.
            </p>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {cats.filter(c => c !== "All").map(c => (
                <span
                  key={c}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] border"
                  style={{ borderColor: "#B7A08B", color: "#154D57", background: "rgba(180,160,139,0.08)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6" style={{ borderColor: "#e4dbd2" }}>
          {[
            { v: String(completedCount)+"+", l: "Completed" },
            { v: String(ongoingCount),        l: "On-Going" },
            { v: upcomingList.length+"+",     l: "Upcoming" },
            { v: "5",                         l: "Sectors" },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "2.8rem", color: "#154D57", lineHeight: 1 }}>{s.v}</div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.24em]" style={{ color: "#B7A08B" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FILTER BAR ────────────────────────────────────────────────── */
function FilterBar({ active, setActive }: { active: Cat; setActive: (c: Cat) => void }) {
  return (
    <div
      className="sticky top-0 z-30 border-b py-4"
      style={{ background: "rgba(254,250,247,0.92)", backdropFilter: "blur(12px)", borderColor: "#e4dbd2" }}
    >
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex flex-wrap items-center gap-2">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="px-5 py-2 rounded-full text-sm transition-all"
              style={
                active === c
                  ? { background: "#154D57", color: "#FEFAF7", fontWeight: 500 }
                  : { background: "transparent", color: "#6b6057", border: "1px solid #e4dbd2" }
              }
            >
              {c}
            </button>
          ))}
          <div className="ml-auto text-[11px] uppercase tracking-[0.2em]" style={{ color: "#B7A08B" }}>
            {active === "All" ? projects.length : projects.filter(p => p.cat === active).length} projects
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PROJECT CARD ──────────────────────────────────────────────── */
function ProjectCard({ p, variant }: { p: typeof projects[0]; variant: "tall" | "wide" | "square" }) {
  const aspectMap = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" };
  const ss = statusStyle[p.status];
  return (
    <div
      className="group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1"
      style={{ boxShadow: "0 2px 16px rgba(21,77,87,0.06)" }}
    >
      <div className={`${aspectMap[variant]} w-full`} style={{ background: "#e4dbd2" }}>
        <img
          src={p.img}
          alt={p.t}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(21,77,87,0.80) 0%, rgba(21,77,87,0.15) 50%, transparent 100%)" }}
      />
      {/* Taupe hover line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "#B7A08B" }}
      />

      {/* Status badge — top left */}
      <div className="absolute top-4 left-4">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.25em] font-medium"
          style={{ background: "rgba(254,250,247,0.92)", backdropFilter: "blur(8px)", color: ss.color }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: ss.dot }} />
          {p.status}
        </span>
      </div>

      {/* Arrow — top right */}
      <div
        className="absolute top-4 right-4 w-9 h-9 rounded-full grid place-items-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "rgba(254,250,247,0.15)", backdropFilter: "blur(6px)" }}
      >
        <ArrowUpRight size={14} color="#FEFAF7" />
      </div>

      {/* Info */}
      <div className="absolute left-5 right-5 bottom-5">
        <div className="text-[9px] uppercase tracking-[0.28em] mb-1" style={{ color: "rgba(183,160,139,0.9)" }}>
          {p.cat}{p.year ? ` · ${p.year}` : ""}
        </div>
        <div style={{ fontFamily: "Georgia,serif", fontSize: "1.2rem", color: "#FEFAF7", lineHeight: 1.2 }}>{p.t}</div>
        <div className="flex items-center gap-1.5 mt-1">
          <MapPin size={10} color="rgba(254,250,247,0.55)" />
          <span className="text-xs" style={{ color: "rgba(254,250,247,0.55)" }}>{p.loc}</span>
        </div>
        {p.note && (
          <div className="mt-1.5 text-[10px]" style={{ color: "rgba(183,160,139,0.8)" }}>{p.note}</div>
        )}
      </div>
    </div>
  );
}

/* ─── GRID ──────────────────────────────────────────────────────── */
function ProjectGrid({ list }: { list: typeof projects }) {
  const variants: ("tall"|"wide"|"square")[] = ["tall","wide","square","wide","square","tall","tall","square","wide"];
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
      {list.map((p, i) => (
        <div key={p.t + p.loc} className="mb-5 break-inside-avoid">
          <ProjectCard p={p} variant={variants[i % variants.length]} />
        </div>
      ))}
    </div>
  );
}

/* ─── UPCOMING PIPELINE ─────────────────────────────────────────── */
function UpcomingPipeline() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left text */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>On Our Drawing Boards</span>
            </div>
            <h2 className="leading-[1.06] mb-5" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.2vw,2.8rem)", color: "#000" }}>
              Upcoming
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>projects</em>.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b6057" }}>
              A snapshot of structures currently in planning across Hyderabad and beyond — including
              commercial complexes, pharma buildings, hospitality and institutional projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-90"
              style={{ background: "#154D57", color: "#FEFAF7" }}
            >
              Discuss a project <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Right list */}
          <div className="md:col-span-8">
            <div
              className="rounded-3xl overflow-hidden border"
              style={{ background: "#FFFFFF", borderColor: "#e4dbd2" }}
            >
              {upcomingList.map((u, i) => (
                <div
                  key={u.t + u.loc}
                  className="flex items-center justify-between px-8 py-5 border-b transition-colors hover:bg-[#FEFAF7]"
                  style={{ borderColor: "#e4dbd2" }}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="text-[10px] font-mono mt-0.5 shrink-0"
                      style={{ color: "#B7A08B" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#000" }}>{u.t}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <MapPin size={10} style={{ color: "#B7A08B" }} />
                        <span className="text-[11px]" style={{ color: "#B7A08B" }}>{u.loc}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-[9px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full shrink-0 ml-4"
                    style={{ background: "rgba(21,77,87,0.07)", color: "#154D57" }}
                  >
                    Upcoming
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

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: "#FFFFFF" }} className="pb-28 md:pb-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-8 md:items-center md:justify-between"
          style={{ background: "#154D57" }}
        >
          <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "screen" }} />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: "rgba(183,160,139,0.7)" }}>Start a Project</div>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#FEFAF7", lineHeight: 1.1 }}>
              Have a structure in mind?
            </h3>
            <p className="mt-3 text-sm leading-relaxed max-w-md" style={{ color: "rgba(254,250,247,0.60)" }}>
              Tell us about your project and we'll outline the structural approach — before construction begins.
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition hover:opacity-90"
              style={{ background: "#FEFAF7", color: "#154D57" }}
            >
              Book Consultation <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://wa.me/919246270133"
              target="_blank" rel="noreferrer"
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
function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const list = useMemo(
    () => active === "All" ? projects : projects.filter(p => p.cat === active),
    [active]
  );

  return (
    <Layout>
      <Hero />
      <FilterBar active={active} setActive={setActive} />

      <section style={{ background: "#FFFFFF" }} className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <ProjectGrid list={list} />
        </div>
      </section>

      <UpcomingPipeline />
      <CTA />
    </Layout>
  );
}