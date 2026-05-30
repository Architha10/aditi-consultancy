import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";


const links = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact",  label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { location }            = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(254,250,247,0.92)"
              : "rgba(254,250,247,0.70)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(183,160,139,0.25)",
            boxShadow: scrolled ? "0 4px 24px rgba(21,77,87,0.08)" : "none",
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Aditi Consultants"
              className="w-10 h-10 rounded-lg object-contain p-0.5"
              style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(21,77,87,0.10)" }}
            />
            <div className="leading-tight">
              <div
                className="text-[17px] md:text-[19px] tracking-tight"
                style={{ fontFamily: "Georgia,'Times New Roman',serif", color: "#000000" }}
              >
                Aditi Consultants
              </div>
              <div
                className="text-[9px] uppercase tracking-[0.22em] -mt-0.5"
                style={{ color: "#B7A08B" }}
              >
                Since 2001
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-4 py-2 text-sm rounded-full transition-colors"
                  style={{ color: active ? "#154D57" : "#6b6057" }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-px"
                      style={{ background: "#154D57" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:opacity-90"
              style={{
                background: "#154D57",
                color: "#FEFAF7",
                boxShadow: "0 2px 12px rgba(21,77,87,0.18)",
              }}
            >
              Book Consultation
              <span aria-hidden style={{ color: "#B7A08B" }}>→</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-1 transition-colors rounded-full"
            aria-label="Menu"
            style={{ color: "#154D57" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div
            className="md:hidden mt-3 rounded-3xl p-5"
            style={{
              background: "rgba(254,250,247,0.96)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(183,160,139,0.25)",
              boxShadow: "0 8px 32px rgba(21,77,87,0.10)",
            }}
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-4 py-3 rounded-2xl text-sm transition-colors"
                    style={{
                      color: active ? "#154D57" : "#6b6057",
                      background: active ? "rgba(21,77,87,0.07)" : "transparent",
                      fontWeight: active ? 500 : 400,
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition"
                style={{ background: "#154D57", color: "#FEFAF7" }}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}