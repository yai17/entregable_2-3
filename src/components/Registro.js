import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import {FirebaseContext} from '../firebase'

function Registro() {
  const {firebase} = useContext(FirebaseContext)
  //validar los campos
  const formik = useFormik({
    initialValues:{
      nombre:'',
      cedula:'',
      usuario:'',
      email:'',
      contraseña:''
    },
    validationSchema: Yup.object({
          nombre: Yup.string()
                  .max(20, 'El nombre debe tener maximo 20 caracteres')
                  .required('el nombre es obligatorio'),
          cedula: Yup.number() 
                  .min(10, 'La cedula es maximo de 10 caracteres')
                  .required('La cedula es obligatorio'),
          usuario: Yup.string()
                  .max(20, 'El usuario debe tener maximo 20 caracteres')
                  .required('el usuario es obligatorio'),
          email: Yup.string()
                  .max(30, 'El email debe tener maximo 20 caracteres')
                  .required('El email es obligatorio'),
          contraseña: Yup.string()
                  .max(20, 'la contraseña debe tener maximo 20 caracteres')
                  .required('la contraseña es obligatorio'),    
      }),
      onSubmit: Registro=>{
        try{
         //console.log(Registro);
         firebase.db.collection('usuario').add(Registro);
        }
        catch(e){
          console.error(e);
        }
      }
  })
  return (
    <div className="md:w-4/6 xl:w-4/5 bg-gray-100 p-6"> {/* Establece el estilo del formulario */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Registro</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Nombre Completo:</label>
          <input
           name="nombre"
           type="text"
           className="border p-2 w-full"
           value={formik.values.nombre}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.nombre && formik.errors.nombre ?(
            <div>
              <p>ocurrio un error</p>
              <p>{formik.errors.nombre}</p>
            </div>
        ):null}
        <div className="mb-4">
          <label className="block text-gray-600">Cédula:</label>
          <input
            name="cedula"
            type="text"
            className="border p-2 w-full"
            value={formik.values.cedula}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.cedula && formik.errors.cedula ?(
            <div>
              <p>ocurrio un error</p>
              <p>{formik.errors.cedula}</p>
            </div>
        ):null}
        <div className="mb-4">
          <label className="block text-gray-600">Nombre de Usuario:</label>
          <input
            name="usuario"
            type="text"
            className="border p-2 w-full"
            value={formik.values.usuario}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.usuario && formik.errors.usuario ?(
            <div>
              <p>ocurrio un error</p>
              <p>{formik.errors.usuario}</p>
            </div>
        ):null}
        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            name="email"
            type="email"
            className="border p-2 w-full"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ?(
            <div>
              <p>ocurrio un error</p>
              <p>{formik.errors.email}</p>
            </div>
        ):null}
        <div className="mb-4">
          <label className="block text-gray-600">Contraseña:</label>
          <input
            name="contraseña"
            type="password"
            className="border p-2 w-full"
            value={formik.values.contraseña}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.contraseña && formik.errors.contraseña ?(
            <div>
              <p>ocurrio un error</p>
              <p>{formik.errors.contraseña}</p>
            </div>
        ):null}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Registro;

