import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_0.8fr] items-center">
        <div className="space-y-8">
          <div className="rounded-full bg-slate-800/80 px-4 py-2 inline-flex text-sm uppercase tracking-[0.3em] text-sky-300 shadow-sm">
            Bienvenido este es mi laboratorio 10
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Mi tienda digital con rutas dinámicas en Next.js
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
              Yo soy Alcocer Flores Alexander
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition hover:shadow-2xl"
            >
              Ver productos
            </Link>
            <Link
              href="/offers"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Ver ofertas
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 hover:-translate-y-1 transition">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Productos</p>
              <p className="mt-4 text-4xl font-bold">100+</p>
              <p className="mt-2 text-slate-300">Productos disponibles con detalles completos.</p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 hover:-translate-y-1 transition">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Categorías</p>
              <p className="mt-4 text-4xl font-bold">6</p>
              <p className="mt-2 text-slate-300">Explora diferentes secciones adaptadas a tus intereses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
