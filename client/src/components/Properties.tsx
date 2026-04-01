/**
 * Properties — Luxury Editorial Inmobiliario
 * Property cards with hover overlay reveal, editorial grid, translated.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PROP_1 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/luxury-property-1-DW5ev2eXiZMrtXTLyhBGaf.webp";
const PROP_2 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/luxury-property-2-Pf9ZTa8VkMXjbCCP5MFSps.webp";
const PROP_3 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/luxury-property-3-eZQmCXgMe9ujbjRBxmbTgF.webp";

interface PropertyData {
  image: string;
  title: { es: string; ca: string; en: string };
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  tagKey: "props.featured" | "props.exclusive" | "props.new";
  typeKey: "props.sale" | "props.rent";
}

const properties: PropertyData[] = [
  {
    image: PROP_1,
    title: {
      es: "Villa Mediterránea con Piscina",
      ca: "Vila Mediterrània amb Piscina",
      en: "Mediterranean Villa with Pool",
    },
    location: "Martorelles, Vallès Oriental",
    price: "485.000 €",
    beds: 4,
    baths: 3,
    area: 280,
    tagKey: "props.featured",
    typeKey: "props.sale",
  },
  {
    image: PROP_2,
    title: {
      es: "Masía Catalana Renovada",
      ca: "Masia Catalana Renovada",
      en: "Renovated Catalan Farmhouse",
    },
    location: "Sant Fost de Campsentelles",
    price: "620.000 €",
    beds: 5,
    baths: 3,
    area: 350,
    tagKey: "props.exclusive",
    typeKey: "props.sale",
  },
  {
    image: PROP_3,
    title: {
      es: "Apartamento con Vistas Panorámicas",
      ca: "Apartament amb Vistes Panoràmiques",
      en: "Apartment with Panoramic Views",
    },
    location: "Mollet del Vallès",
    price: "1.200 €/mes",
    beds: 3,
    baths: 2,
    area: 110,
    tagKey: "props.new",
    typeKey: "props.rent",
  },
];

function PropertyCard({ property, index }: { property: PropertyData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t, locale } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-sm overflow-hidden border border-[#e8e4df] hover:shadow-xl hover:shadow-[#1a1a1a]/5 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title[locale]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-green-brand/0 group-hover:bg-green-brand/20 transition-all duration-500" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-green-brand text-white font-sans text-xs font-medium tracking-wider uppercase rounded-sm">
            {t(property.tagKey)}
          </span>
          <span className="px-3 py-1 bg-[#1a1a1a]/80 text-white font-sans text-xs font-medium tracking-wider uppercase rounded-sm">
            {t(property.typeKey)}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#1a1a1a] font-serif text-lg font-semibold rounded-sm">
            {property.price}
          </span>
        </div>
      </div>
      <div className="p-5 lg:p-6">
        <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-2 group-hover:text-green-brand transition-colors duration-300">
          {property.title[locale]}
        </h3>
        <div className="flex items-center gap-1.5 text-[#1a1a1a]/50 mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-sans text-sm">{property.location}</span>
        </div>
        <div className="flex items-center gap-5 pt-4 border-t border-[#e8e4df]">
          <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
            <Bed className="w-4 h-4" />
            <span className="font-sans text-sm">{property.beds}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
            <Bath className="w-4 h-4" />
            <span className="font-sans text-sm">{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
            <Maximize className="w-4 h-4" />
            <span className="font-sans text-sm">{property.area} m²</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="propiedades" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label block mb-3"
            >
              {t("props.label")}
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
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a] leading-tight"
            >
              {t("props.title1")}
              <br />
              {t("props.title2")}
            </motion.h2>
          </div>
          <motion.a
            href="/contacto"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 font-sans text-sm font-medium text-green-brand hover:text-green-brand/80 transition-colors group"
          >
            {t("props.viewAll")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <PropertyCard key={i} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
