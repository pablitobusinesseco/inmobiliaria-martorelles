/**
 * Contact — Luxury Editorial Inmobiliario
 * Versión final integrada con EmailJS
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "compra",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TUS DATOS DE EMAILJS YA CONFIGURADOS
    const SERVICE_ID = 'service_nkkbwi1';
    const TEMPLATE_ID = 'template_kg5peax';
    const PUBLIC_KEY = 'Fn5KWtgk0MM2DJ_xa';

    // Parámetros que coinciden con las etiquetas {{ }} de tu plantilla
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.");
        
        // Limpiar el formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "compra",
          message: "",
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <span className="section-label block mb-3">Contacto</span>
            <div className="editorial-line mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1a1a1a] leading-tight mb-4">
              Hablemos de tu
              <br />
              próximo hogar
            </h2>
            <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-10">
              Estamos aquí para ayudarte. Contacta con nosotros y te responderemos
              en menos de 24 horas.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Dirección", value: "Martorelles, Barcelona", sublabel: "Vallès Oriental" },
                { icon: Phone, label: "Teléfono", value: "667 358 422", href: "tel:+34667358422" },
                { icon: Mail, label: "Email", value: "inmo@inmomartorelles.es", href: "mailto:inmo@inmomartorelles.es" },
                { icon: Clock, label: "Horario", value: "Lun - Vie: 9:00 - 19:00", sublabel: "Sáb: 10:00 - 14:00" },
              ].map((item, i) => {
                const Icon = item.icon;
                const Content = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-green-light text-green-brand shrink-0">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/40 block mb-1">{item.label}</span>
                      <span className="font-sans text-sm font-medium text-[#1a1a1a]">{item.value}</span>
                      {"sublabel" in item && item.sublabel && (
                        <span className="font-sans text-xs text-[#1a1a1a]/50 block mt-0.5">{item.sublabel}</span>
                      )}
                    </div>
                  </div>
                );
                return "href" in item && item.href ? (
                  <a key={i} href={item.href} className="block hover:opacity-80 transition-opacity">{Content}</a>
                ) : (
                  <div key={i}>{Content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 lg:p-10 rounded-sm border border-[#e8e4df]">
              <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-6">Envíanos un mensaje</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">Nombre completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                    placeholder="667 000 000"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">Interesado en</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                  >
                    <option value="compra">Comprar una propiedad</option>
                    <option value="venta">Vender mi propiedad</option>
                    <option value="alquiler">Alquilar</option>
                    <option value="valoracion">Valoración gratuita</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-green-brand/90 transition-all duration-300 rounded-sm group"
              >
                Enviar mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
