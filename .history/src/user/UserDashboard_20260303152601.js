// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const UserDashboard = () => {
//   const { user } = useAuth();

//   return React.createElement('div', {
//     style: {
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       padding: '24px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     }
//   },
//     React.createElement('h1', {
//       style: {
//         fontSize: '24px',
//         fontWeight: '700',
//         color: '#111827',
//         marginBottom: '16px'
//       }
//     }, 'User Dashboard'),
    
//     React.createElement('p', {
//       style: {
//         fontSize: '16px',
//         color: '#4b5563',
//         marginBottom: '24px'
//       }
//     }, `Welcome back, ${user?.name || 'User'}!`),
    
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '20px'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '20px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Total Tickets'),
//         React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#10b981' } }, '5')
//       ),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '20px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Open Tickets'),
//         React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#f59e0b' } }, '2')
//       ),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '20px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Resolved'),
//         React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#3b82f6' } }, '3')
//       )
//     )
//   );
// };

// export default UserDashboard;











// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const UserSidebar = ({ isOpen, onClose, user, onLogout }) => {
//   const navigate = useNavigate();
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // User menu items - note the /user prefix
//   const menuItems = [
//     { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/user/profile', label: 'Profile', icon: '👤' },
//     { path: '/user/contacts', label: 'Contacts', icon: '📞' },
//     { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
//     { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
//     { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
//   ];

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     if (onClose) onClose();
//     navigate('/login');
//   };

//   const handleOverlayClick = () => {
//     if (onClose) {
//       onClose();
//     }
//   };

//   const handleNavLinkClick = () => {
//     if (window.innerWidth <= 1024 && onClose) {
//       onClose();
//     }
//   };

//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'U';
//   };

//   return React.createElement(React.Fragment, null,
//     !isDesktop && isOpen && React.createElement('div', {
//       onClick: handleOverlayClick,
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 40
//       }
//     }),

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
//               background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
//             }, user?.name || 'User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '13px',
//                 color: '#a0a0c0'
//               }
//             }, user?.role || 'User')
//           )
//         ),

//         !isDesktop && React.createElement('button', {
//           onClick: handleOverlayClick,
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
//           }
//         }, '✕')
//       ),

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
//               backgroundColor: isActive ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
//               textDecoration: 'none',
//               fontSize: '14px',
//               borderRadius: '8px',
//               borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
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
//             gap: '8px'
//           }
//         },
//           React.createElement('span', null, '🚪'),
//           'Logout'
//         )
//       )
//     )
//   );
// };

// export default UserSidebar;









import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '16px'
      }
    }, 'User Dashboard'),
    
    React.createElement('p', {
      style: {
        fontSize: '18px',
        color: '#4b5563',
        marginBottom: '32px'
      }
    }, `Welcome back, ${user?.name || 'User'}!`),
    
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }
      },
        React.createElement('h3', { 
          style: { 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '8px'
          } 
        }, 'Total Tickets'),
        
        React.createElement('p', { 
          style: { 
            fontSize: '36px', 
            fontWeight: '700', 
            color: '#10b981',
            margin: 0
          } 
        }, '12')
      ),
      
      React.createElement('div', {
        style: {
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }
      },
        React.createElement('h3', { 
          style: { 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '8px'
          } 
        }, 'Open Tickets'),
        
        React.createElement('p', { 
          style: { 
            fontSize: '36px', 
            fontWeight: '700', 
            color: '#f59e0b',
            margin: 0
          } 
        }, '5')
      ),
      
      React.createElement('div', {
        style: {
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }
      },
        React.createElement('h3', { 
          style: { 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '8px'
          } 
        }, 'Resolved'),
        
        React.createElement('p', { 
          style: { 
            fontSize: '36px', 
            fontWeight: '700', 
            color: '#3b82f6',
            margin: 0
          } 
        }, '7')
      ),
      
      React.createElement('div', {
        style: {
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }
      },
        React.createElement('h3', { 
          style: { 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '8px'
          } 
        }, 'Contacts'),
        
        React.createElement('p', { 
          style: { 
            fontSize: '36px', 
            fontWeight: '700', 
            color: '#8b5cf6',
            margin: 0
          } 
        }, '24')
      )
    )
  );
};

export default UserDashboard;