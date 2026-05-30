import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import blueprint from "@/assets/blueprint-bg.jpg";
import {
  Phone, Mail, MapPin, MessageCircle,
  ArrowUpRight, Check, Clock, Building2,
} from "lucide-react";

/* ─── PALETTE
   cream:  #FEFAF7  |  teal: #154D57
   taupe:  #B7A08B  |  white: #FFFFFF  |  black: #000000
──────────────────────────────────────────────────────── */

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Aditi Consultants" },
      { name: "description", content: "Book a consultation with Aditi Consultants. Office in Srinagar Colony, Hyderabad — call, email or WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

/* ─── FIELD ─────────────────────────────────────────────────────── */
function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium"
        style={{ color: "#154D57" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 text-sm rounded-xl transition-all outline-none"
        style={{
          background: "#FEFAF7",
          border: "1.5px solid #e4dbd2",
          color: "#000",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#154D57"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(21,77,87,0.08)"; }}
        onBlur={(e)  => { e.currentTarget.style.borderColor = "#e4dbd2"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FEFAF7" }}>
      <img src={blueprint} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "multiply" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#154D57" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, #154D57, #B7A08B, transparent)" }} />

      <div className="mx-auto max-w-7xl px-8 md:px-14 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10" style={{ background: "#154D57" }} />
          <span className="text-[10px] uppercase tracking-[0.38em] font-medium" style={{ color: "#154D57" }}>
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <h1
              className="leading-[0.96] tracking-tight"
              style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(3rem,6.5vw,6rem)", color: "#000" }}
            >
              Let's begin a
              <br />
              <em className="not-italic" style={{ color: "#154D57" }}>conversation</em>.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6b6057" }}>
              Tell us about your project, your site, or the structure you have in mind. We respond
              within one working day.
            </p>
            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919246270133"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border transition hover:opacity-80"
                style={{ borderColor: "#154D57", color: "#154D57", background: "transparent" }}
              >
                <Phone size={13} /> +91 92462 70133
              </a>
              <a
                href="https://wa.me/919246270133"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition hover:opacity-90"
                style={{ background: "#154D57", color: "#FEFAF7" }}
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
function MainSection() {
  const [sent, setSent] = useState(false);
  const [project, setProject] = useState("Residential");

  return (
    <section style={{ background: "#FFFFFF" }} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-14 grid lg:grid-cols-12 gap-10">

        {/* ── FORM ─────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2" }}
          >
            {/* Form header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Book a Consultation</span>
            </div>

            {sent ? (
              /* Success state */
              <div className="py-16 flex flex-col items-center text-center gap-5">
                <div
                  className="w-16 h-16 rounded-full grid place-items-center"
                  style={{ background: "rgba(21,77,87,0.10)" }}
                >
                  <Check size={26} style={{ color: "#154D57" }} />
                </div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "1.8rem", color: "#000" }}>
                  Message sent.
                </h3>
                <p style={{ color: "#6b6057", maxWidth: "24rem" }}>
                  Thank you for reaching out. P. Venkateshwara Rao or a member of our team will be in
                  touch within one working day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm underline"
                  style={{ color: "#B7A08B" }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="your@email.com" />
                  <Field label="Phone / WhatsApp" name="phone" placeholder="+91 00000 00000" />
                  <Field label="Project Location" name="location" placeholder="Area, City" />
                </div>

                {/* Project type */}
                <div className="mt-5">
                  <label className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium" style={{ color: "#154D57" }}>
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Residential","Commercial","Educational","Religious","Hospitality","Industrial / PEB","Other"].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setProject(t)}
                        className="px-4 py-2 rounded-full text-sm transition-all"
                        style={
                          project === t
                            ? { background: "#154D57", color: "#FEFAF7", border: "1.5px solid #154D57" }
                            : { background: "transparent", color: "#6b6057", border: "1.5px solid #e4dbd2" }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service needed */}
                <div className="mt-5">
                  <label className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium" style={{ color: "#154D57" }}>
                    Service Needed
                  </label>
                  <select
                    className="w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all"
                    style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2", color: "#3a3530" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#154D57"; }}
                    onBlur={(e)  => { e.currentTarget.style.borderColor = "#e4dbd2"; }}
                  >
                    <option value="">Select a service…</option>
                    <option>Structural Design</option>
                    <option>RCC Structures</option>
                    <option>Steel / PEB Structures</option>
                    <option>Project Consultancy</option>
                    <option>Building Permissions (GHMC / HMDA / DTCP)</option>
                    <option>Site Supervision</option>
                    <option>Vaasthu Consultancy</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium" style={{ color: "#154D57" }}>
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Plot size, floors planned, current stage, any specific requirements…"
                    className="w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all resize-none"
                    style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2", color: "#000" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#154D57"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(21,77,87,0.08)"; }}
                    onBlur={(e)  => { e.currentTarget.style.borderColor = "#e4dbd2"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Submit row */}
                <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs" style={{ color: "#B7A08B" }}>
                    We respect your privacy. Your details remain with us.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-90"
                    style={{ background: "#154D57", color: "#FEFAF7" }}
                  >
                    Send Enquiry <ArrowUpRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ── SIDEBAR ──────────────────────────────────────────── */}
        <aside className="lg:col-span-5 flex flex-col gap-5">

          {/* Office details card */}
          <div
            className="rounded-3xl p-7"
            style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6" style={{ background: "#154D57" }} />
              <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>Our Office</span>
            </div>

            <ul className="space-y-5">
              {/* Address */}
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <MapPin size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] mb-1" style={{ color: "#B7A08B" }}>Address</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3a3530" }}>
                    #8-2-1/6-C, Opp. Axis Bank,<br />
                    Srinagar Colony Road,<br />
                    Hyderabad – 500 082
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Phone size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] mb-1" style={{ color: "#B7A08B" }}>Phone</div>
                  <a href="tel:+919246270133" className="text-sm transition hover:opacity-70" style={{ color: "#154D57" }}>
                    +91 92462 70133
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Mail size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] mb-1" style={{ color: "#B7A08B" }}>Email</div>
                  <a
                    href="mailto:aditiconsultants3@gmail.com"
                    className="text-sm break-all transition hover:opacity-70"
                    style={{ color: "#154D57" }}
                  >
                    aditiconsultants3@gmail.com
                  </a>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Clock size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] mb-1" style={{ color: "#B7A08B" }}>Office Hours</div>
                  <p className="text-sm" style={{ color: "#3a3530" }}>Mon – Sat, 9:00 AM – 6:00 PM</p>
                  <p className="text-xs mt-0.5" style={{ color: "#B7A08B" }}>WhatsApp responses within the hour</p>
                </div>
              </li>

              {/* License */}
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Building2 size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] mb-1" style={{ color: "#B7A08B" }}>GHMC License</div>
                  <p className="text-sm font-mono" style={{ color: "#3a3530" }}>
                    166/Stru.Engr./TP10/MCH
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#B7A08B" }}>P. Venkateshwara Rao, Structural Engineer</p>
                </div>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA card */}
          <a
            href="https://wa.me/919246270133"
            target="_blank" rel="noreferrer"
            className="group rounded-3xl p-6 flex items-center justify-between transition-all hover:-translate-y-0.5"
            style={{
              background: "#154D57",
              boxShadow: "0 4px 24px rgba(21,77,87,0.15)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl grid place-items-center"
                style={{ background: "rgba(254,250,247,0.15)" }}
              >
                <MessageCircle size={20} style={{ color: "#FEFAF7" }} />
              </div>
              <div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "1.1rem", color: "#FEFAF7" }}>WhatsApp us directly</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(183,160,139,0.8)" }}>Quick replies during office hours</div>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              style={{ color: "#B7A08B" }}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{ height: "240px", border: "1.5px solid #e4dbd2" }}
          >
            <iframe
              title="Aditi Consultants office — Srinagar Colony, Hyderabad"
              src="https://www.google.com/maps?q=8-2-1/6-C+Srinagar+Colony+Road+Hyderabad+500082&output=embed"
              loading="lazy"
              className="w-full h-full"
              style={{ filter: "saturate(0.6) contrast(1.05)" }}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── FAQ / WHAT TO EXPECT ──────────────────────────────────────── */
function WhatToExpect() {
  const items = [
    { q: "When do you come in?", a: "Before construction begins — ideally during plot planning, before architectural drawings are finalised and before permissions are applied for." },
    { q: "How long does a structural design take?", a: "For a standard residential project, typically 2–3 weeks from brief to GFC drawings. Complex commercial or PEB structures may require more time." },
    { q: "Do you handle building permissions?", a: "Yes — we manage end-to-end GHMC, HMDA and DTCP approvals, from drawing preparation to document submission and follow-up." },
    { q: "What is your coverage area?", a: "Primarily Hyderabad and Telangana, with select projects in Andhra Pradesh (Kalikiri Campus) and Tamil Nadu (Madurai Airport)." },
    { q: "Do you offer Vaasthu consultancy?", a: "Yes, Vaasthu consultancy is offered by our Managing Partner P. Vandana Rao — including plot evaluation, plan alignment and practical remedies." },
  ];

  return (
    <section style={{ background: "#FEFAF7" }} className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-14 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "#154D57" }} />
            <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#154D57" }}>What to Expect</span>
          </div>
          <h2 className="leading-[1.06]" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.2vw,2.8rem)", color: "#000" }}>
            Common
            <br />
            <em className="not-italic" style={{ color: "#154D57" }}>questions</em>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6b6057" }}>
            A few things clients often ask us before they reach out. If your question isn't here, just call or WhatsApp.
          </p>
        </div>

        <div className="md:col-span-8 space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl overflow-hidden border transition-all"
              style={{ background: "#FFFFFF", borderColor: "#e4dbd2" }}
            >
              <summary
                className="flex items-center justify-between px-7 py-5 cursor-pointer list-none"
                style={{ color: "#000" }}
              >
                <span style={{ fontFamily: "Georgia,serif", fontSize: "1.05rem" }}>{item.q}</span>
                <span
                  className="w-7 h-7 rounded-full grid place-items-center shrink-0 ml-4 transition-transform group-open:rotate-45"
                  style={{ background: "rgba(21,77,87,0.08)", color: "#154D57" }}
                >
                  +
                </span>
              </summary>
              <div className="px-7 pb-6 text-sm leading-relaxed" style={{ color: "#6b6057" }}>
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
function ContactPage() {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <WhatToExpect />
    </Layout>
  );
}