
// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const UserSidebar = ({ isOpen, onClose, user, onLogout }) => {
//   const navigate = useNavigate();
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 1024;

//   // Debug logs
//   useEffect(() => {
//     console.log('UserSidebar - isOpen:', isOpen);
//     console.log('UserSidebar - user:', user);
//     console.log('UserSidebar - isMobile:', isMobile);
//   }, [isOpen, user, isMobile]);

//   const menuItems = [
//     { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/user/profile', label: 'Profile', icon: '👤' },
//     { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
//     { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
//     { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
//   ];

//   const handleLogout = () => {
//     console.log('Logout clicked');
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login', { replace: true });
//     if (onClose) onClose();
//   };

//   const handleCloseClick = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     console.log('Close button clicked');
//     if (onClose) onClose();
//   };

//   const handleOverlayClick = () => {
//     console.log('Overlay clicked');
//     if (onClose) onClose();
//   };

//   const handleNavLinkClick = () => {
//     console.log('Nav link clicked');
//     if (isMobile && onClose) {
//       onClose();
//     }
//   };

//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'R';
//   };

//   // Don't render anything on mobile if not open
//   if (isMobile && !isOpen) {
//     return null;
//   }

//   return React.createElement(React.Fragment, null,
//     // Overlay for mobile
//     isMobile && isOpen && React.createElement('div', {
//       key: 'overlay',
//       onClick: handleOverlayClick,
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 999,
//         cursor: 'pointer'
//       }
//     }),

//     // Sidebar
//     React.createElement('div', {
//       key: 'sidebar',
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '280px',
//         height: '100vh',
//         backgroundColor: '#1a1f2e',
//         background: 'linear-gradient(180deg, #1a1f2e 0%, #232837 100%)',
//         color: '#ffffff',
//         transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease-in-out',
//         zIndex: 1000,
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
//         overflowY: 'auto'
//       }
//     },
//       // Header with CRM logo and close button
//       React.createElement('div', {
//         style: {
//           padding: '24px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           position: 'relative'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#ffffff',
//             margin: 0,
//             letterSpacing: '-0.5px'
//           }
//         }, 'CRM'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '12px',
//             color: '#9ca3af',
//             margin: '4px 0 0 0'
//           }
//         }, 'Customer Relationship Management'),

//         // Close button for mobile
//         isMobile && React.createElement('button', {
//           onClick: handleCloseClick,
//           style: {
//             position: 'absolute',
//             top: '24px',
//             right: '20px',
//             background: 'rgba(255, 255, 255, 0.2)',
//             border: 'none',
//             color: '#ffffff',
//             fontSize: '20px',
//             cursor: 'pointer',
//             width: '36px',
//             height: '36px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1001
//           },
//           onMouseEnter: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)',
//           onMouseLeave: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
//         }, '✕')
//       ),

//       // User info
//       React.createElement('div', {
//         style: {
//           padding: '20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             width: '48px',
//             height: '48px',
//             borderRadius: '50%',
//             background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#ffffff'
//           }
//         }, getUserInitials()),
        
//         React.createElement('div', null,
//           React.createElement('div', {
//             style: {
//               fontSize: '16px',
//               fontWeight: '600',
//               color: '#ffffff',
//               marginBottom: '2px'
//             }
//           }, user?.name || 'Regular User'),
          
//           React.createElement('div', {
//             style: {
//               fontSize: '13px',
//               color: '#9ca3af'
//             }
//           }, 'Regular User')
//         )
//       ),

//       // Navigation menu
//       React.createElement('nav', {
//         style: {
//           flex: 1,
//           padding: '20px 12px'
//         }
//       },
//         menuItems.map((item) => {
//           console.log('Rendering menu item:', item.path);
//           return React.createElement(NavLink, {
//             key: item.path,
//             to: item.path,
//             style: ({ isActive }) => {
//               console.log(`${item.path} isActive:`, isActive);
//               return {
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '12px 16px',
//                 marginBottom: '4px',
//                 color: isActive ? '#ffffff' : '#9ca3af',
//                 backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
//                 textDecoration: 'none',
//                 fontSize: '14px',
//                 borderRadius: '8px',
//                 transition: 'all 0.2s',
//                 borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
//               };
//             },
//             onClick: handleNavLinkClick
//           },
//             React.createElement('span', {
//               style: {
//                 marginRight: '12px',
//                 fontSize: '18px'
//               }
//             }, item.icon),
//             item.label
//           );
//         })
//       ),

//       // Logout button
//       React.createElement('div', {
//         style: {
//           padding: '20px',
//           borderTop: '1px solid rgba(255, 255, 255, 0.1)'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleLogout,
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: '100%',
//             padding: '12px',
//             backgroundColor: '#ef4444',
//             color: '#ffffff',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s',
//             gap: '8px'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//         },
//           React.createElement('span', { style: { fontSize: '18px' } }, '🚪'),
//           'Logout'
//         )
//       )
//     )
//   );
// };

// export default UserSidebar;















import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const UserSidebar = ({ isOpen, onClose, user, onLogout }) => {
  const navigate = useNavigate();

  const menuItems = [
    { path: './', label: 'Dashboard', icon: '📊' },
    { path: '/user/profile', label: 'Profile', icon: '👤' },
    { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
    { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
    { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
  ];

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login', { replace: true });
    if (onClose) onClose();
  };

  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  const getUserInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'R';
  };

  const isMobile = window.innerWidth <= 1024;

  return React.createElement(React.Fragment, null,
    // Overlay for mobile
    isMobile && isOpen && React.createElement('div', {
      onClick: handleOverlayClick,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
      }
    }),

    // Sidebar
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '280px',
        height: '100vh',
        backgroundColor: '#1a1f2e',
        background: 'linear-gradient(180deg, #1a1f2e 0%, #232837 100%)',
        color: '#ffffff',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
        overflowY: 'auto'
      }
    },
      // Header
      React.createElement('div', {
        style: {
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '700',
            color: '#ffffff',
            margin: 0,
            letterSpacing: '-0.5px'
          }
        }, 'CRM'),
        
        React.createElement('p', {
          style: {
            fontSize: '12px',
            color: '#9ca3af',
            margin: '4px 0 0 0'
          }
        }, 'Customer Relationship Management'),

        // Close button for mobile
        isMobile && React.createElement('button', {
          onClick: handleCloseClick,
          style: {
            position: 'absolute',
            top: '24px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#ffffff',
            fontSize: '20px',
            cursor: 'pointer',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, '✕')
      ),

      // User info
      React.createElement('div', {
        style: {
          padding: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }
      },
        React.createElement('div', {
          style: {
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: '600',
            color: '#ffffff'
          }
        }, getUserInitials()),
        
        React.createElement('div', null,
          React.createElement('div', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '2px'
            }
          }, user?.name || 'Regular User'),
          
          React.createElement('div', {
            style: {
              fontSize: '13px',
              color: '#9ca3af'
            }
          }, 'Regular User')
        )
      ),

      // Navigation menu
      React.createElement('nav', {
        style: {
          flex: 1,
          padding: '20px 12px'
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
              backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
              textDecoration: 'none',
              fontSize: '14px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
            }),
            onClick: () => {
              if (isMobile && onClose) {
                onClose();
              }
            }
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

      // Logout button
      React.createElement('div', {
        style: {
          padding: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            gap: '8px'
          }
        },
          React.createElement('span', { style: { fontSize: '18px' } }, '🚪'),
          'Logout'
        )
      )
    )
  );
};

export default UserSidebar;