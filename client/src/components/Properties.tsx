/**
 * Properties — Luxury Editorial Inmobiliario
 * Loads properties from local data. Gallery with lightbox.
 */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Bed, Bath, Maximize, ArrowRight, ChevronLeft, ChevronRight, X, Trees, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROPERTIES_DATA } from "@/lib/propertiesData";

/* ── Photo Gallery Lightbox ── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: { url: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#1a1a1a]/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10">
        <X className="w-8 h-8" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <div className="max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex].url}
          alt={`Foto ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-sm"
        />
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2">
        <ChevronRight className="w-8 h-8" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

/* ── Property Card ── */
function PropertyCard({ property, index }: { property: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t, locale } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = property.images || [];
  const hasGallery = images.length > 1;

  const title = locale === "es" ? property.titleEs : locale === "ca" ? property.titleCa : property.titleEn;
  const tagLabel = property.tag === "featured" ? t("props.featured") : property.tag === "exclusive" ? t("props.exclusive") : property.tag === "sold" ? t("props.sold") : t("props.new");
  const typeLabel = property.transactionType === "sale" ? t("props.sale") : t("props.rent");

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group bg-white rounded-sm overflow-hidden border border-[#e8e4df] hover:shadow-xl hover:shadow-[#1a1a1a]/5 transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {images.length > 0 ? (
            <img
              src={images[currentImg]?.url}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
              onClick={() => { setLightboxIndex(currentImg); setLightboxOpen(true); }}
            />
          ) : (
            <div className="w-full h-full bg-[#e8e4df] flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-[#1a1a1a]/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-green-brand/0 group-hover:bg-green-brand/10 transition-all duration-500 pointer-events-none" />

          {hasGallery && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prevImg(); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a1a1a] rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImg(); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a1a1a] rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.slice(0, 7).map((_: any, i: number) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "bg-white w-4" : "bg-white/60 hover:bg-white/80"}`} />
                ))}
                {images.length > 7 && <span className="text-white/80 text-[10px] font-sans ml-1">+{images.length - 7}</span>}
              </div>
              <button onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }} className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#1a1a1a]/70 hover:bg-[#1a1a1a]/90 text-white text-xs font-sans px-2 py-1 rounded-sm transition-colors">
                <ImageIcon className="w-3 h-3" />
                {images.length}
              </button>
            </>
          )}

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-green-brand text-white font-sans text-xs font-medium tracking-wider uppercase rounded-sm">{tagLabel}</span>
            <span className="px-3 py-1 bg-[#1a1a1a]/80 text-white font-sans text-xs font-medium tracking-wider uppercase rounded-sm">{typeLabel}</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#1a1a1a] font-serif text-lg font-semibold rounded-sm">{property.price}</span>
          </div>
        </div>

        <div className="p-5 lg:p-6">
          <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-2 group-hover:text-green-brand transition-colors duration-300">{title}</h3>
          <div className="flex items-center gap-1.5 text-[#1a1a1a]/50 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-sans text-sm">{property.location}</span>
          </div>
          <div className="flex items-center gap-5 pt-4 border-t border-[#e8e4df]">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
                <Bed className="w-4 h-4" />
                <span className="font-sans text-sm">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
                <Bath className="w-4 h-4" />
                <span className="font-sans text-sm">{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
              <Maximize className="w-4 h-4" />
              <span className="font-sans text-sm">{property.area} m²</span>
            </div>
            {property.extraArea > 0 && (
              <div className="flex items-center gap-1.5 text-[#1a1a1a]/60">
                <Trees className="w-4 h-4" />
                <span className="font-sans text-sm">{property.extraArea} m²</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && images.length > 0 && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
            onNext={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Properties() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  
  // Use local data instead of tRPC
  const properties = PROPERTIES_DATA.filter(p => p.isActive === 1);

  return (
    <section id="propiedades" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="section-label block mb-3">
              {t("props.label")}
            </motion.span>
            <motion.div initial={{ width: 0 }} animate={titleInView ? { width: 60 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 bg-copper mb-6" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a] leading-tight">
              {t("props.title1")}
              <br />
              {t("props.title2")}
            </motion.h2>
          </div>
          <motion.a href="/contacto" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="mt-6 lg:mt-0 inline-flex items-center gap-2 font-sans text-sm font-medium text-green-brand hover:text-green-brand/80 transition-colors group">
            {t("props.viewAll")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {!properties || properties.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-sans text-[#1a1a1a]/50">{"No hay propiedades disponibles en este momento."}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
