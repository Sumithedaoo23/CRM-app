
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userType, setUserType] = useState('user');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const loginEmail = userType === 'admin' ? 'admin@crm.com' : 'user@crm.com';
      const loginPassword = 'password123';
      
      console.log('Logging in as:', userType, 'with email:', loginEmail);
      
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: loginEmail,
        password: loginPassword
      });
      
      console.log('Login response:', response.data);
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Login failed');
      }
      
      const userData = response.data.data || response.data;
      const token = userData.token;
      
      if (!token) {
        throw new Error('No token received');
      }
      
      const userWithToken = {
        ...userData,
        token: token,
        isAdmin: userType === 'admin'
      };
      
      localStorage.setItem('crm-user', JSON.stringify(userWithToken));
      
      if (login) {
        login(userWithToken);
      }
      
      if (userType === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error('Login error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      setError(error.response?.data?.error || error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px'
    }
  },
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }
    },
      React.createElement('div', {
        style: {
          marginBottom: '30px'
        }
      },
        React.createElement('div', {
          style: {
            width: '70px',
            height: '70px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            fontSize: '30px',
            fontWeight: '700',
            color: 'white'
          }
        }, 'CRM'),
        
        React.createElement('h1', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '8px'
          }
        }, 'Welcome to CRM'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, 'Select your role to continue')
      ),

      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#ef4444',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '20px',
          fontSize: '14px'
        }
      }, error),

      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '24px'
        }
      },
        React.createElement('div', {
          onClick: () => setUserType('user'),
          style: {
            padding: '24px',
            backgroundColor: userType === 'user' ? '#10b981' : '#f9fafb',
            borderRadius: '12px',
            cursor: 'pointer',
            border: userType === 'user' ? '2px solid #10b981' : '2px solid transparent',
            transition: 'all 0.2s',
            textAlign: 'center'
          }
        },
          React.createElement('div', {
            style: {
              fontSize: '48px',
              marginBottom: '12px'
            }
          }, '👤'),
          
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: userType === 'user' ? 'white' : '#111827',
              marginBottom: '4px'
            }
          }, 'User'),
          
          React.createElement('p', {
            style: {
              fontSize: '13px',
              color: userType === 'user' ? 'rgba(255,255,255,0.9)' : '#6b7280'
            }
          }, 'Access your tickets')
        ),

        React.createElement('div', {
          onClick: () => setUserType('admin'),
          style: {
            padding: '24px',
            backgroundColor: userType === 'admin' ? '#3b82f6' : '#f9fafb',
            borderRadius: '12px',
            cursor: 'pointer',
            border: userType === 'admin' ? '2px solid #3b82f6' : '2px solid transparent',
            transition: 'all 0.2s',
            textAlign: 'center'
          }
        },
          React.createElement('div', {
            style: {
              fontSize: '48px',
              marginBottom: '12px'
            }
          }, '👑'),
          
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: userType === 'admin' ? 'white' : '#111827',
              marginBottom: '4px'
            }
          }, 'Admin'),
          
          React.createElement('p', {
            style: {
              fontSize: '13px',
              color: userType === 'admin' ? 'rgba(255,255,255,0.9)' : '#6b7280'
            }
          }, 'Manage everything')
        )
      ),

      React.createElement('button', {
        onClick: handleLogin,
        disabled: loading,
        style: {
          width: '100%',
          padding: '16px',
          backgroundColor: loading ? '#9ca3af' : (userType === 'admin' ? '#3b82f6' : '#10b981'),
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s',
          marginBottom: '20px'
        }
      }, loading ? 'Logging in...' : `Continue as ${userType === 'admin' ? 'Admin' : 'User'}`),

      React.createElement('div', {
        style: {
          fontSize: '13px',
          color: '#9ca3af',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px'
        }
      },
        React.createElement('p', null, 'Demo application - No credentials required'),
        React.createElement('p', {
          style: {
            fontSize: '12px',
            marginTop: '8px'
          }
        }, 'Click continue to access the dashboard')
      )
    )
  );
};

export default Login;