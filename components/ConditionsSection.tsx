// Seção 6 — Condições

export default function ConditionsSection() {
  return (
    <section className="bg-[#0B1E3E] py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <span className="text-xs text-[#E8440A] font-semibold tracking-widest uppercase">
          Condições Especiais
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mt-6 mb-4">
          Obras iniciadas. 70% das unidades já vendidas.
        </h2>
        <p className="text-white/60 text-lg mb-14">
          Ainda há oportunidade de garantir sua unidade com condições exclusivas.
        </p>

        {/* Blocks */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-7xl font-black text-[#E8440A] leading-none">
              10%
            </span>
            <span className="text-white/70 text-lg">de entrada</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-white/20" />

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-7xl font-black text-[#E8440A] leading-none">
              60x
            </span>
            <span className="text-white/70 text-lg">parcelas sem juros*</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-white/20" />

          {/* Block 3 */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-7xl font-black text-[#E8440A] leading-none">
              70%
            </span>
            <span className="text-white/70 text-lg">das unidades vendidas</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-white/40 text-xs mt-10">
          *Com correção INCC
        </p>
      </div>
    </section>
  );
}
