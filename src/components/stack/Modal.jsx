import React from 'react'

const Modal = ({ icon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-0 rounded w-96 h-40 border-0 border-red-400 flex items-center justify-center">
        <h2 className="text-center hidden">Ikon részletek fejlesztés alatt</h2>
        <p className="text-center hidden">Az ikon típusa: {icon.name}</p>
        <div className="border-0 flex justify-center items-center mt-4">
        <button
          onClick={onClose}
          className="mt-0 bg-primary text-white px-4 py-2 rounded"
        >
          Continue!
        </button>
        </div>
      
      </div>
    </div>
  )
}

export default Modal