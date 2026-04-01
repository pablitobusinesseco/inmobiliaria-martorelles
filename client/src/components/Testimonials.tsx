/**
 * Testimonials — Luxury Editorial Inmobiliario
 * Editorial quote design with large decorative quotation marks.
 * Green brand background, white text.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Compradora en Martorelles",
    text: "Desde el primer momento nos sentimos acompañados. El equipo de Inmobiliaria Martorelles entendió perfectamente lo que buscábamos y nos encontró la casa de nuestros sueños en tiempo récord.",
    rating: 5,
  },
  {
    name: "Jordi Puig",
    role: "Vendedor en Sant Fost",
    text: "Vendieron mi piso en menos de dos meses y al precio que esperaba. Su conocimiento del mercado local es impresionante. Totalmente recomendables.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Inquilina en Mollet del Vallès",
    text: "Buscaba un alquiler que se ajustara a mi presupuesto y me ofrecieron varias opciones excelentes. La gestión fue rápida, transparente y sin complicaciones.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-[#1e3a2a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8845C]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#B8845C] block mb-3"
          >
            Testimonios
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-[#B8845C] mx-auto mb-10"
          />

          {/* Large decorative quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[120px] lg:text-[180px] text-white leading-none absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          >
            &ldquo;
          </motion.div>

          {/* Testimonial content */}
          <div className="relative min-h-[200px]">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8845C] text-[#B8845C]" />
                ))}
              </div>

              <p className="font-serif text-xl lg:text-2xl xl:text-3xl text-white/90 leading-relaxed mb-8 italic">
                {testimonials[current].text}
              </p>

              <div>
                <p className="font-sans text-sm font-medium text-white tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="font-sans text-xs text-white/50 mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#B8845C] hover:text-[#B8845C] transition-all duration-300 rounded-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#B8845C] w-6" : "bg-white/30"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#B8845C] hover:text-[#B8845C] transition-all duration-300 rounded-sm"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
