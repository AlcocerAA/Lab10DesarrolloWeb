import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Params) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] p-6 md:p-10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-50">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400 font-semibold">
              Detalle del producto
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {product.description}
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="rounded-full bg-slate-100 px-5 py-3 text-2xl font-bold text-slate-950">
                ${product.price.toFixed(2)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
                Categoría: <strong className="text-white">{product.category}</strong>
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-100 p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6 text-center hover:border-blue-300 transition">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">Calidad</p>
              <p className="text-3xl font-bold text-slate-900">Premium</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 text-center hover:border-blue-300 transition">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">Envío</p>
              <p className="text-3xl font-bold text-slate-900">Rápido</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 text-center hover:border-blue-300 transition">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">Soporte</p>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Volver a productos
            </Link>
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
