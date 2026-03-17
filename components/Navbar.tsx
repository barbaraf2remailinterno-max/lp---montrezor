"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E3E] h-[72px] flex items-center">
      <div className="w-full flex items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href="/" aria-label="Evler">
          <Image
            src="https://static.wixstatic.com/media/e9f121_2b31b52635934c3a8bcd711f775c0af0~mv2.png"
            alt="Evler"
            width={120}
            height={36}
            className="object-contain h-9 w-auto brightness-0 invert"
            priority
            unoptimized
          />
        </Link>

        {/* CTA Button */}
        <a
          href="https://wa.me/5532999798113"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-white text-white text-sm font-medium
            px-5 py-2 rounded-lg
            hover:bg-white hover:text-[#0B1E3E]
            transition-all duration-200
          "
        >
          Falar com consultor
        </a>
      </div>
    </nav>
  );
}
