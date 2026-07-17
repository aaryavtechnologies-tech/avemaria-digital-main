import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AvemariaLogo } from "@/components/AvemariaLogo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-brand-dark/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* ── Logo + Name ── */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <AvemariaLogo
            imgClassName="h-11 w-auto"
            showName={true}
            nameVariant={scrolled ? "dark" : "light"}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  to={n.href}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 group ${
                    scrolled
                      ? "text-gray-600 hover:text-brand hover:bg-brand/5"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`}
                  activeProps={{
                    className: scrolled
                      ? "text-brand bg-brand/5 font-semibold"
                      : "text-white font-semibold bg-white/10",
                  }}
                  activeOptions={{ exact: n.href === "/" }}
                >
                  {n.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA – Desktop ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919100000000"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-brand-dark hover:text-brand" : "text-white hover:text-brand-light"
            }`}
          >
            <Phone className="size-4" />
            <span>Call Now</span>
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-brand-glow hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile Burger ── */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-lg p-2 transition-colors ${
            scrolled ? "text-brand-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
          {/* Logo row inside mobile drawer */}
          <div className="flex items-center gap-3 px-6 pt-5 pb-3 border-b border-gray-100">
            <AvemariaLogo imgClassName="h-10 w-auto" showName={true} nameVariant="dark" />
          </div>
          <ul className="flex flex-col p-4 gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  to={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-brand-dark font-medium hover:bg-brand/5 hover:text-brand transition-colors"
                  activeProps={{ className: "bg-brand/5 text-brand font-semibold" }}
                  activeOptions={{ exact: n.href === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+919100000000"
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 py-3 text-brand-dark font-medium hover:bg-gray-200 transition-colors"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-brand py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
              >
                Get a Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
