import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlexanderLab — Next.js Routing Catalog (LAB 10)",
  description: "Plataforma de catálogo interactivo y navegación resiliente optimizada con Next.js 16 por Alcocer Alexander.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 transition-colors duration-300">
        <Navbar />
        {/* Dynamic content wrapper */}
        <main className="flex-grow flex flex-col relative">
          {children}
        </main>
        
        {/* Sleek Minimalist Footer */}
        <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 font-semibold">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} AlexanderLab. Todos los derechos reservados.</span>
            <span className="flex items-center gap-1">
              Entregable de Laboratorio 10 • Universidad Nacional Mayor de San Marcos
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
