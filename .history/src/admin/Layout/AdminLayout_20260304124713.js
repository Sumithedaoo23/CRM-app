
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





