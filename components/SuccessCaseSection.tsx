import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    line1: "Adquiriu um Verona por R$ 175.000",
    line2: "Vendeu por R$ 250.000 (32%)",
  },
  {
    number: 2,
    line1: "Adquiriu um Munich e rentabilizou 32%",
    line2: "10% de desconto à vista",
  },
  {
    number: 3,
    line1: "Adquiriu outro Munich",
    line2: "e rentabilizou 22%",
  },
  {
    number: 4,
    line1: "Com os dois Munich adquiriu um",
    line2: "Montrezor de R$ 640.554,25",
  },
];

export default function SuccessCaseSection() {
  return (
    <section className="py-24 px-6 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <ScrollReveal>
          <span className="inline-block text-[#E8440A] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Case de Sucesso
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0B1E3E] leading-tight mb-12 max-w-xl">
            De R$&nbsp;175 mil a um apartamento de R$&nbsp;640 mil — sem tirar dinheiro do bolso.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Steps + Result */}
          <div className="flex-1">

            {/* 2x2 grid of steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 80}>
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#0B1E3E]/8">
                    {/* Number circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B1E3E] text-white flex items-center justify-center font-black text-base">
                      {step.number}
                    </div>
                    {/* Text */}
                    <div className="pt-1">
                      <p className="text-[#0B1E3E]/70 text-sm leading-snug">{step.line1}</p>
                      <p className="text-[#0B1E3E] font-bold text-sm leading-snug mt-0.5">{step.line2}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Result box */}
            <ScrollReveal delay={400}>
              <div className="rounded-2xl border-2 border-[#0B1E3E]/20 bg-white/60 p-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[#0B1E3E]/50 text-[11px] font-bold tracking-widest uppercase mb-1">
                    Em 4 anos ele terá:
                  </p>
                  <p className="text-[#0B1E3E] font-black text-xl leading-tight">
                    R$ 960.831,37
                  </p>
                  <p className="text-[#E8440A] font-semibold text-sm mt-0.5">
                    50% de valorização
                  </p>
                </div>
                <div className="border-l border-[#0B1E3E]/10 pl-4">
                  <p className="text-[#0B1E3E]/50 text-[11px] font-bold tracking-widest uppercase mb-1">
                    Em 8 anos, ele:
                  </p>
                  <p className="text-[#0B1E3E] font-black text-xl leading-tight">
                    Multiplica o patrimônio
                  </p>
                  <p className="text-[#E8440A] font-semibold text-sm mt-0.5">
                    em aprox. 6x
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Person card */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center lg:w-52">
              {/* Photo placeholder — substitua pelo URL real */}
              <div className="w-44 h-44 rounded-full overflow-hidden bg-[#0B1E3E]/10 border-4 border-white shadow-lg mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B1E3E"
                    strokeWidth="1"
                    className="w-16 h-16 opacity-20"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              {/* Name */}
              <p className="text-[#0B1E3E] font-black tracking-[0.15em] uppercase text-sm text-center">
                Marcos Montrezor
              </p>
              <p className="text-[#E8440A] text-xs font-semibold tracking-wider uppercase mt-1 text-center">
                Investidor Evler
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
