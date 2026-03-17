"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E3E] h-[72px] flex items-center">
      <div className="w-full flex items-center justify-between px-6 lg:px-20">
        {/* Logo — img nativo garante filtro CSS em qualquer browser mobile */}
        <Link href="/" aria-label="Evler">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/e9f121_2b31b52635934c3a8bcd711f775c0af0~mv2.png"
            alt="Evler"
            height={36}
            style={{
              height: "36px",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* CTA Button */}
        <a
          href="https://wa.me/5532999798113"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 rounded-lg hover:bg-white hover:text-[#0B1E3E] transition-all duration-200 whitespace-nowrap"
        >
          Falar com consultor
        </a>
      </div>
    </nav>
  );
}
