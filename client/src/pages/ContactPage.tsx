/**
 * Contact Page — Luxury Editorial Inmobiliario
 * Full contact page with hero, form, info sidebar, map placeholder.
 * Versión final con EmailJS integrado.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "compra",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // CONFIGURACIÓN DE EMAILJS
    const SERVICE_ID = 'service_nkkbwi1';
    const TEMPLATE_ID = 'template_kg5peax';
    const PUBLIC_KEY = 'Fn5KWtgk0MM2DJ_xa';

    // Estos nombres deben coincidir con los de tu plantilla en EmailJS {{name}}, {{email}}, etc.
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
        toast.success(t("contact.form.success"));
        // Limpiar el formulario tras el éxito
        setFormData({ name: "", email: "", phone: "", subject: "compra", message: "" });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
      });
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
                {t("contact.label")}
              </span>
              <div className="editorial-line bg-[#B8845C] mb-6" />
              <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-white leading-tight mb-4">
                {t("contactPage.hero.title1")}
              </h1>
              <p className="font-sans text-lg text-white/60 max-w-2xl leading-relaxed">
                {t("contactPage.hero.desc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact content */}
        <section ref={ref} className="py-20 lg:py-28 bg-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left — Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4"
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1a1a1a] leading-tight mb-4">
                  {t("contact.title1")}
                  <br />
                  <span className="text-copper">{t("contact.title2")}</span>
                </h2>
                <p className="font-sans text-base text-[#1a1a1a]/60 leading-relaxed mb-10">
                  {t("contact.desc")}
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: t("contact.address.label"),
                      value: t("contact.address.value"),
                      sublabel: t("contact.address.sub"),
                    },
                    {
                      icon: Phone,
                      label: t("contact.phone.label"),
                      value: "667 358 422",
                      href: "tel:+34667358422",
                    },
                    {
                      icon: Mail,
                      label: t("contact.email.label"),
                      value: "inmo@inmomartorelles.es",
                      href: "mailto:inmo@inmomartorelles.es",
                    },
                    {
                      icon: Clock,
                      label: t("contact.hours.label"),
                      value: t("contact.hours.value"),
                      sublabel: t("contact.hours.sub"),
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    const Content = (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-green-light text-green-brand shrink-0">
                          <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/40 block mb-1">
                            {item.label}
                          </span>
                          <span className="font-sans text-sm font-medium text-[#1a1a1a]">
                            {item.value}
                          </span>
                          {"sublabel" in item && item.sublabel && (
                            <span className="font-sans text-xs text-[#1a1a1a]/50 block mt-0.5">
                              {item.sublabel}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                    return "href" in item && item.href ? (
                      <a key={i} href={item.href} className="block hover:opacity-80 transition-opacity">
                        {Content}
                      </a>
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
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 lg:p-10 rounded-sm border border-[#e8e4df]"
                >
                  <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-6">
                    {t("contact.form.title")}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder={t("contact.form.name.ph")}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder="667 000 000"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">
                        {t("contact.form.interest")}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all"
                      >
                        <option value="compra">{t("contact.form.opt.buy")}</option>
                        <option value="venta">{t("contact.form.opt.sell")}</option>
                        <option value="alquiler">{t("contact.form.opt.rent")}</option>
                        <option value="valoracion">{t("contact.form.opt.val")}</option>
                        <option value="otro">{t("contact.form.opt.other")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="font-sans text-xs tracking-wider uppercase text-[#1a1a1a]/50 block mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-[#e8e4df] rounded-sm font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-green-brand focus:ring-1 focus:ring-green-brand/20 outline-none transition-all resize-none"
                      placeholder={t("contact.form.message.ph")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-green-brand/90 transition-all duration-300 rounded-sm group"
                  >
                    {t("contact.form.submit")}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
