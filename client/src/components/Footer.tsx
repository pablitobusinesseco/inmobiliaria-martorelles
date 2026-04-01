/**
 * Footer — Luxury Editorial Inmobiliario
 * Dark footer with editorial layout, copper accents, translated.
 */
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/logoonmobiliariamartorelles_2f9d9c26.jpg";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/servicios" },
    { label: t("nav.properties"), href: "/#propiedades" },
    { label: t("nav.about"), href: "/sobre-nosotros" },
    { label: t("nav.contact"), href: "/contacto" },
  ];

  const serviceLinks = [
    t("footer.svc.buy"),
    t("footer.svc.rent"),
    t("footer.svc.val"),
    t("footer.svc.legal"),
    t("footer.svc.mgmt"),
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Inmobiliaria Martorelles"
                className="h-12 w-auto rounded-md"
              />
              <div>
                <span className="font-serif text-lg font-semibold text-white block leading-tight">
                  Inmobiliaria
                </span>
                <span className="font-serif text-lg font-semibold text-[#B8845C] block leading-tight">
                  Martorelles
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-6">
              {t("nav.slogan")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+34667358422"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-sans text-sm">667 358 422</span>
              </a>
              <a
                href="mailto:inmo@inmomartorelles.es"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-sans text-sm">inmo@inmomartorelles.es</span>
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-sans text-sm">
                  Martorelles, Barcelona
                  <br />
                  Vallès Oriental
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Inmobiliaria Martorelles. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <span className="font-sans text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">
              {t("footer.privacy")}
            </span>
            <span className="font-sans text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">
              {t("footer.legal")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
