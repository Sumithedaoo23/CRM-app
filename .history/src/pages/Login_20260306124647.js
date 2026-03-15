
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // Admin login
//     if (email === 'admin@crm.com' && password === 'admin123') {
//       const user = {
//         name: 'Admin User',
//         email: email,
//         role: 'Administrator',
//         isAdmin: true
//       };
//       login(user);
//       navigate('/admin/dashboard');
//     } else {
//       setError('Invalid admin credentials');
//     }
//   };

//   const fillAdminCredentials = () => {
//     setEmail('admin@crm.com');
//     setPassword('admin123');
//     setError('');
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       padding: '20px'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '16px',
//         boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//         width: '100%',
//         maxWidth: '400px',
//         overflow: 'hidden'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           padding: '30px',
//           textAlign: 'center'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: 'white',
//             margin: 0
//           }
//         }, 'Admin Login')
//       ),

//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: { padding: '30px' }
//       },
//         error && React.createElement('div', {
//           style: {
//             backgroundColor: '#fee2e2',
//             color: '#dc2626',
//             padding: '12px',
//             borderRadius: '8px',
//             marginBottom: '20px',
//             textAlign: 'center'
//           }
//         }, error),

//         React.createElement('div', { style: { marginBottom: '20px' } },
//           React.createElement('label', {
//             style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
//           }, 'Email'),
          
//           React.createElement('input', {
//             type: 'email',
//             placeholder: 'admin@crm.com',
//             value: email,
//             onChange: (e) => setEmail(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               boxSizing: 'border-box'
//             },
//             required: true
//           })
//         ),

//         React.createElement('div', { style: { marginBottom: '24px' } },
//           React.createElement('label', {
//             style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
//           }, 'Password'),
          
//           React.createElement('input', {
//             type: 'password',
//             placeholder: '••••••••',
//             value: password,
//             onChange: (e) => setPassword(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               boxSizing: 'border-box'
//             },
//             required: true
//           })
//         ),

//         React.createElement('button', {
//           type: 'button',
//           onClick: fillAdminCredentials,
//           style: {
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#eff6ff',
//             color: '#667eea',
//             border: '1px solid #bfdbfe',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             marginBottom: '16px'
//           }
//         }, '🔑 Fill Admin Credentials'),

//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             width: '100%',
//             padding: '14px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: 'pointer'
//           }
//         }, 'Login as Admin'),

//         React.createElement('p', {
//           style: {
//             marginTop: '20px',
//             textAlign: 'center',
//             fontSize: '14px'
//           }
//         },
//           React.createElement('a', {
//             href: '/',
//             style: { color: '#667eea', textDecoration: 'none' },
//             onClick: (e) => {
//               e.preventDefault();
//               navigate('/');
//             }
//           }, '← Back to Home')
//         )
//       )
//     )
//   );
// };

// export default Login;















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
    
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Try admin login first
//       const response = await login(email, password, true);
//       if (response.success) {
//         navigate('/admin/dashboard');
//       }
//     } catch (err) {
//       // If admin login fails, try user login
//       try {
//         const response = await login(email, password, false);
//         if (response.success) {
//           navigate('/user/dashboard');
//         }
//       } catch (userErr) {
//         setError('Invalid email or password');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fillAdminCredentials = () => {
//     setEmail('admin@crm.com');
//     setPassword('admin123');
//     setError('');
//   };

//   const fillUserCredentials = () => {
//     setEmail('user@example.com');
//     setPassword('user123');
//     setError('');
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       padding: '20px'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '16px',
//         boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//         width: '100%',
//         maxWidth: '400px',
//         overflow: 'hidden'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           padding: '30px',
//           textAlign: 'center'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: 'white',
//             margin: 0
//           }
//         }, 'CRM Solar System')
//       ),

//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: { padding: '30px' }
//       },
//         error ? React.createElement('div', {
//           style: {
//             backgroundColor: '#fee2e2',
//             color: '#dc2626',
//             padding: '12px',
//             borderRadius: '8px',
//             marginBottom: '20px',
//             textAlign: 'center'
//           }
//         }, error) : null,

//         React.createElement('div', { style: { marginBottom: '20px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Email'),
          
//           React.createElement('input', {
//             type: 'email',
//             placeholder: 'Enter your email',
//             value: email,
//             onChange: (e) => setEmail(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               outline: 'none',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#667eea',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         React.createElement('div', { style: { marginBottom: '24px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Password'),
          
//           React.createElement('input', {
//             type: 'password',
//             placeholder: 'Enter your password',
//             value: password,
//             onChange: (e) => setPassword(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               outline: 'none',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#667eea',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '12px',
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillAdminCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#eff6ff',
//               color: '#667eea',
//               border: '1px solid #bfdbfe',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dbeafe';
//               e.currentTarget.style.borderColor = '#667eea';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#eff6ff';
//               e.currentTarget.style.borderColor = '#bfdbfe';
//             }
//           }, '👤 Admin Demo'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillUserCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#f0fdf4',
//               color: '#10b981',
//               border: '1px solid #bbf7d0',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dcfce7';
//               e.currentTarget.style.borderColor = '#10b981';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#f0fdf4';
//               e.currentTarget.style.borderColor = '#bbf7d0';
//             }
//           }, '👤 User Demo')
//         ),

//         React.createElement('button', {
//           type: 'submit',
//           disabled: loading,
//           style: {
//             width: '100%',
//             padding: '14px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             opacity: loading ? 0.7 : 1,
//             transition: 'all 0.2s'
//           }
//         }, loading ? 'Logging in...' : 'Sign In'),

//         React.createElement('div', {
//           style: {
//             marginTop: '20px',
//             textAlign: 'center'
//           }
//         },
//           React.createElement('a', {
//             href: '/',
//             style: {
//               color: '#667eea',
//               textDecoration: 'none',
//               fontSize: '14px',
//               cursor: 'pointer'
//             },
//             onClick: (e) => {
//               e.preventDefault();
//               navigate('/');
//             }
//           }, '← Back to Home')
//         )
//       )
//     )
//   );
// };

// export default Login;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
    
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Try admin login first
//       const response = await login(email, password, true);
//       if (response.success) {
//         navigate('/admin/dashboard');
//       }
//     } catch (err) {
//       // If admin login fails, try user login
//       try {
//         const response = await login(email, password, false);
//         if (response.success) {
//           navigate('/user/dashboard');
//         }
//       } catch (userErr) {
//         setError('Invalid email or password');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fillAdminCredentials = () => {
//     setEmail('admin@crm.com');
//     setPassword('admin123');
//     setError('');
//   };

//   const fillUserCredentials = () => {
//     setEmail('user@example.com');
//     setPassword('user123');
//     setError('');
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       padding: '20px'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '16px',
//         boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//         width: '100%',
//         maxWidth: '400px',
//         overflow: 'hidden'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           padding: '30px',
//           textAlign: 'center'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: 'white',
//             margin: 0
//           }
//         }, 'CRM Solar System')
//       ),

//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: { padding: '30px' }
//       },
//         error ? React.createElement('div', {
//           style: {
//             backgroundColor: '#fee2e2',
//             color: '#dc2626',
//             padding: '12px',
//             borderRadius: '8px',
//             marginBottom: '20px',
//             textAlign: 'center'
//           }
//         }, error) : null,

//         React.createElement('div', { style: { marginBottom: '20px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Email'),
          
//           React.createElement('input', {
//             type: 'email',
//             placeholder: 'Enter your email',
//             value: email,
//             onChange: (e) => setEmail(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               outline: 'none',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#667eea',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         React.createElement('div', { style: { marginBottom: '24px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Password'),
          
//           React.createElement('input', {
//             type: 'password',
//             placeholder: 'Enter your password',
//             value: password,
//             onChange: (e) => setPassword(e.target.value),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               outline: 'none',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#667eea',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '12px',
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillAdminCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#eff6ff',
//               color: '#667eea',
//               border: '1px solid #bfdbfe',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dbeafe';
//               e.currentTarget.style.borderColor = '#667eea';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#eff6ff';
//               e.currentTarget.style.borderColor = '#bfdbfe';
//             }
//           }, '👤 Admin Demo'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillUserCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#f0fdf4',
//               color: '#10b981',
//               border: '1px solid #bbf7d0',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dcfce7';
//               e.currentTarget.style.borderColor = '#10b981';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#f0fdf4';
//               e.currentTarget.style.borderColor = '#bbf7d0';
//             }
//           }, '👤 User Demo')
//         ),

//         React.createElement('button', {
//           type: 'submit',
//           disabled: loading,
//           style: {
//             width: '100%',
//             padding: '14px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             opacity: loading ? 0.7 : 1,
//             transition: 'all 0.2s'
//           }
//         }, loading ? 'Logging in...' : 'Sign In'),

//         React.createElement('div', {
//           style: {
//             marginTop: '20px',
//             textAlign: 'center'
//           }
//         },
//           React.createElement('a', {
//             href: '/',
//             style: {
//               color: '#667eea',
//               textDecoration: 'none',
//               fontSize: '14px',
//               cursor: 'pointer'
//             },
//             onClick: (e) => {
//               e.preventDefault();
//               navigate('/');
//             }
//           }, '← Back to Home')
//         )
//       )
//     )
//   );
// };

// export default Login;














import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userType, setUserType] = useState('user');

  const handleLogin = () => {
    if (userType === 'admin') {
      const adminUser = {
        name: 'Admin User',
        email: 'admin@crm.com',
        role: 'admin',
        isAdmin: true
      };
      login(adminUser);
      navigate('/admin/dashboard');
    } else {
      const regularUser = {
        name: 'Regular User',
        email: 'user@crm.com',
        role: 'user',
        isAdmin: false
      };
      login(regularUser);
      navigate('/user/dashboard');
    }
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
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '400px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '24px'
        }
      }, 'CRM Login'),

      // User Type Selector
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          marginBottom: '30px',
          backgroundColor: '#f3f4f6',
          padding: '4px',
          borderRadius: '40px'
        }
      },
        React.createElement('button', {
          onClick: () => setUserType('user'),
          style: {
            flex: 1,
            padding: '12px',
            backgroundColor: userType === 'user' ? '#10b981' : 'transparent',
            color: userType === 'user' ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }
        }, 'User Login'),
        
        React.createElement('button', {
          onClick: () => setUserType('admin'),
          style: {
            flex: 1,
            padding: '12px',
            backgroundColor: userType === 'admin' ? '#3b82f6' : 'transparent',
            color: userType === 'admin' ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }
        }, 'Admin Login')
      ),

      // Login Button
      React.createElement('button', {
        onClick: handleLogin,
        style: {
          width: '100%',
          padding: '14px',
          backgroundColor: userType === 'admin' ? '#3b82f6' : '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginBottom: '20px'
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.backgroundColor = userType === 'admin' ? '#2563eb' : '#059669';
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.backgroundColor = userType === 'admin' ? '#3b82f6' : '#10b981';
        }
      }, `Login as ${userType === 'admin' ? 'Admin' : 'User'}`),

      // Demo Credentials
      React.createElement('div', {
        style: {
          backgroundColor: '#f9fafb',
          padding: '16px',
          borderRadius: '8px',
          border: '1px dashed #d1d5db'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#4b5563',
            marginBottom: '8px'
          }
        }, '📝 Demo Credentials:'),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#6b7280'
          }
        },
          React.createElement('span', null, '👤 User: user@crm.com'),
          React.createElement('span', null, '🔑 any password')
        ),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#6b7280',
            marginTop: '4px'
          }
        },
          React.createElement('span', null, '👑 Admin: admin@crm.com'),
          React.createElement('span', null, '🔑 any password')
        )
      )
    )
  );
};

export default Login;