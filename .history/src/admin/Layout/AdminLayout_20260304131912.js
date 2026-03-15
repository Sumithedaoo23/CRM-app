
// import React, { useState, useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import AdminSidebar from './AdminSidebar';
// import AdminHeader from './AdminHeader';
// import { useAuth } from '../../context/AuthContext';

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024);
//       if (window.innerWidth > 1024) {
//         setIsSidebarOpen(true);
//       } else {
//         setIsSidebarOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     React.createElement(AdminSidebar, {
//       isOpen: isSidebarOpen,
//       onClose: () => setIsSidebarOpen(false),
//       user: user,
//       onLogout: handleLogout
//     }),

//     React.createElement('div', {
//       style: {
//         flex: 1,
//         marginLeft: isDesktop && isSidebarOpen ? '280px' : '0',
//         transition: 'margin-left 0.3s ease-in-out',
//         width: '100%'
//       }
//     },
//       React.createElement(AdminHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: handleLogout,
//         isSidebarOpen: isSidebarOpen
//       }),

//       React.createElement('main', {
//         style: {
//           padding: '94px 24px 24px 24px',
//           minHeight: 'calc(100vh - 70px)',
//           boxSizing: 'border-box',
//           backgroundColor: '#f3f4f6'
//         }
//       },
//         React.createElement(Outlet)
//       )
//     )
//   );
// };

// export default AdminLayout;










// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const AdminLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const menuItems = [
//     { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/admin/users', label: 'Users', icon: '👥' },
//     { path: '/admin/tickets', label: 'Tickets', icon: '🎫' },
//     { path: '/admin/profile', label: 'Profile', icon: '👤' },
//   ];

//   return React.createElement('div', { style: { display: 'flex', minHeight: '100vh' } },
//     // Sidebar
//     React.createElement('div', {
//       style: {
//         width: sidebarOpen ? '250px' : '0',
//         backgroundColor: '#1e1e2f',
//         color: 'white',
//         transition: 'width 0.3s',
//         overflow: 'hidden',
//         position: 'fixed',
//         height: '100vh',
//         zIndex: 100
//       }
//     },
//       React.createElement('div', { style: { padding: '20px' } },
//         React.createElement('h2', { style: { color: 'white', marginBottom: '30px' } }, 'Admin Panel'),
//         menuItems.map(item => 
//           React.createElement('div', {
//             key: item.path,
//             onClick: () => navigate(item.path),
//             style: {
//               padding: '12px',
//               margin: '5px 0',
//               cursor: 'pointer',
//               borderRadius: '5px',
//               backgroundColor: window.location.pathname === item.path ? '#3b82f6' : 'transparent',
//               ':hover': { backgroundColor: '#2d2d44' }
//             }
//           }, `${item.icon} ${item.label}`)
//         ),
//         React.createElement('button', {
//           onClick: handleLogout,
//           style: {
//             marginTop: '30px',
//             padding: '12px',
//             width: '100%',
//             backgroundColor: '#ef4444',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }
//         }, '🚪 Logout')
//       )
//     ),

//     // Main Content
//     React.createElement('div', {
//       style: {
//         flex: 1,
//         marginLeft: sidebarOpen ? '250px' : '0',
//         transition: 'margin-left 0.3s',
//         backgroundColor: '#f3f4f6',
//         minHeight: '100vh'
//       }
//     },
//       React.createElement('header', {
//         style: {
//           height: '60px',
//           backgroundColor: 'white',
//           borderBottom: '1px solid #e5e7eb',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '0 20px',
//           justifyContent: 'space-between'
//         }
//       },
//         React.createElement('button', {
//           onClick: () => setSidebarOpen(!sidebarOpen),
//           style: { fontSize: '20px', cursor: 'pointer', background: 'none', border: 'none' }
//         }, '☰'),
//         React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
//           React.createElement('span', null, user?.name || 'Admin'),
//           React.createElement('div', {
//             style: {
//               width: '35px',
//               height: '35px',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontWeight: 'bold'
//             }
//           }, user?.name?.charAt(0) || 'A')
//         )
//       ),
//       React.createElement('main', { style: { padding: '24px' } }, children)
//     )
//   );
// };

// export default AdminLayout;











