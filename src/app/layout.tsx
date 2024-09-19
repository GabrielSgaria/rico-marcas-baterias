import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "../components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Baterias Pinhais - Rico Marcas",
  description: "Loja de baterias em Pinhais - Rico Marcas, Entrega imediáta!",
  metadataBase: new URL("https://www.bateriaspinhais.com.br"),
  icons: '/favicon.png',
  openGraph: {
    title: "Baterias Pinhais - Rico Marcas",
    description: "Loja de baterias em Pinhais - Rico Marcas, Entrega imediáta!",
    url: "https://www.bateriaspinhais.com.br",
    siteName: "Baterias Pinhais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: 'https://us-west-2.graphassets.com/cm19fu0i602sv08n209yv0k5i/cm19ksa6g8ab408mwporpv51w',
        width: 1200,
        height: 630,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  keywords: [
    "baterias automotivas", "baterias para carro", "troca de bateria", "instalação de bateria", "bateria para moto",
    "bateria automotiva com entrega", "loja de baterias", "melhor bateria para carro", "baterias de qualidade", "serviço de bateria",
    "bateria pinhais", "baterias moura", "baterias em pinhais", "promoção de baterias em pinhais", "bateria pinhais"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-950 bg-zinc-50`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
