export function ProductCard({data}) {
  return (
    <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col">
      <div class="relative h-52 bg-indigo-50 flex items-center justify-center overflow-hidden">
        <span class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
          {data.badge}
        </span>
        <img
          src={data.imagen}
          alt="Cargador Magnético Duo"
          class="h-full w-full object-contain p-4"
        />
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>{data.categoria}</span>
            <span class="text-yellow-500 font-semibold">{data.rating}</span>
          </div>
          <h3 class="text-lg font-bold text-gray-900">
            {data.nombre}
          </h3>
          <p class="text-sm text-gray-600 mt-2">
            {data.descripcion}
          </p>
        </div>
        <div class="mt-6">
          <details class="mb-4 text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
            <summary class="font-semibold text-indigo-600 cursor-pointer flex items-center justify-between">
              <span>Ver especificaciones</span>
              <svg
                class="w-4 h-4 chevron-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
              {data.especificaciones.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </details>
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <span class="text-2xl font-extrabold text-gray-900">{data.precio}</span>
            <a
              href="#contacto"
              class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
