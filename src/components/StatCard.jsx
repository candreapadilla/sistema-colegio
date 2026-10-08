function StatCard({ title, value }) {
  return (
    // Diseño de la tarjeta implementado con Tailwind CSS
    <div className="bg-purple-100 p-5 rounded-lg text-center shadow">
      <h3 className="mb-2 text-purple-700 font-semibold">
        {title}
      </h3>

      <p className="text-3xl font-bold text-purple-600">
        {value}
      </p>
    </div>
  )
}

export default StatCard