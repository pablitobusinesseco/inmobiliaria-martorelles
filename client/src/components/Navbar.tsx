/**
 * Navbar — Luxury Editorial Inmobiliario
 * Sticky navigation with blur backdrop, minimalist design.
 * Green brand color for accents, Outfit font for nav items.
 */
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/logoonmobiliariamartorelles_2f9d9c26.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1a1a1a] text-white/80 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+34667358422" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-sans text-xs tracking-wide">667 358 422</span>
            </a>
            <a href="mailto:inmo@inmomartorelles.es" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="font-sans text-xs tracking-wide">inmo@inmomartorelles.es</span>
            </a>
          </div>
          <span className="font-sans text-xs tracking-widest uppercase opacity-60">Tu hogar, nuestra prioridad</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="Inmobiliaria Martorelles"
              className="h-12 lg:h-14 w-auto rounded-md"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg lg:text-xl font-semibold text-[#1a1a1a] leading-tight block">
                Inmobiliaria
              </span>
              <span className="font-serif text-lg lg:text-xl font-semibold text-green-brand leading-tight block">
                Martorelles
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-[#1a1a1a]/70 hover:text-green-brand transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-green-brand text-white font-sans text-sm font-medium tracking-wide rounded-sm hover:bg-green-brand/90 transition-colors duration-300"
            >
              Contactar
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#1a1a1a]"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-white/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-serif text-2xl font-medium text-[#1a1a1a] hover:text-green-brand transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 flex flex-col items-center gap-3 text-sm text-[#1a1a1a]/60">
                <a href="tel:+34667358422" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 667 358 422
                </a>
                <a href="mailto:inmo@inmomartorelles.es" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> inmo@inmomartorelles.es
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
