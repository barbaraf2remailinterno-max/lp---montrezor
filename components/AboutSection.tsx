import Image from "next/image";

const values = ["Inovação contínua", "Transparência total", "Parcerias sólidas"];

export default function AboutSection() {
  return (
    <section className="bg-[#F5F0E8] py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image */}
        <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://static.wixstatic.com/media/91ad46_1d56f92fffe54ada9194f4a787af1e04~mv2.png"
            alt="Equipe Evler"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            quality={80}
          />
        </div>

        {/* Right — Text */}
        <div>
          {/* Logo */}
          <Image
            src="https://static.wixstatic.com/media/e9f121_2b31b52635934c3a8bcd711f775c0af0~mv2.png"
            alt="Evler"
            width={120}
            height={36}
            className="object-contain h-9 w-auto brightness-0"
          />

          <span className="block text-xs text-[#F05A1A] font-semibold tracking-widest uppercase mt-6 mb-3">
            Quem somos
          </span>

          <h2 className="text-3xl font-bold text-[#0B1E3E] leading-tight mb-5">
            A escolha número um dos investidores de imóveis.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Nossa história começa com a vontade de três empresários em
            transformar o setor imobiliário e se desdobra em uma trajetória de
            excelência. Desde a concepção até a entrega final, cada projeto
            Evler é cuidadosamente idealizado, estruturado e construído com um
            compromisso inegociável com a qualidade.
          </p>

          {/* Mission highlight */}
          <div className="bg-[#0B1E3E] text-white text-sm leading-relaxed p-5 rounded-xl mb-6">
            Nossa missão: transformar o cenário imobiliário de São João
            del-Rei, entregando qualidade de vida e rentabilidade.
          </div>

          {/* Values */}
          <div className="flex flex-wrap gap-6">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F05A1A] flex-shrink-0" />
                <span className="text-[#0B1E3E] font-semibold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
