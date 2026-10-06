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
    <div className="form-container">
      <form onSubmit={enviarFormulario}>
        <h2>Agregar estudiante</h2>

        <input
          type="text"
          placeholder="Nombre del estudiante"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />

        <input
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={(event) => setCurso(event.target.value)}
        />

        <button type="submit">Agregar estudiante</button>
      </form>
    </div>
  )
}

export default StudentForm