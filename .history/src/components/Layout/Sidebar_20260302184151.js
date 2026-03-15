
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Sidebar = ({ isOpen, onClose, user, onLogout }) => {
//   const navigate = useNavigate();

//   const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  
//   // Define menu items based on user role
//   const menuItems = [];

//   // Common items for all users
//   menuItems.push(
//     { path: '/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/profile', label: 'Profile', icon: '👤' }
//   );

//   // Admin-only items
//   if (isAdmin) {
//     menuItems.push(
//       { path: '/users', label: 'Users', icon: '👥' },
//       { path: '/contacts', label: 'Contacts', icon: '📞' },
//       { path: '/leads', label: 'Leads', icon: '🎯' },
//       { path: '/roles', label: 'Roles', icon: '🛡️' },
//       { path: '/permissions', label: 'Permissions', icon: '🔐' }
//     );
//   } else {
//     // User-only items
//     menuItems.push(
//       { path: '/tickets', label: 'Tickets', icon: '🎫' },
//       { path: '/generate-ticket', label: 'Generate Ticket', icon: '➕' },
//       { path: '/ticket-status', label: 'Ticket Status', icon: '📋' }
//     );
//   }

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login', { replace: true });
//     if (onClose) onClose();
//   };

//   const handleOverlayClick = () => {
//     if (onClose) {
//       onClose();
//     }
//   };

//   const handleCloseClick = (e) => {
//     e.stopPropagation();
//     if (onClose) {
//       onClose();
//     }
//   };

//   // Get user initials for avatar
//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'U';
//   };

//   return React.createElement(React.Fragment, null,
//     // Overlay for mobile - only shows when sidebar is open
//     isOpen && React.createElement('div', {
//       onClick: handleOverlayClick,
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 45,
//         transition: 'opacity 0.3s ease',
//         opacity: isOpen ? 1 : 0,
//         display: isOpen ? 'block' : 'none'
//       }
//     }),

//     // Sidebar
//     React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '300px',
//         height: '100vh',
//         backgroundColor: '#1e1e2f',
//         background: 'linear-gradient(180deg, #1e1e2f 0%, #2d2d44 100%)',
//         color: '#ffffff',
//         transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease-in-out',
//         zIndex: 50,
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
//         overflowY: 'auto'
//       }
//     },
//       // Header with user info
//       React.createElement('div', {
//         style: {
//           padding: '30px 24px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           background: 'rgba(0, 0, 0, 0.2)',
//           position: 'relative'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '60px',
//               height: '60px',
//               borderRadius: '50%',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '24px',
//               fontWeight: '600',
//               color: '#ffffff',
//               boxShadow: '0 4px 10px rgba(102, 126, 234, 0.4)'
//             }
//           }, getUserInitials()),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '4px'
//               }
//             }, user?.name || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 color: '#a0a0c0',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   width: '8px',
//                   height: '8px',
//                   borderRadius: '50%',
//                   backgroundColor: '#10b981',
//                   display: 'inline-block'
//                 }
//               }),
//               user?.role || 'Administrator'
//             )
//           )
//         ),

//         // Close button for mobile - FIXED: Now working properly
//         React.createElement('button', {
//           onClick: handleCloseClick,
//           style: {
//             position: 'absolute',
//             top: '20px',
//             right: '20px',
//             background: 'rgba(255, 255, 255, 0.2)',
//             border: 'none',
//             color: '#ffffff',
//             fontSize: '20px',
//             cursor: 'pointer',
//             width: '36px',
//             height: '36px',
//             borderRadius: '50%',
//             display: window.innerWidth <= 768 ? 'flex' : 'none',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transition: 'all 0.2s',
//             zIndex: 51
//           },
//           onMouseEnter: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)',
//           onMouseLeave: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
//         }, '✕')
//       ),

//       // Navigation menu
//       React.createElement('nav', {
//         style: {
//           flex: 1,
//           padding: '24px 16px'
//         }
//       },
//         menuItems.map((item) =>
//           React.createElement(NavLink, {
//             key: item.path,
//             to: item.path,
//             style: ({ isActive }) => ({
//               display: 'flex',
//               alignItems: 'center',
//               padding: '14px 20px',
//               marginBottom: '8px',
//               color: isActive ? '#ffffff' : '#a0a0c0',
//               backgroundColor: isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
//               textDecoration: 'none',
//               fontSize: '15px',
//               fontWeight: isActive ? '500' : '400',
//               borderRadius: '12px',
//               transition: 'all 0.2s',
//               borderLeft: isActive ? '4px solid #667eea' : '4px solid transparent'
//             }),
//             onClick: () => {
//               if (window.innerWidth <= 768 && onClose) {
//                 onClose();
//               }
//             }
//           },
//             React.createElement('span', {
//               style: {
//                 marginRight: '14px',
//                 fontSize: '20px'
//               }
//             }, item.icon),
//             item.label
//           )
//         )
//       ),

//       // Logout button at bottom
//       React.createElement('div', {
//         style: {
//           padding: '24px',
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
//             padding: '14px',
//             background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
//             color: '#ffffff',
//             border: 'none',
//             borderRadius: '12px',
//             fontSize: '15px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s',
//             gap: '8px',
//             boxShadow: '0 4px 10px rgba(244, 63, 94, 0.3)'
//           },
//           onMouseEnter: (e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 6px 15px rgba(244, 63, 94, 0.4)';
//           },
//           onMouseLeave: (e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 10px rgba(244, 63, 94, 0.3)';
//           }
//         },
//           React.createElement('span', { style: { fontSize: '18px' } }, '🚪'),
//           'Logout'
//         )
//       )
//     )
//   );
// };

// export default Sidebar;













// import React, { useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Sidebar = ({ isOpen, onClose, onToggle, user, onLogout }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('Sidebar isOpen:', isOpen);
//   }, [isOpen]);

//   const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  
//   // Define menu items based on user role
//   const menuItems = [
//     { path: '/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/profile', label: 'Profile', icon: '👤' },
//   ];

//   // Admin-only items
//   if (isAdmin) {
//     menuItems.push(
//       { path: '/users', label: 'Users', icon: '👥' },
//       { path: '/contacts', label: 'Contacts', icon: '📞' },
//       { path: '/leads', label: 'Leads', icon: '🎯' },
//       { path: '/roles', label: 'Roles', icon: '🛡️' },
//       { path: '/permissions', label: 'Permissions', icon: '🔐' }
//     );
//   }

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login', { replace: true });
//     if (onClose) onClose();
//   };

//   const handleOverlayClick = () => {
//     console.log('Overlay clicked');
//     if (onClose) {
//       onClose();
//     }
//   };

//   const handleCloseClick = (e) => {
//     e.stopPropagation();
//     console.log('Close button clicked');
//     if (onClose) {
//       onClose();
//     }
//   };

//   const handleNavLinkClick = () => {
//     if (window.innerWidth <= 1024 && onClose) {
//       onClose();
//     }
//   };

//   // Get user initials for avatar
//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'A';
//   };

//   const isDesktop = window.innerWidth > 1024;

//   return React.createElement(React.Fragment, null,
//     // Overlay for mobile
//     !isDesktop && isOpen && React.createElement('div', {
//       onClick: handleOverlayClick,
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 40,
//         transition: 'opacity 0.3s ease',
//         opacity: isOpen ? 1 : 0
//       }
//     }),

//     // Sidebar
//     React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '280px',
//         height: '100vh',
//         backgroundColor: '#1e1e2f',
//         background: 'linear-gradient(180deg, #1e1e2f 0%, #2d2d44 100%)',
//         color: '#ffffff',
//         transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease-in-out',
//         zIndex: 50,
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
//         overflowY: 'auto'
//       }
//     },
//       // Header with user info
//       React.createElement('div', {
//         style: {
//           padding: '24px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           position: 'relative'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '48px',
//               height: '48px',
//               borderRadius: '50%',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '20px',
//               fontWeight: '600',
//               color: '#ffffff'
//             }
//           }, getUserInitials()),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 color: '#ffffff',
//                 marginBottom: '2px'
//               }
//             }, user?.name || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '13px',
//                 color: '#a0a0c0'
//               }
//             }, user?.role || 'Administrator')
//           )
//         ),

//         // Close button for mobile
//         !isDesktop && React.createElement('button', {
//           onClick: handleCloseClick,
//           style: {
//             position: 'absolute',
//             top: '20px',
//             right: '20px',
//             background: 'rgba(255, 255, 255, 0.2)',
//             border: 'none',
//             color: '#ffffff',
//             fontSize: '18px',
//             cursor: 'pointer',
//             width: '32px',
//             height: '32px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)',
//           onMouseLeave: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
//         }, '✕')
//       ),

//       // Navigation menu
//       React.createElement('nav', {
//         style: {
//           flex: 1,
//           padding: '20px 12px'
//         }
//       },
//         menuItems.map((item) =>
//           React.createElement(NavLink, {
//             key: item.path,
//             to: item.path,
//             style: ({ isActive }) => ({
//               display: 'flex',
//               alignItems: 'center',
//               padding: '12px 16px',
//               marginBottom: '4px',
//               color: isActive ? '#ffffff' : '#a0a0c0',
//               backgroundColor: isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
//               textDecoration: 'none',
//               fontSize: '14px',
//               borderRadius: '8px',
//               transition: 'all 0.2s',
//               borderLeft: isActive ? '3px solid #667eea' : '3px solid transparent'
//             }),
//             onClick: handleNavLinkClick
//           },
//             React.createElement('span', {
//               style: {
//                 marginRight: '12px',
//                 fontSize: '18px'
//               }
//             }, item.icon),
//             item.label
//           )
//         )
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
//           React.createElement('span', null, '🚪'),
//           'Logout'
//         )
//       )
//     )
//   );
// };

// export default Sidebar;







import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, user, onLogout }) => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('Sidebar isOpen:', isOpen);
  }, [isOpen]);

  const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  
  // Define menu items based on user role
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  // Admin-only items
  if (isAdmin) {
    menuItems.push(
      { path: '/users', label: 'Users', icon: '👥' },
      { path: '/contacts', label: 'Contacts', icon: '📞' },
      { path: '/leads', label: 'Leads', icon: '🎯' },
      { path: '/roles', label: 'Roles', icon: '🛡️' },
      { path: '/permissions', label: 'Permissions', icon: '🔐' }
    );
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login', { replace: true });
    if (onClose) onClose();
  };

  const handleOverlayClick = () => {
    console.log('Overlay clicked');
    if (onClose) {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    console.log('Close button clicked');
    if (onClose) {
      onClose();
    }
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 1024 && onClose) {
      onClose();
    }
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'A';
  };

  return React.createElement(React.Fragment, null,
    // Overlay for mobile
    !isDesktop && isOpen && React.createElement('div', {
      onClick: handleOverlayClick,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 40
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
        backgroundColor: '#1e1e2f',
        background: 'linear-gradient(180deg, #1e1e2f 0%, #2d2d44 100%)',
        color: '#ffffff',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
        overflowY: 'auto'
      }
    },
      // Header with user info
      React.createElement('div', {
        style: {
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }
      },
        React.createElement('div', {
          style: {
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
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            }, user?.name || 'Admin User'),
            
            React.createElement('div', {
              style: {
                fontSize: '13px',
                color: '#a0a0c0'
              }
            }, user?.role || 'Administrator')
          )
        ),

        // Close button for mobile
        !isDesktop && React.createElement('button', {
          onClick: handleCloseClick,
          style: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#ffffff',
            fontSize: '18px',
            cursor: 'pointer',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, '✕')
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
              color: isActive ? '#ffffff' : '#a0a0c0',
              backgroundColor: isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
              textDecoration: 'none',
              fontSize: '14px',
              borderRadius: '8px',
              borderLeft: isActive ? '3px solid #667eea' : '3px solid transparent'
            }),
            onClick: handleNavLinkClick
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
          React.createElement('span', null, '🚪'),
          'Logout'
        )
      )
    )
  );
};

export default Sidebar;