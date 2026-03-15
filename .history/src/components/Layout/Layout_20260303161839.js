// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('crm-user');
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (e) {
//         console.error('Error parsing user', e);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   const isDesktop = window.innerWidth > 1024;

//   return React.createElement('div', { 
//     style: { 
//       display: 'flex', 
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     } 
//   },
//     React.createElement(Sidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: handleLogout
//     }),

//     React.createElement('div', { 
//       style: { 
//         flex: 1, 
//         display: 'flex', 
//         flexDirection: 'column',
//         marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: '100%'
//       } 
//     },
//       React.createElement(Header, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: handleLogout,
//         isDark: false,
//         onThemeToggle: () => {},
//         isSidebarOpen: sidebarOpen
//       }),

//       React.createElement('main', { 
//         style: { 
//           flex: 1, 
//           overflowY: 'auto', 
//           padding: '24px',
//           backgroundColor: '#f3f4f6'
//         } 
//       },
//         React.createElement(Outlet)
//       )
//     )
//   );
// };

// export default Layout;












// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('crm-user');
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (e) {
//         console.error('Error parsing user', e);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   // Auto open sidebar on desktop
//   useEffect(() => {
//     if (isDesktop) {
//       setSidebarOpen(true);
//     } else {
//       setSidebarOpen(false);
//     }
//   }, [isDesktop]);

//   return React.createElement('div', { 
//     style: { 
//       display: 'flex', 
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     } 
//   },
//     React.createElement(Sidebar, {
//       isOpen: sidebarOpen,
//       onClose: closeSidebar,
//       user: user,
//       onLogout: handleLogout
//     }),

//     React.createElement('div', { 
//       style: { 
//         flex: 1, 
//         display: 'flex', 
//         flexDirection: 'column',
//         marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: '100%'
//       } 
//     },
//       React.createElement(Header, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         onLogout: handleLogout,
//         isDark: false,
//         onThemeToggle: () => {},
//         isSidebarOpen: sidebarOpen
//       }),

//       // Main content with proper top padding to account for fixed header
//       React.createElement('main', { 
//         style: { 
//           flex: 1, 
//           overflowY: 'auto', 
//           padding: '94px 24px 24px 24px', // 70px header + 24px extra padding
//           backgroundColor: '#f3f4f6',
//           minHeight: '100vh',
//           boxSizing: 'border-box'
//         } 
//       },
//         React.createElement(Outlet)
//       )
//     )
//   );
// };

// export default Layout;















import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '..//Header';
import { useAuth } from '../../context/AuthContext';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    React.createElement(Sidebar, {
      isOpen: isSidebarOpen,
      onClose: () => setIsSidebarOpen(false),
      user: user,
      onLogout: handleLogout
    }),

    React.createElement('div', {
      style: {
        flex: 1,
        marginLeft: isDesktop && isSidebarOpen ? '280px' : '0',
        transition: 'margin-left 0.3s ease-in-out',
        width: '100%'
      }
    },
      React.createElement(Header, {
        onMenuClick: toggleSidebar,
        user: user,
        onLogout: handleLogout,
        isSidebarOpen: isSidebarOpen
      }),

      React.createElement('main', {
        style: {
          padding: '94px 24px 24px 24px',
          minHeight: 'calc(100vh - 70px)',
          boxSizing: 'border-box',
          backgroundColor: '#f3f4f6'
        }
      },
        React.createElement(Outlet)
      )
    )
  );
};

export default Layout;