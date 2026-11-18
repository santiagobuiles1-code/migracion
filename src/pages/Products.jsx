import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-indigo-50 flex items-center justify-center overflow-hidden">
                <span class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
                  Más vendido
                </span>
                <img src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp" alt="Cargador Magnético Duo" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Audio &amp; Móvil</span>
                    <span class="text-yellow-500 font-semibold">★ 4.9 (128)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Cargador Magnético Duo</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Carga rápida inalámbrica de 15W para teléfono y reloj simultáneamente.
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Entrada USB-C PD 30W incluida</li>
                      <li>Base antideslizante de silicona</li>
                      <li>Protección contra sobrecalentamiento</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-2xl font-extrabold text-gray-900">$59.00</span>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-purple-50 flex items-center justify-center overflow-hidden">
                <span class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-600 text-white">
                  Nuevo
                </span>
                <img src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp" alt="Portátil UltraBook Pro 14" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Cómputo</span>
                    <span class="text-yellow-500 font-semibold">★ 4.8 (94)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Portátil UltraBook Pro 14"</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Pantalla Liquid Retina de alta precisión, chasis unibody y batería para todo el día.
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>16 GB RAM y SSD NVMe de 512 GB</li>
                      <li>Autonomía de hasta 17 horas</li>
                      <li>Puertos Thunderbolt y lector SD</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-2xl font-extrabold text-gray-900">$1,299.00</span>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-green-50 flex items-center justify-center overflow-hidden">
                <span class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-green-600 text-white">
                  Eco
                </span>
                <img src="https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp" alt="Mochila Urbana Impermeable" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Viaje &amp; Urbano</span>
                    <span class="text-yellow-500 font-semibold">★ 5.0 (76)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Mochila Urbana Impermeable</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Acabado minimalista resistente al agua con compartimento acolchado para portátil de 16".
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Capacidad de 22 litros</li>
                      <li>Cremalleras selladas antirrobo</li>
                      <li>Respaldo ergonómico transpirable</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-2xl font-extrabold text-gray-900">$89.00</span>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-yellow-50 flex items-center justify-center overflow-hidden">
                <span class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
                  Oferta
                </span>
                <img src="https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp" alt="Lámpara LED de Escritorio" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Iluminación</span>
                    <span class="text-yellow-500 font-semibold">★ 4.7 (61)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Lámpara LED de Escritorio</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Iluminación cálida ambiental con diseño contemporáneo para estudio o sala.
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Índice CRI &gt; 95 sin parpadeos</li>
                      <li>3 modos: lectura, estudio y descanso</li>
                      <li>Base estable de acabado mate</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span class="text-xs text-gray-400 line-through mr-1">$95.00</span>
                      <span class="text-2xl font-extrabold text-gray-900">$74.00</span>
                    </div>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-blue-50 flex items-center justify-center overflow-hidden">
                <img src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp" alt="Smartwatch Pulse S2" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Wearables</span>
                    <span class="text-yellow-500 font-semibold">★ 4.8 (112)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Smartwatch Pulse S2</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Pantalla AMOLED, seguimiento deportivo GPS y autonomía de hasta 14 días.
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Resistencia al agua 5 ATM</li>
                      <li>Correa intercambiable de 22 mm</li>
                      <li>Monitorización cardíaca 24/7</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-2xl font-extrabold text-gray-900">$159.00</span>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
              <div class="relative h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp" alt="Altavoz Inteligente Mini 360" class="h-full w-full object-contain p-4"/>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Audio Hogar</span>
                    <span class="text-yellow-500 font-semibold">★ 4.9 (83)</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Altavoz Inteligente Mini 360°</h3>
                  <p class="text-sm text-gray-600 mt-2">
                    Sonido envolvente de 360 grados con control por voz y diseño compacto en tela acústica.
                  </p>
                </div>
                <div class="mt-6">
                  <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
                      <span>Ver especificaciones</span>
                      <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Audio computacional en tiempo real</li>
                      <li>4 micrófonos de largo alcance</li>
                      <li>Conexión Wi-Fi y Bluetooth 5.0</li>
                    </ul>
                  </details>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-2xl font-extrabold text-gray-900">$109.00</span>
                    <a href="#contacto" class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}