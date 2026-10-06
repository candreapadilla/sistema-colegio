import { useState } from 'react'

function SearchBar({ buscarEstudiante }) {
  const [texto, setTexto] = useState('')

  function cambiarTexto(event) {
    const nuevoTexto = event.target.value

    setTexto(nuevoTexto)
    buscarEstudiante(nuevoTexto)
  }

  return (
    <div className="search">
      <h2>Buscar estudiante</h2>

      <input
        type="text"
        placeholder="Buscar estudiante por nombre"
        value={texto}
        onChange={cambiarTexto}
      />
    </div>
  )
}

export default SearchBar