import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Contact() {
  return (
    <>
      <Header />
      <section id="contacto" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div class="lg:col-span-5 space-y-6">
              <span class="text-xs font-bold uppercase tracking-widest text-indigo-600">Hablemos</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
                ¿Listo para hacer tu pedido o tienes dudas?
              </h2>
              <p class="text-gray-600 text-base leading-relaxed">
                Escríbenos directamente y nuestro equipo te responderá en menos de 2 horas hábiles para asesorarte o gestionar tu compra.
              </p>

              <div class="space-y-4 pt-2">
                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900">Correo electrónico</p>
                    <p class="text-sm text-gray-600">hola@verticetienda.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900">Teléfono de atención</p>
                    <p class="text-sm text-gray-600">+34 900 123 456 (Lun - Vie, 9:00 a 19:00)</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900">Showroom Central</p>
                    <p class="text-sm text-gray-600">Av. Innovación 245, Planta 2</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <form action="#contacto" method="post" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="nombre" class="block text-sm font-semibold text-gray-700 mb-1">Nombre completo</label>
                    <input id="nombre" name="nombre" type="text" required placeholder="Ej. Laura Gómez"
                      class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                  </div>
                  <div>
                    <label for="correo" class="block text-sm font-semibold text-gray-700 mb-1">Correo electrónico</label>
                    <input id="correo" name="correo" type="email" required placeholder="laura@correo.com"
                      class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                  </div>
                </div>

                <div>
                  <label for="producto" class="block text-sm font-semibold text-gray-700 mb-1">Producto de interés</label>
                  <select id="producto" name="producto"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="general">Consulta general</option>
                    <option value="auriculares">Auriculares Studio Pro ANC ($199.00)</option>
                    <option value="cargador">Cargador Magnético Duo ($59.00)</option>
                    <option value="portatil">Portátil UltraBook Pro 14" ($1,299.00)</option>
                    <option value="mochila">Mochila Urbana Impermeable ($89.00)</option>
                    <option value="lampara">Lámpara LED de Escritorio ($74.00)</option>
                    <option value="smartwatch">Smartwatch Pulse S2 ($159.00)</option>
                    <option value="altavoz">Altavoz Inteligente Mini 360° ($109.00)</option>
                  </select>
                </div>

                <div>
                  <label for="mensaje" class="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Cuéntanos qué necesitas o en qué podemos ayudarte..."
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>

                <button type="submit"
                  class="w-full py-3.5 px-6 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition duration-200 shadow-md">
                  Enviar mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}