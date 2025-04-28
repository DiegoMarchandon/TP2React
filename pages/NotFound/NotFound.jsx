import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../src/const/routes';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
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