/**
 * Footer — Luxury Editorial Inmobiliario
 * Dark footer with editorial layout, copper accents.
 */
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/logoonmobiliariamartorelles_2f9d9c26.jpg";

export default function Footer() {
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
              Tu hogar, nuestra prioridad. Más de 15 años de experiencia en el
              mercado inmobiliario del Vallès Oriental.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Propiedades", href: "#propiedades" },
                { label: "Sobre nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {[
                "Compraventa de inmuebles",
                "Alquiler de propiedades",
                "Valoración gratuita",
                "Asesoría legal",
                "Gestión integral",
              ].map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm text-white/50">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] mb-5">
              Contacto
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
            &copy; {new Date().getFullYear()} Inmobiliaria Martorelles. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="font-sans text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">
              Política de privacidad
            </span>
            <span className="font-sans text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">
              Aviso legal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
