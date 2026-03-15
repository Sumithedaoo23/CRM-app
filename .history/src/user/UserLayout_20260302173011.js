
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













import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // Simple sidebar
    React.createElement('div', {
      style: {
        width: '250px',
        backgroundColor: '#1a1f2e',
        color: 'white',
        padding: '20px'
      }
    },
      React.createElement('h2', null, 'CRM'),
      React.createElement('p', { style: { color: '#9ca3af', fontSize: '12px' } }, 'Customer Relationship Management'),
      React.createElement('hr', { style: { borderColor: '#333' } }),
      React.createElement('ul', { style: { listStyle: 'none', padding: 0 } },
        React.createElement('li', { style: { padding: '10px 0', color: '#fff' } }, '📊 Dashboard'),
        React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '👤 Profile'),
        React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '🎫 My Tickets'),
        React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '➕ Generate Ticket'),
        React.createElement('li', { style: { padding: '10px 0', color: '#9ca3af' } }, '📋 Ticket Status')
      )
    ),

    // Main content
    React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    },
      // Simple header
      React.createElement('div', {
        style: {
          height: '70px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
          React.createElement('span', { style: { fontSize: '20px', cursor: 'pointer' } }, '☰'),
          React.createElement('span', { style: { fontSize: '24px', fontWeight: '700' } }, 'CRM')
        ),
        
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px' } },
          React.createElement('span', null, '🌙 Dark'),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            React.createElement('span', null, 'Regular User'),
            React.createElement('div', {
              style: {
                width: '40px',
                height: '40px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }
            }, 'R')
          ),
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }
          }, 'Logout')
        )
      ),

      // Content area
      React.createElement('main', {
        style: {
          flex: 1,
          padding: '24px',
          backgroundColor: '#f3f4f6'
        }
      },
        React.createElement(Outlet)
      )
    )
  );
};

export default UserLayout;