import React from 'react';
import { Routes, Route } from 'react-router';
import firebase,{FirebaseContext} from './firebase'
import Sidebar from './ui/sidebar';
import Login from './components/Login';
import Registro from './components/Registro';
import Inicio from './components/Inicio';
import Usuarios from './components/Usuarios'; // Importa el nuevo componente Usuarios
import Ejercicios from './components/ejercicios';

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} /> {/* Agrega la ruta para Usuarios */}
          <Route path="/ejercicio" element={<Ejercicios />} />
        </Routes>
      </div>
    </div>

    </FirebaseContext.Provider>
    
  );
}

export default App;


