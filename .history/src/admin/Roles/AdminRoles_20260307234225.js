
// import React from 'react';

// const Roles = () => {
//   const roles = [
//     { id: 1, name: 'Administrator', permissions: 'All', users: 3, created: '2024-01-15' },
//     { id: 2, name: 'User', permissions: 'Read Only', users: 12, created: '2024-01-20' },
//     { id: 3, name: 'Manager', permissions: 'Read, Write', users: 5, created: '2024-02-01' },
//     { id: 4, name: 'Editor', permissions: 'Read, Write, Edit', users: 8, created: '2024-02-10' },
//     { id: 5, name: 'Viewer', permissions: 'Read Only (Restricted)', users: 15, created: '2024-02-15' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const getPermissionColor = (permissions) => {
//     if (permissions === 'All') return '#10b981';
//     if (permissions.includes('Write')) return '#3b82f6';
//     if (permissions.includes('Read')) return '#f59e0b';
//     return '#6b7280';
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '94px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Main Content Container
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       // Header with CRM title and user menu
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: 'clamp(24px, 5vw, 32px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'CRM Dashboard'),
        
//         // User Menu
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '20px',
//             backgroundColor: '#ffffff',
//             padding: '8px 16px',
//             borderRadius: '40px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '32px',
//               height: '32px',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#ffffff'
//             }
//           }, 'AU'),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }
//             }, 'Administrator')
//           ),
          
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               cursor: 'pointer'
//             }
//           }, '▼')
//         )
//       ),

//       // Navigation Tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '24px',
//           marginBottom: '24px',
//           paddingBottom: '8px',
//           borderBottom: '1px solid #e5e7eb',
//           flexWrap: 'wrap'
//         }
//       },
//         ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             style: {
//               fontSize: '14px',
//               color: item === 'Roles' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Roles' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Roles' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Title and Actions Row
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '20px',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: 'clamp(20px, 4vw, 24px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Roles'),
        
//         // Action Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             flexWrap: 'wrap'
//           }
//         },
//           React.createElement('button', {
//             style: {
//               padding: '8px 16px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s'
//             },
//             onMouseEnter: (e) => e.target.style.backgroundColor = '#2563eb',
//             onMouseLeave: (e) => e.target.style.backgroundColor = '#3b82f6'
//           }, '+ New Role'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px',
//               transition: 'background-color 0.2s'
//             },
//             onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//           }, 'Filter', 
//             React.createElement('span', { style: { fontSize: '12px' } }, '▼')
//           ),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s'
//             },
//             onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//           }, 'Download CSV'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s'
//             },
//             onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//           }, 'Upload CSV')
//         )
//       ),
      
//       // Table
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           overflowX: 'auto',
//           width: '100%'
//         }
//       },
//         React.createElement('table', {
//           style: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             minWidth: '600px'
//           }
//         },
//           React.createElement('thead', null,
//             React.createElement('tr', {
//               style: {
//                 borderBottom: '2px solid #e5e7eb'
//               }
//             },
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'Name'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'Permissions'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'Users'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'Created'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em',
//                   width: '100px'
//                 }
//               }, 'Actions')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             roles.map((role) =>
//               React.createElement('tr', {
//                 key: role.id,
//                 style: {
//                   borderBottom: '1px solid #f3f4f6',
//                   transition: 'background-color 0.2s'
//                 },
//                 onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                 onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//               },
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, role.name),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px'
//                   }
//                 },
//                   React.createElement('span', {
//                     style: {
//                       backgroundColor: getPermissionColor(role.permissions) + '20',
//                       color: getPermissionColor(role.permissions),
//                       padding: '4px 8px',
//                       borderRadius: '4px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       display: 'inline-block'
//                     }
//                   }, role.permissions)
//                 ),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, role.users),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, role.created),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px'
//                   }
//                 },
//                   React.createElement('div', {
//                     style: {
//                       display: 'flex',
//                       gap: '8px'
//                     }
//                   },
//                     React.createElement('button', {
//                       style: {
//                         padding: '4px 8px',
//                         backgroundColor: 'transparent',
//                         color: '#3b82f6',
//                         border: 'none',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         cursor: 'pointer'
//                       },
//                       onMouseEnter: (e) => e.target.style.backgroundColor = '#f3f4f6',
//                       onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
//                     }, 'Edit'),
                    
//                     React.createElement('button', {
//                       style: {
//                         padding: '4px 8px',
//                         backgroundColor: 'transparent',
//                         color: '#ef4444',
//                         border: 'none',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         cursor: 'pointer'
//                       },
//                       onMouseEnter: (e) => e.target.style.backgroundColor = '#f3f4f6',
//                       onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
//                     }, 'Delete')
//                   )
//                 )
//               )
//             )
//           )
//         )
//       ),
      
//       // Footer with Pagination and Logout
//       React.createElement('div', {
//         style: {
//           marginTop: '24px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         // Pagination
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '8px',
//             alignItems: 'center'
//           }
//         },
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, 'Showing 1-5 of 5 roles'),
          
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '4px',
//               marginLeft: '16px'
//             }
//           },
//             React.createElement('button', {
//               style: {
//                 padding: '4px 8px',
//                 backgroundColor: 'white',
//                 color: '#4b5563',
//                 border: '1px solid #d1d5db',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer',
//                 opacity: '0.5'
//               },
//               disabled: true
//             }, 'Previous'),
            
//             React.createElement('button', {
//               style: {
//                 padding: '4px 8px',
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer'
//               }
//             }, '1'),
            
//             React.createElement('button', {
//               style: {
//                 padding: '4px 8px',
//                 backgroundColor: 'white',
//                 color: '#4b5563',
//                 border: '1px solid #d1d5db',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer',
//                 opacity: '0.5'
//               },
//               disabled: true
//             }, 'Next')
//           )
//         ),

//         // Logout Button
//         React.createElement('button', {
//           onClick: handleLogout,
//           style: {
//             padding: '8px 24px',
//             backgroundColor: '#ef4444',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.target.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.target.style.backgroundColor = '#ef4444'
//         }, 'Logout')
//       )
//     ),

//     // Dark Mode Toggle
//     React.createElement('div', {
//       style: {
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px'
//       }
//     },
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: '#1f2937',
//           color: 'white',
//           border: 'none',
//           borderRadius: '20px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }
//       }, '🌙 Dark')
//     )
//   );
// };

// export default Roles;