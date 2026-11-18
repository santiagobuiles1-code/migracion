import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Information() {
  return (
    <>
      <Header />
      <section id="beneficios" class="py-20 bg-white border-t border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Experiencia Vértice</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            ¿Por qué comprar con nosotros?
          </h2>
          <p class="text-gray-600 mt-3 text-base sm:text-lg">
            Más que una tienda, te acompañamos antes, durante y después de tu compra.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">Envío Express 24h</h3>
            <p class="text-sm text-gray-600 mt-2">
              Despachamos tu pedido el mismo día para que lo recibas sin esperas innecesarias.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">Garantía de 2 Años</h3>
            <p class="text-sm text-gray-600 mt-2">
              Todos nuestros productos cuentan con cobertura total ante cualquier defecto de fábrica.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">Pago 100% Seguro</h3>
            <p class="text-sm text-gray-600 mt-2">
              Aceptamos tarjetas, transferencias y pagos fraccionados con cifrado de extremo a extremo.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">30 Días de Prueba</h3>
            <p class="text-sm text-gray-600 mt-2">
              Si no te convence al probarlo, gestionamos la devolución gratuita sin preguntas.
            </p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto">
          <h3 class="text-xl font-bold text-gray-900 text-center mb-6">Preguntas Frecuentes</h3>
          <div class="space-y-3">
            <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                <span>¿Cuánto tarda en llegar mi pedido?</span>
                <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                Los pedidos confirmados antes de las 17:00 h se envían el mismo día y llegan en 24 a 48 horas hábiles en zonas urbanas.
              </p>
            </details>

            <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                <span>¿Hacen envíos gratuitos?</span>
                <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                Sí, todas las compras superiores a $80.00 tienen envío estándar completamente gratuito.
              </p>
            </details>

            <details class="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                <span>¿Puedo solicitar factura para empresa?</span>
                <svg class="w-5 h-5 text-indigo-600 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                Por supuesto. Indícanos tus datos fiscales en la sección de contacto o al finalizar tu pedido y recibirás la factura en PDF.
              </p>
            </details>
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}