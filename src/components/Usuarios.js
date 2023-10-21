import React, { useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Usuario 1", email: "usuario1@example.com" },
    { id: 2, nombre: "Usuario 2", email: "usuario2@example.com" },
    { id: 3, nombre: "Usuario 3", email: "usuario3@example.com" },
    // Agrega más usuarios si es necesario
  ]);

  const handleEliminarUsuario = (id) => {
    const nuevaListaUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevaListaUsuarios);
  };

  return (
    <div className="md:w-4/6 xl:w-4/5 bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Usuarios</h1>
      <ul className="space-y-2">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="flex items-center">
            <div className="flex-grow">
              <p className="text-gray-900 font-bold">{usuario.nombre}</p>
              <p className="text-gray-600">{usuario.email}</p>
            </div>
            <button
              onClick={() => handleEliminarUsuario(usuario.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;



