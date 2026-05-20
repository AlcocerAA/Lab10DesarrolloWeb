export default function AboutPage() {
  const features = [
    {
      icon: "🎯",
      title: "Misión",
      description: "Proporcionar productos de calidad con la mejor experiencia de compra online.",
    },
    {
      icon: "🎨",
      title: "Visión",
      description: "Ser la plataforma e-commerce más confiable y accesible de la región.",
    },
    {
      icon: "👍",
      title: "Valores",
      description: "Integridad, innovación y satisfacción del cliente en cada transacción.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa dedicada a ofrecer los mejores productos y servicios con un compromiso inquebrantable hacia nuestros clientes.
          </p>
        </div>

        {/* Historia */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Fundada en 2020, nuestra empresa ha crecido exponencialmente para convertirse en un líder en el mercado de e-commerce. 
            Con más de 10,000 productos disponibles y una comunidad de clientes satisfechos en toda la región, 
            continuamos innovando para ofrecerte la mejor experiencia de compra posible.
          </p>
        </div>

        {/* Characteristics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-blue-100">Productos Disponibles</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-blue-100">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-blue-100">Servicio al Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}