

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import UserSidebar from './UserSidebar';
// import UserHeader from './UserHeader';

// const UserLayout = ({ children }) => {
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

//   // If no children, show loading or redirect
//   if (!children) {
//     return React.createElement('div', { style: { padding: '20px', textAlign: 'center' } }, 'Loading...');
//   }

//   console.log('UserLayout rendering with children:', children);

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     React.createElement(UserSidebar, {
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
//       React.createElement(UserHeader, {
//         onMenuClick: toggleSidebar,
//         user: user,
//         isSidebarOpen: isSidebarOpen
//       }),

//       React.createElement('main', {
//         style: {
//           padding: '94px 24px 24px 24px',
//           minHeight: 'calc(100vh - 70px)',
//           boxSizing: 'border-box',
//           backgroundColor: '#f3f4f6'
//         }
//       }, children)
//     )
//   );
// };

// export default UserLayout;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const UserLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const menuItems = [
//     { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '🎫' },
//     { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
//     { path: '/user/profile', label: 'Profile', icon: '👤' },
//   ];

//   return React.createElement('div', { style: { display: 'flex', minHeight: '100vh' } },
//     React.createElement('div', {
//       style: {
//         width: sidebarOpen ? '250px' : '0',
//         backgroundColor: '#10b981',
//         color: 'white',
//         transition: 'width 0.3s',
//         overflow: 'hidden',
//         position: 'fixed',
//         height: '100vh',
//         zIndex: 100
//       }
//     },
//       React.createElement('div', { style: { padding: '20px' } },
//         React.createElement('h2', { style: { color: 'white', marginBottom: '30px' } }, 'User Portal'),
//         menuItems.map(item => 
//           React.createElement('div', {
//             key: item.path,
//             onClick: () => navigate(item.path),
//             style: {
//               padding: '12px',
//               margin: '5px 0',
//               cursor: 'pointer',
//               borderRadius: '5px',
//               backgroundColor: window.location.pathname === item.path ? '#059669' : 'transparent'
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
//           React.createElement('span', null, user?.name || 'User'),
//           React.createElement('div', {
//             style: {
//               width: '35px',
//               height: '35px',
//               borderRadius: '50%',
//               backgroundColor: '#10b981',
//               color: 'white',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontWeight: 'bold'
//             }
//           }, user?.name?.charAt(0) || 'U')
//         )
//       ),
//       React.createElement('main', { style: { padding: '24px' } }, children)
//     )
//   );
// };

// export default UserLayout;
















import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

  const menuItems = [
    { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/user/profile', label: 'Profile', icon: '👤' },
    { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
    { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
    { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
  ];

  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // Sidebar
    React.createElement('div', {
      style: {
        width: '280px',
        backgroundColor: '#1a1f2e',
        color: '#ffffff',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 50,
        overflowY: 'auto'
      }
    },
      React.createElement('div', {
        style: {
          padding: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '700',
            color: '#ffffff',
            margin: 0
          }
        }, 'User Portal'),
        
        React.createElement('p', {
          style: {
            fontSize: '12px',
            color: '#9ca3af',
            margin: '4px 0 0 0'
          }
        }, 'Customer Portal')
      ),

      React.createElement('nav', {
        style: {
          padding: '16px'
        }
      },
        menuItems.map((item) =>
          React.createElement(NavLink, {
            key: item.path,
            to: item.path,
            style: ({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              marginBottom: '4px',
              color: isActive ? '#ffffff' : '#9ca3af',
              backgroundColor: isActive ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              textDecoration: 'none',
              borderRadius: '8px',
              borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
            })
          },
            React.createElement('span', {
              style: {
                marginRight: '12px',
                fontSize: '18px'
              }
            }, item.icon),
            item.label
          )
        )
      ),

      React.createElement('div', {
        style: {
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }
      },
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '12px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            gap: '8px'
          }
        },
          React.createElement('span', null, '🚪'),
          'Logout'
        )
      )
    ),

    // Main Content
    React.createElement('div', {
      style: {
        flex: 1,
        marginLeft: sidebarOpen ? '280px' : '0',
        transition: 'margin-left 0.3s ease',
        width: sidebarOpen ? 'calc(100% - 280px)' : '100%'
      }
    },
      // Header
      React.createElement('header', {
        style: {
          height: '70px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }
        },
          React.createElement('button', {
            onClick: () => setSidebarOpen(!sidebarOpen),
            style: {
              padding: '8px',
              backgroundColor: '#f3f4f6',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '20px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }, '☰'),
          
          React.createElement('h1', {
            style: {
              fontSize: '20px',
              fontWeight: '600',
              color: '#111827',
              margin: 0
            }
          }, 'User Portal')
        ),

        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              backgroundColor: '#f3f4f6',
              borderRadius: '40px'
            }
          },
            React.createElement('div', {
              style: {
                width: '32px',
                height: '32px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600'
              }
            }, user?.name?.charAt(0) || 'U'),
            
            React.createElement('span', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }
            }, user?.name || 'User')
          )
        )
      ),

      // Main Content
      React.createElement('main', {
        style: {
          padding: '24px',
          minHeight: 'calc(100vh - 70px)'
        }
      },
        React.createElement(Outlet)
      )
    )
  );
};

export default UserLayout;