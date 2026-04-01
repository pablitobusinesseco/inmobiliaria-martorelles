/**
 * Home Page — Luxury Editorial Inmobiliario
 * Simplified: Hero, Services summary, Properties, CTA.
 * Design: Cormorant Garamond + Outfit, green salvia + cream + copper.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Properties />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
