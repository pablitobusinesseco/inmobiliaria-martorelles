/**
 * Services Summary — Home page
 * Compact 3-card preview of services with link to full page.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, KeyRound, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const previewServices = [
  { icon: Home, key: "buy" },
  { icon: KeyRound, key: "rent" },
  { icon: TrendingUp, key: "valuation" },
] as const;

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label block mb-3"
            >
              {t("services.label")}
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              animate={titleInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-copper mb-6"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            >
              {t("services.title1")}
              <br />
              {t("services.title2")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed"
            >
              {t("services.description")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-green-brand hover:text-copper transition-colors group"
            >
              {t("services.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 3 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewServices.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.key}
                initial={{ opacity: 0, y: 40 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group p-6 lg:p-8 bg-white rounded-sm border border-[#e8e4df] hover:border-green-brand/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-brand/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-green-light text-green-brand mb-5 group-hover:bg-green-brand group-hover:text-white transition-all duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">
                  {t(`svc.${svc.key}.title` as TranslationKey)}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#1a1a1a]/60">
                  {t(`svc.${svc.key}.desc` as TranslationKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
