import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
    if (nombreUsuario === "admin" && contrasena === "admin") {
      // Redirigir al componente Ejercicios
      navigate("/ejercicios");
    } else {
      // Mostrar mensaje de error
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="md:w-4/6 xl:w-4/5 bg-gray-100 p-6">
      {/* Establece el estilo del formulario */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Nombre de Usuario:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Contraseña:</label>
          <input
            type="password"
            className="border p-2 w-full"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Iniciar Sesión
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Login;