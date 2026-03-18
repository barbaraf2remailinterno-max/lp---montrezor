import LeadForm from "./LeadForm";

export default function CTASection() {
  return (
    <section
      id="cta-form"
      className="py-24 px-8"
      style={{
        background: "linear-gradient(to bottom right, #0B1E3E, #122848)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-[#E8440A] text-white text-xs font-bold tracking-widest px-5 py-2 rounded-full uppercase">
          Poucas Unidades Disponíveis
        </span>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-6">
          Obras iniciadas. Garanta sua unidade agora.
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-lg mt-4 leading-relaxed">
          70% das unidades já foram vendidas. Preencha o formulário agora e
          um consultor Evler entrará em contato em minutos.
        </p>

        {/* Divider */}
        <div className="w-xs max-w-xs mx-auto mt-8 border-t border-white/20" />

        {/* Form */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md">
            <LeadForm />
          </div>
        </div>

      </div>
    </section>
  );
}
