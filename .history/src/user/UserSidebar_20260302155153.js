

// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const UserSidebar = ({ isOpen, onClose, user, onLogout }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/user/profile', label: 'Profile', icon: '👤' },
//     { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
//     { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
//     { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
//   ];

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login', { replace: true });
//     if (onClose) onClose();
//   };

//   const handleCloseClick = (e) => {
//     e.stopPropagation();
//     if (onClose) onClose();
//   };

//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'U';
//   };

//   const isDesktop = window.innerWidth > 1024;

//   return React.createElement(React.Fragment, null,
//     !isDesktop && isOpen && React.createElement('div', {
//       onClick: onClose,
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
//         backgroundColor: '#1a1f2e',
//         background: 'linear-gradient(180deg, #1a1f2e 0%, #232837 100%)',
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
//       // Header with CRM logo
//       React.createElement('div', {
//         style: {
//           padding: '24px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           marginBottom: '20px'
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
//         }, 'Customer Relationship Management')
//       ),

//       // User info
//       React.createElement('div', {
//         style: {
//           padding: '0 20px 20px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           marginBottom: '20px',
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
//           padding: '0 12px'
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
//               color: isActive ? '#ffffff' : '#9ca3af',
//               backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
//               textDecoration: 'none',
//               fontSize: '14px',
//               borderRadius: '8px',
//               transition: 'all 0.2s',
//               borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
//             }),
//             onClick: () => {
//               if (window.innerWidth <= 1024 && onClose) {
//                 onClose();
//               }
//             }
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
//           borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//           marginTop: '20px'
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
//       ),

//       // Close button for mobile
//       !isDesktop && React.createElement('button', {
//         onClick: handleCloseClick,
//         style: {
//           position: 'absolute',
//           top: '20px',
//           right: '20px',
//           background: 'rgba(255, 255, 255, 0.2)',
//           border: 'none',
//           color: '#ffffff',
//           fontSize: '18px',
//           cursor: 'pointer',
//           width: '32px',
//           height: '32px',
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }
//       }, '✕')
//     )
//   );
// };

// export default UserSidebar;











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

//   const menuItems = [
//     { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/user/profile', label: 'Profile', icon: '👤' },
//     { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
//     { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
//     { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
//   ];

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login', { replace: true });
//     if (onClose) onClose();
//   };

//   const handleCloseClick = (e) => {
//     e.stopPropagation();
//     if (onClose) onClose();
//   };

//   const handleOverlayClick = () => {
//     if (onClose) onClose();
//   };

//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'R';
//   };

//   // Log for debugging
//   useEffect(() => {
//     console.log('UserSidebar isOpen:', isOpen);
//     console.log('User:', user);
//   }, [isOpen, user]);

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
//         display: isOpen ? 'block' : 'none'
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
//         backgroundColor: '#1a1f2e',
//         background: 'linear-gradient(180deg, #1a1f2e 0%, #232837 100%)',
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
//       // Header with CRM logo
//       React.createElement('div', {
//         style: {
//           padding: '24px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           marginBottom: '20px'
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
//         }, 'Customer Relationship Management')
//       ),

//       // User info
//       React.createElement('div', {
//         style: {
//           padding: '0 20px 20px 20px',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           marginBottom: '20px',
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
//           padding: '0 12px'
//         }
//       },
//         menuItems.map((item) => {
//           console.log('Rendering menu item:', item.path);
//           return React.createElement(NavLink, {
//             key: item.path,
//             to: item.path,
//             style: ({ isActive }) => {
//               console.log('NavLink style for', item.path, 'isActive:', isActive);
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
//                 borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent',
//                 cursor: 'pointer'
//               };
//             },
//             onClick: () => {
//               console.log('NavLink clicked:', item.path);
//               if (window.innerWidth <= 1024 && onClose) {
//                 onClose();
//               }
//             }
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
//           borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//           marginTop: '20px'
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
//       ),

//       // Close button for mobile
//       !isDesktop && isOpen && React.createElement('button', {
//         onClick: handleCloseClick,
//         style: {
//           position: 'absolute',
//           top: '20px',
//           right: '20px',
//           background: 'rgba(255, 255, 255, 0.2)',
//           border: 'none',
//           color: '#ffffff',
//           fontSize: '18px',
//           cursor: 'pointer',
//           width: '32px',
//           height: '32px',
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           zIndex: 51
//         },
//         onMouseEnter: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)',
//         onMouseLeave: (e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
//       }, '✕')
//     )
//   );
// };

// export default UserSidebar;