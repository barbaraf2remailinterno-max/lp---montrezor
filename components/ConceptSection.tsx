import Image from "next/image";

export default function ConceptSection() {
  return (
    <section className="bg-[#F5F0E8] py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-xs text-[#F5921A] font-semibold tracking-widest uppercase">
            O Conceito
          </span>
          <h2 className="text-4xl font-bold text-[#0B1E3E] leading-tight mt-3 mb-6">
            Onde a tranquilidade se desenha no horizonte.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            O Residencial Montrezor traz o charme das costas ensolaradas do
            Mediterrâneo para a encantadora São João del-Rei. Um lugar onde a
            paz encontra o charme de uma cidade histórica, proporcionando um
            estilo de vida genuíno, conectado com a natureza e com o melhor da
            arquitetura contemporânea.
          </p>
          <p className="text-[#0B1E3E] font-semibold text-base italic">
            Descubra a experiência de estar no Mediterrâneo. Bem-estar, o
            verdadeiro tesouro contemporâneo.
          </p>
        </div>

        {/* Image */}
        <div className="relative h-[260px] sm:h-[360px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://static.wixstatic.com/media/91ad46_f05f8420d63b4a02bbd317d9046d0388~mv2.png"
            alt="Conceito Residencial Montrezor"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            quality={80}
          />
        </div>
      </div>
    </section>
  );
}
