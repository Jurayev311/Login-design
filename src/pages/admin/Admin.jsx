import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("access_token")
    // localStorage.clear() barchasi uchadi bunda 
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-teal-400 to-yellow-500 flex justify-center items-center flex-col text-white font-sans font-bold'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl mb-5 text-shadow-md'>
        Admin Panel
      </h1>
      <p className='text-xl sm:text-2xl md:text-3xl font-normal text-shadow-sm'>
        Welcome, Administrator!
      </p>
      <button
        onClick={handleLogOut}
        className='mt-5 py-2 px-4 bg-teal-400 text-white rounded-md shadow-lg transition duration-300 hover:bg-teal-500'
      >
        Log Out
      </button>
    </div>
  );
};

export default Admin;
