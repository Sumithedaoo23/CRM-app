
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










import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    console.log('Toggling sidebar, current state:', sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    console.log('Closing sidebar');
    setSidebarOpen(false);
  };

  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    React.createElement(UserSidebar, {
      isOpen: sidebarOpen,
      onClose: closeSidebar,
      user: user,
      onLogout: logout
    }),

    React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }
    },
      React.createElement(UserHeader, {
        onMenuClick: toggleSidebar,
        user: user,
        onLogout: logout,
        isDark: isDark,
        onThemeToggle: toggleTheme,
        isSidebarOpen: sidebarOpen
      }),

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