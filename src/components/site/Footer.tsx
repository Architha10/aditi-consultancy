import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpg";
import blueprint from "@/assets/blueprint-bg.jpg";
import { site } from "#/assets/data/site";

/* ─── PALETTE
   cream:  #FEFAF7  |  teal: #154D57
   taupe:  #B7A08B  |  white: #FFFFFF  |  black: #000000
──────────────────────────────────────────────────────── */

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Structural Design",
  "RCC Structures",
  "Steel & PEB",
  // "Building Permissions",
  "Site Supervision",
  "Vedic Vastu Consultancy",
];

export function Footer() {
  return (
    <footer className="relative" style={{ background: "#154D57" }}>
      {/* Blueprint texture overlay */}
      <img
        src={blueprint}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.05, mixBlendMode: "screen" }}
      />

      {/* Top taper — cream fade into teal */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(183,160,139,0.4), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b" style={{ borderColor: "rgba(183,160,139,0.2)" }}>

          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Aditi Consultants"
                className="w-12 h-12 rounded-xl object-contain p-0.5"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
              />
              <div>
                <div
                  style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "1.2rem", color: "#FEFAF7" }}
                >
                  Aditi Consultants
                </div>
                <div
                  className="text-[9px] uppercase tracking-[0.22em] mt-0.5"
                  style={{ color: "rgba(183,160,139,0.7)" }}
                >
                  Structural & Project Consultants
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(254,250,247,0.55)" }}>
              Engineering the skeleton of every great structure since 2001.
              Honest, precise and responsible structural engineering for
              residential, commercial, educational and industrial projects
              across Hyderabad.
            </p>

            {/* Founder pill */}
            <div
              className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{ background: "rgba(254,250,247,0.07)", border: "1px solid rgba(183,160,139,0.2)" }}
            >
              <div
                className="w-8 h-8 rounded-full grid place-items-center text-xs font-medium shrink-0"
                style={{ background: "#FEFAF7", color: "#154D57", fontFamily: "Georgia,serif" }}
              >
                PV
              </div>
              <div>
                <div className="text-xs font-medium" style={{ color: "#FEFAF7" }}>P. Venkateshwara Rao</div>
                <div className="text-[10px]" style={{ color: "rgba(183,160,139,0.7)" }}>M.E. Structures · BITS Pilani</div>
              </div>
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-2">
            <div
              className="text-[9px] uppercase tracking-[0.3em] mb-6"
              style={{ color: "rgba(183,160,139,0.6)" }}
            >
              Navigate
            </div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:opacity-100 group inline-flex items-center gap-1.5"
                    style={{ color: "rgba(254,250,247,0.60)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FEFAF7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(254,250,247,0.60)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <div
              className="text-[9px] uppercase tracking-[0.3em] mb-6"
              style={{ color: "rgba(183,160,139,0.6)" }}
            >
              Services
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors"
                    style={{ color: "rgba(254,250,247,0.60)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FEFAF7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(254,250,247,0.60)"; }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <div
              className="text-[9px] uppercase tracking-[0.3em] mb-6"
              style={{ color: "rgba(183,160,139,0.6)" }}
            >
              Reach Us
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg grid place-items-center shrink-0 mt-0.5"
                  style={{ background: "rgba(254,250,247,0.08)" }}
                >
                  <MapPin size={13} style={{ color: "#B7A08B" }} />
                </div>

                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "rgba(254,250,247,0.60)" }}
                >
                  {site.contact.address}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                  style={{ background: "rgba(254,250,247,0.08)" }}
                >
                  <Phone size={13} style={{ color: "#B7A08B" }} />
                </div>
                <a
                  href="tel:+919246270133"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(254,250,247,0.60)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FEFAF7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(254,250,247,0.60)"; }}
                >
                  +91 92462 70133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                  style={{ background: "rgba(254,250,247,0.08)" }}
                >
                  <Mail size={13} style={{ color: "#B7A08B" }} />
                </div>
                <a
                  href="mailto:aditiconsultants3@gmail.com"
                  className="text-sm break-all transition-colors"
                  style={{ color: "rgba(254,250,247,0.60)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FEFAF7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(254,250,247,0.60)"; }}
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Copyright */}
          <div className="text-xs" style={{ color: "rgba(254,250,247,0.30)" }}>
            © {new Date().getFullYear()} Aditi Consultants. All rights reserved.
          </div>

          {/* WhatsApp quick link */}
          <a
            href="https://wa.me/919246270133"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition hover:opacity-90"
            style={{ background: "#FEFAF7", color: "#154D57" }}
          >
            WhatsApp us
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}