"use client";

import { useEffect, useRef, useState } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-12 h-12">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-12 h-12">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6M15.5 7.5l3 3" />
  </svg>
);

const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-12 h-12">
    <path d="M2 4v16M2 8h20v12M2 12h20" />
    <rect x="6" y="12" width="4" height="4" />
  </svg>
);

const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-12 h-12">
    <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l3-5h12l3 5h1a2 2 0 012 2v6a2 2 0 01-2 2h-2M5 17h14M5 17v2M19 17v2" />
    <circle cx="7.5" cy="17" r="1.5" />
    <circle cx="16.5" cy="17" r="1.5" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-12 h-12">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ── Counter ───────────────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
const stats = [
  { icon: <BuildingIcon />, target: 18, suffix: "", label: "Andares" },
  { icon: <KeyIcon />, target: 78, suffix: "", label: "Unidades" },
  { icon: <BedIcon />, target: 3, suffix: "", label: "Quartos" },
  { icon: <CarIcon />, target: 105, suffix: "", label: "Vagas" },
  { icon: <StarIcon />, target: 12, suffix: "+", label: "Itens de lazer" },
];

export default function NumbersSection() {
  return (
    <section className="bg-[#0B1E3E] py-20 px-8">
      <h2 className="text-4xl font-bold text-white text-center mb-14">
        Excelência que se mede em cada detalhe.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center">
            {stat.icon}
            <Counter target={stat.target} suffix={stat.suffix} />
            <span className="text-sm text-white/60 font-medium uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
