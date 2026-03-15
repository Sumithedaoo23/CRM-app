// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';

// const UserLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       backgroundColor: '#f9fafb'
//     }
//   },
//     React.createElement('nav', {
//       style: {
//         backgroundColor: 'white',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         padding: '16px 24px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }
//     },
//       React.createElement('div', {
//         style: { display: 'flex', alignItems: 'center', gap: '16px' }
//       },
//         React.createElement('button', {
//           onClick: () => setSidebarOpen(!sidebarOpen),
//           style: {
//             background: 'none',
//             border: 'none',
//             fontSize: '20px',
//             cursor: 'pointer',
//             padding: '8px'
//           }
//         }, '☰'),
        
//         React.createElement('h1', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827'
//           }
//         }, 'User Dashboard')
//       ),
      
//       React.createElement('div', {
//         style: { display: 'flex', alignItems: 'center', gap: '16px' }
//       },
//         React.createElement('div', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#e5e7eb',
//             borderRadius: '20px',
//             fontSize: '14px'
//           }
//         }, `Welcome, ${user.name || 'User'}`),
        
//         React.createElement('button', {
//           onClick: () => {
//             localStorage.removeItem('crm-user');
//             window.location.href = '/login';
//           },
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#dc2626',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             fontSize: '14px'
//           }
//         }, 'Logout')
//       )
//     ),

//     React.createElement('div', {
//       style: { display: 'flex', minHeight: 'calc(100vh - 70px)' }
//     },
//       // Sidebar
//       React.createElement('aside', {
//         style: {
//           width: sidebarOpen ? '250px' : '0',
//           backgroundColor: 'white',
//           borderRight: '1px solid #e5e7eb',
//           padding: sidebarOpen ? '24px 0' : '0',
//           overflow: 'hidden',
//           transition: 'all 0.3s ease'
//         }
//       },
//         React.createElement('div', {
//           style: { padding: '0 16px' }
//         },
//           ['Profile', 'My Tickets', 'Generate Ticket', 'Ticket Status'].map((item, index) => 
//             React.createElement('div', {
//               key: index,
//               style: {
//                 padding: '12px 16px',
//                 margin: '4px 0',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 backgroundColor: index === 0 ? '#e5e7eb' : 'transparent',
//                 color: index === 0 ? '#111827' : '#6b7280',
//                 fontSize: '14px'
//               }
//             }, item)
//           )
//         )
//       ),

//       // Main Content
//       React.createElement('main', {
//         style: {
//           flex: '1',
//           padding: '24px',
//           overflowY: 'auto'
//         }
//       },
//         React.createElement(Outlet, null)
//       )
//     )
//   );
// };

// export default UserLayout;
















import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(false);
    }
  };

  const isDesktop = window.innerWidth > 1024;

  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // User Sidebar
    React.createElement(UserSidebar, {
      isOpen: sidebarOpen,
      onClose: closeSidebar,
      user: user,
      onLogout: logout
    }),

    // Main Content Area
    React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
        transition: 'margin-left 0.3s ease',
        width: isDesktop && sidebarOpen ? 'calc(100% - 280px)' : '100%'
      }
    },
      // User Header
      React.createElement(UserHeader, {
        onMenuClick: toggleSidebar,
        user: user,
        onLogout: logout,
        isDark: isDark,
        onThemeToggle: toggleTheme,
        isSidebarOpen: sidebarOpen
      }),

      // Main Content
      React.createElement('main', {
        style: {
          flex: 1,
          padding: '24px',
          backgroundColor: '#f3f4f6',
          minHeight: 'calc(100vh - 70px)',
          overflowY: 'auto'
        }
      },
        React.createElement(Outlet)
      )
    )
  );
};

export default UserLayout;