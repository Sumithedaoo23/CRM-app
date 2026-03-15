
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Admin login
    if (email === 'admin@crm.com' && password === 'admin123') {
      const user = {
        name: 'Admin User',
        email: email,
        role: 'Administrator',
        isAdmin: true
      };
      login(user);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials');
    }
  };

  const fillAdminCredentials = () => {
    setEmail('admin@crm.com');
    setPassword('admin123');
    setError('');
  };

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }
  },
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '400px',
        overflow: 'hidden'
      }
    },
      React.createElement('div', {
        style: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '30px',
          textAlign: 'center'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            margin: 0
          }
        }, 'Admin Login')
      ),

      React.createElement('form', {
        onSubmit: handleSubmit,
        style: { padding: '30px' }
      },
        error && React.createElement('div', {
          style: {
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }
        }, error),

        React.createElement('div', { style: { marginBottom: '20px' } },
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'Email'),
          
          React.createElement('input', {
            type: 'email',
            placeholder: 'admin@crm.com',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            },
            required: true
          })
        ),

        React.createElement('div', { style: { marginBottom: '24px' } },
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'Password'),
          
          React.createElement('input', {
            type: 'password',
            placeholder: '••••••••',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            },
            required: true
          })
        ),

        React.createElement('button', {
          type: 'button',
          onClick: fillAdminCredentials,
          style: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#eff6ff',
            color: '#667eea',
            border: '1px solid #bfdbfe',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '16px'
          }
        }, '🔑 Fill Admin Credentials'),

        React.createElement('button', {
          type: 'submit',
          style: {
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }
        }, 'Login as Admin'),

        React.createElement('p', {
          style: {
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '14px'
          }
        },
          React.createElement('a', {
            href: '/',
            style: { color: '#667eea', textDecoration: 'none' },
            onClick: (e) => {
              e.preventDefault();
              navigate('/');
            }
          }, '← Back to Home')
        )
      )
    )
  );
};

export default Login;