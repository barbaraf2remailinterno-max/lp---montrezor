"use client";

export default function MobileStickyBar() {
  function scrollToForm() {
    const el = document.getElementById("cta-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 py-3">
      <button
        type="button"
        onClick={scrollToForm}
        className="w-full h-[50px] bg-[#FF7820] text-white font-semibold text-sm rounded-xl hover:bg-[#E06010] transition-colors"
      >
        Quero garantir minha visita
      </button>
    </div>
  );
}
