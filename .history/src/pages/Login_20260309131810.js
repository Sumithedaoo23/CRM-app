
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [userType, setUserType] = useState('user');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     setLoading(true);
//     setError('');
    
//     try {
//       const loginEmail = userType === 'admin' ? 'admin@crm.com' : 'user@crm.com';
//       const loginPassword = 'password123';
      
//       console.log('Logging in as:', userType, 'with email:', loginEmail);
      
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email: loginEmail,
//         password: loginPassword
//       });
      
//       console.log('Login response:', response.data);
      
//       if (!response.data.success) {
//         throw new Error(response.data.error || 'Login failed');
//       }
      
//       const userData = response.data.data || response.data;
//       const token = userData.token;
      
//       if (!token) {
//         throw new Error('No token received');
//       }
      
//       const userWithToken = {
//         ...userData,
//         token: token,
//         isAdmin: userType === 'admin'
//       };
      
//       localStorage.setItem('crm-user', JSON.stringify(userWithToken));
      
//       if (login) {
//         login(userWithToken);
//       }
      
//       if (userType === 'admin') {
//         navigate('/admin/dashboard');
//       } else {
//         navigate('/user/dashboard');
//       }
//     } catch (error) {
//       console.error('Login error details:', {
//         message: error.message,
//         response: error.response?.data,
//         status: error.response?.status
//       });
      
//       setError(error.response?.data?.error || error.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6',
//       padding: '20px'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         padding: '40px',
//         borderRadius: '12px',
//         boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//         width: '100%',
//         maxWidth: '400px',
//         textAlign: 'center'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           marginBottom: '30px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             width: '70px',
//             height: '70px',
//             backgroundColor: '#3b82f6',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: '0 auto 20px auto',
//             fontSize: '30px',
//             fontWeight: '700',
//             color: 'white'
//           }
//         }, 'CRM'),
        
//         React.createElement('h1', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '8px'
//           }
//         }, 'Welcome to CRM'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'Select your role to continue')
//       ),

//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#ef4444',
//           padding: '12px',
//           borderRadius: '6px',
//           marginBottom: '20px',
//           fontSize: '14px'
//         }
//       }, error),

//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '16px',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('div', {
//           onClick: () => setUserType('user'),
//           style: {
//             padding: '24px',
//             backgroundColor: userType === 'user' ? '#10b981' : '#f9fafb',
//             borderRadius: '12px',
//             cursor: 'pointer',
//             border: userType === 'user' ? '2px solid #10b981' : '2px solid transparent',
//             transition: 'all 0.2s',
//             textAlign: 'center'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               fontSize: '48px',
//               marginBottom: '12px'
//             }
//           }, '👤'),
          
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: userType === 'user' ? 'white' : '#111827',
//               marginBottom: '4px'
//             }
//           }, 'User'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '13px',
//               color: userType === 'user' ? 'rgba(255,255,255,0.9)' : '#6b7280'
//             }
//           }, 'Access your tickets')
//         ),

//         React.createElement('div', {
//           onClick: () => setUserType('admin'),
//           style: {
//             padding: '24px',
//             backgroundColor: userType === 'admin' ? '#3b82f6' : '#f9fafb',
//             borderRadius: '12px',
//             cursor: 'pointer',
//             border: userType === 'admin' ? '2px solid #3b82f6' : '2px solid transparent',
//             transition: 'all 0.2s',
//             textAlign: 'center'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               fontSize: '48px',
//               marginBottom: '12px'
//             }
//           }, '👑'),
          
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: userType === 'admin' ? 'white' : '#111827',
//               marginBottom: '4px'
//             }
//           }, 'Admin'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '13px',
//               color: userType === 'admin' ? 'rgba(255,255,255,0.9)' : '#6b7280'
//             }
//           }, 'Manage everything')
//         )
//       ),

//       React.createElement('button', {
//         onClick: handleLogin,
//         disabled: loading,
//         style: {
//           width: '100%',
//           padding: '16px',
//           backgroundColor: loading ? '#9ca3af' : (userType === 'admin' ? '#3b82f6' : '#10b981'),
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '18px',
//           fontWeight: '600',
//           cursor: loading ? 'not-allowed' : 'pointer',
//           transition: 'background-color 0.2s',
//           marginBottom: '20px'
//         }
//       }, loading ? 'Logging in...' : `Continue as ${userType === 'admin' ? 'Admin' : 'User'}`),

//       React.createElement('div', {
//         style: {
//           fontSize: '13px',
//           color: '#9ca3af',
//           borderTop: '1px solid #e5e7eb',
//           paddingTop: '20px'
//         }
//       },
//         React.createElement('p', null, 'Demo application - No credentials required'),
//         React.createElement('p', {
//           style: {
//             fontSize: '12px',
//             marginTop: '8px'
//           }
//         }, 'Click continue to access the dashboard')
//       )
//     )
//   );
// };

// export default Login;













import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('User login attempt:', { email, phone });
      
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        phone
      });
      
      console.log('Login response:', response.data);
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Login failed');
      }
      
      const userData = response.data.data;
      
      const userWithToken = {
        ...userData,
        token: userData.token,
        isAdmin: false
      };
      
      localStorage.setItem('crm-user', JSON.stringify(userWithToken));
      login(userWithToken);
      navigate('/user/dashboard');
      
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.error || error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Admin login attempt:', email);
      
      const response = await axios.post('http://localhost:5000/api/auth/admin-login', {
        email,
        password
      });
      
      console.log('Admin login response:', response.data);
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Login failed');
      }
      
      const userData = response.data.data;
      
      const userWithToken = {
        ...userData,
        token: userData.token,
        isAdmin: true
      };
      
      localStorage.setItem('crm-user', JSON.stringify(userWithToken));
      login(userWithToken);
      navigate('/admin/dashboard');
      
    } catch (error) {
      console.error('Admin login error:', error);
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
        maxWidth: '450px'
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
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
        }, 'Welcome to CRM')
      ),

      // Login Type Selector
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          marginBottom: '24px',
          backgroundColor: '#f3f4f6',
          padding: '4px',
          borderRadius: '40px'
        }
      },
        React.createElement('button', {
          onClick: () => setLoginType('user'),
          style: {
            flex: 1,
            padding: '12px',
            backgroundColor: loginType === 'user' ? '#10b981' : 'transparent',
            color: loginType === 'user' ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }
        }, 'User Login'),
        
        React.createElement('button', {
          onClick: () => setLoginType('admin'),
          style: {
            flex: 1,
            padding: '12px',
            backgroundColor: loginType === 'admin' ? '#3b82f6' : 'transparent',
            color: loginType === 'admin' ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }
        }, 'Admin Login')
      ),

      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#ef4444',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '20px',
          fontSize: '14px',
          textAlign: 'center'
        }
      }, error),

      // User Login Form
      loginType === 'user' && React.createElement('form', {
        onSubmit: handleUserLogin
      },
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Email Address'),
          
          React.createElement('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Enter your email',
            required: true,
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box'
            },
            onFocus: (e) => e.target.style.borderColor = '#10b981',
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
          })
        ),

        React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Phone Number'),
          
          React.createElement('input', {
            type: 'tel',
            value: phone,
            onChange: (e) => setPhone(e.target.value),
            placeholder: 'Enter your phone number',
            required: true,
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box'
            },
            onFocus: (e) => e.target.style.borderColor = '#10b981',
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
          })
        ),

        React.createElement('button', {
          type: 'submit',
          disabled: loading,
          style: {
            width: '100%',
            padding: '14px',
            backgroundColor: loading ? '#9ca3af' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            marginBottom: '16px'
          },
          onMouseEnter: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#059669';
            }
          },
          onMouseLeave: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#10b981';
            }
          }
        }, loading ? 'Logging in...' : 'Login as User'),

        React.createElement('p', {
          style: {
            fontSize: '13px',
            color: '#6b7280',
            textAlign: 'center',
            fontStyle: 'italic'
          }
        }, 'Use the email and phone number provided by your admin')
      ),

      // Admin Login Form
      loginType === 'admin' && React.createElement('form', {
        onSubmit: handleAdminLogin
      },
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Email Address'),
          
          React.createElement('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Enter admin email',
            required: true,
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box'
            },
            onFocus: (e) => e.target.style.borderColor = '#3b82f6',
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
          })
        ),

        React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Password'),
          
          React.createElement('input', {
            type: 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: 'Enter admin password',
            required: true,
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box'
            },
            onFocus: (e) => e.target.style.borderColor = '#3b82f6',
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
          })
        ),

        React.createElement('button', {
          type: 'submit',
          disabled: loading,
          style: {
            width: '100%',
            padding: '14px',
            backgroundColor: loading ? '#9ca3af' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            marginBottom: '16px'
          },
          onMouseEnter: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }
          },
          onMouseLeave: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#3b82f6';
            }
          }
        }, loading ? 'Logging in...' : 'Login as Admin')
      ),

      React.createElement('div', {
        style: {
          fontSize: '13px',
          color: '#9ca3af',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px',
          textAlign: 'center'
        }
      },
        React.createElement('p', null, 'Users: Login with email + phone number provided by admin'),
        React.createElement('p', {
          style: {
            fontSize: '12px',
            marginTop: '8px'
          }
        }, 'Admins: Use your email and password')
      )
    )
  );
};

export default Login;