export function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-400 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; 2026 VÉRTICE. Todos los derechos reservados.</p>
        <div class="flex space-x-6">
          <a href="#home" class="hover:text-white transition duration-200">Home</a>
          <a href="#productos" class="hover:text-white transition duration-200">Productos</a>
          <a href="#beneficios" class="hover:text-white transition duration-200">Beneficios</a>
          <a href="#contacto" class="hover:text-white transition duration-200">Contacto</a>
        </div>
      </div>
    </footer>
  )
}