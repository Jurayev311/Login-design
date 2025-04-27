import React, { useEffect } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';

function App() {

  const token = localStorage.getItem("access_token")
  const navigate = useNavigate()

  useEffect(() => {
    token ? navigate('/admin') : navigate('/')
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
     

     <ToastContainer />
    </>
  )
}

export default App
