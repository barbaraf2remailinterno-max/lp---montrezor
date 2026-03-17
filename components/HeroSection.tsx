"use client";

import Image from "next/image";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  function scrollToForm() {
    const el = document.getElementById("cta-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://static.wixstatic.com/media/91ad46_770b393be7214ccca6f294612523eede~mv2.png"
          alt="Residencial Montrezor"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,30,62,0.92) 45%, rgba(11,30,62,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-20 pt-28 pb-16">
        {/* Left block */}
        <div className="max-w-xl w-full">
          {/* Badge */}
          <span className="inline-block bg-[#F05A1A] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
            Obras Iniciadas · São João del-Rei, MG
          </span>

          {/* Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mt-4">
            O charme do Mediterrâneo no coração de São João del-Rei.
          </h1>

          {/* Subtitle */}
          <p className="text-base lg:text-lg text-white/80 mt-4 leading-relaxed">
            Residencial Montrezor — apartamentos de 3 quartos com suíte,
            rooftop e lazer completo.
          </p>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-[#F05A1A] mt-6 rounded-full" />

          {/* Conditions pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["10% de entrada", "60x sem juros*", "*com correção INCC"].map(
              (pill) => (
                <span
                  key={pill}
                  className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg border border-white/20"
                >
                  {pill}
                </span>
              )
            )}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={scrollToForm}
            className="
              mt-8 inline-block bg-[#F05A1A] text-white
              px-8 py-4 rounded-lg font-semibold text-base
              hover:bg-[#D44C12] hover:scale-[1.02]
              transition-all duration-200
            "
          >
            Quero conhecer o Montrezor
          </button>
        </div>

        {/* Right block — Form */}
        <div
          id="formulario"
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[420px]">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
