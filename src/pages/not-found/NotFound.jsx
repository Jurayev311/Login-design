import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-semibold text-gray-800">404 - Sahifa topilmadi</h1>
      <p className="mt-4 text-lg text-gray-600">
        Biz topmoqchi bo'lgan sahifa mavjud emas. Iltimos, boshqa sahifani tekshirib ko'ring.
      </p>
      <NavLink 
        to="/" 
        className="mt-8 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Home sahifasiga qaytish
      </NavLink>
    </div>
  );
}

export default NotFound;
