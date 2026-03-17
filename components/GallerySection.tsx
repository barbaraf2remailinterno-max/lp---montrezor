"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Gera URL otimizada direto no CDN do Wix (sem passar pelo Next.js image optimizer)
function wixOpt(url: string, w = 1920, h = 500, q = 75): string {
  const file = url.split("/media/")[1];
  return `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${file}`;
}

const RAW = [
  { src: "https://static.wixstatic.com/media/91ad46_f05f8420d63b4a02bbd317d9046d0388~mv2.png", label: "Piscina" },
  { src: "https://static.wixstatic.com/media/91ad46_9c269b4e941348388fe11e1a298521c3~mv2.png", label: "Deck com acessibilidade" },
  { src: "https://static.wixstatic.com/media/91ad46_593d367fea3848db882c6a89d10e48ab~mv2.png", label: "Sky Bar" },
  { src: "https://static.wixstatic.com/media/91ad46_3e7e39deea7046e892479a5ecfb90076~mv2.jpg", label: "Espaço Luau" },
  { src: "https://static.wixstatic.com/media/91ad46_27ac92455eec428d86ca2599797b51d0~mv2.png", label: "Academia" },
  { src: "https://static.wixstatic.com/media/91ad46_ebe041daad324c48b41f5590a23132b8~mv2.png", label: "Cinema" },
  { src: "https://static.wixstatic.com/media/91ad46_cab072194a9c4f60a2ad7818e6ce61bd~mv2.png", label: "Coworking" },
  { src: "https://static.wixstatic.com/media/91ad46_f35972cbf64b43959089a6729e7cc7a2~mv2.jpg", label: "Sauna" },
  { src: "https://static.wixstatic.com/media/91ad46_c844c7f1a60f45809d25b752c17b0c7e~mv2.jpg", label: "Playground" },
  { src: "https://static.wixstatic.com/media/91ad46_195dab9cf56240eea26ebc60fd3978dc~mv2.jpg", label: "Área Gourmet" },
  { src: "https://static.wixstatic.com/media/91ad46_b8a01e107cf0413ebf2abc69d0f3a885~mv2.jpg", label: "Salão de Festas" },
];

const slides = RAW.map((s) => ({ ...s, optimized: wixOpt(s.src) }));

export default function GallerySection() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: true },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollLock = useRef(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi || scrollLock.current) return;
    scrollLock.current = true;
    emblaApi.scrollPrev();
    setTimeout(() => { scrollLock.current = false; }, 600);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi || scrollLock.current) return;
    scrollLock.current = true;
    emblaApi.scrollNext();
    setTimeout(() => { scrollLock.current = false; }, 600);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => {
      if (!emblaApi || scrollLock.current) return;
      scrollLock.current = true;
      emblaApi.scrollTo(i);
      setTimeout(() => { scrollLock.current = false; }, 600);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    update();
    return () => { emblaApi.off("select", update); };
  }, [emblaApi]);

  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="text-center px-8 mb-12">
        <span className="text-xs text-[#E8440A] font-semibold tracking-widest uppercase">
          Área de Lazer
        </span>
        <h2 className="text-4xl font-bold text-[#0B1E3E] mt-3">
          Um lugar que você vai querer mostrar pra todo mundo.
        </h2>
        <p className="text-gray-500 text-lg mt-3">
          12 itens de lazer pensados para o seu melhor momento.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="embla__slide relative flex-[0_0_100%] h-[320px] sm:h-[420px] lg:h-[500px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.optimized}
                  alt={slide.label}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "low"}
                  decoding={i === 0 ? "sync" : "async"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Bottom gradient + label */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
                  }}
                />
                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl font-semibold tracking-wide">
                  {slide.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#E8440A] text-white flex items-center justify-center hover:bg-[#C83508] transition-colors shadow-lg z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" className="w-5 h-5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Próximo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#E8440A] text-white flex items-center justify-center hover:bg-[#C83508] transition-colors shadow-lg z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" className="w-5 h-5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap px-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 h-2.5 bg-[#E8440A]"
                  : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
