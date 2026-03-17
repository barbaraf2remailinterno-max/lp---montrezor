// Seção 7 — São João del-Rei / Localização

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
    stroke="#F05A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 flex-shrink-0">
    <path d="M10 18s-7-5.5-7-10a7 7 0 1114 0c0 4.5-7 10-7 10z" />
    <circle cx="10" cy="8" r="2.5" />
  </svg>
);

const proximities = [
  { label: "Farmácias", distance: "2 min" },
  { label: "Padaria", distance: "3 min" },
  { label: "Supermercados", distance: "3 min" },
  { label: "Academia", distance: "5 min" },
  { label: "Restaurantes e cafés", distance: "5 min" },
  { label: "Bancos e serviços", distance: "7 min" },
];

export default function LocationSection() {
  return (
    <section className="bg-white py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <span className="text-xs text-[#F05A1A] font-semibold tracking-widest uppercase">
            Localização
          </span>
          <h2 className="text-4xl font-bold text-[#0B1E3E] leading-tight mt-3 mb-6">
            Viver em São João del-Rei é encontrar o equilíbrio entre história e
            modernidade.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Com suas encantadoras ruas de pedra e igrejas centenárias, São João
            del-Rei preserva toda a beleza de seu patrimônio histórico. O
            Montrezor está inserido nesse cenário único, com tudo que você precisa
            a poucos minutos.
          </p>

          {/* Proximity list */}
          <ul>
            {proximities.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-3 border-b border-gray-100"
              >
                <MapPinIcon />
                <span className="font-medium text-gray-700 text-sm flex-1">
                  {item.label}
                </span>
                <span className="ml-auto text-sm text-[#F05A1A] font-semibold">
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Map */}
        <div className="w-full h-[280px] sm:h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=Rua+Presidente+Kennedy,+130,+São+João+del-Rei,+MG&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Residencial Montrezor"
          />
        </div>
      </div>
    </section>
  );
}
