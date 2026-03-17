import Link from "next/link";

// ── Social icons ──────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: "Início", href: "https://www.evler.com.br" },
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Sobre a Evler", href: "/sobre" },
  { label: "Contato", href: "/contato-evler" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/evler.inc",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/evler.inc",
    icon: <FacebookIcon />,
    label: "Facebook",
  },
  {
    href: "https://pt.linkedin.com/company/evler.inc",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1528] px-8 lg:px-20 pt-12 pb-8">
      {/* Top divider */}
      <div className="border-t border-white/10 mb-10" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Col 1 */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/e9f121_2b31b52635934c3a8bcd711f775c0af0~mv2.png"
            alt="Evler"
            style={{
              height: "30px",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
          />
          <p className="text-white/50 text-sm mt-4">
            R. Amaral Gurgel, 150 - Matozinhos
          </p>
          <p className="text-white/50 text-sm">
            São João del-Rei - MG, 36305-150
          </p>
          <p className="text-white/50 text-sm mt-2">(32) 99979-8113</p>
          <p className="text-white/50 text-sm">contato@evler.com.br</p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-3 md:items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Col 3 */}
        <div className="md:text-right">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
            Redes sociais
          </p>
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:opacity-70 transition-opacity"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 max-w-7xl mx-auto">
        <p className="text-white/30 text-xs text-center leading-relaxed">
          As imagens são meramente ilustrativas. Sujeito a alterações sem aviso
          prévio.
          <br />
          Residencial Montrezor — Evler Incorporadora e Construtora. São João
          del-Rei, MG.
        </p>
      </div>
    </footer>
  );
}
