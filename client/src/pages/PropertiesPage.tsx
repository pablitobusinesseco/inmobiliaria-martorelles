/**
 * Properties Page — All properties listing
 * Full page showing all properties from local data with filters and detailed view
 */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, MapPin, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROPERTIES_DATA, Property } from "@/lib/propertiesData";

export default function PropertiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t, locale } = useLanguage();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use local data instead of tRPC
  const properties = PROPERTIES_DATA.filter(p => p.isActive === 1);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

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
                {t("nav.properties")}
              </span>
              <div className="editorial-line bg-[#B8845C] mb-6" />
              <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-white leading-tight mb-4">
                {locale === "es" ? "Nuestras Propiedades" : locale === "ca" ? "Les Nostres Propietats" : "Our Properties"}
              </h1>
              <p className="font-sans text-lg text-white/60 max-w-2xl leading-relaxed">
                {locale === "es"
                  ? "Explora todas nuestras propiedades disponibles en Martorelles y alrededores."
                  : locale === "ca"
                  ? "Explora totes les nostres propietats disponibles a Martorelles i voltants."
                  : "Explore all our available properties in Martorelles and surrounding areas."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Properties Grid */}
        <section ref={ref} className="py-20 lg:py-28 bg-cream">
          <div className="container">
            {properties.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-lg text-[#1a1a1a]/60">
                  {locale === "es" ? "No hay propiedades disponibles" : locale === "ca" ? "No hi ha propietats disponibles" : "No properties available"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property: Property, index: number) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedProperty(property);
                      setCurrentImageIndex(0);
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-sm bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
                        {property.images.length > 0 ? (
                          <img
                            src={property.images[0].url}
                            alt={locale === "es" ? property.titleEs : locale === "ca" ? property.titleCa : property.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Home className="w-12 h-12 text-white/30" />
                          </div>
                        )}

                        {/* Label badge */}
                        {property.tag && (
  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-sm text-xs font-semibold ${property.tag === 'sold' ? 'bg-red-600' : 'bg-green-brand'}`}>
    {property.tag === "featured" 
      ? (locale === "es" ? "Destacada" : locale === "ca" ? "Destacada" : "Featured") 
      : property.tag === "exclusive" 
      ? (locale === "es" ? "Exclusiva" : locale === "ca" ? "Exclusiva" : "Exclusive") 
      : property.tag === "sold"
      ? (locale === "es" ? "Vendido" : locale === "ca" ? "Venut" : "Sold")
      : (locale === "es" ? "Nueva" : locale === "ca" ? "Nova" : "New")}
  </div>
)}

                        {/* Image count */}
                        {property.images.length > 1 && (
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-sm text-xs">
                            {property.images.length} {locale === "es" ? "fotos" : locale === "ca" ? "fotos" : "photos"}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-2 line-clamp-2">
                          {locale === "es" ? property.titleEs : locale === "ca" ? property.titleCa : property.titleEn}
                        </h3>

                        <div className="flex items-center gap-2 text-[#1a1a1a]/60 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span className="font-sans text-sm">{property.location}</span>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-[#1a1a1a]/10">
                          <div className="text-center">
                            <div className="font-serif text-lg font-semibold text-green-brand">
                              {property.bedrooms}
                            </div>
                            <div className="font-sans text-xs text-[#1a1a1a]/60">
                              {locale === "es" ? "Hab." : locale === "ca" ? "Hab." : "Beds"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-serif text-lg font-semibold text-green-brand">
                              {property.bathrooms}
                            </div>
                            <div className="font-sans text-xs text-[#1a1a1a]/60">
                              {locale === "es" ? "Baños" : locale === "ca" ? "Banys" : "Baths"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-serif text-lg font-semibold text-green-brand">
                              {property.area}
                            </div>
                            <div className="font-sans text-xs text-[#1a1a1a]/60">m²</div>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-2xl font-bold text-green-brand">
                            {property.price}
                          </span>
                          <button className="bg-green-brand text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-colors text-sm font-semibold">
                            {locale === "es" ? "Ver" : locale === "ca" ? "Veure" : "View"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProperty(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 hover:bg-[#1a1a1a]/10 transition-colors shadow-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image gallery */}
            {selectedProperty.images.length > 0 && (
              <div className="relative h-96 bg-[#1a1a1a]">
                <img
                  src={selectedProperty.images[currentImageIndex]?.url}
                  alt={`${locale === "es" ? selectedProperty.titleEs : locale === "ca" ? selectedProperty.titleCa : selectedProperty.titleEn} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation arrows */}
                {selectedProperty.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                      {currentImageIndex + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Property info */}
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-2">
                    {locale === "es" ? selectedProperty.titleEs : locale === "ca" ? selectedProperty.titleCa : selectedProperty.titleEn}
                  </h2>
                  <div className="flex items-center gap-2 text-[#1a1a1a]/60">
                    <MapPin className="w-5 h-5" />
                    <span className="font-sans text-lg">{selectedProperty.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-green-brand mb-1">
                    {selectedProperty.price}
                  </div>
                  <div className="bg-green-brand/10 text-green-brand px-3 py-1 rounded-sm text-sm font-semibold inline-block">
                    {selectedProperty.transactionType === "sale" ? (locale === "es" ? "Venta" : locale === "ca" ? "Venda" : "Sale") : (locale === "es" ? "Alquiler" : locale === "ca" ? "Lloguer" : "Rent")}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y border-[#1a1a1a]/10">
                <div>
                  <div className="font-sans text-sm text-[#1a1a1a]/60 mb-1">
                    {locale === "es" ? "Habitaciones" : locale === "ca" ? "Habitacions" : "Bedrooms"}
                  </div>
                  <div className="font-serif text-xl font-semibold">{selectedProperty.bedrooms}</div>
                </div>
                <div>
                  <div className="font-sans text-sm text-[#1a1a1a]/60 mb-1">
                    {locale === "es" ? "Baños" : locale === "ca" ? "Banys" : "Bathrooms"}
                  </div>
                  <div className="font-serif text-xl font-semibold">{selectedProperty.bathrooms}</div>
                </div>
                <div>
                  <div className="font-sans text-sm text-[#1a1a1a]/60 mb-1">
                    {locale === "es" ? "Superficie" : locale === "ca" ? "Superfície" : "Area"}
                  </div>
                  <div className="font-serif text-xl font-semibold">{selectedProperty.area} m²</div>
                </div>
                {selectedProperty.extraArea > 0 && (
                  <div>
                    <div className="font-sans text-sm text-[#1a1a1a]/60 mb-1 capitalize">
                      {selectedProperty.extraAreaLabel || (locale === "es" ? "Extra" : locale === "ca" ? "Extra" : "Extra")}
                    </div>
                    <div className="font-serif text-xl font-semibold">{selectedProperty.extraArea} m²</div>
                  </div>
                )}
              </div>

              <div className="prose prose-green max-w-none">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {locale === "es" ? "Descripción" : locale === "ca" ? "Descripció" : "Description"}
                </h3>
                <p className="font-sans text-[#1a1a1a]/80 leading-relaxed whitespace-pre-wrap">
                  {locale === "es" ? selectedProperty.descriptionEs : locale === "ca" ? selectedProperty.descriptionCa : selectedProperty.descriptionEn}
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="/contacto"
                  className="inline-block bg-green-brand text-white px-8 py-4 rounded-sm font-sans font-bold hover:bg-green-700 transition-all text-center w-full md:w-auto"
                >
                  {locale === "es" ? "Solicitar información" : locale === "ca" ? "Sol·licitar informació" : "Request information"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}
