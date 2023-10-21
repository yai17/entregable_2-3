import React from "react";

function Inicio() {

  return (
    <div className="md:w-4/6 xl:w-4/5 bg-gray-100 p-6"> {/* Establece el estilo del formulario */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Inicio</h1>

      {/* Descripción del gimnasio (no editable) */}
      <div className="mb-4">
        <label className="block text-gray-600">Bienvenido a nuestro gimnasio, donde nos enfocamos en brindar entrenamientos
         personalizados para ayudarte a alcanzar tus objetivos de salud y acondicionamiento físico.</label>
        
      </div>

      {/* Metodología del gimnasio (no editable) */}
      <div className="mb-4">
        <label className="block text-gray-600">Nuestra metodología se basa en el enfoque holístico del bienestar, con un énfasis en la nutrición, el 
        entrenamiento y la supervisión constante de nuestros entrenadores expertos.</label>
        
      </div>

    </div>
  );
}

export default Inicio;

