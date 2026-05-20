import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function getProducts(): Promise<Product[]> {
  try {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);

    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("API Error:", res.status);
      return [];
    }

    const contentType = res.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.error("La respuesta no es JSON");
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Nuestros Productos
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de productos.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-red-500 text-xl font-semibold">
            No se pudieron cargar los productos.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group h-full rounded-3xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <Link
                  href={`/products/${product.id}`}
                  className="block h-full"
                >
                  <div className="relative h-48 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="mt-auto pt-4">
                      <span className="inline-block text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Ver detalles →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}