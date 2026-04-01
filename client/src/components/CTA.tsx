/**
 * CTA — Luxury Editorial Inmobiliario
 * Call to action section for property valuation.
 * Split layout with text and decorative elements.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div
          ref={ref}
          className="relative bg-cream rounded-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Content */}
            <div className="p-8 lg:p-14 xl:p-16">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="section-label block mb-3"
              >
                Valoración gratuita
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-copper mb-6"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-3xl lg:text-4xl font-semibold text-[#1a1a1a] leading-tight mb-4"
              >
                ¿Quieres saber cuánto
                <br />
                vale tu propiedad?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-8"
              >
                Solicita una valoración gratuita y sin compromiso. Nuestros expertos
                analizarán tu propiedad y te ofrecerán un precio justo basado en el
                mercado actual.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3 mb-8"
              >
                {[
                  "Valoración profesional basada en datos reales",
                  "Sin compromiso ni coste alguno",
                  "Respuesta en menos de 24 horas",
                  "Conocimiento experto del mercado local",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4.5 h-4.5 text-green-brand shrink-0" />
                    <span className="font-sans text-sm text-[#1a1a1a]/70">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.a
                href="#contacto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-green-brand/90 transition-all duration-300 rounded-sm group"
              >
                Solicitar valoración gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Right — Decorative */}
            <div className="hidden lg:block relative bg-green-brand">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-10">
                  <div className="font-serif text-7xl font-bold mb-2 opacity-90">98%</div>
                  <div className="font-sans text-sm tracking-wider uppercase opacity-70 mb-8">
                    Clientes satisfechos
                  </div>
                  <div className="w-px h-16 bg-white/20 mx-auto mb-8" />
                  <div className="font-serif text-7xl font-bold mb-2 opacity-90">+500</div>
                  <div className="font-sans text-sm tracking-wider uppercase opacity-70">
                    Operaciones realizadas
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/10 rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-40 h-40 border border-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
