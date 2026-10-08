function StudentList({ estudiantes }) {
  return (
    // Diseño de la lista implementado con Tailwind CSS
    <div className="bg-purple-50 p-5 rounded-lg shadow overflow-x-auto">
      <h2 className="text-xl font-bold text-purple-800 mb-4">
        Lista de estudiantes
      </h2>

      {estudiantes.length === 0 ? (
        <p className="text-gray-600">
          No hay estudiantes registrados.
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-200">
              <th className="p-3 text-left text-purple-900">
                Nombre
              </th>

              <th className="p-3 text-left text-purple-900">
                Correo
              </th>

              <th className="p-3 text-left text-purple-900">
                Curso
              </th>
            </tr>
          </thead>

          <tbody>
            {estudiantes.map((estudiante) => (
              <tr
                key={estudiante.id}
                className="border-b border-purple-100"
              >
                <td className="p-3">
                  {estudiante.nombre}
                </td>

                <td className="p-3">
                  {estudiante.correo}
                </td>

                <td className="p-3">
                  {estudiante.curso}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentList