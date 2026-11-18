import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { productos } from "../data";
import { ProductCard } from "../components/ProductCard";

export function Products() {
  return (
    <>
      <Header />
      <section id="productos" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Catálogo Oficial</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Nuestros Productos
            </h2>
            <p class="text-gray-600 mt-3 text-base sm:text-lg">
              Calidad comprobada, materiales duraderos y diseño funcional para tu trabajo o tiempo libre.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              productos.map((item) =>(
                <ProductCard data={item}/>
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}