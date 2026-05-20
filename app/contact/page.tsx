export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-50 p-6 shadow-inner">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Soporte al cliente</h2>
                <p className="text-gray-600">
                  ¿Tienes preguntas sobre tu pedido o necesitas ayuda con un producto? Nuestro equipo está listo para asistirte.
                </p>
                <p className="mt-4 text-sm text-gray-500">Email: soporte@ejemplo.com</p>
                <p className="text-sm text-gray-500">Teléfono: +34 912 345 678</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6 shadow-inner">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Horario</h2>
                <p className="text-gray-600">Lunes a viernes: 9:00 - 19:00</p>
                <p className="text-gray-600">Sábados: 10:00 - 16:00</p>
                <p className="text-gray-600">Domingos: cerrado</p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-3xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-3xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntanos cómo podemos ayudarte"
                  className="w-full rounded-3xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

