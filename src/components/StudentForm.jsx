import { useState } from 'react'

function StudentForm({ agregarEstudiante }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [curso, setCurso] = useState('')

  function enviarFormulario(event) {
    event.preventDefault()

    if (nombre === '' || correo === '' || curso === '') {
      alert('Por favor, completa todos los campos.')
      return
    }

    const nuevoEstudiante = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      curso: curso
    }

    agregarEstudiante(nuevoEstudiante)

    setNombre('')
    setCorreo('')
    setCurso('')
  }

  return (
    // Diseño del formulario implementado con Tailwind CSS
    <div className="bg-purple-100 p-5 rounded-lg mb-6 shadow">
      <form onSubmit={enviarFormulario}>

        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Agregar estudiante
        </h2>

        <input
          type="text"
          placeholder="Nombre del estudiante"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className="w-full p-3 border border-purple-200 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
          className="w-full p-3 border border-purple-200 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={(event) => setCurso(event.target.value)}
          className="w-full p-3 border border-purple-200 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Botón implementado con Tailwind CSS */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-3 rounded-md font-semibold hover:bg-purple-600"
        >
          Agregar estudiante
        </button>

      </form>
    </div>
  )
}

export default StudentForm