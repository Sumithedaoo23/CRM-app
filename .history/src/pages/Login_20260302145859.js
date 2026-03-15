
// pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple demo login
    const user = {
      name: 'Admin User',
      email: email,
      role: 'Administrator',
      isAdmin: true
    };
    
    login(user);
    navigate('/dashboard');
  };

  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    React.createElement('form', {
      onSubmit: handleSubmit,
      style: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        width: '400px'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#111827'
        }
      }, 'Login'),
      
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          },
          required: true
        })
      ),
      
      React.createElement('div', { style: { marginBottom: '24px' } },
        React.createElement('input', {
          type: 'password',
          placeholder: 'Password',
          value: password,
          onChange: (e) => setPassword(e.target.value),
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          },
          required: true
        })
      ),
      
      React.createElement('button', {
        type: 'submit',
        style: {
          width: '100%',
          padding: '12px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer'
        }
      }, 'Login')
    )
  );
};

export default Login;