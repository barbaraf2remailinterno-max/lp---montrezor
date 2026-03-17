// Seção 5 — Diferenciais

const PoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <path d="M2 12h20M2 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    <circle cx="8" cy="8" r="2" />
    <path d="M8 10v2M16 8l-4-4" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22V12h6v10M9 6h1M14 6h1M9 10h1M14 10h1" />
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const BalconyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 9v12M15 9v12" />
  </svg>
);

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-10 h-10">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6M15.5 7.5l3 3" />
  </svg>
);

const features = [
  {
    icon: <PoolIcon />,
    title: "Rooftop com piscina",
    description: "Área de descanso com vista panorâmica para a cidade.",
  },
  {
    icon: <BuildingIcon />,
    title: "Arquitetura contemporânea",
    description:
      "Fachada inspirada no Mediterrâneo com vidro, madeira e concreto.",
  },
  {
    icon: <PinIcon />,
    title: "Localização privilegiada",
    description:
      "Farmácias, padarias, supermercados e academia a poucos minutos.",
  },
  {
    icon: <ShieldIcon />,
    title: "Evler: solidez e entrega",
    description:
      "Construtora com trajetória de excelência e compromisso com o prazo.",
  },
  {
    icon: <BalconyIcon />,
    title: "Plantas bem distribuídas",
    description: "Layouts inteligentes com espaço para morar com conforto e privacidade.",
  },
  {
    icon: <KeyIcon />,
    title: "3 quartos com suíte master",
    description:
      "Tipologias com suíte master, pensadas para quem valoriza conforto e privacidade.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#F5F0E8] py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3E] leading-tight">
            Por que o Montrezor?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="
                bg-white border border-gray-100 rounded-2xl p-7 shadow-sm
                hover:border-[#E8500A] hover:shadow-lg
                transition-all duration-200 cursor-default
              "
            >
              {feat.icon}
              <h3 className="text-xl font-semibold text-[#0B1E3E] mt-4">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
