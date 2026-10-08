import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import StatCard from './components/StatCard'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import SearchBar from './components/SearchBar'

function App() {
  const [estudiantes, setEstudiantes] = useState([])
  const [busqueda, setBusqueda] = useState('')

  // Función para agregar un nuevo estudiante
  function agregarEstudiante(estudiante) {
    setEstudiantes([...estudiantes, estudiante])
  }

  // Función para realizar la búsqueda
  function buscarEstudiante(texto) {
    setBusqueda(texto)
  }

  // Filtrar estudiantes según el texto de búsqueda
  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="w-[90%] max-w-6xl mx-auto py-8">

      <Header />

      {/* Tarjetas de estadísticas implementadas con Tailwind CSS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <StatCard
          title="Total de estudiantes"
          value={estudiantes.length}
        />

        <StatCard
          title="Estudiantes activos"
          value={estudiantes.length}
        />

        <StatCard
          title="Cursos"
          value={
            new Set(
              estudiantes.map((estudiante) => estudiante.curso)
            ).size
          }
        />
      </div>

      <SearchBar buscarEstudiante={buscarEstudiante} />

      <StudentForm agregarEstudiante={agregarEstudiante} />

      <StudentList estudiantes={estudiantesFiltrados} />

    </div>
  )
}

export default App