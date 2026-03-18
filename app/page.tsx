import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import ConceptSection from "@/components/ConceptSection";
import GallerySection from "@/components/GallerySection";
import ConditionsSection from "@/components/ConditionsSection";
import SuccessCaseSection from "@/components/SuccessCaseSection";
import LocationSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
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

        {/* ── 6. Condições ── */}
        <ConditionsSection />

        {/* ── 7. Case de Sucesso ── */}
        <SuccessCaseSection />

        {/* ── 8. São João del-Rei / Localização ── */}
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

      {/* ── Barra fixa mobile ── */}
      <MobileStickyBar />
    </>
  );
}
