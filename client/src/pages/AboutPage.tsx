/**
 * About Page — Luxury Editorial Inmobiliario
 * Full about page with team photo, values, animal shelter donation section.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Heart, CheckCircle, Users, MapPin, Award, HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/about-team-3hHkwHxJMjdyHqXJkqJBwQ.webp";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const donationRef = useRef(null);
  const donationInView = useInView(donationRef, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: Heart, title: t("val.commitment.title"), text: t("val.commitment.text") },
    { icon: Users, title: t("val.closeness.title"), text: t("val.closeness.text") },
    { icon: Award, title: t("val.professionalism.title"), text: t("val.professionalism.text") },
    { icon: MapPin, title: t("val.specialization.title"), text: t("val.specialization.text") },
  ];

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
                {t("about.label")}
              </span>
              <div className="editorial-line bg-[#B8845C] mb-6" />
              <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-white leading-tight mb-4">
                {t("aboutPage.hero.title1")}
              </h1>
              <p className="font-sans text-lg text-white/60 max-w-2xl leading-relaxed">
                {t("aboutPage.hero.desc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About content */}
        <section ref={ref} className="py-20 lg:py-28 bg-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={TEAM_IMG}
                    alt="Equipo Inmobiliaria Martorelles"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute bottom-0 left-0 bg-green-brand text-white p-5">
                    <span className="font-serif text-3xl font-bold block">15+</span>
                    <span className="font-sans text-xs tracking-wider uppercase">
                      {t("about.years")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <span className="section-label block mb-3">
                  {t("aboutPage.mission.label")}
                </span>
                <div className="editorial-line mb-6" />
                <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1a1a1a] leading-tight mb-6">
                  {t("about.title1")}
                  <br />
                  <span className="text-copper">{t("about.title2")}</span>
                </h2>
                <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-4">
                  {t("about.p1")}
                </p>
                <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-8">
                  {t("about.p2")}
                </p>

                {/* Values */}
                <h3 className="section-label block mb-4">{t("aboutPage.values.label")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((val, i) => {
                    const Icon = val.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-green-light text-green-brand shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-sans text-sm font-semibold text-[#1a1a1a] block">
                            {val.title}
                          </span>
                          <span className="font-sans text-xs text-[#1a1a1a]/50">
                            {val.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animal shelter donation section */}
        <section ref={donationRef} className="py-20 lg:py-28 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={donationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Icon & visual */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-green-light flex items-center justify-center">
                      <HandHeart className="w-20 h-20 lg:w-24 lg:h-24 text-green-brand" strokeWidth={1} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-copper/20 flex items-center justify-center">
                      <Heart className="w-7 h-7 text-copper" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-8">
                  <span className="section-label text-copper block mb-3">
                    {t("about.donation.title")}
                  </span>
                  <div className="editorial-line bg-copper mb-6" />
                  <p className="font-sans text-base text-[#1a1a1a]/70 leading-relaxed mb-6">
                    {t("about.donation.text")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { es: "Donaciones periódicas", ca: "Donacions periòdiques", en: "Regular donations" },
                      { es: "Colaboración activa", ca: "Col·laboració activa", en: "Active collaboration" },
                      { es: "Concienciación social", ca: "Conscienciació social", en: "Social awareness" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-brand" />
                        <span className="font-sans text-sm text-[#1a1a1a]/60">
                          {item[useLanguage().locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials inline */}
        <section className="py-16 lg:py-20 bg-[#1a1a1a]">
          <div className="container text-center">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8845C] block mb-3">
              {t("test.label")}
            </span>
            <div className="w-12 h-0.5 bg-[#B8845C] mx-auto mb-8" />
            <blockquote className="font-serif text-xl lg:text-2xl text-white/80 italic max-w-3xl mx-auto leading-relaxed mb-6">
              "{t("test.1.text")}"
            </blockquote>
            <p className="font-sans text-sm font-semibold text-white">{t("test.1.name")}</p>
            <p className="font-sans text-xs text-white/50">{t("test.1.role")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
