import Link from "next/link";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-650/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-md">
        
        {/* Glowing Badge */}
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/25 text-red-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
          <AlertCircle className="w-8 h-8" />
        </div>

        {/* Big Code */}
        <h1 className="text-7xl font-black tracking-tighter text-transparent bg-gradient-to-b from-white to-slate-500 bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-white">
          Página no encontrada
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          Lo sentimos, el recurso que estás buscando no existe o ha sido trasladado temporalmente.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4 text-indigo-400" />
            Volver al inicio
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer"
          >
            Ver Catálogo
          </Link>
        </div>

      </div>
    </div>
  );
}
