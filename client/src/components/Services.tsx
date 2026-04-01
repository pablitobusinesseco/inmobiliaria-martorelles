/**
 * Services — Luxury Editorial Inmobiliario
 * Asymmetric layout with icon cards, editorial lines.
 * Cream background, green accents, copper decorative elements.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, TrendingUp, Key, FileText, Search, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Compraventa",
    description:
      "Gestionamos la compra y venta de propiedades con un servicio integral, desde la valoración hasta la firma ante notario.",
  },
  {
    icon: Key,
    title: "Alquiler",
    description:
      "Encontramos el inquilino ideal para tu propiedad o el hogar perfecto para ti, con gestión completa del proceso.",
  },
  {
    icon: TrendingUp,
    title: "Valoración gratuita",
    description:
      "Realizamos una valoración profesional y sin compromiso de tu propiedad, basada en datos reales del mercado local.",
  },
  {
    icon: FileText,
    title: "Asesoría legal",
    description:
      "Nuestro equipo legal te acompaña en cada paso, garantizando la seguridad jurídica de todas tus operaciones.",
  },
  {
    icon: Search,
    title: "Búsqueda personalizada",
    description:
      "Definimos tu perfil de búsqueda y te presentamos propiedades que se ajustan exactamente a tus necesidades.",
  },
  {
    icon: Shield,
    title: "Gestión integral",
    description:
      "Nos encargamos de todos los trámites: certificados energéticos, cédulas de habitabilidad, hipotecas y más.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-6 lg:p-8 bg-white rounded-sm border border-[#e8e4df] hover:border-green-brand/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-brand/5"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-green-light text-green-brand mb-5 group-hover:bg-green-brand group-hover:text-white transition-all duration-500">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">
        {service.title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-[#1a1a1a]/60">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label block mb-3"
          >
            Nuestros servicios
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
            Un servicio completo para
            <br />
            cada necesidad inmobiliaria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed"
          >
            Ofrecemos una atención cercana y profesional, adaptada a las particularidades
            del mercado inmobiliario del Vallès Oriental.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
