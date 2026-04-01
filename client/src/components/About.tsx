/**
 * About — Luxury Editorial Inmobiliario
 * Asymmetric 60/40 layout with team image and editorial text.
 * Green brand background section, white text.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, MapPin } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/about-team-QhiZpLvsmVUBieFcnoNk3U.webp";

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    text: "Tratamos cada operación como si fuera la nuestra propia.",
  },
  {
    icon: Users,
    title: "Cercanía",
    text: "Somos vecinos de Martorelles, conocemos cada rincón.",
  },
  {
    icon: Award,
    title: "Profesionalidad",
    text: "Formación continua y conocimiento del mercado local.",
  },
  {
    icon: MapPin,
    title: "Especialización",
    text: "Expertos en el Vallès Oriental y comarca.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image column — 5/12 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <img
                src={TEAM_IMG}
                alt="Equipo de Inmobiliaria Martorelles"
                className="w-full h-auto rounded-sm object-cover aspect-[4/3]"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-copper/30 rounded-sm -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-2 lg:-left-6 bg-green-brand text-white p-5 rounded-sm shadow-lg">
              <span className="font-serif text-3xl font-bold block leading-none">15+</span>
              <span className="font-sans text-xs tracking-wider uppercase mt-1 block opacity-80">
                Años de<br />experiencia
              </span>
            </div>
          </motion.div>

          {/* Text column — 7/12 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="section-label block mb-3">Sobre nosotros</span>
            <div className="editorial-line mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-6">
              Conocimiento local,
              <br />
              servicio excepcional
            </h2>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-4">
              En Inmobiliaria Martorelles llevamos más de 15 años ayudando a familias
              a encontrar su hogar ideal en el Vallès Oriental. Nuestro profundo
              conocimiento del mercado local nos permite ofrecer valoraciones precisas
              y un asesoramiento personalizado en cada operación.
            </p>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-8">
              Creemos que comprar o vender una propiedad es una de las decisiones más
              importantes de la vida, y por eso acompañamos a nuestros clientes en
              cada paso del proceso con transparencia, dedicación y profesionalidad.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-green-light text-green-brand shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-1">
                        {value.title}
                      </h4>
                      <p className="font-sans text-sm text-[#1a1a1a]/50 leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
