/**
 * Services Page — Luxury Editorial Inmobiliario
 * Full services page with hero banner, detailed service cards.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Home, KeyRound, TrendingUp, FileText, Search, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const serviceIcons = [Home, KeyRound, TrendingUp, FileText, Search, Settings];
const serviceKeys = ["buy", "rent", "valuation", "legal", "search", "management"] as const;

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="bg-[#1a1a1a] py-20 lg:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label text-[#B8845C] block mb-3">
                {t("services.label")}
              </span>
              <div className="editorial-line bg-[#B8845C] mb-6" />
              <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-white leading-tight mb-4">
                {t("svcPage.hero.title1")}
                <br />
                <span className="text-[#B8845C]">{t("svcPage.hero.title2")}</span>
              </h1>
              <p className="font-sans text-lg text-white/60 max-w-2xl leading-relaxed">
                {t("svcPage.hero.desc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section ref={ref} className="py-20 lg:py-28 bg-cream">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceKeys.map((key, i) => {
                const Icon = serviceIcons[i];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-sm border border-[#e8e4df] hover:shadow-lg hover:border-green-brand/30 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-green-light text-green-brand mb-5 group-hover:bg-green-brand group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">
                      {t(`svc.${key}.title` as TranslationKey)}
                    </h3>
                    <p className="font-sans text-sm text-[#1a1a1a]/60 leading-relaxed mb-4">
                      {t(`svc.${key}.desc` as TranslationKey)}
                    </p>
                    <div className="border-t border-[#e8e4df] pt-4">
                      <p className="font-sans text-sm text-[#1a1a1a]/50 leading-relaxed">
                        {t(`svc.${key}.long` as TranslationKey)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-green-brand">
          <div className="container text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-4">
              {t("cta.title1")} {t("cta.title2")}
            </h2>
            <p className="font-sans text-base text-white/70 max-w-xl mx-auto mb-8">
              {t("cta.desc")}
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-3.5 bg-white text-green-brand font-sans text-sm font-medium tracking-wide rounded-sm hover:bg-cream transition-colors duration-300"
            >
              {t("cta.button")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
