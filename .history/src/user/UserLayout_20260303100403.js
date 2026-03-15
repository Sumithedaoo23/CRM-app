
// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import UserHeader from './UserHeader';
// import UserSidebar from './UserSidebar';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const { isDark, toggleTheme } = useTheme();

//   const toggleSidebar = () => {
//     console.log('Toggling sidebar, current state:', sidebarOpen);
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     console.log('Closing sidebar');
//     setSidebarOpen(false);
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     React.createElement(UserSidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: logout
//     }),

//     React.createElement('div', {
//       style: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%'
//       }
//     },
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: logout,
//         isDark: isDark,
//         onThemeToggle: toggleTheme,
//         isSidebarOpen: sidebarOpen
//       }),

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










// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import UserHeader from '../user/UserHeader';
// import UserSidebar from '../user/UserSidebar';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const { isDark, toggleTheme } = useTheme();

//   const toggleSidebar = () => {
//     console.log('Toggling sidebar, current state:', sidebarOpen);
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     console.log('Closing sidebar');
//     setSidebarOpen(false);
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     React.createElement(UserSidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: logout
//     }),

//     React.createElement('div', {
//       style: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%'
//       }
//     },
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: logout,
//         isDark: isDark,
//         onThemeToggle: toggleTheme,
//         isSidebarOpen: sidebarOpen
//       }),

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













// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import UserHeader from './UserHeader';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
  
//   // Mock user for testing
//   const mockUser = {
//     name: 'Regular User',
//     role: 'User'
//   };

//   const toggleSidebar = () => {
//     console.log('Toggling sidebar');
//     setSidebarOpen(!sidebarOpen);
//   };

//   const mockLogout = () => {
//     console.log('Logout clicked');
//   };

//   const mockThemeToggle = () => {
//     console.log('Theme toggle clicked');
//   };

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     // Simple sidebar
//     React.createElement('div', {
//       style: {
//         width: '250px',
//         backgroundColor: '#1a1f2e',
//         color: 'white',
//         padding: '20px',
//         transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
//         position: 'fixed',
//         height: '100vh',
//         zIndex: 1000,
//         transition: 'transform 0.3s ease'
//       }
//     },
//       React.createElement('h2', null, 'CRM'),
//       React.createElement('p', { style: { color: '#9ca3af', fontSize: '12px' } }, 'Customer Relationship Management'),
//       React.createElement('hr', { style: { borderColor: '#333' } }),
//       React.createElement('ul', { style: { listStyle: 'none', padding: 0 } },
//         React.createElement('li', { style: { padding: '10px 0', color: '#fff' } }, '📊 Dashboard'),
//         React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '👤 Profile'),
//         React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '🎫 My Tickets'),
//         React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '➕ Generate Ticket'),
//         React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '📋 Ticket Status')
//       )
//     ),

//     // Main content
//     React.createElement('div', {
//       style: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         marginLeft: sidebarOpen ? '250px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: sidebarOpen ? 'calc(100% - 250px)' : '100%'
//       }
//     },
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: mockUser,
//         onLogout: mockLogout,
//         isDark: false,
//         onThemeToggle: mockThemeToggle,
//         isSidebarOpen: sidebarOpen
//       }),

//       React.createElement('main', {
//         style: {
//           flex: 1,
//           padding: '24px',
//           backgroundColor: '#f3f4f6'
//         }
//       },
//         React.createElement(Outlet)
//       )
//     )
//   );
// };



// // export default UserLayout;
// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import UserHeader from './UserHeader';
// import UserSidebar from './UserSidebar';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Start open on desktop
//   const { user, logout } = useAuth();
//   const { isDark, toggleTheme } = useTheme();

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
//     React.createElement(UserSidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: logout
//     }),

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
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: logout,
//         isDark: isDark,
//         onThemeToggle: toggleTheme,
//         isSidebarOpen: sidebarOpen
//       }),

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