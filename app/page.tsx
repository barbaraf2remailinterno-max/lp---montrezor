import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import ConceptSection from "@/components/ConceptSection";
import GallerySection from "@/components/GallerySection";
import FeatureSection from "@/components/FeatureSection";
import ConditionsSection from "@/components/ConditionsSection";
import LocationSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar />

      <main>
        {/* ── 1. Hero ── */}
        <HeroSection />

        {/* ── 2. Números ── */}
        <NumbersSection />

        {/* ── 3. Conceito ── */}
        <ConceptSection />

        {/* ── 4. Galeria de Lazer ── */}
        <GallerySection />

        {/* ── 5. Diferenciais ── */}
        <FeatureSection />

        {/* ── 6. Condições ── */}
        <ConditionsSection />

        {/* ── 7. São João del-Rei / Localização ── */}
        <LocationSection />

        {/* ── 8. Sobre a Evler ── */}
        <AboutSection />

        {/* ── 9. CTA Final ── */}
        {/* padding-bottom no mobile para não sobrepor a barra fixa */}
        <div className="pb-20 lg:pb-0">
          <CTASection />
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── WhatsApp Float (desktop) ── */}
      <WhatsAppFloat />

      {/* ── Barra fixa mobile ── */}
      <MobileStickyBar />
    </>
  );
}
