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

  function agregarEstudiante(estudiante) {
    setEstudiantes([...estudiantes, estudiante])
  }

  function buscarEstudiante(texto) {
    setBusqueda(texto)
  }

  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="dashboard">
      <Header />

      <div className="stats">
        <StatCard title="Total de estudiantes" value={estudiantes.length} />
        <StatCard title="Estudiantes activos" value={estudiantes.length} />
        <StatCard title="Cursos" value={new Set(estudiantes.map((estudiante) => estudiante.curso)).size} />
      </div>

      <SearchBar buscarEstudiante={buscarEstudiante} />

      <StudentForm agregarEstudiante={agregarEstudiante} />

      <StudentList estudiantes={estudiantesFiltrados} />
    </div>
  )
}

export default App