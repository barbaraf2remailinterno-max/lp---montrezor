import type { Metadata } from "next";
import { Raleway, League_Spartan } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Residencial Montrezor | Evler | São João del-Rei, MG",
  description:
    "Residencial Montrezor — apartamentos de 3 quartos com suíte, rooftop e lazer completo no coração de São João del-Rei. Obras em andamento. Evler Incorporadora e Construtora.",
  keywords:
    "Residencial Montrezor, Evler, São João del-Rei, apartamentos, obras em andamento, 3 quartos, rooftop, investimento",
  authors: [{ name: "Evler Incorporadora e Construtora" }],
  openGraph: {
    title: "Residencial Montrezor | Evler | São João del-Rei, MG",
    description:
      "O charme do Mediterrâneo no coração de São João del-Rei. Apartamentos de 3 quartos com suíte, rooftop e 12 itens de lazer.",
    url: "https://montrezor.evler.com.br",
    siteName: "Residencial Montrezor — Evler",
    images: [
      {
        url: "https://static.wixstatic.com/media/91ad46_770b393be7214ccca6f294612523eede~mv2.png",
        width: 1200,
        height: 630,
        alt: "Residencial Montrezor – Fachada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residencial Montrezor | Evler | São João del-Rei, MG",
    description:
      "O charme do Mediterrâneo no coração de São João del-Rei. Apartamentos de 3 quartos com suíte e rooftop.",
    images: [
      "https://static.wixstatic.com/media/91ad46_770b393be7214ccca6f294612523eede~mv2.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${raleway.variable} ${leagueSpartan.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B1E3E" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
