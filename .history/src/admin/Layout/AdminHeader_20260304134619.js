

// import React from 'react';

// const AdminHeader = ({ onMenuClick, user, onLogout, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'fixed',
//     top: 0,
//     left: isSidebarOpen ? '280px' : '0',
//     right: 0,
//     zIndex: 30,
//     transition: 'left 0.3s ease-in-out',
//     boxSizing: 'border-box'
//   };

//   const menuButtonStyle = {
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '20px',
//     width: '44px',
//     height: '44px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   const logoStyle = {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#667eea'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#667eea',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   return React.createElement('header', { style: headerStyle },
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '16px'
//       }
//     },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: menuButtonStyle
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: logoStyle }, 'Admin Panel')
//     ),

//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '20px'
//       }
//     },
//       React.createElement('div', { style: userInfoStyle },
//         React.createElement('div', null,
//           React.createElement('div', {
//             style: { fontSize: '14px', fontWeight: '600', color: '#111827' }
//           }, user?.name || 'Admin User'),
          
//           React.createElement('div', {
//             style: { fontSize: '12px', color: '#6b7280' }
//           }, user?.role || 'Administrator')
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'A'
//         )
//       )
//     )
//   );
// };

// export default AdminHeader;
















// import React from 'react';

// const AdminHeader = ({ onMenuClick, user, onLogout, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'fixed',
//     top: 0,
//     left: isSidebarOpen ? '280px' : '0',
//     right: 0,
//     zIndex: 30,
//     transition: 'left 0.3s ease-in-out',
//     boxSizing: 'border-box'
//   };

//   const menuButtonStyle = {
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '20px',
//     width: '44px',
//     height: '44px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   const logoStyle = {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#667eea'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#667eea',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   return React.createElement('header', { style: headerStyle },
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '16px'
//       }
//     },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: menuButtonStyle
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: logoStyle }, 'Admin Panel')
//     ),

//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '20px'
//       }
//     },
//       React.createElement('div', { style: userInfoStyle },
//         React.createElement('div', null,
//           React.createElement('div', {
//             style: { fontSize: '14px', fontWeight: '600', color: '#111827' }
//           }, user?.name || 'Admin User'),
          
//           React.createElement('div', {
//             style: { fontSize: '12px', color: '#6b7280' }
//           }, user?.role || 'Administrator')
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'A'
//         )
//       )
//     )
//   );
// };

// export default AdminHeader;









import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
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
    React.createElement(AdminSidebar, {
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
      React.createElement(AdminHeader, {
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

export default AdminLayout;