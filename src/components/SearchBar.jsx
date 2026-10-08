import { useState } from 'react'

function SearchBar({ buscarEstudiante }) {
  const [texto, setTexto] = useState('')

  function cambiarTexto(event) {
    const nuevoTexto = event.target.value

    setTexto(nuevoTexto)
    buscarEstudiante(nuevoTexto)
  }

  return (
    // Diseño de la barra de búsqueda implementado con Tailwind CSS
    <div className="bg-purple-50 p-5 rounded-lg mb-6 shadow">
      <h2 className="text-xl font-bold text-purple-800 mb-3">
        Buscar estudiante
      </h2>

      <input
        type="text"
        placeholder="Buscar estudiante por nombre"
        value={texto}
        onChange={cambiarTexto}
        className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  )
}

export default SearchBar