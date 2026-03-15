
// import React, { useState } from 'react';

// const Profile = () => {
//   // Try to get user from localStorage, fallback to default
//   const savedUser = JSON.parse(localStorage.getItem('crm-user') || '{}');
  
//   const [formData, setFormData] = useState({
//     firstName: savedUser?.name?.split(' ')[0] || 'Admin',
//     lastName: savedUser?.name?.split(' ')[1] || 'User',
//     phone: savedUser?.phone || '+1 234 567 8900',
//     email: savedUser?.email || 'admin@crm.com',
//     password: 'password',
//     appRole: savedUser?.role || 'Administrator',
//     company: savedUser?.company || 'CRM Solutions',
//     joinDate: savedUser?.joinDate || 'January 2024',
//     disabled: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save to localStorage
//     const userToSave = {
//       name: `${formData.firstName} ${formData.lastName}`,
//       email: formData.email,
//       role: formData.appRole,
//       phone: formData.phone,
//       company: formData.company,
//       joinDate: formData.joinDate
//     };
//     localStorage.setItem('crm-user', JSON.stringify(userToSave));
//     alert('Profile updated successfully!');
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: 'Admin',
//       lastName: 'User',
//       phone: '+1 234 567 8900',
//       email: 'admin@crm.com',
//       password: 'password',
//       appRole: 'Administrator',
//       company: 'CRM Solutions',
//       joinDate: 'January 2024',
//       disabled: false,
//     });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '94px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Main Content Container
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       // Header with CRM title and user menu
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: 'clamp(24px, 5vw, 32px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'CRM Dashboard'),
        
//         // User Menu
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '20px',
//             backgroundColor: '#ffffff',
//             padding: '8px 16px',
//             borderRadius: '40px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '32px',
//               height: '32px',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#ffffff'
//             }
//           }, 'AU'),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }
//             }, 'Administrator')
//           ),
          
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               cursor: 'pointer'
//             }
//           }, '▼')
//         )
//       ),

//       // Navigation Tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '24px',
//           marginBottom: '24px',
//           paddingBottom: '8px',
//           borderBottom: '1px solid #e5e7eb',
//           flexWrap: 'wrap'
//         }
//       },
//         ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             style: {
//               fontSize: '14px',
//               color: item === 'Profile' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Profile' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Profile' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Profile Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: 'clamp(20px, 4vw, 40px)',
//           boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//           width: '100%',
//           marginBottom: '24px'
//         }
//       },
//         // Edit Profile Title
//         React.createElement('h2', {
//           style: {
//             fontSize: 'clamp(20px, 4vw, 24px)',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '24px'
//           }
//         }, 'Edit Profile'),

//         // Profile Avatar Section
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: 'clamp(16px, 3vw, 24px)',
//             marginBottom: '32px',
//             paddingBottom: '24px',
//             borderBottom: '1px solid #e5e7eb',
//             flexWrap: 'wrap'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: 'clamp(60px, 8vw, 80px)',
//               height: 'clamp(60px, 8vw, 80px)',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: 'clamp(24px, 4vw, 32px)',
//               fontWeight: '600',
//               color: '#ffffff',
//               flexShrink: 0
//             }
//           }, (formData.firstName?.charAt(0) || 'A') + (formData.lastName?.charAt(0) || 'U')),
          
//           React.createElement('div', null,
//             React.createElement('h3', {
//               style: {
//                 fontSize: 'clamp(20px, 3vw, 24px)',
//                 fontWeight: '600',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, `${formData.firstName} ${formData.lastName}`),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: 'clamp(14px, 2vw, 16px)',
//                 color: '#6b7280'
//               }
//             }, formData.appRole)
//           )
//         ),

//         // Form Fields
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '24px',
//             marginBottom: '32px'
//           }
//         },
//           // First Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'First Name'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.firstName)
//           ),

//           // Last Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Last Name'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.lastName)
//           ),

//           // Phone Number
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Phone Number'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.phone)
//           ),

//           // Email
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'E-Mail'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.email)
//           ),

//           // Password
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Password'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, '••••••')
//           ),

//           // App Role
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'App Role'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.appRole)
//           ),

//           // Member Since
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Member Since'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.joinDate)
//           )
//         ),

//         // Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             gap: '16px',
//             flexWrap: 'wrap',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           // Logout Button
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleLogout,
//             style: {
//               padding: '12px 24px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s',
//               minWidth: '100px'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//           }, 'Logout'),

//           // Action Buttons
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '12px',
//               flexWrap: 'wrap'
//             }
//           },
//             React.createElement('button', {
//               type: 'submit',
//               onClick: handleSubmit,
//               style: {
//                 padding: '12px 24px',
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s',
//                 minWidth: '100px'
//               },
//               onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//               onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//             }, 'Submit'),
            
//             React.createElement('button', {
//               type: 'button',
//               onClick: handleReset,
//               style: {
//                 padding: '12px 24px',
//                 backgroundColor: '#ffffff',
//                 color: '#374151',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s',
//                 minWidth: '100px'
//               },
//               onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//               onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ffffff'
//             }, 'Reset')
//           )
//         )
//       ),

//       // Dark Mode Toggle
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'flex-end',
//           marginTop: '16px'
//         }
//       },
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#1f2937',
//             color: 'white',
//             border: 'none',
//             borderRadius: '20px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '🌙 Dark')
//       )
//     )
//   );
// };

// export default Profile;












// import React from 'react';
// import { useAuth } from '../../context/AuthContext';

// const AdminProfile = () => {
//   const { user } = useAuth();

//   return React.createElement('div', null,
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'Admin Profile'),
//     React.createElement('div', { style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
//       React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' } },
//         React.createElement('div', {
//           style: {
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '32px',
//             fontWeight: 'bold'
//           }
//         }, user?.name?.charAt(0) || 'A'),
//         React.createElement('div', null,
//           React.createElement('h2', { style: { margin: '0 0 5px 0' } }, user?.name || 'Admin User'),
//           React.createElement('p', { style: { color: '#6b7280', margin: 0 } }, user?.role || 'Administrator')
//         )
//       ),
//       React.createElement('div', { style: { display: 'grid', gap: '15px' } },
//         React.createElement('div', null,
//           React.createElement('label', { style: { fontWeight: '500', display: 'block', marginBottom: '5px' } }, 'Email'),
//           React.createElement('p', { style: { margin: 0, color: '#3b82f6' } }, user?.email || 'admin@crm.com')
//         ),
//         React.createElement('div', null,
//           React.createElement('label', { style: { fontWeight: '500', display: 'block', marginBottom: '5px' } }, 'Phone'),
//           React.createElement('p', { style: { margin: 0 } }, user?.phone || '+1 234 567 8900')
//         )
//       )
//     )
//   );
// };

// export default AdminProfile;









// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';

// // Admin Components
// import AdminLayout from './admin/Layout/AdminLayout';
// import AdminDashboard from './admin/Dashboard/AdminDashboard';
// import AdminUsers from './admin/Users/AdminUsers';
// import AdminProfile from './admin/AdminProfile';
// import AdminLeads from './admin/Leads/AdminLeads';
// import AdminRoles from './admin/Roles/AdminRoles';
// import AdminTickets from './admin/Tickets/AdminTicket';

// // User Components
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// // Simple auth check
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'admin' || user?.isAdmin === true;
// };

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
//   const admin = isAdmin(user);

//   return React.createElement(Routes, null,
//     // Public Routes
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(LandingPage)
//     }),
    
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(Login)
//     }),
    
//     // ===== ADMIN ROUTES =====
//     React.createElement(Route, { 
//       path: '/admin', 
//       element: authenticated && admin 
//         ? React.createElement(AdminLayout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(AdminDashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(AdminProfile) }),
//       React.createElement(Route, { path: 'users', element: React.createElement(AdminUsers) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(AdminLeads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(AdminRoles) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(AdminTickets) })
//     ),
    
//     // ===== USER ROUTES =====
//     React.createElement(Route, { 
//       path: '/user', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(UserDashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(UserProfile) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(UserTickets) }),
//       React.createElement(Route, { path: 'generate-ticket', element: React.createElement(GenerateTicket) }),
//       React.createElement(Route, { path: 'ticket-status', element: React.createElement(TicketStatus) })
//     ),
    
//     // Catch all
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { to: '/', replace: true })
//     })
//   );
// }

// export default App;