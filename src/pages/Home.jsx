import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <section id="home" class="relative overflow-hidden bg-indigo-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-6">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500 bg-opacity-30 text-indigo-100 border border-indigo-400 border-opacity-40">
                Colección 2026 · Diseño &amp; Tecnología
              </span>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Productos pensados para elevar tu día a día
              </h1>
              <p class="text-lg sm:text-xl text-indigo-100 max-w-2xl leading-relaxed">
                Descubre nuestra selección curada de tecnología minimalista, accesorios de escritorio y artículos esenciales con garantía directa y envío en 24 horas.
              </p>
              <div class="flex flex-wrap gap-4 pt-2">
                <a href="#productos" class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-indigo-900 font-bold text-base hover:bg-indigo-50 transition duration-200 shadow-lg">
                  Explorar productos
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#beneficios" class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-700 bg-opacity-60 text-white font-semibold text-base border border-indigo-400 border-opacity-40 hover:bg-opacity-80 transition duration-200">
                  Por qué elegirnos
                </a>
              </div>

              <div class="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-500 border-opacity-30 max-w-lg">
                <div>
                  <p class="text-2xl sm:text-3xl font-extrabold">+12k</p>
                  <p class="text-xs sm:text-sm text-indigo-200">Clientes felices</p>
                </div>
                <div>
                  <p class="text-2xl sm:text-3xl font-extrabold">4.9/5</p>
                  <p class="text-xs sm:text-sm text-indigo-200">Valoración media</p>
                </div>
                <div>
                  <p class="text-2xl sm:text-3xl font-extrabold">24h</p>
                  <p class="text-xs sm:text-sm text-indigo-200">Envío express</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl transform hover:-translate-y-1 transition duration-300">
                <div class="flex items-center justify-between mb-4">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                    Producto Destacado
                  </span>
                  <span class="text-sm font-semibold text-indigo-600">-20% Hoy</span>
                </div>
                <div class="h-48 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 overflow-hidden">
                  <img src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp" alt="Auriculares Studio Pro ANC" class="h-full w-full object-contain p-3"/>
                </div>
                <h2 class="text-xl font-bold text-gray-900">Auriculares Studio Pro ANC</h2>
                <p class="text-sm text-gray-600 mt-1">
                  Cancelación activa de ruido, 40h de batería y acabados en aluminio anodizado.
                </p>
                <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div>
                    <span class="text-xs text-gray-400 line-through block">$249.00</span>
                    <span class="text-2xl font-extrabold text-gray-900">$199.00</span>
                  </div>
                  <a href="#productos" class="px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                    Ver catálogo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}