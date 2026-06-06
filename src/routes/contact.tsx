import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import blueprint from "@/assets/blueprint-bg.jpg";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Check,
  Clock,
  Building2,
  AlertCircle,
} from "lucide-react";
import {
  commonQuestions,
  projectTypes,
  site,
  smallServices,
} from "#/assets/data/site";
import {
  buildLeadWhatsAppMessage,
  buildWhatsAppUrl,
} from "#/lib/whatsapp";
import { z } from "zod";
// import type { leadSchema } from "#/lib/lead-schema";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Valid phone number required")
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email().optional().or(z.literal("")),
  projectType: z.string().min(1, "Select a project type"),
  service: z.string().min(1, "Select a service"),
  areaSqFt: z.string().optional(),
  packageInterest: z.string().optional(),
  message: z.string().optional(),
  location:z.string().optional(),
 
});

 
type LeadFormData = z.infer<typeof leadSchema>;
type FieldErrors = Partial<Record<keyof LeadFormData, string>>;

/* ─── ROUTE ─────────────────────────────────────────────────────── */
export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Aditi Consultants" },
      {
        name: "description",
        content:
          "Book a consultation with Aditi Consultants. Office in Srinagar Colony, Hyderabad — call, email or WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

/* ─── FIELD COMPONENT ───────────────────────────────────────────── */
interface FieldProps {
  label: string;
  name: keyof LeadFormData;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  required?: boolean;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}: FieldProps) {
  const borderColor = error ? "#c0392b" : "#e4dbd2";
  const focusBorder = error ? "#c0392b" : "#154D57";
  const focusShadow = error
    ? "0 0 0 3px rgba(192,57,43,0.08)"
    : "0 0 0 3px rgba(21,77,87,0.08)";

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium"
        style={{ color: "#154D57" }}
      >
        {label}
        {required && (
          <span style={{ color: "#c0392b" }} aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full px-4 py-3.5 text-sm rounded-xl transition-all outline-none"
        style={{
          background: "#FEFAF7",
          border: `1.5px solid ${borderColor}`,
          color: "#000",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = focusBorder;
          e.currentTarget.style.boxShadow = focusShadow;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = borderColor;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-1.5 text-xs flex items-center gap-1"
          style={{ color: "#c0392b" }}
        >
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── INITIAL FORM STATE ─────────────────────────────────────────── */
const INITIAL_FORM: LeadFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  areaSqFt: "",
  packageInterest: "",
  service: "",
  message: "",
  projectType: "Residential",
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
function MainSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});

  /* Helper: update one field and clear its error */
  function setField<K extends keyof LeadFormData>(key: K, val: LeadFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof LeadFormData;
        if (key && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);

      /* Scroll to first errored field */
      const firstKey = result.error.issues[0]?.path[0] as string | undefined;
      if (firstKey) {
        const el = document.getElementById(firstKey);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        (el as HTMLElement | null)?.focus();
      }
      return;
    }

    setErrors({});

    const whatsappMessage = buildLeadWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      email: formData.email ?? "",
      location: formData.location ?? "",
      service: formData.service,
      projectType: formData.projectType,
      areaSqFt: formData.areaSqFt ?? "",
      packageInterest: formData.packageInterest ?? "",
      message: formData.message ?? "",
    });

    window.open(buildWhatsAppUrl(whatsappMessage), "_blank");
    setSent(true);
  }

  return (
    <section style={{ background: "#FFFFFF" }} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-14 grid lg:grid-cols-12 gap-10">

        {/* ── FORM ────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6" style={{ background: "#154D57" }} />
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "#154D57" }}
              >
                Book a Consultation
              </span>
            </div>

            {sent ? (
              /* ── Success ── */
              <div className="py-16 flex flex-col items-center text-center gap-5">
                <div
                  className="w-16 h-16 rounded-full grid place-items-center"
                  style={{ background: "rgba(21,77,87,0.10)" }}
                >
                  <Check size={26} style={{ color: "#154D57" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia,serif",
                    fontSize: "1.8rem",
                    color: "#000",
                  }}
                >
                  Message sent.
                </h3>
                <p style={{ color: "#6b6057", maxWidth: "24rem" }}>
                  Thank you for reaching out. P. Venkateshwara Rao or a member
                  of our team will be in touch within one working day.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData(INITIAL_FORM);
                    setErrors({});
                  }}
                  className="mt-2 text-sm underline"
                  style={{ color: "#B7A08B" }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(v) => setField("name", v)}
                    error={errors.name}
                    required
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email ?? ""}
                    onChange={(v) => setField("email", v)}
                    error={errors.email}
                  />

                  <Field
                    label="Phone / WhatsApp"
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(v) => setField("phone", v)}
                    error={errors.phone}
                    required
                  />

                  <Field
                    label="Project Location"
                    name="location"
                    placeholder="Area, City"
                    value={formData.location ?? ""}
                    onChange={(v) => setField("location", v)}
                    error={errors.location}
                  />

                  <Field
                    label="Area (Sq Ft)"
                    name="areaSqFt"
                    placeholder="2500"
                    value={formData.areaSqFt ?? ""}
                    onChange={(v) => setField("areaSqFt", v)}
                    error={errors.areaSqFt}
                  />

                  <Field
                    label="Package Interest"
                    name="packageInterest"
                    placeholder="Premium"
                    value={formData.packageInterest ?? ""}
                    onChange={(v) => setField("packageInterest", v)}
                    error={errors.packageInterest}
                  />
                </div>

                {/* Project Type */}
                <div className="mt-5">
                  <p
                    className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium"
                    style={{ color: "#154D57" }}
                  >
                    Project Type{" "}
                    <span style={{ color: "#c0392b" }} aria-hidden="true">
                      *
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setField("projectType", type)}
                        className="px-4 py-2 rounded-full text-sm transition-all"
                        style={
                          formData.projectType === type
                            ? {
                                background: "#154D57",
                                color: "#FEFAF7",
                                border: "1.5px solid #154D57",
                              }
                            : {
                                background: "transparent",
                                color: "#6b6057",
                                border: "1.5px solid #e4dbd2",
                              }
                        }
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p
                      role="alert"
                      className="mt-1.5 text-xs flex items-center gap-1"
                      style={{ color: "#c0392b" }}
                    >
                      <AlertCircle size={11} />
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div className="mt-5">
                  <label
                    htmlFor="service"
                    className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium"
                    style={{ color: "#154D57" }}
                  >
                    Service Needed{" "}
                    <span style={{ color: "#c0392b" }} aria-hidden="true">
                      *
                    </span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setField("service", e.target.value)}
                    aria-invalid={!!errors.service}
                    aria-describedby={
                      errors.service ? "service-error" : undefined
                    }
                    className="w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all"
                    style={{
                      background: "#FEFAF7",
                      border: `1.5px solid ${
                        errors.service ? "#c0392b" : "#e4dbd2"
                      }`,
                      color: formData.service ? "#3a3530" : "#9a8e84",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = errors.service
                        ? "#c0392b"
                        : "#154D57";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.service
                        ? "#c0392b"
                        : "#e4dbd2";
                    }}
                  >
                    <option value="">Select a service…</option>
                    {smallServices.map((s) => (
                      <option key={s.t} value={s.t}>
                        {s.t}
                      </option>
                    ))}
                    <option value="Not sure — need advice">
                      Not sure — need advice
                    </option>
                  </select>
                  {errors.service && (
                    <p
                      id="service-error"
                      role="alert"
                      className="mt-1.5 text-xs flex items-center gap-1"
                      style={{ color: "#c0392b" }}
                    >
                      <AlertCircle size={11} />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-[0.3em] mb-2 font-medium"
                    style={{ color: "#154D57" }}
                  >
                    Leave Us a Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Let us know how we can help with your project..."
                    value={formData.message ?? ""}
                    onChange={(e) => setField("message", e.target.value)}
                    className="w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all resize-none"
                    style={{
                      background: "#FEFAF7",
                      border: "1.5px solid #e4dbd2",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#154D57";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(21,77,87,0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#e4dbd2";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs" style={{ color: "#B7A08B" }}>
                    We respect your privacy. Your details remain with us.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-90 active:scale-95"
                    style={{ background: "#154D57", color: "#FEFAF7" }}
                  >
                    Send Enquiry <ArrowUpRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ── SIDEBAR ─────────────────────────────────────────── */}
        <aside className="lg:col-span-5 flex flex-col gap-5">
          {/* Office details */}
          <div
            className="rounded-3xl p-7"
            style={{ background: "#FEFAF7", border: "1.5px solid #e4dbd2" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6" style={{ background: "#154D57" }} />
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "#154D57" }}
              >
                Our Office
              </span>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <MapPin size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] mb-1"
                    style={{ color: "#B7A08B" }}
                  >
                    Address
                  </div>
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "#3a3530" }}
                  >
                    {site.contact.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Phone size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] mb-1"
                    style={{ color: "#B7A08B" }}
                  >
                    Phone
                  </div>
                  {site.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="block text-sm transition hover:opacity-70"
                      style={{ color: "#154D57" }}
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Mail size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] mb-1"
                    style={{ color: "#B7A08B" }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-sm break-all transition hover:opacity-70"
                    style={{ color: "#154D57" }}
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "rgba(21,77,87,0.09)" }}
                >
                  <Building2 size={16} style={{ color: "#154D57" }} />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] mb-1"
                    style={{ color: "#B7A08B" }}
                  >
                    GHMC License
                  </div>
                  <p className="text-sm font-mono" style={{ color: "#3a3530" }}>
                    166/Stru.Engr./TP10/MCH
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#B7A08B" }}>
                    P. Venkateshwara Rao, Structural Engineer
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919246270133"
            target="_blank"
            rel="noreferrer"
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
                <div
                  style={{
                    fontFamily: "Georgia,serif",
                    fontSize: "1.1rem",
                    color: "#FEFAF7",
                  }}
                >
                  WhatsApp us directly
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(183,160,139,0.8)" }}
                >
                  Quick replies during office hours
                </div>
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
            style={{ height: "340px", border: "1.5px solid #e4dbd2" }}
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

/* ─── FAQ ───────────────────────────────────────────────────────── */
function WhatToExpect() {
  return (
    <section
      style={{ background: "#FEFAF7" }}
      className="py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-14 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "#154D57" }} />
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "#154D57" }}
            >
              What to Expect
            </span>
          </div>
          <h2
            className="leading-[1.06]"
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(2rem,3.2vw,2.8rem)",
              color: "#000",
            }}
          >
            Common
            <br />
            <em className="not-italic" style={{ color: "#154D57" }}>
              questions
            </em>
            .
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "#6b6057" }}
          >
            A few things clients often ask us before they reach out. If your
            question isn't here, just call or WhatsApp.
          </p>
        </div>

        <div className="md:col-span-8 space-y-4">
          {commonQuestions.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl overflow-hidden border transition-all"
              style={{ background: "#FFFFFF", borderColor: "#e4dbd2" }}
            >
              <summary
                className="flex items-center justify-between px-7 py-5 cursor-pointer list-none"
                style={{ color: "#000" }}
              >
                <span
                  style={{
                    fontFamily: "Georgia,serif",
                    fontSize: "1.05rem",
                  }}
                >
                  {item.q}
                </span>
                <span
                  className="w-7 h-7 rounded-full grid place-items-center shrink-0 ml-4 transition-transform group-open:rotate-45"
                  style={{
                    background: "rgba(21,77,87,0.08)",
                    color: "#154D57",
                  }}
                >
                  +
                </span>
              </summary>
              <div
                className="px-7 pb-6 text-sm leading-relaxed"
                style={{ color: "#6b6057" }}
              >
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
      <MainSection />
      <WhatToExpect />
    </Layout>
  );
}