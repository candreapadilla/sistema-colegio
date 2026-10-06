function StudentList({ estudiantes }) {
  return (
    <div className="students">
      <h2>Lista de estudiantes</h2>

      {estudiantes.length === 0 ? (
        <p>No hay estudiantes registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Curso</th>
            </tr>
          </thead>

          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.id}>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.correo}</td>
                <td>{estudiante.curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentList