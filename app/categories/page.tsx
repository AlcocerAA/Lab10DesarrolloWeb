export default function CategoriesPage() {
  const categories = [
    {
      name: "Electrónica",
      emoji: "📱",
      description: "Dispositivos y accesorios electrónicos de última generación.",
      color: "from-blue-400 to-blue-600",
      items: 2500,
    },
    {
      name: "Ropa y Moda",
      emoji: "👕",
      description: "Prendas de vestir y accesorios para toda la familia.",
      color: "from-pink-400 to-pink-600",
      items: 3200,
    },
    {
      name: "Libros",
      emoji: "📚",
      description: "Amplía tu conocimiento con nuestra colección de libros.",
      color: "from-yellow-400 to-yellow-600",
      items: 1500,
    },
    {
      name: "Deportes",
      emoji: "\u26bd",
      description: "Equipamiento deportivo para todas tus actividades favoritas.",
      color: "from-green-400 to-green-600",
      items: 1800,
    },
    {
      name: "Hogar",
      emoji: "🏛️",
      description: "Todo lo que necesitas para decorar y amueblar tu hogar.",
      color: "from-orange-400 to-orange-600",
      items: 2100,
    },
    {
      name: "Belleza",
      emoji: "💄",
      description: "Productos de cuidado personal y cosmética de marcas reconocidas.",
      color: "from-purple-400 to-purple-600",
      items: 1200,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Categorías
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestras categorías de productos y encuentra exactamente lo que buscas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Header Color Bar */}
              <div
                className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
              >
                {category.emoji}
              </div>
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    {category.items.toLocaleString()} productos
                  </span>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    Ver →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
