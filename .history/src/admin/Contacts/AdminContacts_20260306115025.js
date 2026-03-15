// // Contacts.js - Merged and Fixed
// import React from 'react';

// const Contacts = () => {
//   const contacts = [
//     { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com', phone: '+91 98765 43210', company: 'Tech Solutions' },
//     { id: 2, name: 'Rama', email: 'rama@gmail.com', phone: '+91 87654 32109', company: 'Design Studio' },
//     { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name', phone: '+1 234 567 8901', company: 'Research Labs' },
//     { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org', phone: '+1 345 678 9012', company: 'Medical Institute' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '94px 24px 24px 24px', // Added top padding to account for fixed header
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
//       // Header Section
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
//             fontSize: 'clamp(24px, 4vw, 32px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Contacts'),
        
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
//               padding: '10px 20px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//           }, '+ Add Contact'),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Filter'),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Download CSV'),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Upload CSV')
//         )
//       ),

//       // Table Container
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           overflowX: 'auto',
//           width: '100%'
//         }
//       },
//         React.createElement('table', {
//           style: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             minWidth: '800px'
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
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'NAME'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'EMAIL'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'PHONE'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'COMPANY'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'ACTIONS')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             contacts.map((contact) =>
//               React.createElement('tr', {
//                 key: contact.id,
//                 style: {
//                   borderBottom: '1px solid #e5e7eb',
//                   transition: 'background-color 0.2s'
//                 },
//                 onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                 onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//               },
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, contact.name),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     color: '#3b82f6'
//                   }
//                 }, contact.email),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     color: '#6b7280'
//                   }
//                 }, contact.phone),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     color: '#6b7280'
//                   }
//                 }, contact.company),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px'
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
//                         padding: '6px 12px',
//                         backgroundColor: '#f3f4f6',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         cursor: 'pointer',
//                         color: '#4b5563',
//                         transition: 'all 0.2s'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//                     }, 'Edit'),
                    
//                     React.createElement('button', {
//                       style: {
//                         padding: '6px 12px',
//                         backgroundColor: '#fee2e2',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         cursor: 'pointer',
//                         color: '#ef4444',
//                         transition: 'all 0.2s'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#fecaca',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#fee2e2'
//                     }, 'Delete')
//                   )
//                 )
//               )
//             )
//           )
//         )
//       ),

//       // Footer with Pagination
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
//         React.createElement('div', {
//           style: {
//             color: '#6b7280',
//             fontSize: '14px'
//           }
//         }, 'Showing 1-4 of 4 contacts'),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '4px'
//           }
//         },
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer',
//               opacity: '0.5'
//             },
//             disabled: true
//           }, 'Previous'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer'
//             }
//           }, '1'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer',
//               opacity: '0.5'
//             },
//             disabled: true
//           }, 'Next')
//         )
//       )
//     )
//   );
// };

// export default Contacts;