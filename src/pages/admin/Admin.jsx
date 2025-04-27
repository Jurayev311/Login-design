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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgb(34, 193, 195), rgb(253, 187, 45))',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      fontSize: '3rem',
      fontWeight: 'bold',
    }}>
      <h1 style={{
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}>
        Admin Panel
      </h1>
      <p style={{
        fontSize: '1.5rem',
        fontWeight: 'normal',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
      }}>
        Welcome, Administrator!
      </p>
      <button
        onClick={handleLogOut}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'rgb(34, 193, 195)',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background-color 0.3s',
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Admin;
