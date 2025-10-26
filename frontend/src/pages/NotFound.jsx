// frontend/src/components/Common/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="text-6xl text-red-500 mb-4">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist.
        </p>

        <div className="space-y-3">
          <Link 
            to="/" 
            className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
