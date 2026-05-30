import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import hero from "@/assets/hero-architecture.jpg";
import blueprint from "@/assets/blueprint-bg.jpg";
import about from "@/assets/team-intro.jpg";
import pCommercial from "@/assets/projects/jubilee-commercial.jpg";
import pBrewdog from "@/assets/projects/brewdog-hotel.jpg";
import pJntu from "@/assets/projects/jntu-library.jpg";
import pChurch from "@/assets/projects/methodist-church.jpg";
import pApartment from "@/assets/projects/apartment-kalyannagar.jpg";
import pSaroor from "@/assets/projects/saroornagar-apartment.jpg";
import {
  ArrowUpRight,
  Compass,
  Building2,
  HardHat,
  Ruler,
  ShieldCheck,
  Sparkles,
  Award,
  MapPin,
  Users,
} from "lucide-react";

/* ─── PALETTE
   cream:   #FEFAF7
   teal:    #154D57
   taupe:   #B7A08B
   white:   #FFFFFF
   black:   #000000
──────────────────── */

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aditi Consultants — Structural Engineering & Project Consultancy" },
      { name: "description", content: "26+ years of structural excellence in RCC, Steel & PEB structures. Residential, commercial and industrial projects across Hyderabad." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#FEFAF7" }}
    >
      {/* Blueprint texture — very subtle */}
      <img
        src={blueprint}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.035, mixBlendMode: "multiply" }}
      />

      {/* Teal accent bar — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "#154D57" }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-24 md:pb-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT — text */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: "#154D57" }} />
              <span
                className="text-[10px] uppercase tracking-[0.38em] font-medium"
                style={{ color: "#154D57" }}
              >
                Structural & Project Consultants · Hyderabad
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-[0.96] tracking-tight"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(3.2rem, 6vw, 5.8rem)",
                color: "#000000",
              }}
            >
              Engineering
              <br />
              <em
                className="not-italic"
                style={{ color: "#154D57" }}
              >
                strength
              </em>
              <br />
              into every
              <br />
              structure.
            </h1>

            <p
              className="mt-8 text-base leading-relaxed max-w-md"
              style={{ color: "#6b6057" }}
            >
              26+ years of meticulous structural excellence in residential,
              commercial and industrial projects — responsible, precise and
              quietly enduring.
            </p>

            {/* Spec pills */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["RCC", "Steel", "PEB", "Pre-Stressed", "Bridge"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium border"
                  style={{ borderColor: "#B7A08B", color: "#154D57", background: "rgba(180,160,139,0.08)" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all"
                style={{ background: "#154D57", color: "#FFFFFF" }}
              >
                Explore Projects
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium border-2 transition-all hover:opacity-80"
                style={{ borderColor: "#154D57", color: "#154D57", background: "transparent" }}
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT — image + floating cards */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={hero}
                alt="Modern structure by Aditi Consultants"
                className="w-full h-full object-cover"
              />
              {/* Teal gradient foot */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{ background: "linear-gradient(to top, rgba(21,77,87,0.72), transparent)" }}
              />
              {/* Bottom caption */}
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between text-white">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] opacity-70">Latest On-Going</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>
                    Brewdog Hotel · Jubilee Hills
                  </div>
                </div>
                <div
                  className="w-9 h-9 rounded-full grid place-items-center border border-white/30"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Floating stat card — top left */}
            <div
              className="absolute -left-6 top-8 rounded-2xl px-5 py-4 shadow-xl hidden md:block"
              style={{ background: "#FFFFFF", border: "1px solid #e8e0d8" }}
            >
              <div className="text-[9px] uppercase tracking-[0.28em]" style={{ color: "#B7A08B" }}>Max Span</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", color: "#154D57", lineHeight: 1.1 }}>
                63<span style={{ fontSize: "1rem", color: "#B7A08B" }}>ft</span>
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: "#9c8c7c" }}>Pillar-to-pillar · Moulali</div>
            </div>

            {/* Floating year badge — bottom right */}
            <div
              className="absolute -right-4 -bottom-5 rounded-2xl px-5 py-4 shadow-xl hidden md:block"
              style={{ background: "#154D57" }}
            >
              <div className="text-[9px] uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.5)" }}>Est.</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#FEFAF7", lineHeight: 1.1 }}>2001</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t"
          style={{ borderColor: "#e4dbd2" }}
        >
          {[
            { v: "26+", l: "Years of Practice" },
            { v: "120+", l: "Structures Engineered" },
            { v: "5", l: "Sectors Served" },
            { v: "01", l: "Standard — Uncompromised" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2.8rem", color: "#154D57", lineHeight: 1 }}>
                {s.v}
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.24em]" style={{ color: "#B7A08B" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INTRO ─────────────────────────────────────────────────────── */
function Intro() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14 grid lg:grid-cols-12 gap-16 items-center">

        {/* Text */}
        <div className="lg:col-span-5 lg:pr-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "#154D57" }} />
            <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>
              About the Firm
            </span>
          </div>
          <h2
            className="leading-[1.06]"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#000" }}
          >
            A quiet practice of
            <br />
            precision since{" "}
            <em className="not-italic" style={{ color: "#154D57" }}>2001</em>.
          </h2>
          <p className="mt-6 leading-relaxed" style={{ color: "#6b6057", fontSize: "0.97rem" }}>
            Founded by Chief Consultant P. Venkateshwara Rao (M.E. Structures, BITS Pilani), with GHMC
            License No. 166/Stru.Engr./TP10/MCH and 26 years of experience including association with
            IIT Madras and J.J. Associates.
          </p>
          <blockquote
            className="mt-7 pl-5 border-l-2 text-xl italic"
            style={{ borderColor: "#B7A08B", fontFamily: "Georgia, serif", color: "#154D57" }}
          >
            "Honest engineering, responsibly delivered."
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { icon: Award, label: "GHMC Licensed" },
              { icon: Users, label: "IIT Madras Affiliated" },
              { icon: MapPin, label: "Hyderabad, TS" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]" style={{ color: "#B7A08B" }}>
                <Icon size={12} style={{ color: "#154D57" }} />
                {label}
              </span>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium group"
            style={{ color: "#154D57" }}
          >
            Read our story
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Image */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "5/4" }}>
            <img src={about} alt="P. Venkateshwara Rao reviewing structural drawings" loading="lazy" className="w-full h-full object-cover" />
            {/* Teal overlay gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(21,77,87,0.12) 0%, transparent 60%)" }} />
          </div>
          {/* Consultant name card */}
          <div
            className="absolute -bottom-6 left-6 rounded-2xl p-5 shadow-2xl"
            style={{ background: "#154D57", maxWidth: "14rem" }}
          >
            <div className="text-[9px] uppercase tracking-[0.28em]" style={{ color: "rgba(254,250,247,0.5)" }}>Chief Consultant</div>
            <div className="mt-1.5" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#FEFAF7", lineHeight: 1.3 }}>
              P. Venkateshwara Rao
            </div>
            <div className="mt-1 text-[10px]" style={{ color: "#B7A08B" }}>M.E. Structures · BITS Pilani</div>
          </div>
          {/* Taupe corner accent */}
          <div
            className="absolute -top-3 -right-3 w-24 h-24 rounded-2xl -z-10"
            style={{ background: "#B7A08B", opacity: 0.25 }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ──────────────────────────────────────────────────── */
const services = [
  { icon: Ruler, t: "Structural Design", d: "RCC, Steel & composite design from concept to detail drawings.", tag: "Core" },
  { icon: Building2, t: "RCC Structures", d: "Multi-storied apartments, commercial complexes, hostels and halls.", tag: "Speciality" },
  { icon: HardHat, t: "Steel & PEB", d: "Pre-engineered halls, industrial sheds and long-span steel structures up to 63ft span.", tag: "Industrial" },
  { icon: ShieldCheck, t: "Building Permissions", d: "GHMC, HMDA & DTCP approvals managed end-to-end.", tag: "Regulatory" },
  { icon: Compass, t: "Site Supervision", d: "On-site engineering oversight through the full construction lifecycle.", tag: "Oversight" },
  { icon: Sparkles, t: "Vaasthu Consultancy", d: "Plans aligned with traditional Vaasthu principles by our certified consultant.", tag: "Advisory" },
];

function Services() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>What We Do</span>
            </div>
            <h2
              className="leading-[1.06]"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}
            >
              A disciplined suite of{" "}
              <em className="not-italic" style={{ color: "#154D57" }}>engineering</em> services.
            </h2>
          </div>
          <Link
            to="/services"
            className="self-start md:self-end inline-flex items-center gap-2 text-sm group"
            style={{ color: "#B7A08B" }}
          >
            All services <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.t}
              className="group relative rounded-2xl p-8 border transition-all hover:-translate-y-1 cursor-default"
              style={{
                background: "#FFFFFF",
                borderColor: "#e8e0d8",
                boxShadow: "0 2px 16px rgba(21,77,87,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#154D57";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(21,77,87,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e0d8";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(21,77,87,0.04)";
              }}
            >
              <div className="text-[9px] uppercase tracking-[0.3em] mb-5" style={{ color: "#B7A08B" }}>{s.tag}</div>
              <div
                className="w-11 h-11 rounded-xl grid place-items-center mb-5 transition-colors"
                style={{ background: "rgba(21,77,87,0.08)" }}
              >
                <s.icon size={19} style={{ color: "#154D57" }} />
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", color: "#000" }}>{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#8a7b6f" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED PROJECTS ─────────────────────────────────────────── */
const featured = [
  { img: pBrewdog, cat: "Hospitality · On-Going", t: "Brewdog Hotel", loc: "Jubilee Hills" },
  { img: pJntu, cat: "Educational · Completed", t: "JNTU Library Building", loc: "Kalikiri Campus" },
  { img: pCommercial, cat: "Commercial · Completed", t: "Commercial Complex", loc: "Jubilee Hills" },
  { img: pChurch, cat: "Religious · Completed", t: "Methodist Church", loc: "Mehdipatnam" },
  { img: pApartment, cat: "Residential · Completed", t: "Residential Apartment", loc: "Kalyan Nagar" },
  { img: pSaroor, cat: "Residential · Completed", t: "Residential Apartment", loc: "Saroor Nagar" },
];

function FeaturedProjects() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Selected Work</span>
            </div>
            <h2
              className="leading-[1.06]"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#000" }}
            >
              Structures that quietly{" "}
              <em className="not-italic" style={{ color: "#154D57" }}>endure</em>.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm group"
            style={{ color: "#B7A08B" }}
          >
            Full portfolio <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {featured.map((p, i) => {
            const span = ["col-span-12 md:col-span-7","col-span-12 md:col-span-5","col-span-12 md:col-span-4","col-span-12 md:col-span-4","col-span-12 md:col-span-4","col-span-12"][i];
            const aspect = ["aspect-[16/10]","aspect-[16/10]","aspect-[3/4]","aspect-[3/4]","aspect-[3/4]","aspect-[21/8]"][i];
            return (
              <Link
                to="/projects"
                key={i}
                className={`${span} group relative overflow-hidden rounded-2xl`}
                style={{ boxShadow: "0 4px 24px rgba(21,77,87,0.07)" }}
              >
                <div className={`${aspect} w-full`} style={{ background: "#e8e0d8" }}>
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 transition-opacity" style={{ background: "linear-gradient(to top, rgba(21,77,87,0.82) 0%, rgba(21,77,87,0.1) 55%, transparent 100%)" }} />
                {/* Bottom teal sweep on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "#B7A08B" }}
                />
                {/* Info */}
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="text-[9px] uppercase tracking-[0.28em] mb-1" style={{ color: "#B7A08B" }}>{p.cat}</div>
                  <div className="flex items-end justify-between text-white">
                    <div>
                      <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>{p.t}</div>
                      <div className="text-xs mt-0.5 opacity-70">{p.loc}</div>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center border border-white/25 group-hover:border-white/60 transition-colors shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)" }}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── PARTNERS MARQUEE ──────────────────────────────────────────── */
const partners = [
  "Hafeez Contractor","Parushram Reddy","P. Sudheer Reddy","Vamshiram Builders",
  "Aparna Constructions","Ashoka Builders","Vinod Bachala","Debasish Roy",
  "Anwar Aziz","Genesis","Anchuri & Anchuri","Aslam Architects","Nirup Reddy",
  "Maheswari Builders","Bhavya Constructions","Radha Realty Infra","Modi Builders",
  "My Home Construction","Reliance Builders","ARK Builders",
];

function Logos() {
  return (
    <section
      className="py-16 overflow-hidden"
      style={{ background: "#FEFAF7", borderTop: "1px solid #e8e0d8", borderBottom: "1px solid #e8e0d8" }}
    >
      <div className="mb-7 text-center">
        <span className="text-[10px] uppercase tracking-[0.38em]" style={{ color: "#B7A08B" }}>
          Trusted by leading builders & architects
        </span>
      </div>
      <div style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}>
        <div className="flex gap-10 marquee w-max">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-lg"
              style={{ fontFamily: "Georgia, serif", color: "#B7A08B" }}
            >
              {p}<span className="mx-6" style={{ color: "#154D57", opacity: 0.4 }}>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────────────── */
const testimonials = [
  { q: "Their structural detailing gave us confidence on a complex long-span hall — calm, precise, and on schedule.", a: "Architect, Hyderabad" },
  { q: "A practice that treats every drawing like it bears weight. Aditi has been our structural partner for years.", a: "Builder, Jubilee Hills" },
  { q: "From permissions to site supervision — one continuous, dependable thread.", a: "Developer, Kacheguda" },
];

function Testimonials() {
  return (
    <section style={{ background: "#154D57" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "#B7A08B" }} />
            <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#B7A08B" }}>In Their Words</span>
            <div className="h-px w-8" style={{ background: "#B7A08B" }} />
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#FEFAF7" }}>
            Quiet trust, built{" "}
            <em className="not-italic" style={{ color: "#B7A08B" }}>over decades</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl p-8 transition-colors"
              style={{ background: "rgba(254,250,247,0.07)", border: "1px solid rgba(183,160,139,0.25)" }}
            >
              <div style={{ fontFamily: "Georgia, serif", fontSize: "3.5rem", lineHeight: 1, color: "#B7A08B", opacity: 0.5 }}>"</div>
              <blockquote
                className="mt-4 text-lg leading-relaxed"
                style={{ fontFamily: "Georgia, serif", color: "#FEFAF7" }}
              >
                {t.q}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: "rgba(183,160,139,0.3)" }} />
                <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(183,160,139,0.7)" }}>
                  — {t.a}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: "#FEFAF7" }} className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "#FEFAF7", border: "1px solid #e0d8cf" }}
        >
          {/* Hero image backdrop */}
          <img src={hero} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(21,77,87,0.94) 0%, rgba(21,77,87,0.88) 50%, rgba(21,77,87,0.60) 100%)" }}
          />
          {/* Blueprint subtle overlay */}
          <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.04, mixBlendMode: "screen" }} />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center p-10 md:p-16">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "#B7A08B" }} />
                <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#B7A08B" }}>Begin a Project</span>
              </div>
              <h2
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", color: "#FEFAF7", lineHeight: 1.05 }}
              >
                Tell us about the structure
                <br />
                you're <em className="not-italic" style={{ color: "#B7A08B" }}>imagining</em>.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed" style={{ color: "rgba(254,250,247,0.65)", fontSize: "0.95rem" }}>
                A short conversation is often enough to chart the structural direction of your project.
                Book a consultation with Chief Consultant P. Venkateshwara Rao.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-3 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-all hover:opacity-90"
                style={{ background: "#FEFAF7", color: "#154D57" }}
              >
                Book Consultation <ArrowUpRight size={15} />
              </Link>
              <a
                href="https://wa.me/919246270133"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium border-2 transition-all hover:opacity-80"
                style={{ borderColor: "rgba(183,160,139,0.6)", color: "#FEFAF7" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
function Index() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Services />
      <FeaturedProjects />
      <Logos />
      <Testimonials />
      <CTA />
    </Layout>
  );
}