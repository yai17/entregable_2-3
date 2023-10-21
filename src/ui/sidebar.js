import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">GIMNASIO</p>

                <p className="mt-3 text-gray-600">Aca puedes personalizar los entrenamientos.</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover-text-gray-900" end to="/">Registro</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover-bg-yellow-500 hover-text-gray-900" end to="/login">Inicio Sesion</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover-bg-yellow-500 hover-text-gray-900" end to="/inicio">Inicio</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover-bg-yellow-500 hover-text-gray-900" end to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
