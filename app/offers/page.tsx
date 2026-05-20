export default function OffersPage() {
  const offers = [
    {
      title: "Descuento de verano",
      subtitle: "Hasta 40% en electrónica seleccionada",
      description: "Aprovecha nuestras rebajas de temporada en smartphones, audífonos y dispositivos inteligentes.",
    },
    {
      title: "Envío gratis",
      subtitle: "Pedidos superiores a $70",
      description: "Compra ahora y recibe envío gratuito en tu pedido sin importar la categoría.",
    },
    {
      title: "Combo 2x1",
      subtitle: "Moda y accesorios",
      description: "Elige dos productos y paga solo uno en artículos participantes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Ofertas Especiales
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No te pierdas nuestras promociones exclusivas y ahorra en tus compras favoritas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div key={index} className="group rounded-3xl bg-white p-8 shadow-xl border border-gray-200 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-4">✨</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h2>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold mb-3">{offer.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para aprovechar?</h3>
          <p className="text-lg text-slate-100 max-w-3xl leading-relaxed mb-6">
            Revisa nuestras ofertas antes de que terminen y descubre productos con los mejores descuentos del año.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-slate-100 transition"
            >
              Ver productos
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition"
            >
              Contactar soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

