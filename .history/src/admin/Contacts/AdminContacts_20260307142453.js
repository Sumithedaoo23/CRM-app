// import React from 'react';

// const AdminContacts = () => {
//   const contacts = [
//     { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com', phone: '+91 98765 43210', company: 'Tech Solutions', status: 'Active' },
//     { id: 2, name: 'Rama', email: 'rama@gmail.com', phone: '+91 87654 32109', company: 'Design Studio', status: 'Active' },
//     { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name', phone: '+1 234 567 8901', company: 'Research Labs', status: 'Inactive' },
//     { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org', phone: '+1 345 678 9012', company: 'Medical Institute', status: 'Active' },
//     { id: 5, name: 'Marie Curie', email: 'marie@research.org', phone: '+33 1 23 45 67 89', company: 'Research Institute', status: 'Active' },
//     { id: 6, name: 'Alan Turing', email: 'alan@computing.org', phone: '+44 20 1234 5678', company: 'Computing Labs', status: 'Inactive' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   const getStatusColor = (status) => {
//     return status === 'Active' ? '#10b981' : '#ef4444';
//   };

//   const getStatusBgColor = (status) => {
//     return status === 'Active' ? '#d1fae5' : '#fee2e2';
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
//           }, user?.name?.charAt(0) || 'A'),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, user?.name || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }
//             }, user?.role || 'Administrator')
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
//               color: item === 'Contacts' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Contacts' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Contacts' ? '2px solid #2563eb' : 'none'
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
//         }, 'Contact Management'),
        
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
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//           }, '+ New Contact'),
          
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
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
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
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
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
//             minWidth: '1000px'
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
//               }, 'NAME'),
              
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
//               }, 'EMAIL'),
              
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
//               }, 'PHONE'),
              
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
//               }, 'COMPANY'),
              
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
//               }, 'STATUS'),
              
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
//               }, 'ACTIONS')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             contacts.map((contact) =>
//               React.createElement('tr', {
//                 key: contact.id,
//                 style: {
//                   borderBottom: '1px solid #f3f4f6',
//                   transition: 'background-color 0.2s'
//                 },
//                 onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                 onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//               },
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, contact.name),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontSize: '14px',
//                     color: '#3b82f6'
//                   }
//                 }, contact.email),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, contact.phone),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, contact.company),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px'
//                   }
//                 },
//                   React.createElement('span', {
//                     style: {
//                       padding: '4px 12px',
//                       borderRadius: '20px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       backgroundColor: getStatusBgColor(contact.status),
//                       color: getStatusColor(contact.status)
//                     }
//                   }, contact.status)
//                 ),
                
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
//                         padding: '4px 12px',
//                         backgroundColor: 'transparent',
//                         color: '#3b82f6',
//                         border: 'none',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         cursor: 'pointer'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//                     }, 'Edit'),
                    
//                     React.createElement('button', {
//                       style: {
//                         padding: '4px 12px',
//                         backgroundColor: 'transparent',
//                         color: '#ef4444',
//                         border: 'none',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         cursor: 'pointer'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
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
//           }, 'Showing 1-6 of 6 contacts'),
          
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '4px',
//               marginLeft: '16px'
//             }
//           },
//             React.createElement('button', {
//               style: {
//                 padding: '6px 12px',
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
//                 padding: '6px 12px',
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
//                 padding: '6px 12px',
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
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
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
//       }, '🌙 Dark Mode')
//     )
//   );
// };

// export default AdminContacts;













// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userService from '../../services/userService';

// const AdminContacts = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     search: '',
//     status: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [modalUser, setModalUser] = useState(null);
//   const [copySuccess, setCopySuccess] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.search, filters.status]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || 'Failed to load contacts');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleViewUser = (user) => {
//     setModalUser(user);
//     setShowUserModal(true);
//   };

//   const closeModal = () => {
//     setShowUserModal(false);
//     setModalUser(null);
//     setCopySuccess('');
//   };

//   const handleCopyHyperlink = () => {
//     if (!modalUser) return;
    
//     navigator.clipboard.writeText(modalUser.userHyperlink || `https://crm.com/user/${modalUser._id}`).then(() => {
//       setCopySuccess('✅ Hyperlink copied!');
//       setTimeout(() => setCopySuccess(''), 3000);
//     });
//   };

//   const handleCopyPassword = () => {
//     if (!modalUser) return;
    
//     navigator.clipboard.writeText(modalUser.password || '********').then(() => {
//       setCopySuccess('✅ Password copied!');
//       setTimeout(() => setCopySuccess(''), 3000);
//     });
//   };

//   const handleExport = async () => {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert('Failed to export contacts: ' + (err.error || err.message));
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   const getStatusColor = (status) => {
//     return status ? '#10b981' : '#ef4444';
//   };

//   const getStatusBgColor = (status) => {
//     return status ? '#d1fae5' : '#fee2e2';
//   };

//   if (loading && users.length === 0) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#6b7280'
//       }
//     }, 'Loading contacts...');
//   }

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
//         }, 'Contact Management'),
        
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
//           }, user?.name?.charAt(0) || 'A'),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, user?.name || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }
//             }, user?.role || 'Administrator')
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
//             onClick: () => item === 'Dashboard' ? navigate('/admin/dashboard') : 
//                       item === 'Users' ? navigate('/admin/users') :
//                       item === 'Contacts' ? navigate('/admin/contacts') :
//                       item === 'Tickets' ? navigate('/admin/tickets') : null,
//             style: {
//               fontSize: '14px',
//               color: item === 'Contacts' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Contacts' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Contacts' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Search and Filter Section
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           padding: '16px',
//           marginBottom: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('form', {
//           onSubmit: handleSearch,
//           style: {
//             display: 'flex',
//             gap: '12px',
//             flexWrap: 'wrap',
//             alignItems: 'flex-end'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               flex: '2',
//               minWidth: '200px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '13px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '4px'
//               }
//             }, 'Search'),
            
//             React.createElement('input', {
//               type: 'text',
//               value: filters.search,
//               onChange: (e) => setFilters({ ...filters, search: e.target.value }),
//               placeholder: 'Search by name, email, phone...',
//               style: {
//                 width: '100%',
//                 padding: '8px 12px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),
          
//           React.createElement('div', {
//             style: {
//               flex: '1',
//               minWidth: '120px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '13px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '4px'
//               }
//             }, 'Status'),
            
//             React.createElement('select', {
//               value: filters.status,
//               onChange: (e) => setFilters({ ...filters, status: e.target.value, page: 1 }),
//               style: {
//                 width: '100%',
//                 padding: '8px 12px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 backgroundColor: 'white'
//               }
//             },
//               React.createElement('option', { value: '' }, 'All'),
//               React.createElement('option', { value: 'active' }, 'Active'),
//               React.createElement('option', { value: 'inactive' }, 'Inactive')
//             )
//           ),
          
//           React.createElement('button', {
//             type: 'submit',
//             style: {
//               padding: '8px 20px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               height: '38px'
//             }
//           }, 'Search'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleExport,
//             style: {
//               padding: '8px 20px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               height: '38px'
//             }
//           }, '📥 Export')
//         )
//       ),

//       // Error message
//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '10px',
//           borderRadius: '6px',
//           marginBottom: '16px',
//           fontSize: '14px'
//         }
//       }, error),

//       // Table Container
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
//         users.length === 0
//           ? React.createElement('p', {
//               style: {
//                 textAlign: 'center',
//                 padding: '40px',
//                 color: '#6b7280',
//                 fontSize: '14px'
//               }
//             }, 'No contacts found')
//           : React.createElement('table', {
//               style: {
//                 width: '100%',
//                 borderCollapse: 'collapse',
//                 minWidth: '1200px'
//               }
//             },
//               React.createElement('thead', null,
//                 React.createElement('tr', {
//                   style: {
//                     borderBottom: '2px solid #e5e7eb',
//                     backgroundColor: '#f9fafb'
//                   }
//                 },
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'PHOTO'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'NAME'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'EMAIL'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'PHONE'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'ROLE'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'STATUS'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'HYPERLINK'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'ACTIONS')
//                 )
//               ),
              
//               React.createElement('tbody', null,
//                 users.map((contact) => {
//                   const fullName = ((contact.firstName || '') + ' ' + (contact.lastName || '')).trim() || 'N/A';
                  
//                   return React.createElement('tr', {
//                     key: contact._id,
//                     style: {
//                       borderBottom: '1px solid #f3f4f6',
//                       transition: 'background-color 0.2s'
//                     },
//                     onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                     onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//                   },
//                     // Photo
//                     React.createElement('td', {
//                       style: {
//                         padding: '12px 8px'
//                       }
//                     },
//                       contact.profilePhotoPreview ? 
//                         React.createElement('img', {
//                           src: contact.profilePhotoPreview,
//                           alt: 'Profile',
//                           style: {
//                             width: '40px',
//                             height: '40px',
//                             borderRadius: '50%',
//                             objectFit: 'cover'
//                           }
//                         }) :
//                         React.createElement('div', {
//                           style: {
//                             width: '40px',
//                             height: '40px',
//                             borderRadius: '50%',
//                             backgroundColor: '#3b82f6',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                             fontSize: '16px',
//                             fontWeight: '600'
//                           }
//                         }, contact.firstName ? contact.firstName.charAt(0) : 'U')
//                     ),
                    
//                     // Name
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         fontSize: '14px',
//                         fontWeight: '500',
//                         color: '#111827'
//                       }
//                     }, fullName),
                    
//                     // Email
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         fontSize: '14px',
//                         color: '#3b82f6'
//                       }
//                     }, contact.email || 'N/A'),
                    
//                     // Phone
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         fontSize: '14px',
//                         color: '#6b7280'
//                       }
//                     }, contact.phone || 'N/A'),
                    
//                     // Role
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     },
//                       React.createElement('span', {
//                         style: {
//                           padding: '4px 12px',
//                           borderRadius: '20px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           backgroundColor: contact.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                           color: contact.role === 'admin' ? '#3b82f6' : '#6b7280'
//                         }
//                       }, contact.role === 'admin' ? 'Admin' : 'User')
//                     ),
                    
//                     // Status
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     },
//                       React.createElement('span', {
//                         style: {
//                           padding: '4px 12px',
//                           borderRadius: '20px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           backgroundColor: contact.isActive ? '#d1fae5' : '#fee2e2',
//                           color: contact.isActive ? '#10b981' : '#ef4444'
//                         }
//                       }, contact.isActive ? 'Active' : 'Inactive')
//                     ),
                    
//                     // Hyperlink
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         fontSize: '12px',
//                         color: '#0369a1',
//                         fontFamily: 'monospace'
//                       }
//                     }, 
//                       React.createElement('div', {
//                         style: {
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '4px'
//                         }
//                       },
//                         React.createElement('span', {
//                           style: {
//                             maxWidth: '150px',
//                             overflow: 'hidden',
//                             textOverflow: 'ellipsis',
//                             whiteSpace: 'nowrap'
//                           }
//                         }, contact.userHyperlink || `crm://user/${contact._id}`),
                        
//                         React.createElement('button', {
//                           onClick: () => {
//                             navigator.clipboard.writeText(contact.userHyperlink || `crm://user/${contact._id}`);
//                             alert('Hyperlink copied!');
//                           },
//                           style: {
//                             padding: '2px 4px',
//                             backgroundColor: 'transparent',
//                             border: 'none',
//                             cursor: 'pointer',
//                             fontSize: '12px'
//                           }
//                         }, '📋')
//                       )
//                     ),
                    
//                     // Actions
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     },
//                       React.createElement('div', {
//                         style: {
//                           display: 'flex',
//                           gap: '8px'
//                         }
//                       },
//                         React.createElement('button', {
//                           onClick: () => handleViewUser(contact),
//                           style: {
//                             padding: '4px 12px',
//                             backgroundColor: '#3b82f6',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '4px',
//                             fontSize: '13px',
//                             cursor: 'pointer'
//                           }
//                         }, 'View'),
                        
//                         React.createElement('button', {
//                           onClick: () => navigate(`/admin/users/${contact._id}`),
//                           style: {
//                             padding: '4px 12px',
//                             backgroundColor: '#10b981',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '4px',
//                             fontSize: '13px',
//                             cursor: 'pointer'
//                           }
//                         }, 'Edit'),
                        
//                         React.createElement('button', {
//                           onClick: () => {
//                             if (window.confirm('Delete this contact?')) {
//                               // Add delete logic here
//                             }
//                           },
//                           style: {
//                             padding: '4px 12px',
//                             backgroundColor: '#ef4444',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '4px',
//                             fontSize: '13px',
//                             cursor: 'pointer'
//                           }
//                         }, 'Delete')
//                       )
//                     )
//                   );
//                 })
//               )
//             )
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
//           }, `Showing ${users.length} of ${pagination.total} contacts`),
          
//           pagination.pages > 1 && React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '4px',
//               marginLeft: '16px'
//             }
//           },
//             Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//               React.createElement('button', {
//                 key: page,
//                 onClick: () => setFilters({ ...filters, page }),
//                 style: {
//                   padding: '6px 12px',
//                   backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//                   color: page === filters.page ? 'white' : '#4b5563',
//                   border: '1px solid #d1d5db',
//                   borderRadius: '4px',
//                   fontSize: '12px',
//                   cursor: 'pointer'
//                 }
//               }, page)
//             )
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
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//         }, 'Logout')
//       )
//     ),

//     // User Profile Modal
//     showUserModal && modalUser && React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1000,
//         padding: '16px'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           maxWidth: '500px',
//           width: '100%',
//           maxHeight: '80vh',
//           overflowY: 'auto',
//           position: 'relative'
//         }
//       },
//         // Close button
//         React.createElement('button', {
//           onClick: closeModal,
//           style: {
//             position: 'absolute',
//             top: '12px',
//             right: '12px',
//             background: 'none',
//             border: 'none',
//             fontSize: '20px',
//             cursor: 'pointer',
//             color: '#9ca3af'
//           }
//         }, '×'),

//         // Profile header
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             marginBottom: '20px'
//           }
//         },
//           modalUser.profilePhotoPreview ? 
//             React.createElement('img', {
//               src: modalUser.profilePhotoPreview,
//               alt: 'Profile',
//               style: {
//                 width: '70px',
//                 height: '70px',
//                 borderRadius: '50%',
//                 objectFit: 'cover'
//               }
//             }) :
//             React.createElement('div', {
//               style: {
//                 width: '70px',
//                 height: '70px',
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '28px',
//                 color: 'white',
//                 fontWeight: '600'
//               }
//             }, ((modalUser.firstName?.charAt(0) || '') + (modalUser.lastName?.charAt(0) || '')).toUpperCase()),
          
//           React.createElement('div', null,
//             React.createElement('h2', {
//               style: {
//                 fontSize: '20px',
//                 fontWeight: '600',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, ((modalUser.firstName || '') + ' ' + (modalUser.lastName || '')).trim()),
            
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 gap: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   padding: '2px 8px',
//                   borderRadius: '4px',
//                   fontSize: '11px',
//                   backgroundColor: modalUser.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                   color: modalUser.role === 'admin' ? '#3b82f6' : '#6b7280'
//                 }
//               }, modalUser.role === 'admin' ? 'Admin' : 'User'),
              
//               React.createElement('span', {
//                 style: {
//                   padding: '2px 8px',
//                   borderRadius: '4px',
//                   fontSize: '11px',
//                   backgroundColor: modalUser.isActive ? '#d1fae5' : '#fee2e2',
//                   color: modalUser.isActive ? '#10b981' : '#ef4444'
//                 }
//               }, modalUser.isActive ? 'Active' : 'Inactive')
//             )
//           )
//         ),

//         // Copy success message
//         copySuccess && React.createElement('div', {
//           style: {
//             padding: '8px',
//             backgroundColor: copySuccess.includes('✅') ? '#d1fae5' : '#fee2e2',
//             color: copySuccess.includes('✅') ? '#065f46' : '#991b1b',
//             borderRadius: '4px',
//             fontSize: '12px',
//             textAlign: 'center',
//             marginBottom: '16px'
//           }
//         }, copySuccess),

//         // Hyperlink section
//         React.createElement('div', {
//           style: {
//             marginBottom: '20px',
//             padding: '16px',
//             backgroundColor: '#f0f9ff',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '8px'
//             }
//           },
//             React.createElement('span', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#0369a1'
//               }
//             }, '🔗 Hyperlink'),
            
//             React.createElement('button', {
//               onClick: handleCopyHyperlink,
//               style: {
//                 padding: '4px 12px',
//                 backgroundColor: '#0369a1',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer'
//               }
//             }, 'Copy')
//           ),
          
//           React.createElement('div', {
//             style: {
//               padding: '8px',
//               backgroundColor: 'white',
//               borderRadius: '4px',
//               fontSize: '13px',
//               fontFamily: 'monospace',
//               wordBreak: 'break-all'
//             }
//           }, modalUser.userHyperlink || `crm://user/${modalUser._id}`),
          
//           React.createElement('button', {
//             onClick: () => window.open(modalUser.userHyperlink || `crm://user/${modalUser._id}`, '_blank'),
//             style: {
//               marginTop: '8px',
//               padding: '4px 12px',
//               backgroundColor: 'white',
//               color: '#0369a1',
//               border: '1px solid #0369a1',
//               borderRadius: '4px',
//               fontSize: '12px',
//               cursor: 'pointer',
//               width: '100%'
//             }
//           }, 'Open Link')
//         ),

//         // Password section
//         React.createElement('div', {
//           style: {
//             marginBottom: '20px',
//             padding: '16px',
//             backgroundColor: '#f0fdf4',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '8px'
//             }
//           },
//             React.createElement('span', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#166534'
//               }
//             }, '🔑 Password'),
            
//             React.createElement('button', {
//               onClick: handleCopyPassword,
//               style: {
//                 padding: '4px 12px',
//                 backgroundColor: '#166534',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer'
//               }
//             }, 'Copy')
//           ),
          
//           React.createElement('div', {
//             style: {
//               padding: '8px',
//               backgroundColor: 'white',
//               borderRadius: '4px',
//               fontSize: '13px',
//               fontFamily: 'monospace'
//             }
//           }, modalUser.password || '********')
//         ),

//         // Contact details
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               padding: '12px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', { style: { fontSize: '11px', color: '#6b7280' } }, 'Email'),
//             React.createElement('div', { style: { fontSize: '14px', fontWeight: '500', color: '#3b82f6' } }, modalUser.email || 'N/A')
//           ),

//           React.createElement('div', {
//             style: {
//               padding: '12px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', { style: { fontSize: '11px', color: '#6b7280' } }, 'Phone'),
//             React.createElement('div', { style: { fontSize: '14px', fontWeight: '500' } }, modalUser.phone || 'N/A')
//           ),

//           React.createElement('div', {
//             style: {
//               padding: '12px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px',
//               gridColumn: 'span 2'
//             }
//           },
//             React.createElement('div', { style: { fontSize: '11px', color: '#6b7280' } }, 'Member Since'),
//             React.createElement('div', { style: { fontSize: '14px', fontWeight: '500' } }, 
//               modalUser.createdAt ? new Date(modalUser.createdAt).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               }) : 'N/A'
//             )
//           )
//         ),

//         // Location
//         modalUser.location && (modalUser.location.city || modalUser.location.country) && React.createElement('div', {
//           style: {
//             padding: '16px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px',
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } },
//             React.createElement('span', { style: { fontSize: '16px' } }, '📍'),
//             React.createElement('span', { style: { fontSize: '14px', fontWeight: '600' } }, 'Location')
//           ),
//           React.createElement('p', { style: { fontSize: '14px', color: '#4b5563', marginLeft: '24px' } },
//             [modalUser.location.street, modalUser.location.city, modalUser.location.state, 
//              modalUser.location.zipCode, modalUser.location.country].filter(Boolean).join(', ') || 'No address provided'
//           )
//         ),

//         // Action buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '10px',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '20px'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => {
//               closeModal();
//               navigate(`/admin/users/${modalUser._id}`);
//             },
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer'
//             }
//           }, 'Edit'),
          
//           React.createElement('button', {
//             onClick: closeModal,
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: '#6b7280',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer'
//             }
//           }, 'Close')
//         )
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
//       }, '🌙 Dark Mode')
//     )
//   );
// };

// export default AdminContacts;

























import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';

const AdminContacts = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });
  const [showUserModal, setShowUserModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [filters.page, filters.search, filters.status]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers(filters);
      setUsers(response.data || []);
      setPagination(response.pagination || { total: 0, pages: 0 });
      setError(null);
    } catch (err) {
      setError(err.error || 'Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
  };

  const handleViewUser = (user) => {
    setModalUser(user);
    setShowUserModal(true);
  };

  const closeModal = () => {
    setShowUserModal(false);
    setModalUser(null);
    setCopySuccess('');
  };

  const handleCopyHyperlink = () => {
    if (!modalUser) return;
    
    navigator.clipboard.writeText(modalUser.userHyperlink || `crm://user/${modalUser._id}`).then(() => {
      setCopySuccess('✅ Hyperlink copied!');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleCopyPassword = () => {
    if (!modalUser) return;
    
    navigator.clipboard.writeText(modalUser.password || '********').then(() => {
      setCopySuccess('✅ Password copied!');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleExport = async () => {
    try {
      await userService.exportUsersPDF(filters);
    } catch (err) {
      alert('Failed to export contacts: ' + (err.error || err.message));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

  const getStatusColor = (status) => {
    return status ? '#10b981' : '#ef4444';
  };

  const getStatusBgColor = (status) => {
    return status ? '#d1fae5' : '#fee2e2';
  };

  if (loading && users.length === 0) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading contacts...');
  }

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6',
      padding: '20px 24px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }
    },
      // Header with title and user menu
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'Contact Management'),
        
        // User Menu
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
              gap: '10px',
              backgroundColor: '#ffffff',
              padding: '6px 16px 6px 12px',
              borderRadius: '40px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }
          },
            React.createElement('div', {
              style: {
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff'
              }
            }, user?.name?.charAt(0) || 'A'),
            
            React.createElement('div', null,
              React.createElement('div', {
                style: {
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#111827'
                }
              }, user?.name || 'Admin User'),
              
              React.createElement('div', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280'
                }
              }, user?.role || 'Administrator')
            )
          ),
          
          React.createElement('button', {
            onClick: handleLogout,
            style: {
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
          }, 'Logout')
        )
      ),

      // Navigation Tabs
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          paddingBottom: '8px',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap',
          backgroundColor: '#ffffff',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }
      },
        ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
          React.createElement('span', {
            key: item,
            onClick: () => {
              if (item === 'Dashboard') navigate('/admin/dashboard');
              else if (item === 'Users') navigate('/admin/users');
              else if (item === 'Contacts') navigate('/admin/contacts');
              else if (item === 'Tickets') navigate('/admin/tickets');
              else if (item === 'Profile') navigate('/admin/profile');
            },
            style: {
              fontSize: '14px',
              color: item === 'Contacts' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Contacts' ? '600' : '500',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Contacts' ? '2px solid #2563eb' : 'none'
            }
          }, item)
        )
      ),

      // Search and Filter Section
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('form', {
          onSubmit: handleSearch,
          style: {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'flex-end'
          }
        },
          React.createElement('div', {
            style: {
              flex: '2',
              minWidth: '250px'
            }
          },
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Search'),
            
            React.createElement('input', {
              type: 'text',
              value: filters.search,
              onChange: (e) => setFilters({ ...filters, search: e.target.value }),
              placeholder: 'Search by name, email, phone...',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box',
                outline: 'none'
              },
              onFocus: (e) => e.target.style.borderColor = '#3b82f6',
              onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
            })
          ),
          
          React.createElement('div', {
            style: {
              flex: '1',
              minWidth: '150px'
            }
          },
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Status'),
            
            React.createElement('select', {
              value: filters.status,
              onChange: (e) => setFilters({ ...filters, status: e.target.value, page: 1 }),
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white',
                outline: 'none'
              }
            },
              React.createElement('option', { value: '' }, 'All'),
              React.createElement('option', { value: 'active' }, 'Active'),
              React.createElement('option', { value: 'inactive' }, 'Inactive')
            )
          ),
          
          React.createElement('button', {
            type: 'submit',
            style: {
              padding: '10px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              height: '42px'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
          }, 'Search'),
          
          React.createElement('button', {
            type: 'button',
            onClick: handleExport,
            style: {
              padding: '10px 24px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
          }, '📥 Export PDF')
        )
      ),

      // Error message
      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '20px',
          fontSize: '14px'
        }
      }, error),

      // Table Container
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          width: '100%'
        }
      },
        users.length === 0
          ? React.createElement('p', {
              style: {
                textAlign: 'center',
                padding: '60px',
                color: '#6b7280',
                fontSize: '16px'
              }
            }, 'No contacts found')
          : React.createElement('div', {
              style: {
                overflowX: 'auto',
                width: '100%'
              }
            },
              React.createElement('table', {
                style: {
                  width: '100%',
                  borderCollapse: 'collapse',
                  minWidth: '1200px',
                  fontSize: '14px'
                }
              },
                React.createElement('thead', null,
                  React.createElement('tr', {
                    style: {
                      borderBottom: '1px solid #e5e7eb',
                      backgroundColor: '#f9fafb'
                    }
                  },
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'PHOTO'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'NAME'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'EMAIL'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'PHONE'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'ROLE'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'STATUS'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }
                    }, 'HYPERLINK'),
                    
                    React.createElement('th', {
                      style: {
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        width: '180px'
                      }
                    }, 'ACTIONS')
                  )
                ),
                
                React.createElement('tbody', null,
                  users.map((contact) => {
                    const fullName = ((contact.firstName || '') + ' ' + (contact.lastName || '')).trim() || 'N/A';
                    
                    return React.createElement('tr', {
                      key: contact._id,
                      style: {
                        borderBottom: '1px solid #f3f4f6',
                        transition: 'background-color 0.2s'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
                    },
                      // Photo
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px'
                        }
                      },
                        contact.profilePhotoPreview ? 
                          React.createElement('img', {
                            src: contact.profilePhotoPreview,
                            alt: 'Profile',
                            style: {
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '2px solid #e5e7eb'
                            }
                          }) :
                          React.createElement('div', {
                            style: {
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              backgroundColor: '#3b82f6',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '16px',
                              fontWeight: '600'
                            }
                          }, contact.firstName ? contact.firstName.charAt(0).toUpperCase() : 'U')
                      ),
                      
                      // Name
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#111827'
                        }
                      }, fullName),
                      
                      // Email
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px',
                          fontSize: '14px',
                          color: '#3b82f6'
                        }
                      }, contact.email || 'N/A'),
                      
                      // Phone
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }
                      }, contact.phone || 'N/A'),
                      
                      // Role
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px'
                        }
                      },
                        React.createElement('span', {
                          style: {
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500',
                            backgroundColor: contact.role === 'admin' ? '#dbeafe' : '#f3f4f6',
                            color: contact.role === 'admin' ? '#3b82f6' : '#6b7280'
                          }
                        }, contact.role === 'admin' ? 'Admin' : 'User')
                      ),
                      
                      // Status
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px'
                        }
                      },
                        React.createElement('span', {
                          style: {
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500',
                            backgroundColor: contact.isActive ? '#d1fae5' : '#fee2e2',
                            color: contact.isActive ? '#10b981' : '#ef4444'
                          }
                        }, contact.isActive ? 'Active' : 'Inactive')
                      ),
                      
                      // Hyperlink
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px',
                          fontSize: '12px'
                        }
                      }, 
                        React.createElement('div', {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: '#f0f9ff',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            border: '1px solid #bae6fd'
                          }
                        },
                          React.createElement('span', {
                            style: {
                              maxWidth: '120px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              color: '#0369a1',
                              fontFamily: 'monospace',
                              fontSize: '11px'
                            }
                          }, (contact.userHyperlink || `crm://user/${contact._id?.slice(-8)}`).substring(0, 20) + '...'),
                          
                          React.createElement('button', {
                            onClick: (e) => {
                              e.stopPropagation();
                              navigator.clipboard.writeText(contact.userHyperlink || `crm://user/${contact._id}`);
                              alert('Hyperlink copied!');
                            },
                            style: {
                              padding: '2px 6px',
                              backgroundColor: '#0369a1',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              fontSize: '10px',
                              cursor: 'pointer'
                            }
                          }, 'Copy')
                        )
                      ),
                      
                      // Actions
                      React.createElement('td', {
                        style: {
                          padding: '12px 12px'
                        }
                      },
                        React.createElement('div', {
                          style: {
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap'
                          }
                        },
                          React.createElement('button', {
                            onClick: () => handleViewUser(contact),
                            style: {
                              padding: '6px 12px',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer'
                            },
                            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
                            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
                          }, 'View'),
                          
                          React.createElement('button', {
                            onClick: () => navigate(`/admin/users/${contact._id}`),
                            style: {
                              padding: '6px 12px',
                              backgroundColor: '#10b981',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer'
                            },
                            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
                            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
                          }, 'Edit'),
                          
                          React.createElement('button', {
                            onClick: () => {
                              if (window.confirm('Delete this contact?')) {
                                // Add delete logic here
                              }
                            },
                            style: {
                              padding: '6px 12px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer'
                            },
                            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
                            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
                          }, 'Delete')
                        )
                      )
                    );
                  })
                )
              )
            )
      ),

      // Footer with Pagination
      React.createElement('div', {
        style: {
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        // Pagination info
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, `Showing ${users.length} of ${pagination.total} contacts`),
        
        // Pagination buttons
        pagination.pages > 1 && React.createElement('div', {
          style: {
            display: 'flex',
            gap: '6px'
          }
        },
          Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
            React.createElement('button', {
              key: page,
              onClick: () => setFilters({ ...filters, page }),
              style: {
                padding: '8px 14px',
                backgroundColor: page === filters.page ? '#3b82f6' : 'white',
                color: page === filters.page ? 'white' : '#4b5563',
                border: page === filters.page ? 'none' : '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: page === filters.page ? '600' : '400',
                cursor: 'pointer'
              }
            }, page)
          )
        )
      )
    ),

    // User Profile Modal
    showUserModal && modalUser && React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '28px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }
      },
        // Close button
        React.createElement('button', {
          onClick: closeModal,
          style: {
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#9ca3af',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
        }, '×'),

        // Profile header
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          modalUser.profilePhotoPreview ? 
            React.createElement('img', {
              src: modalUser.profilePhotoPreview,
              alt: 'Profile',
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #e5e7eb'
              }
            }) :
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                color: 'white',
                fontWeight: '600'
              }
            }, ((modalUser.firstName?.charAt(0) || '') + (modalUser.lastName?.charAt(0) || '')).toUpperCase()),
          
          React.createElement('div', null,
            React.createElement('h2', {
              style: {
                fontSize: '22px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '6px'
              }
            }, ((modalUser.firstName || '') + ' ' + (modalUser.lastName || '')).trim()),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '8px',
                marginTop: '4px'
              }
            },
              React.createElement('span', {
                style: {
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  backgroundColor: modalUser.role === 'admin' ? '#dbeafe' : '#f3f4f6',
                  color: modalUser.role === 'admin' ? '#3b82f6' : '#6b7280'
                }
              }, modalUser.role === 'admin' ? 'Admin' : 'User'),
              
              React.createElement('span', {
                style: {
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  backgroundColor: modalUser.isActive ? '#d1fae5' : '#fee2e2',
                  color: modalUser.isActive ? '#10b981' : '#ef4444'
                }
              }, modalUser.isActive ? 'Active' : 'Inactive')
            )
          )
        ),

        // Copy success message
        copySuccess && React.createElement('div', {
          style: {
            padding: '10px',
            backgroundColor: copySuccess.includes('✅') ? '#d1fae5' : '#fee2e2',
            color: copySuccess.includes('✅') ? '#065f46' : '#991b1b',
            borderRadius: '8px',
            fontSize: '13px',
            textAlign: 'center',
            marginBottom: '20px'
          }
        }, copySuccess),

        // Hyperlink section
        React.createElement('div', {
          style: {
            marginBottom: '20px',
            padding: '16px',
            backgroundColor: '#f0f9ff',
            borderRadius: '10px',
            border: '1px solid #bae6fd'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '15px',
                fontWeight: '600',
                color: '#0369a1'
              }
            }, '🔗 Hyperlink'),
            
            React.createElement('button', {
              onClick: handleCopyHyperlink,
              style: {
                padding: '6px 14px',
                backgroundColor: '#0369a1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '13px',
              fontFamily: 'monospace',
              wordBreak: 'break-all',
              marginBottom: '10px'
            }
          }, modalUser.userHyperlink || `crm://user/${modalUser._id}`),
          
          React.createElement('button', {
            onClick: () => window.open(modalUser.userHyperlink || `crm://user/${modalUser._id}`, '_blank'),
            style: {
              padding: '8px',
              backgroundColor: 'white',
              color: '#0369a1',
              border: '1px solid #0369a1',
              borderRadius: '6px',
              fontSize: '13px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: '500'
            }
          }, '🔗 Open Link')
        ),

        // Password section
        React.createElement('div', {
          style: {
            marginBottom: '20px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            borderRadius: '10px',
            border: '1px solid #bbf7d0'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '15px',
                fontWeight: '600',
                color: '#166534'
              }
            }, '🔑 Password'),
            
            React.createElement('button', {
              onClick: handleCopyPassword,
              style: {
                padding: '6px 14px',
                backgroundColor: '#166534',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '13px',
              fontFamily: 'monospace'
            }
          }, modalUser.password || '********')
        ),

        // Contact details grid
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', {
            style: {
              padding: '14px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }
          },
            React.createElement('div', { style: { fontSize: '11px', color: '#6b7280', marginBottom: '4px' } }, 'Email'),
            React.createElement('div', { style: { fontSize: '14px', fontWeight: '500', color: '#3b82f6', wordBreak: 'break-all' } }, modalUser.email || 'N/A')
          ),

          React.createElement('div', {
            style: {
              padding: '14px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }
          },
            React.createElement('div', { style: { fontSize: '11px', color: '#6b7280', marginBottom: '4px' } }, 'Phone'),
            React.createElement('div', { style: { fontSize: '14px', fontWeight: '500' } }, modalUser.phone || 'N/A')
          ),

          React.createElement('div', {
            style: {
              padding: '14px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              gridColumn: 'span 2'
            }
          },
            React.createElement('div', { style: { fontSize: '11px', color: '#6b7280', marginBottom: '4px' } }, 'Member Since'),
            React.createElement('div', { style: { fontSize: '14px', fontWeight: '500' } }, 
              modalUser.createdAt ? new Date(modalUser.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'N/A'
            )
          )
        ),

        // Location
        modalUser.location && (modalUser.location.city || modalUser.location.country) && React.createElement('div', {
          style: {
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } },
            React.createElement('span', { style: { fontSize: '16px' } }, '📍'),
            React.createElement('span', { style: { fontSize: '14px', fontWeight: '600' } }, 'Location')
          ),
          React.createElement('p', { style: { fontSize: '14px', color: '#4b5563', marginLeft: '24px', lineHeight: '1.5' } },
            [modalUser.location.street, modalUser.location.city, modalUser.location.state, 
             modalUser.location.zipCode, modalUser.location.country].filter(Boolean).join(', ') || 'No address provided'
          )
        ),

        // Action buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px'
          }
        },
          React.createElement('button', {
            onClick: () => {
              closeModal();
              navigate(`/admin/users/${modalUser._id}`);
            },
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
          }, 'Edit User'),
          
          React.createElement('button', {
            onClick: closeModal,
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#4b5563',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#6b7280'
          }, 'Close')
        )
      )
    )
  );
};

export default AdminContacts;