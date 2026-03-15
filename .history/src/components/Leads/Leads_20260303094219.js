// import React from 'react';

// const Leads = () => {
//   const leads = [
//     { 
//       id: 1, 
//       status: 'Created', 
//       date: '6/9/2024, 4:08:00 PM', 
//       contact: '09f1134c-8846-4eb...', 
//       user: 'Admin', 
//       notes: 'Development of w...' 
//     },
//     { 
//       id: 2, 
//       status: 'Contacted', 
//       date: '1/2/2024, 5:30:00 PM', 
//       contact: 'john.doe@email.com', 
//       user: 'Sarah', 
//       notes: 'To answer power...' 
//     },
//     { 
//       id: 3, 
//       status: 'Qualified', 
//       date: '3/15/2024, 10:15:00 AM', 
//       contact: 'mike.smith@email.com', 
//       user: 'Admin', 
//       notes: 'Interested in premium package' 
//     },
//     { 
//       id: 4, 
//       status: 'Proposal', 
//       date: '4/22/2024, 2:30:00 PM', 
//       contact: 'emma.wilson@email.com', 
//       user: 'John', 
//       notes: 'Sent contract for review' 
//     },
//   ];

//   const handleLogout = () => {
//     // Clear user data from localStorage
//     localStorage.removeItem('crm-user');
//     // Redirect to login page
//     window.location.href = '/login';
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'Created': '#3b82f6',
//       'Contacted': '#f59e0b',
//       'Qualified': '#10b981',
//       'Proposal': '#8b5cf6'
//     };
//     return colors[status] || '#6b7280';
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header with CRM title and user menu
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '24px',
//         flexWrap: 'wrap',
//         gap: '16px'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: 'clamp(24px, 5vw, 32px)',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'CRM Dashboard'),
      
//       // User Menu
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           alignItems: 'center',
//           gap: '20px',
//           backgroundColor: '#ffffff',
//           padding: '8px 16px',
//           borderRadius: '40px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             width: '32px',
//             height: '32px',
//             borderRadius: '50%',
//             backgroundColor: '#3b82f6',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '14px',
//             fontWeight: '600',
//             color: '#ffffff'
//           }
//         }, 'AU'),
        
//         React.createElement('div', null,
//           React.createElement('div', {
//             style: {
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#111827'
//             }
//           }, 'Admin User'),
          
//           React.createElement('div', {
//             style: {
//               fontSize: '12px',
//               color: '#6b7280'
//             }
//           }, 'Administrator')
//         ),
        
//         React.createElement('span', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             cursor: 'pointer'
//           }
//         }, '▼')
//       )
//     ),

//     // Leads Title
//     React.createElement('h2', {
//       style: {
//         fontSize: 'clamp(20px, 4vw, 24px)',
//         fontWeight: '600',
//         color: '#111827',
//         marginBottom: '20px'
//       }
//     }, 'Leads'),
    
//     // Action Buttons
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         gap: '12px',
//         marginBottom: '24px',
//         flexWrap: 'wrap'
//       }
//     },
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.target.style.backgroundColor = '#2563eb',
//         onMouseLeave: (e) => e.target.style.backgroundColor = '#3b82f6'
//       }, '+ New Item'),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '4px',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//         onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//       }, 'Filter', 
//         React.createElement('span', { style: { fontSize: '12px' } }, '▼')
//       ),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//         onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//       }, 'Download CSV'),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//         onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//       }, 'Upload CSV')
//     ),
    
//     // Table Container
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         overflowX: 'auto',
//         width: '100%'
//       }
//     },
//       React.createElement('table', {
//         style: {
//           width: '100%',
//           borderCollapse: 'collapse',
//           minWidth: '800px'
//         }
//       },
//         React.createElement('thead', null,
//           React.createElement('tr', {
//             style: {
//               borderBottom: '2px solid #e5e7eb'
//             }
//           },
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }
//             }, 'Status'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }
//             }, 'Date'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }
//             }, 'Contacts'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }
//             }, 'Users'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }
//             }, 'Notes'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em',
//                 width: '50px'
//               }
//             }, 'Actions')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           leads.map((lead) =>
//             React.createElement('tr', {
//               key: lead.id,
//               style: {
//                 borderBottom: '1px solid #f3f4f6',
//                 transition: 'background-color 0.2s'
//               },
//               onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//               onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//             },
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     backgroundColor: getStatusColor(lead.status) + '20',
//                     color: getStatusColor(lead.status),
//                     padding: '4px 8px',
//                     borderRadius: '4px',
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     display: 'inline-block'
//                   }
//                 }, lead.status)
//               ),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#111827'
//                 }
//               }, lead.date),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.contact || '—'),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.user || '—'),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280',
//                   maxWidth: '200px',
//                   whiteSpace: 'nowrap',
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis'
//                 }
//               }, lead.notes || '—'),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px'
//                 }
//               },
//                 React.createElement('button', {
//                   style: {
//                     padding: '4px 8px',
//                     backgroundColor: 'transparent',
//                     color: '#6b7280',
//                     border: 'none',
//                     borderRadius: '4px',
//                     fontSize: '12px',
//                     cursor: 'pointer'
//                   },
//                   onMouseEnter: (e) => e.target.style.backgroundColor = '#f3f4f6',
//                   onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
//                 }, 'Edit')
//               )
//             )
//           )
//         )
//       )
//     ),
    
//     // Footer with Logout
//     React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//         gap: '16px'
//       }
//     },
//       // Pagination
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '8px',
//           alignItems: 'center'
//         }
//       },
//         React.createElement('span', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'Showing 1-4 of 24 leads'),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '4px',
//             marginLeft: '16px'
//           }
//         },
//           React.createElement('button', {
//             style: {
//               padding: '4px 8px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '4px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, 'Previous'),
          
//           React.createElement('button', {
//             style: {
//               padding: '4px 8px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, '1'),
          
//           React.createElement('button', {
//             style: {
//               padding: '4px 8px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '4px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, '2'),
          
//           React.createElement('button', {
//             style: {
//               padding: '4px 8px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '4px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, 'Next')
//         )
//       ),

//       // Logout Button
//       React.createElement('button', {
//         onClick: handleLogout,
//         style: {
//           padding: '8px 24px',
//           backgroundColor: '#ef4444',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.target.style.backgroundColor = '#dc2626',
//         onMouseLeave: (e) => e.target.style.backgroundColor = '#ef4444'
//       }, 'Logout')
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

// export default Leads;


















