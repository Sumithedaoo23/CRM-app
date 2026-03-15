
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

//   // Get user initials for avatar
//   const getUserInitials = () => {
//     if (user?.name) {
//       return user.name.charAt(0).toUpperCase();
//     }
//     return 'U';
//   };

//   return React.createElement('div', null,
//     // Overlay for mobile
//     isOpen && React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 40,
//       },
//       onClick: onClose
//     }),

//     // Sidebar
//     React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '280px',
//         height: '100vh',
//         backgroundColor: '#1a1a1a',
//         color: '#ffffff',
//         transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease',
//         zIndex: 50,
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)'
//       }
//     },
//       // Header with user info
//       React.createElement('div', {
//         style: {
//           padding: '24px 20px',
//           borderBottom: '1px solid #333'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '8px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '48px',
//               height: '48px',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
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
//                 color: '#ffffff'
//               }
//             }, user?.name || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 color: '#9ca3af',
//                 marginTop: '4px'
//               }
//             }, user?.role || 'Administrator')
//           )
//         )
//       ),

//       // Navigation menu
//       React.createElement('nav', {
//         style: {
//           flex: 1,
//           overflowY: 'auto',
//           padding: '16px 0'
//         }
//       },
//         menuItems.map((item) =>
//           React.createElement(NavLink, {
//             key: item.path,
//             to: item.path,
//             style: ({ isActive }) => ({
//               display: 'flex',
//               alignItems: 'center',
//               padding: '12px 20px',
//               color: isActive ? '#ffffff' : '#9ca3af',
//               backgroundColor: isActive ? '#2d2d2d' : 'transparent',
//               textDecoration: 'none',
//               fontSize: '15px',
//               fontWeight: isActive ? '500' : '400',
//               borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent',
//               transition: 'all 0.2s'
//             }),
//             onClick: onClose
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
//           borderTop: '1px solid #333'
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
//             borderRadius: '6px',
//             fontSize: '15px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//         },
//           React.createElement('span', { style: { marginRight: '8px' } }, '🚪'),
//           'Logout'
//         )
//       )
//     )
//   );
// };

// export default Sidebar;













