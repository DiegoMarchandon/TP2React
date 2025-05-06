import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../src/const/routes';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" px-4 py-8 min-h-screen flex items-center justify-center bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90% min-h-screen flex flex-col">
      <img src='../../public/logo/alt.png'className="rounded w-64 md:w-80"/>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - No Encontrado</h1>
        <p className="text-gray-600 text-lg mb-6">
          {'La página o recurso solicitado no existe.'}
        </p>
        <button
          onClick={() => navigate(ROUTES.home)
          }
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver a Inicio
        </button>
      </div>
    </div>
  );
};
export default NotFound;