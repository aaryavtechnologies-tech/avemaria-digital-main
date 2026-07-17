import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { AvemariaLogo } from "@/components/AvemariaLogo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Computer Repair", href: "/services#repair" },
  { label: "Computer Sales", href: "/services#sales" },
  { label: "Service & Maintenance", href: "/services#maintenance" },
  { label: "CCTV Installation", href: "/services#cctv" },
  { label: "MCB Installation", href: "/services#mcb" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-light/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10 pb-12">
          {/* Brand Col */}
          <div>
            <AvemariaLogo imgClassName="h-12 w-auto" showName={true} nameVariant="light" />
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Your trusted partner for expert computer repair, sales, CCTV installation, and comprehensive IT services — delivering reliability and professional excellence every time.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-brand hover:text-white hover:-translate-y-1 hover:shadow-brand-glow"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="transition-colors hover:text-brand-light hover:translate-x-1 inline-block duration-200"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">Our Services</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="transition-colors hover:text-brand-light hover:translate-x-1 inline-block duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">Contact Us</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-brand-light shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  Avemaria Computer Solution,<br />Your City, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-brand-light shrink-0" />
                <a
                  href="tel:+919100000000"
                  className="hover:text-brand-light transition-colors"
                >
                  +91 91000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-brand-light shrink-0" />
                <a
                  href="mailto:info@avemariacomputer.com"
                  className="hover:text-brand-light transition-colors break-all"
                >
                  info@avemariacomputer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Avemaria Computer Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-brand hover:-translate-y-2 hover:shadow-brand-glow z-20 group"
        aria-label="Back to top"
      >
        <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
