/**
 * Hero — Luxury Editorial Inmobiliario
 * Full-screen cinematic hero with parallax-like overlay, translated.
 */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/hero-banner-anFY8fVE7QkkYsq6sSsJPr.webp";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Vista panorámica del Vallès Oriental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/20" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label text-[#B8845C] mb-4 block">
              {t("hero.label")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            {t("hero.title1")}
            <br />
            <span className="text-[#B8845C]">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/#propiedades"
              className="inline-flex items-center px-8 py-3.5 bg-green-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-green-brand/90 transition-all duration-300 rounded-sm"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white font-sans text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-white/10"
      >
        <div className="container py-5 flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-0">
          {[
            { number: "+500", label: t("hero.stat1") },
            { number: "15+", label: t("hero.stat2") },
            { number: "98%", label: t("hero.stat3") },
            { number: "24h", label: t("hero.stat4") },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 lg:px-8">
              <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#B8845C]">
                {stat.number}
              </span>
              <p className="font-sans text-xs tracking-wider text-white/60 mt-1 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
