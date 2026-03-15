
// import React, { useState, useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import UserHeader from './UserHeader';
// import UserSidebar from './UserSidebar';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const { isDark, toggleTheme } = useTheme();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     if (window.innerWidth <= 1024) {
//       setSidebarOpen(false);
//     }
//   };

//   const isDesktop = window.innerWidth > 1024;

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     // User Sidebar
//     React.createElement(UserSidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: logout
//     }),

//     // Main Content Area
//     React.createElement('div', {
//       style: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: isDesktop && sidebarOpen ? 'calc(100% - 280px)' : '100%'
//       }
//     },
//       // User Header
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: logout,
//         isDark: isDark,
//         onThemeToggle: toggleTheme,
//         isSidebarOpen: sidebarOpen
//       }),

//       // Main Content
//       React.createElement('main', {
//         style: {
//           flex: 1,
//           padding: '24px',
//           backgroundColor: '#f3f4f6',
//           minHeight: 'calc(100vh - 70px)',
//           overflowY: 'auto'
//         }
//       },
//         React.createElement(Outlet)
//       )
//     )
//   );
// };

// export default UserLayout;








