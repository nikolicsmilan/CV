import React from 'react'

const CoordinatesTable = ({ icons, positions, mousePosition }) => {
  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-75 p-2 z-50">
    <table className="border-collapse">
      <thead>
        <tr>
          <th className="border px-2">Icon</th>
          <th className="border px-2">X</th>
          <th className="border px-2">Y</th>
          <th className="border px-2">Z</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2">Mouse</td>
          <td className="border px-2">{mousePosition.x.toFixed(2)}</td>
          <td className="border px-2">{mousePosition.y.toFixed(2)}</td>
          <td className="border px-2">N/A</td>
        </tr>
        {icons.map((icon, index) => (
          <tr key={index}>
            <td className="border px-2">{icon.name}</td>
            <td className="border px-2">{positions[index].x.toFixed(2)}</td>
            <td className="border px-2">{positions[index].y.toFixed(2)}</td>
            <td className="border px-2">{positions[index].z.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default CoordinatesTable