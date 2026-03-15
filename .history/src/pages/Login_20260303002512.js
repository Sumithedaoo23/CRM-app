// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('admin'); // 'admin' or 'user'
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     // Simple validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // Validate credentials based on user type
//     if (userType === 'admin') {
//       if (email === 'admin@crm.com' && password === 'admin123') {
//         const user = {
//           name: 'Admin User',
//           email: email,
//           role: 'Administrator',
//           isAdmin: true
//         };
//         login(user);
//         navigate('/dashboard');
//       } else {
//         setError('Invalid admin credentials');
//       }
//     } else {
//       if (email === 'user@crm.com' && password === 'user123') {
//         const user = {
//           name: 'Regular User',
//           email: email,
//           role: 'User',
//           isAdmin: false
//         };
//         login(user);
//         navigate('/user-dashboard');
//       } else {
//         setError('Invalid user credentials');
//       }
//     }
//   };

//   const fillAdminCredentials = () => {
//     setEmail('admin@crm.com');
//     setPassword('admin123');
//     setUserType('admin');
//     setError('');
//   };

//   const fillUserCredentials = () => {
//     setEmail('user@crm.com');
//     setPassword('user123');
//     setUserType('user');
//     setError('');
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       padding: '20px',
//       boxSizing: 'border-box'
//     }
//   },
//     // Main Login Card
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '16px',
//         boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//         width: '100%',
//         maxWidth: '450px',
//         overflow: 'hidden'
//       }
//     },
//       // Header with CRM Logo
//       React.createElement('div', {
//         style: {
//           background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//           padding: '30px 40px',
//           textAlign: 'center'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: 'clamp(28px, 5vw, 32px)',
//             fontWeight: '700',
//             color: 'white',
//             marginBottom: '8px',
//             letterSpacing: '-0.5px'
//           }
//         }, 'CRM'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: 'rgba(255,255,255,0.9)',
//             margin: 0
//           }
//         }, 'Customer Relationship Management')
//       ),

//       // Login Form
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: {
//           padding: 'clamp(20px, 5vw, 40px)'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: 'clamp(20px, 4vw, 24px)',
//             fontWeight: '700',
//             marginBottom: '8px',
//             color: '#111827',
//             textAlign: 'center'
//           }
//         }, 'Welcome Back'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '30px',
//             textAlign: 'center'
//           }
//         }, 'Please sign in to your account'),

//         // Error Message
//         error && React.createElement('div', {
//           style: {
//             backgroundColor: '#fee2e2',
//             color: '#dc2626',
//             padding: '12px',
//             borderRadius: '8px',
//             fontSize: '14px',
//             marginBottom: '20px',
//             textAlign: 'center'
//           }
//         }, error),

//         // User Type Selector
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             marginBottom: '24px',
//             backgroundColor: '#f3f4f6',
//             padding: '4px',
//             borderRadius: '40px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => {
//               setUserType('admin');
//               setError('');
//             },
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: userType === 'admin' ? '#3b82f6' : 'transparent',
//               color: userType === 'admin' ? 'white' : '#4b5563',
//               border: 'none',
//               borderRadius: '40px',
//               fontSize: '14px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             }
//           }, 'Admin Login'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => {
//               setUserType('user');
//               setError('');
//             },
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: userType === 'user' ? '#3b82f6' : 'transparent',
//               color: userType === 'user' ? 'white' : '#4b5563',
//               border: 'none',
//               borderRadius: '40px',
//               fontSize: '14px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             }
//           }, 'User Login')
//         ),

//         // Email Input
//         React.createElement('div', { style: { marginBottom: '16px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#4b5563',
//               marginBottom: '6px'
//             }
//           }, 'Email Address'),
          
//           React.createElement('input', {
//             type: 'email',
//             placeholder: 'Enter your email',
//             value: email,
//             onChange: (e) => {
//               setEmail(e.target.value);
//               setError('');
//             },
//             style: {
//               width: '100%',
//               padding: '12px 16px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '10px',
//               fontSize: '15px',
//               transition: 'all 0.2s',
//               outline: 'none',
//               boxSizing: 'border-box'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#3b82f6',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         // Password Input
//         React.createElement('div', { style: { marginBottom: '24px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#4b5563',
//               marginBottom: '6px'
//             }
//           }, 'Password'),
          
//           React.createElement('input', {
//             type: 'password',
//             placeholder: 'Enter your password',
//             value: password,
//             onChange: (e) => {
//               setPassword(e.target.value);
//               setError('');
//             },
//             style: {
//               width: '100%',
//               padding: '12px 16px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '10px',
//               fontSize: '15px',
//               transition: 'all 0.2s',
//               outline: 'none',
//               boxSizing: 'border-box'
//             },
//             onFocus: (e) => e.currentTarget.style.borderColor = '#3b82f6',
//             onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
//             required: true
//           })
//         ),

//         // Quick Fill Buttons
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '12px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillAdminCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#eff6ff',
//               color: '#3b82f6',
//               border: '1px solid #bfdbfe',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dbeafe';
//               e.currentTarget.style.borderColor = '#3b82f6';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#eff6ff';
//               e.currentTarget.style.borderColor = '#bfdbfe';
//             }
//           }, '👤 Admin Auto-fill'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: fillUserCredentials,
//             style: {
//               padding: '10px',
//               backgroundColor: '#f0fdf4',
//               color: '#16a34a',
//               border: '1px solid #bbf7d0',
//               borderRadius: '8px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               e.currentTarget.style.backgroundColor = '#dcfce7';
//               e.currentTarget.style.borderColor = '#16a34a';
//             },
//             onMouseLeave: (e) => {
//               e.currentTarget.style.backgroundColor = '#f0fdf4';
//               e.currentTarget.style.borderColor = '#bbf7d0';
//             }
//           }, '👤 User Auto-fill')
//         ),

       

//         // Submit Button
//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             width: '100%',
//             padding: '14px',
//             background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '10px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             transition: 'all 0.3s',
//             boxShadow: '0 4px 6px rgba(59, 130, 246, 0.25)'
//           },
//           onMouseEnter: (e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 6px 10px rgba(59, 130, 246, 0.3)';
//           },
//           onMouseLeave: (e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.25)';
//           }
//         }, 'Sign In'),

//         // Footer
//         React.createElement('p', {
//           style: {
//             marginTop: '20px',
//             fontSize: '12px',
//             color: '#9ca3af',
//             textAlign: 'center'
//           }
//         }, '© 2024 CRM. All rights reserved.')
//       )
//     )
//   );
// };

// export default Login;




















