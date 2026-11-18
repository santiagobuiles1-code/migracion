export function Header() {
  return (
    <header class="sticky top-0 z-50 bg-white bg-opacity-95 border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between py-4">
          <a href="#home" class="flex items-center space-x-2 text-gray-900 font-extrabold text-xl tracking-tight">
            <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </span>
            <span>VÉRTICE</span>
          </a>

          <nav aria-label="Navegación principal" class="flex items-center space-x-4 sm:space-x-8 text-sm font-medium mt-2 sm:mt-0">
            <a href="#home" class="text-gray-600 hover:text-indigo-600 transition duration-200">Home</a>
            <a href="#productos" class="text-gray-600 hover:text-indigo-600 transition duration-200">Productos</a>
            <a href="#beneficios" class="text-gray-600 hover:text-indigo-600 transition duration-200">Beneficios</a>
            <a href="#contacto" class="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 shadow-sm">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}