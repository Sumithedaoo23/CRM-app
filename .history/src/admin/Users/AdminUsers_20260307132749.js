
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userService from '../../services/userService';

// const AdminUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     role: '',
//     search: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [confirmName, setConfirmName] = useState('');
//   const [deleteError, setDeleteError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data);
//       setPagination(response.pagination);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleExport = async () => {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert('Failed to export users: ' + err.message);
//     }
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName('');
//     setDeleteError('');
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers(); // Refresh the list
//     } catch (err) {
//       setDeleteError(err.message || 'Failed to delete user');
//     }
//   };

//   const handleAddUser = () => {
//     navigate('/admin/users/new');
//   };

//   const handleEditUser = (id) => {
//     navigate(`/admin/users/${id}`);
//   };

//   const handleViewUser = (id) => {
//     navigate(`/admin/users/${id}/view`);
//   };

//   if (loading && users.length === 0) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     }, 'Loading...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header
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
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'User Management'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           flexWrap: 'wrap'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleAddUser,
//           style: {
//             padding: '10px 20px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, '➕ Add New User'),
        
//         React.createElement('button', {
//           onClick: handleExport,
//           style: {
//             padding: '10px 20px',
//             backgroundColor: '#10b981',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, '📥 Export PDF')
//       )
//     ),

//     // Search and Filter
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '20px',
//         marginBottom: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('form', {
//         onSubmit: handleSearch,
//         style: {
//           display: 'flex',
//           gap: '16px',
//           flexWrap: 'wrap',
//           alignItems: 'flex-end'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             flex: 2,
//             minWidth: '250px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Search'),
          
//           React.createElement('input', {
//             type: 'text',
//             value: filters.search,
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
//             placeholder: 'Search by name, email, phone...',
//             style: {
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),
        
//         React.createElement('div', {
//           style: {
//             flex: 1,
//             minWidth: '150px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Role'),
          
//           React.createElement('select', {
//             value: filters.role,
//             onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//             style: {
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               backgroundColor: 'white'
//             }
//           },
//             React.createElement('option', { value: '' }, 'All Roles'),
//             React.createElement('option', { value: 'admin' }, 'Admin'),
//             React.createElement('option', { value: 'user' }, 'User')
//           )
//         ),
        
//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             padding: '10px 24px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             height: '42px'
//           }
//         }, 'Search')
//       )
//     ),

//     // Users Table
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         overflowX: 'auto'
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
//                 textTransform: 'uppercase'
//               }
//             }, 'Name'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Email'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Phone'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Role'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Status'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Actions')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           users.map((user) =>
//             React.createElement('tr', {
//               key: user._id,
//               style: {
//                 borderBottom: '1px solid #e5e7eb',
//                 transition: 'background-color 0.2s'
//               },
//               onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//               onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//             },
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px',
//                   fontWeight: '500'
//                 }
//               }, `${user.firstName} ${user.lastName}`),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px',
//                   color: '#3b82f6'
//                 }
//               }, user.email),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px'
//                 }
//               }, user.phone || 'N/A'),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     padding: '4px 12px',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                     color: user.role === 'admin' ? '#3b82f6' : '#6b7280',
//                     textTransform: 'capitalize'
//                   }
//                 }, user.role)
//               ),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     padding: '4px 12px',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
//                     color: user.isActive ? '#10b981' : '#ef4444'
//                   }
//                 }, user.isActive ? 'Active' : 'Inactive')
//               ),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px'
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     display: 'flex',
//                     gap: '8px'
//                   }
//                 },
//                   React.createElement('button', {
//                     onClick: () => handleViewUser(user._id),
//                     style: {
//                       padding: '6px 12px',
//                       backgroundColor: '#f3f4f6',
//                       border: 'none',
//                       borderRadius: '6px',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       color: '#3b82f6'
//                     }
//                   }, 'View'),
                  
//                   React.createElement('button', {
//                     onClick: () => handleEditUser(user._id),
//                     style: {
//                       padding: '6px 12px',
//                       backgroundColor: '#f3f4f6',
//                       border: 'none',
//                       borderRadius: '6px',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       color: '#10b981'
//                     }
//                   }, 'Edit'),
                  
//                   React.createElement('button', {
//                     onClick: () => handleDeleteClick(user),
//                     style: {
//                       padding: '6px 12px',
//                       backgroundColor: '#fee2e2',
//                       border: 'none',
//                       borderRadius: '6px',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       color: '#ef4444'
//                     }
//                   }, 'Delete')
//                 )
//               )
//             )
//           )
//         )
//       )
//     ),

//     // Pagination
//     pagination.pages > 1 && React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '8px'
//       }
//     },
//       Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//         React.createElement('button', {
//           key: page,
//           onClick: () => setFilters({ ...filters, page }),
//           style: {
//             padding: '8px 12px',
//             backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//             color: page === filters.page ? 'white' : '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, page)
//       )
//     ),

//     // Delete Confirmation Modal
//     showDeleteModal && React.createElement('div', {
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
//         zIndex: 1000
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '32px',
//           maxWidth: '400px',
//           width: '90%',
//           boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, 'Delete User'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '20px'
//           }
//         }, `To confirm deletion, please type the full name of the user: "${selectedUser?.firstName} ${selectedUser?.lastName}"`),
        
//         React.createElement('input', {
//           type: 'text',
//           value: confirmName,
//           onChange: (e) => setConfirmName(e.target.value),
//           placeholder: 'Enter full name',
//           style: {
//             width: '100%',
//             padding: '12px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             marginBottom: '16px',
//             boxSizing: 'border-box'
//           }
//         }),
        
//         deleteError && React.createElement('p', {
//           style: {
//             color: '#ef4444',
//             fontSize: '13px',
//             marginBottom: '16px'
//           }
//         }, deleteError),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => setShowDeleteModal(false),
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             onClick: handleDeleteConfirm,
//             style: {
//               padding: '10px 20px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Delete User')
//         )
//       )
//     )
//   );
// };

// export default AdminUsers;




















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userService from '../../services/userService';

// const AdminUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     role: '',
//     search: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [confirmName, setConfirmName] = useState('');
//   const [deleteError, setDeleteError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || 'Failed to load users');
//       console.error('Error fetching users:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleExport = async () => {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert('Failed to export users: ' + (err.error || err.message));
//     }
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName('');
//     setDeleteError('');
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers(); // Refresh the list
//     } catch (err) {
//       setDeleteError(err.error || 'Failed to delete user');
//     }
//   };

//   const handleAddUser = () => {
//     navigate('/admin/users/new');
//   };

//   const handleEditUser = (id) => {
//     navigate(`/admin/users/${id}`);
//   };

//   const handleViewUser = (id) => {
//     navigate(`/admin/users/${id}/view`);
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
//     }, 'Loading users...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header
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
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'User Management'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           flexWrap: 'wrap'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleAddUser,
//           style: {
//             padding: '10px 20px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//         }, '➕ Add New User'),
        
//         React.createElement('button', {
//           onClick: handleExport,
//           style: {
//             padding: '10px 20px',
//             backgroundColor: '#10b981',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
//         }, '📥 Export PDF')
//       )
//     ),

//     // Search and Filter
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '20px',
//         marginBottom: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('form', {
//         onSubmit: handleSearch,
//         style: {
//           display: 'flex',
//           gap: '16px',
//           flexWrap: 'wrap',
//           alignItems: 'flex-end'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             flex: 2,
//             minWidth: '250px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Search'),
          
//           React.createElement('input', {
//             type: 'text',
//             value: filters.search,
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
//             placeholder: 'Search by name, email, phone...',
//             style: {
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),
        
//         React.createElement('div', {
//           style: {
//             flex: 1,
//             minWidth: '150px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Role'),
          
//           React.createElement('select', {
//             value: filters.role,
//             onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//             style: {
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               backgroundColor: 'white'
//             }
//           },
//             React.createElement('option', { value: '' }, 'All Roles'),
//             React.createElement('option', { value: 'admin' }, 'Admin'),
//             React.createElement('option', { value: 'user' }, 'User')
//           )
//         ),
        
//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             padding: '10px 24px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             height: '42px'
//           }
//         }, 'Search')
//       )
//     ),

//     // Error message
//     error && React.createElement('div', {
//       style: {
//         backgroundColor: '#fee2e2',
//         color: '#dc2626',
//         padding: '12px',
//         borderRadius: '8px',
//         marginBottom: '20px'
//       }
//     }, error),

//     // Users Table
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         overflowX: 'auto'
//       }
//     },
//       users.length === 0
//         ? React.createElement('p', {
//             style: {
//               textAlign: 'center',
//               padding: '40px',
//               color: '#6b7280'
//             }
//           }, 'No users found')
//         : React.createElement('table', {
//             style: {
//               width: '100%',
//               borderCollapse: 'collapse',
//               minWidth: '800px'
//             }
//           },
//             React.createElement('thead', null,
//               React.createElement('tr', {
//                 style: {
//                   borderBottom: '2px solid #e5e7eb'
//                 }
//               },
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Name'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Email'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Phone'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Role'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Status'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     textTransform: 'uppercase'
//                   }
//                 }, 'Actions')
//               )
//             ),
            
//             React.createElement('tbody', null,
//               users.map((user) =>
//                 React.createElement('tr', {
//                   key: user._id,
//                   style: {
//                     borderBottom: '1px solid #e5e7eb',
//                     transition: 'background-color 0.2s'
//                   },
//                   onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                   onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//                 },
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px',
//                       fontWeight: '500'
//                     }
//                   }, `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px',
//                       color: '#3b82f6'
//                     }
//                   }, user.email || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px'
//                     }
//                   }, user.phone || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '4px 12px',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                         color: user.role === 'admin' ? '#3b82f6' : '#6b7280',
//                         textTransform: 'capitalize'
//                       }
//                     }, user.role || 'user')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '4px 12px',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
//                         color: user.isActive ? '#10b981' : '#ef4444'
//                       }
//                     }, user.isActive ? 'Active' : 'Inactive')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 8px'
//                     }
//                   },
//                     React.createElement('div', {
//                       style: {
//                         display: 'flex',
//                         gap: '8px'
//                       }
//                     },
//                       React.createElement('button', {
//                         onClick: () => handleViewUser(user._id),
//                         style: {
//                           padding: '6px 12px',
//                           backgroundColor: '#f3f4f6',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           cursor: 'pointer',
//                           color: '#3b82f6'
//                         }
//                       }, 'View'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleEditUser(user._id),
//                         style: {
//                           padding: '6px 12px',
//                           backgroundColor: '#f3f4f6',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           cursor: 'pointer',
//                           color: '#10b981'
//                         }
//                       }, 'Edit'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleDeleteClick(user),
//                         style: {
//                           padding: '6px 12px',
//                           backgroundColor: '#fee2e2',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           cursor: 'pointer',
//                           color: '#ef4444'
//                         }
//                       }, 'Delete')
//                     )
//                   )
//                 )
//               )
//             )
//           )
//     ),

//     // Pagination
//     pagination.pages > 1 && React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '8px'
//       }
//     },
//       Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//         React.createElement('button', {
//           key: page,
//           onClick: () => setFilters({ ...filters, page }),
//           style: {
//             padding: '8px 12px',
//             backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//             color: page === filters.page ? 'white' : '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, page)
//       )
//     ),

//     // Delete Confirmation Modal
//     showDeleteModal && React.createElement('div', {
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
//         zIndex: 1000
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '32px',
//           maxWidth: '400px',
//           width: '90%',
//           boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, 'Delete User'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '20px'
//           }
//         }, `To confirm deletion, please type the full name of the user: "${selectedUser?.firstName || ''} ${selectedUser?.lastName || ''}"`),
        
//         React.createElement('input', {
//           type: 'text',
//           value: confirmName,
//           onChange: (e) => setConfirmName(e.target.value),
//           placeholder: 'Enter full name',
//           style: {
//             width: '100%',
//             padding: '12px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             marginBottom: '16px',
//             boxSizing: 'border-box'
//           }
//         }),
        
//         deleteError && React.createElement('p', {
//           style: {
//             color: '#ef4444',
//             fontSize: '13px',
//             marginBottom: '16px'
//           }
//         }, deleteError),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => setShowDeleteModal(false),
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             onClick: handleDeleteConfirm,
//             disabled: !confirmName,
//             style: {
//               padding: '10px 20px',
//               backgroundColor: confirmName ? '#ef4444' : '#9ca3af',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: confirmName ? 'pointer' : 'not-allowed'
//             }
//           }, 'Delete User')
//         )
//       )
//     )
//   );
// };

// export default AdminUsers;











// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userService from '../../services/userService';

// const AdminUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     role: '',
//     search: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [confirmName, setConfirmName] = useState('');
//   const [deleteError, setDeleteError] = useState('');
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [modalUser, setModalUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || 'Failed to load users');
//       console.error('Error fetching users:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleExport = async () => {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert('Failed to export users: ' + (err.error || err.message));
//     }
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName('');
//     setDeleteError('');
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers(); // Refresh the list
//     } catch (err) {
//       setDeleteError(err.error || 'Failed to delete user');
//     }
//   };

//   const handleAddUser = () => {
//     // Navigate to user form page
//     navigate('/admin/users/new');
//   };

//   const handleEditUser = (id) => {
//     navigate(`/admin/users/${id}`);
//   };

//   const handleViewUser = (user) => {
//     setModalUser(user);
//     setShowUserModal(true);
//   };

//   const closeModal = () => {
//     setShowUserModal(false);
//     setModalUser(null);
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
//     }, 'Loading users...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header
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
//           fontSize: '32px',
//           fontWeight: '700',
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           margin: 0
//         }
//       }, '👥 User Management'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           flexWrap: 'wrap'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleAddUser,
//           style: {
//             padding: '12px 24px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)',
//             transition: 'transform 0.2s, box-shadow 0.2s'
//           },
//           onMouseEnter: (e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 6px 8px rgba(102, 126, 234, 0.5)';
//           },
//           onMouseLeave: (e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 6px rgba(102, 126, 234, 0.4)';
//           }
//         }, '➕ Add New User'),
        
//         React.createElement('button', {
//           onClick: handleExport,
//           style: {
//             padding: '12px 24px',
//             background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             boxShadow: '0 4px 6px rgba(16, 185, 129, 0.4)',
//             transition: 'transform 0.2s, box-shadow 0.2s'
//           },
//           onMouseEnter: (e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 6px 8px rgba(16, 185, 129, 0.5)';
//           },
//           onMouseLeave: (e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 6px rgba(16, 185, 129, 0.4)';
//           }
//         }, '📥 Export PDF')
//       )
//     ),

//     // Search and Filter
//     React.createElement('div', {
//       style: {
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         borderRadius: '12px',
//         padding: '24px',
//         marginBottom: '24px',
//         boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '18px',
//           fontWeight: '600',
//           color: 'white',
//           marginBottom: '16px'
//         }
//       }, '🔍 Search & Filter'),
      
//       React.createElement('form', {
//         onSubmit: handleSearch,
//         style: {
//           display: 'flex',
//           gap: '16px',
//           flexWrap: 'wrap',
//           alignItems: 'flex-end'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             flex: 2,
//             minWidth: '250px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: 'white',
//               marginBottom: '6px'
//             }
//           }, 'Search'),
          
//           React.createElement('input', {
//             type: 'text',
//             value: filters.search,
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
//             placeholder: 'Search by name, email, phone...',
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }
//           })
//         ),
        
//         React.createElement('div', {
//           style: {
//             flex: 1,
//             minWidth: '150px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: 'white',
//               marginBottom: '6px'
//             }
//           }, 'Role'),
          
//           React.createElement('select', {
//             value: filters.role,
//             onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               backgroundColor: 'white',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }
//           },
//             React.createElement('option', { value: '' }, 'All Roles'),
//             React.createElement('option', { value: 'admin' }, 'Admin'),
//             React.createElement('option', { value: 'user' }, 'User')
//           )
//         ),
        
//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             padding: '12px 24px',
//             backgroundColor: 'white',
//             color: '#667eea',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             height: '42px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//             transition: 'transform 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//           onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//         }, '🔍 Search')
//       )
//     ),

//     // Error message
//     error && React.createElement('div', {
//       style: {
//         backgroundColor: '#fee2e2',
//         color: '#dc2626',
//         padding: '12px',
//         borderRadius: '8px',
//         marginBottom: '20px',
//         border: '1px solid #fecaca'
//       }
//     }, error),

//     // Users Table
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//         overflowX: 'auto'
//       }
//     },
//       users.length === 0
//         ? React.createElement('p', {
//             style: {
//               textAlign: 'center',
//               padding: '60px',
//               color: '#6b7280',
//               fontSize: '16px'
//             }
//           }, 'No users found. Click "Add New User" to create one.')
//         : React.createElement('table', {
//             style: {
//               width: '100%',
//               borderCollapse: 'collapse',
//               minWidth: '800px'
//             }
//           },
//             React.createElement('thead', null,
//               React.createElement('tr', {
//                 style: {
//                   borderBottom: '2px solid #e5e7eb',
//                   background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
//                 }
//               },
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '👤 Name'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '📧 Email'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '📱 Phone'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '🎭 Role'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '⚡ Status'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '16px 12px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     textTransform: 'uppercase'
//                   }
//                 }, '🔧 Actions')
//               )
//             ),
            
//             React.createElement('tbody', null,
//               users.map((user) =>
//                 React.createElement('tr', {
//                   key: user._id,
//                   style: {
//                     borderBottom: '1px solid #e5e7eb',
//                     transition: 'background-color 0.2s'
//                   },
//                   onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                   onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//                 },
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px',
//                       fontWeight: '500',
//                       color: '#111827'
//                     }
//                   }, `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px',
//                       color: '#3b82f6'
//                     }
//                   }, user.email || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px',
//                       color: '#6b7280'
//                     }
//                   }, user.phone || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '6px 12px',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: '600',
//                         backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                         color: user.role === 'admin' ? '#3b82f6' : '#6b7280',
//                         textTransform: 'capitalize'
//                       }
//                     }, user.role === 'admin' ? '👑 Admin' : '👤 User')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '6px 12px',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: '600',
//                         backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
//                         color: user.isActive ? '#10b981' : '#ef4444'
//                       }
//                     }, user.isActive ? '✅ Active' : '❌ Inactive')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '16px 12px'
//                     }
//                   },
//                     React.createElement('div', {
//                       style: {
//                         display: 'flex',
//                         gap: '8px'
//                       }
//                     },
//                       React.createElement('button', {
//                         onClick: () => handleViewUser(user),
//                         style: {
//                           padding: '8px 16px',
//                           backgroundColor: '#3b82f6',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           cursor: 'pointer'
//                         }
//                       }, '👁️ View'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleEditUser(user._id),
//                         style: {
//                           padding: '8px 16px',
//                           backgroundColor: '#10b981',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           cursor: 'pointer'
//                         }
//                       }, '✏️ Edit'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleDeleteClick(user),
//                         style: {
//                           padding: '8px 16px',
//                           backgroundColor: '#ef4444',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           cursor: 'pointer'
//                         }
//                       }, '🗑️ Delete')
//                     )
//                   )
//                 )
//               )
//             )
//           )
//     ),

//     // Pagination
//     pagination.pages > 1 && React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '8px'
//       }
//     },
//       Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//         React.createElement('button', {
//           key: page,
//           onClick: () => setFilters({ ...filters, page }),
//           style: {
//             padding: '10px 16px',
//             backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//             color: page === filters.page ? 'white' : '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s'
//           }
//         }, page)
//       )
//     ),

//     // Delete Confirmation Modal
//     showDeleteModal && React.createElement('div', {
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
//         zIndex: 1000
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '32px',
//           maxWidth: '400px',
//           width: '90%',
//           boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, '⚠️ Delete User'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '20px'
//           }
//         }, `To confirm deletion, please type the full name of the user:`),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '16px',
//             fontWeight: '600',
//             color: '#ef4444',
//             marginBottom: '20px',
//             padding: '12px',
//             backgroundColor: '#fee2e2',
//             borderRadius: '8px',
//             textAlign: 'center'
//           }
//         }, `"${selectedUser?.firstName || ''} ${selectedUser?.lastName || ''}"`),
        
//         React.createElement('input', {
//           type: 'text',
//           value: confirmName,
//           onChange: (e) => setConfirmName(e.target.value),
//           placeholder: 'Enter full name to confirm',
//           style: {
//             width: '100%',
//             padding: '12px',
//             border: '2px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             marginBottom: '16px',
//             boxSizing: 'border-box'
//           }
//         }),
        
//         deleteError && React.createElement('p', {
//           style: {
//             color: '#ef4444',
//             fontSize: '13px',
//             marginBottom: '16px'
//           }
//         }, deleteError),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => setShowDeleteModal(false),
//             style: {
//               padding: '12px 24px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             onClick: handleDeleteConfirm,
//             disabled: !confirmName,
//             style: {
//               padding: '12px 24px',
//               backgroundColor: confirmName ? '#ef4444' : '#9ca3af',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: confirmName ? 'pointer' : 'not-allowed'
//             }
//           }, '🗑️ Delete User')
//         )
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
//         zIndex: 1000
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '16px',
//           padding: '32px',
//           maxWidth: '500px',
//           width: '90%',
//           boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
//           position: 'relative'
//         }
//       },
//         // Close button
//         React.createElement('button', {
//           onClick: closeModal,
//           style: {
//             position: 'absolute',
//             top: '16px',
//             right: '16px',
//             background: 'none',
//             border: 'none',
//             fontSize: '24px',
//             cursor: 'pointer',
//             color: '#9ca3af'
//           }
//         }, '×'),

//         // Header
//         React.createElement('div', {
//           style: {
//             textAlign: 'center',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '80px',
//               height: '80px',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: '0 auto 16px',
//               fontSize: '32px',
//               color: 'white',
//               fontWeight: '600',
//               boxShadow: '0 10px 20px rgba(102, 126, 234, 0.4)'
//             }
//           }, `${modalUser.firstName?.charAt(0) || ''}${modalUser.lastName?.charAt(0) || ''}`.toUpperCase()),
          
//           React.createElement('h2', {
//             style: {
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, `${modalUser.firstName || ''} ${modalUser.lastName || ''}`.trim()),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, modalUser.role === 'admin' ? '👑 Administrator' : '👤 User')
//         ),

//         // User Details
//         React.createElement('div', {
//           style: {
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '20px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'grid',
//               gridTemplateColumns: '1fr',
//               gap: '16px'
//             }
//           },
//             // Email
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '20px'
//                 }
//               }, '📧'),
              
//               React.createElement('div', {
//                 style: {
//                   flex: 1
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#6b7280'
//                   }
//                 }, 'Email Address'),
                
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#3b82f6'
//                   }
//                 }, modalUser.email || 'N/A')
//               )
//             ),

//             // Phone
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '20px'
//                 }
//               }, '📱'),
              
//               React.createElement('div', {
//                 style: {
//                   flex: 1
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#6b7280'
//                   }
//                 }, 'Phone Number'),
                
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, modalUser.phone || 'Not provided')
//               )
//             ),

//             // Company
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '20px'
//                 }
//               }, '🏢'),
              
//               React.createElement('div', {
//                 style: {
//                   flex: 1
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#6b7280'
//                   }
//                 }, 'Company'),
                
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, modalUser.company || 'Not provided')
//               )
//             ),

//             // Status
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '20px'
//                 }
//               }, '⚡'),
              
//               React.createElement('div', {
//                 style: {
//                   flex: 1
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#6b7280'
//                   }
//                 }, 'Account Status'),
                
//                 React.createElement('span', {
//                   style: {
//                     padding: '4px 12px',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     backgroundColor: modalUser.isActive ? '#d1fae5' : '#fee2e2',
//                     color: modalUser.isActive ? '#10b981' : '#ef4444',
//                     display: 'inline-block',
//                     marginTop: '4px'
//                   }
//                 }, modalUser.isActive ? '✅ Active' : '❌ Inactive')
//               )
//             ),

//             // Created At
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '20px'
//                 }
//               }, '📅'),
              
//               React.createElement('div', {
//                 style: {
//                   flex: 1
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#6b7280'
//                   }
//                 }, 'Member Since'),
                
//                 React.createElement('div', {
//                   style: {
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, new Date(modalUser.createdAt).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric'
//                 }))
//               )
//             )
//           )
//         ),

//         // Address (if available)
//         modalUser.address && Object.values(modalUser.address).some(val => val) && React.createElement('div', {
//           style: {
//             marginTop: '20px',
//             padding: '16px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               marginBottom: '8px'
//             }
//           },
//             React.createElement('span', {
//               style: {
//                 fontSize: '18px'
//               }
//             }, '📍'),
            
//             React.createElement('span', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, 'Address')
//           ),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#4b5563',
//               marginLeft: '26px'
//             }
//           }, [
//             modalUser.address.street,
//             modalUser.address.city,
//             modalUser.address.state,
//             modalUser.address.zipCode,
//             modalUser.address.country
//           ].filter(Boolean).join(', ') || 'No address provided')
//         ),

//         // Close button
//         React.createElement('button', {
//           onClick: closeModal,
//           style: {
//             width: '100%',
//             padding: '12px',
//             marginTop: '24px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             transition: 'transform 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//           onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//         }, 'Close')
//       )
//     )
//   );
// };

// export default AdminUsers;
















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userService from '../../services/userService';

// const AdminUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     role: '',
//     search: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [confirmName, setConfirmName] = useState('');
//   const [deleteError, setDeleteError] = useState('');
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [modalUser, setModalUser] = useState(null);
//   const [copySuccess, setCopySuccess] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || 'Failed to load users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleExport = async () => {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert('Failed to export users: ' + (err.error || err.message));
//     }
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName('');
//     setDeleteError('');
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers();
//     } catch (err) {
//       setDeleteError(err.error || 'Failed to delete user');
//     }
//   };

//   const handleAddUser = () => {
//     navigate('/admin/users/new');
//   };

//   const handleEditUser = (id) => {
//     navigate(`/admin/users/${id}`);
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
    
//     const hyperlink = `User Profile: ${modalUser.firstName || ''} ${modalUser.lastName || ''}\nEmail: ${modalUser.email}\nPhone: ${modalUser.phone || 'N/A'}\nRole: ${modalUser.role}\nStatus: ${modalUser.isActive ? 'Active' : 'Inactive'}`;
    
//     navigator.clipboard.writeText(hyperlink).then(() => {
//       setCopySuccess('✅ Hyperlink copied to clipboard!');
//       setTimeout(() => setCopySuccess(''), 3000);
//     }).catch(() => {
//       setCopySuccess('❌ Failed to copy hyperlink');
//       setTimeout(() => setCopySuccess(''), 3000);
//     });
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
//     }, 'Loading users...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '20px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       width: '100%',
//       boxSizing: 'border-box'
//     }
//   },
//     // Header Section
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '20px',
//         flexWrap: 'wrap',
//         gap: '12px',
//         width: '100%'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'User Management'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '10px',
//           flexWrap: 'wrap'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleAddUser,
//           style: {
//             padding: '10px 16px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px'
//           }
//         }, '➕ Add New User'),
        
//         React.createElement('button', {
//           onClick: handleExport,
//           style: {
//             padding: '10px 16px',
//             backgroundColor: '#10b981',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px'
//           }
//         }, '📥 Export PDF')
//       )
//     ),

//     // Search and Filter
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '8px',
//         padding: '16px',
//         marginBottom: '20px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         width: '100%',
//         boxSizing: 'border-box'
//       }
//     },
//       React.createElement('form', {
//         onSubmit: handleSearch,
//         style: {
//           display: 'flex',
//           gap: '12px',
//           flexWrap: 'wrap',
//           alignItems: 'flex-end'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             flex: '2',
//             minWidth: '200px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '13px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '4px'
//             }
//           }, 'Search'),
          
//           React.createElement('input', {
//             type: 'text',
//             value: filters.search,
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
//             placeholder: 'Search users...',
//             style: {
//               width: '100%',
//               padding: '8px 12px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '6px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),
        
//         React.createElement('div', {
//           style: {
//             flex: '1',
//             minWidth: '120px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '13px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '4px'
//             }
//           }, 'Role'),
          
//           React.createElement('select', {
//             value: filters.role,
//             onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//             style: {
//               width: '100%',
//               padding: '8px 12px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '6px',
//               fontSize: '14px',
//               backgroundColor: 'white'
//             }
//           },
//             React.createElement('option', { value: '' }, 'All'),
//             React.createElement('option', { value: 'admin' }, 'Admin'),
//             React.createElement('option', { value: 'user' }, 'User')
//           )
//         ),
        
//         React.createElement('button', {
//           type: 'submit',
//           style: {
//             padding: '8px 20px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             height: '38px'
//           }
//         }, 'Search')
//       )
//     ),

//     // Error message
//     error && React.createElement('div', {
//       style: {
//         backgroundColor: '#fee2e2',
//         color: '#dc2626',
//         padding: '10px',
//         borderRadius: '6px',
//         marginBottom: '16px',
//         fontSize: '14px'
//       }
//     }, error),

//     // Users Table
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '8px',
//         padding: '16px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         overflowX: 'auto',
//         width: '100%',
//         boxSizing: 'border-box'
//       }
//     },
//       users.length === 0
//         ? React.createElement('p', {
//             style: {
//               textAlign: 'center',
//               padding: '40px',
//               color: '#6b7280',
//               fontSize: '14px'
//             }
//           }, 'No users found')
//         : React.createElement('table', {
//             style: {
//               width: '100%',
//               borderCollapse: 'collapse',
//               minWidth: '600px',
//               fontSize: '14px'
//             }
//           },
//             React.createElement('thead', null,
//               React.createElement('tr', {
//                 style: {
//                   borderBottom: '1px solid #e5e7eb',
//                   backgroundColor: '#f9fafb'
//                 }
//               },
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontWeight: '600',
//                     color: '#374151'
//                   }
//                 }, 'Name'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontWeight: '600',
//                     color: '#374151'
//                   }
//                 }, 'Email'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontWeight: '600',
//                     color: '#374151'
//                   }
//                 }, 'Role'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontWeight: '600',
//                     color: '#374151'
//                   }
//                 }, 'Status'),
                
//                 React.createElement('th', {
//                   style: {
//                     textAlign: 'left',
//                     padding: '12px 8px',
//                     fontWeight: '600',
//                     color: '#374151'
//                   }
//                 }, 'Actions')
//               )
//             ),
            
//             React.createElement('tbody', null,
//               users.map((user) =>
//                 React.createElement('tr', {
//                   key: user._id,
//                   style: {
//                     borderBottom: '1px solid #e5e7eb'
//                   }
//                 },
//                   React.createElement('td', {
//                     style: {
//                       padding: '12px 8px',
//                       fontWeight: '500'
//                     }
//                   }, `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '12px 8px',
//                       color: '#3b82f6'
//                     }
//                   }, user.email || 'N/A'),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '12px 8px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '4px 8px',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                         color: user.role === 'admin' ? '#3b82f6' : '#6b7280'
//                       }
//                     }, user.role === 'admin' ? 'Admin' : 'User')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '12px 8px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         padding: '4px 8px',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
//                         color: user.isActive ? '#10b981' : '#ef4444'
//                       }
//                     }, user.isActive ? 'Active' : 'Inactive')
//                   ),
                  
//                   React.createElement('td', {
//                     style: {
//                       padding: '12px 8px'
//                     }
//                   },
//                     React.createElement('div', {
//                       style: {
//                         display: 'flex',
//                         gap: '6px'
//                       }
//                     },
//                       React.createElement('button', {
//                         onClick: () => handleViewUser(user),
//                         style: {
//                           padding: '4px 8px',
//                           backgroundColor: '#3b82f6',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '4px',
//                           fontSize: '12px',
//                           cursor: 'pointer'
//                         }
//                       }, 'View'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleEditUser(user._id),
//                         style: {
//                           padding: '4px 8px',
//                           backgroundColor: '#10b981',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '4px',
//                           fontSize: '12px',
//                           cursor: 'pointer'
//                         }
//                       }, 'Edit'),
                      
//                       React.createElement('button', {
//                         onClick: () => handleDeleteClick(user),
//                         style: {
//                           padding: '4px 8px',
//                           backgroundColor: '#ef4444',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '4px',
//                           fontSize: '12px',
//                           cursor: 'pointer'
//                         }
//                       }, 'Delete')
//                     )
//                   )
//                 )
//               )
//             )
//           )
//     ),

//     // Pagination
//     pagination.pages > 1 && React.createElement('div', {
//       style: {
//         marginTop: '16px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '6px'
//       }
//     },
//       Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//         React.createElement('button', {
//           key: page,
//           onClick: () => setFilters({ ...filters, page }),
//           style: {
//             padding: '6px 10px',
//             backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//             color: page === filters.page ? 'white' : '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '4px',
//             fontSize: '13px',
//             cursor: 'pointer'
//           }
//         }, page)
//       )
//     ),

//     // Delete Confirmation Modal
//     showDeleteModal && React.createElement('div', {
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
//         zIndex: 1000
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '8px',
//           padding: '24px',
//           maxWidth: '350px',
//           width: '90%'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '12px'
//           }
//         }, 'Delete User'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '16px'
//           }
//         }, `Type "${selectedUser?.firstName || ''} ${selectedUser?.lastName || ''}" to confirm`),
        
//         React.createElement('input', {
//           type: 'text',
//           value: confirmName,
//           onChange: (e) => setConfirmName(e.target.value),
//           placeholder: 'Full name',
//           style: {
//             width: '100%',
//             padding: '8px 12px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '4px',
//             fontSize: '14px',
//             marginBottom: '16px',
//             boxSizing: 'border-box'
//           }
//         }),
        
//         deleteError && React.createElement('p', {
//           style: {
//             color: '#ef4444',
//             fontSize: '13px',
//             marginBottom: '12px'
//           }
//         }, deleteError),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '10px',
//             justifyContent: 'flex-end'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => setShowDeleteModal(false),
//             style: {
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '4px',
//               fontSize: '13px',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             onClick: handleDeleteConfirm,
//             disabled: !confirmName,
//             style: {
//               padding: '8px 16px',
//               backgroundColor: confirmName ? '#ef4444' : '#9ca3af',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '13px',
//               cursor: confirmName ? 'pointer' : 'not-allowed'
//             }
//           }, 'Delete')
//         )
//       )
//     ),

//     // User Profile Modal - Fixed CSS
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
//         padding: '16px',
//         boxSizing: 'border-box'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           maxWidth: '500px',
//           width: '100%',
//           maxHeight: '90vh',
//           overflowY: 'auto',
//           boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
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

//         // Header with initials
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '60px',
//               height: '60px',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '24px',
//               color: 'white',
//               fontWeight: '600'
//             }
//           }, `${modalUser.firstName?.charAt(0) || ''}${modalUser.lastName?.charAt(0) || ''}`.toUpperCase()),
          
//           React.createElement('div', null,
//             React.createElement('h2', {
//               style: {
//                 fontSize: '20px',
//                 fontWeight: '600',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, `${modalUser.firstName || ''} ${modalUser.lastName || ''}`.trim()),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#6b7280',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px'
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

//         // Hyperlink section with copy button
//         React.createElement('div', {
//           style: {
//             marginBottom: '20px',
//             padding: '12px',
//             backgroundColor: '#f0f9ff',
//             borderRadius: '8px',
//             border: '1px solid #bae6fd'
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
//             }, '🔗 User Hyperlink'),
            
//             React.createElement('button', {
//               onClick: handleCopyHyperlink,
//               style: {
//                 padding: '4px 12px',
//                 backgroundColor: '#0369a1',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }
//             }, '📋 Copy Link')
//           ),
          
//           React.createElement('div', {
//             style: {
//               padding: '8px',
//               backgroundColor: 'white',
//               borderRadius: '4px',
//               border: '1px solid #e5e7eb',
//               fontSize: '12px',
//               color: '#374151',
//               fontFamily: 'monospace',
//               wordBreak: 'break-all'
//             }
//           }, `crm://user/${modalUser._id}`),
          
//           copySuccess && React.createElement('p', {
//             style: {
//               marginTop: '8px',
//               fontSize: '12px',
//               color: copySuccess.includes('✅') ? '#10b981' : '#ef4444',
//               textAlign: 'center'
//             }
//           }, copySuccess)
//         ),

//         // User details in a clean grid
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: '12px',
//             marginBottom: '16px'
//           }
//         },
//           // Email
//           React.createElement('div', {
//             style: {
//               padding: '10px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 fontSize: '11px',
//                 color: '#6b7280',
//                 marginBottom: '2px'
//               }
//             }, 'Email Address'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#3b82f6',
//                 wordBreak: 'break-all'
//               }
//             }, modalUser.email || 'N/A')
//           ),

//           // Phone
//           React.createElement('div', {
//             style: {
//               padding: '10px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 fontSize: '11px',
//                 color: '#6b7280',
//                 marginBottom: '2px'
//               }
//             }, 'Phone Number'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, modalUser.phone || 'Not provided')
//           ),

//           // Company
//           modalUser.company && React.createElement('div', {
//             style: {
//               padding: '10px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 fontSize: '11px',
//                 color: '#6b7280',
//                 marginBottom: '2px'
//               }
//             }, 'Company'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, modalUser.company)
//           ),

//           // Member Since
//           React.createElement('div', {
//             style: {
//               padding: '10px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '6px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 fontSize: '11px',
//                 color: '#6b7280',
//                 marginBottom: '2px'
//               }
//             }, 'Member Since'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, modalUser.createdAt ? new Date(modalUser.createdAt).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric'
//             }) : 'N/A')
//           )
//         ),

//         // Address
//         modalUser.address && (modalUser.address.street || modalUser.address.city) && React.createElement('div', {
//           style: {
//             padding: '10px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '6px',
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               fontSize: '11px',
//               color: '#6b7280',
//               marginBottom: '4px'
//             }
//           }, 'Address'),
          
//           React.createElement('div', {
//             style: {
//               fontSize: '13px',
//               color: '#374151',
//               lineHeight: '1.5'
//             }
//           }, [
//             modalUser.address.street,
//             modalUser.address.city,
//             modalUser.address.state,
//             modalUser.address.zipCode,
//             modalUser.address.country
//           ].filter(Boolean).join(', ') || 'No address provided')
//         ),

//         // Action buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '8px',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '16px'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => {
//               closeModal();
//               handleEditUser(modalUser._id);
//             },
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, '✏️ Edit'),
          
//           React.createElement('button', {
//             onClick: () => {
//               closeModal();
//               handleDeleteClick(modalUser);
//             },
//             style: {
//               flex: 1,
//               padding: '10px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, '🗑️ Delete')
//         )
//       )
//     )
//   );
// };

// export default AdminUsers;














import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    role: '',
    search: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [confirmName, setConfirmName] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [showUserModal, setShowUserModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [filters.page, filters.role, filters.search]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers(filters);
      setUsers(response.data || []);
      setPagination(response.pagination || { total: 0, pages: 0 });
      setError(null);
    } catch (err) {
      setError(err.error || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
  };

  const handleExport = async () => {
    try {
      await userService.exportUsersPDF(filters);
    } catch (err) {
      alert('Failed to export users: ' + (err.error || err.message));
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setConfirmName('');
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedUser) return;

    try {
      await userService.deleteUser(selectedUser._id, confirmName);
      setShowDeleteModal(false);
      fetchUsers();
    } catch (err) {
      setDeleteError(err.error || 'Failed to delete user');
    }
  };

  const handleAddUser = () => {
    navigate('/admin/users/new');
  };

  const handleEditUser = (id) => {
    navigate(`/admin/users/${id}`);
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
    
    navigator.clipboard.writeText(modalUser.userHyperlink || `https://crm.com/user/${modalUser._id}`).then(function() {
      setCopySuccess('✅ Hyperlink copied!');
      setTimeout(function() { setCopySuccess(''); }, 3000);
    });
  };

  const handleCopyPassword = () => {
    if (!modalUser) return;
    
    navigator.clipboard.writeText(modalUser.password || '********').then(function() {
      setCopySuccess('✅ Password copied!');
      setTimeout(function() { setCopySuccess(''); }, 3000);
    });
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
    }, 'Loading users...');
  }

  return React.createElement('div', {
    style: {
      padding: '20px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      width: '100%',
      boxSizing: 'border-box'
    }
  },
    // Header Section
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '12px',
        width: '100%'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'User Management'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }
      },
        React.createElement('button', {
          onClick: handleAddUser,
          style: {
            padding: '10px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }
        }, '➕ Add New User'),
        
        React.createElement('button', {
          onClick: handleExport,
          style: {
            padding: '10px 16px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }
        }, '📥 Export PDF')
      )
    ),

    // Search and Filter
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        width: '100%',
        boxSizing: 'border-box'
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
            minWidth: '200px'
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
            onChange: function(e) { setFilters({ ...filters, search: e.target.value }); },
            placeholder: 'Search users...',
            style: {
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),
        
        React.createElement('div', {
          style: {
            flex: '1',
            minWidth: '120px'
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
          }, 'Role'),
          
          React.createElement('select', {
            value: filters.role,
            onChange: function(e) { setFilters({ ...filters, role: e.target.value, page: 1 }); },
            style: {
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white'
            }
          },
            React.createElement('option', { value: '' }, 'All'),
            React.createElement('option', { value: 'admin' }, 'Admin'),
            React.createElement('option', { value: 'user' }, 'User')
          )
        ),
        
        React.createElement('button', {
          type: 'submit',
          style: {
            padding: '8px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            height: '38px'
          }
        }, 'Search')
      )
    ),

    // Error message
    error ? React.createElement('div', {
      style: {
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        padding: '10px',
        borderRadius: '6px',
        marginBottom: '16px',
        fontSize: '14px'
      }
    }, error) : null,

    // Users Table
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflowX: 'auto',
        width: '100%',
        boxSizing: 'border-box'
      }
    },
      users.length === 0
        ? React.createElement('p', {
            style: {
              textAlign: 'center',
              padding: '40px',
              color: '#6b7280',
              fontSize: '14px'
            }
          }, 'No users found')
        : React.createElement('table', {
            style: {
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '700px',
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
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Photo'),
                
                React.createElement('th', {
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Name'),
                
                React.createElement('th', {
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Email'),
                
                React.createElement('th', {
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Role'),
                
                React.createElement('th', {
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Status'),
                
                React.createElement('th', {
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontWeight: '600',
                    color: '#374151'
                  }
                }, 'Actions')
              )
            ),
            
            React.createElement('tbody', null,
              users.map(function(user) {
                return React.createElement('tr', {
                  key: user._id,
                  style: {
                    borderBottom: '1px solid #e5e7eb'
                  }
                },
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px'
                    }
                  },
                    user.profilePhotoPreview ? 
                      React.createElement('img', {
                        src: user.profilePhotoPreview,
                        alt: 'Profile',
                        style: {
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }
                      }) :
                      React.createElement('div', {
                        style: {
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#3b82f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: '600'
                        }
                      }, user.firstName ? user.firstName.charAt(0) : 'U')
                  ),
                  
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px',
                      fontWeight: '500'
                    }
                  }, (user.firstName || '') + ' ' + (user.lastName || '')).trim() || 'N/A',
                  
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px',
                      color: '#3b82f6'
                    }
                  }, user.email || 'N/A'),
                  
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px'
                    }
                  },
                    React.createElement('span', {
                      style: {
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
                        color: user.role === 'admin' ? '#3b82f6' : '#6b7280'
                      }
                    }, user.role === 'admin' ? 'Admin' : 'User')
                  ),
                  
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px'
                    }
                  },
                    React.createElement('span', {
                      style: {
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
                        color: user.isActive ? '#10b981' : '#ef4444'
                      }
                    }, user.isActive ? 'Active' : 'Inactive')
                  ),
                  
                  React.createElement('td', {
                    style: {
                      padding: '12px 8px'
                    }
                  },
                    React.createElement('div', {
                      style: {
                        display: 'flex',
                        gap: '6px'
                      }
                    },
                      React.createElement('button', {
                        onClick: function() { handleViewUser(user); },
                        style: {
                          padding: '4px 8px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }
                      }, 'View'),
                      
                      React.createElement('button', {
                        onClick: function() { handleEditUser(user._id); },
                        style: {
                          padding: '4px 8px',
                          backgroundColor: '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }
                      }, 'Edit'),
                      
                      React.createElement('button', {
                        onClick: function() { handleDeleteClick(user); },
                        style: {
                          padding: '4px 8px',
                          backgroundColor: '#ef4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }
                      }, 'Delete')
                    )
                  )
                );
              })
            )
          )
    ),

    // Pagination
    pagination.pages > 1 ? React.createElement('div', {
      style: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center',
        gap: '6px'
      }
    },
      Array.from({ length: pagination.pages }, function(_, i) { return i + 1; }).map(function(page) {
        return React.createElement('button', {
          key: page,
          onClick: function() { setFilters({ ...filters, page: page }); },
          style: {
            padding: '6px 10px',
            backgroundColor: page === filters.page ? '#3b82f6' : 'white',
            color: page === filters.page ? 'white' : '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }
        }, page);
      })
    ) : null,

    // Delete Confirmation Modal
    showDeleteModal ? React.createElement('div', {
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
        zIndex: 1000
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          maxWidth: '350px',
          width: '90%'
        }
      },
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '12px'
          }
        }, 'Delete User'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '16px'
          }
        }, 'Type "' + (selectedUser?.firstName || '') + ' ' + (selectedUser?.lastName || '') + '" to confirm'),
        
        React.createElement('input', {
          type: 'text',
          value: confirmName,
          onChange: function(e) { setConfirmName(e.target.value); },
          placeholder: 'Full name',
          style: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            fontSize: '14px',
            marginBottom: '16px',
            boxSizing: 'border-box'
          }
        }),
        
        deleteError ? React.createElement('p', {
          style: {
            color: '#ef4444',
            fontSize: '13px',
            marginBottom: '12px'
          }
        }, deleteError) : null,
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end'
          }
        },
          React.createElement('button', {
            onClick: function() { setShowDeleteModal(false); },
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            onClick: handleDeleteConfirm,
            disabled: !confirmName,
            style: {
              padding: '8px 16px',
              backgroundColor: confirmName ? '#ef4444' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: confirmName ? 'pointer' : 'not-allowed'
            }
          }, 'Delete')
        )
      )
    ) : null,

    // User Profile Modal
    showUserModal && modalUser ? React.createElement('div', {
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
        padding: '16px',
        boxSizing: 'border-box'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          position: 'relative'
        }
      },
        // Close button
        React.createElement('button', {
          onClick: closeModal,
          style: {
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#9ca3af'
          }
        }, '×'),

        // Header with profile photo and name
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px'
          }
        },
          modalUser.profilePhotoPreview ? 
            React.createElement('img', {
              src: modalUser.profilePhotoPreview,
              alt: 'Profile',
              style: {
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #e5e7eb'
              }
            }) :
            React.createElement('div', {
              style: {
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: 'white',
                fontWeight: '600'
              }
            }, (modalUser.firstName ? modalUser.firstName.charAt(0) : '') + (modalUser.lastName ? modalUser.lastName.charAt(0) : '')).toUpperCase(),
          
          React.createElement('div', null,
            React.createElement('h2', {
              style: {
                fontSize: '22px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '4px'
              }
            }, (modalUser.firstName || '') + ' ' + (modalUser.lastName || '')).trim(),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap'
              }
            },
              React.createElement('span', {
                style: {
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: modalUser.role === 'admin' ? '#dbeafe' : '#f3f4f6',
                  color: modalUser.role === 'admin' ? '#3b82f6' : '#6b7280'
                }
              }, modalUser.role === 'admin' ? '👑 Admin' : '👤 User'),
              
              React.createElement('span', {
                style: {
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: modalUser.isActive ? '#d1fae5' : '#fee2e2',
                  color: modalUser.isActive ? '#10b981' : '#ef4444'
                }
              }, modalUser.isActive ? '✅ Active' : '❌ Inactive')
            )
          )
        ),

        // Copy success message
        copySuccess ? React.createElement('div', {
          style: {
            padding: '8px',
            backgroundColor: copySuccess.includes('✅') ? '#d1fae5' : '#fee2e2',
            color: copySuccess.includes('✅') ? '#065f46' : '#991b1b',
            borderRadius: '4px',
            fontSize: '12px',
            textAlign: 'center',
            marginBottom: '16px'
          }
        }, copySuccess) : null,

        // Hyperlink Section
        React.createElement('div', {
          style: {
            marginBottom: '20px',
            padding: '16px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#0369a1'
              }
            }, '🔗 User Hyperlink'),
            
            React.createElement('button', {
              onClick: handleCopyHyperlink,
              style: {
                padding: '4px 12px',
                backgroundColor: '#0369a1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              fontSize: '13px',
              fontFamily: 'monospace',
              wordBreak: 'break-all'
            }
          }, modalUser.userHyperlink || 'https://crm.com/user/' + modalUser._id),
          
          React.createElement('button', {
            onClick: function() { window.open(modalUser.userHyperlink || 'https://crm.com/user/' + modalUser._id, '_blank'); },
            style: {
              marginTop: '8px',
              padding: '6px 12px',
              backgroundColor: 'white',
              color: '#0369a1',
              border: '1px solid #0369a1',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer',
              width: '100%'
            }
          }, '🔗 Open Link')
        ),

        // Password Section
        React.createElement('div', {
          style: {
            marginBottom: '20px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#166534'
              }
            }, '🔑 Password'),
            
            React.createElement('button', {
              onClick: handleCopyPassword,
              style: {
                padding: '4px 12px',
                backgroundColor: '#166534',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              fontSize: '13px',
              fontFamily: 'monospace',
              wordBreak: 'break-all'
            }
          }, modalUser.password || '********')
        ),

        // User Details Grid
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px'
          }
        },
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '6px'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '11px',
                color: '#6b7280',
                marginBottom: '4px'
              }
            }, 'Email'),
            
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#3b82f6',
                wordBreak: 'break-all'
              }
            }, modalUser.email || 'N/A')
          ),

          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '6px'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '11px',
                color: '#6b7280',
                marginBottom: '4px'
              }
            }, 'Phone'),
            
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }
            }, modalUser.phone || 'N/A')
          ),

          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '6px'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '11px',
                color: '#6b7280',
                marginBottom: '4px'
              }
            }, 'Member Since'),
            
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }
            }, modalUser.createdAt ? new Date(modalUser.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'N/A')
          ),

          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '6px'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '11px',
                color: '#6b7280',
                marginBottom: '4px'
              }
            }, 'User ID'),
            
            React.createElement('div', {
              style: {
                fontSize: '13px',
                fontWeight: '500',
                color: '#6b7280',
                fontFamily: 'monospace'
              }
            }, modalUser._id ? modalUser._id.slice(-8) : 'N/A')
          )
        ),

        // Location Section
        modalUser.location && (modalUser.location.city || modalUser.location.country) ? React.createElement('div', {
          style: {
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '16px'
              }
            }, '📍'),
            
            React.createElement('span', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }
            }, 'Location')
          ),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#4b5563',
              marginLeft: '24px'
            }
          }, [
            modalUser.location.street,
            modalUser.location.city,
            modalUser.location.state,
            modalUser.location.zipCode,
            modalUser.location.country
          ].filter(Boolean).join(', ') || 'No address provided')
        ) : null,

        // Action Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '10px',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px'
          }
        },
          React.createElement('button', {
            onClick: function() {
              closeModal();
              handleEditUser(modalUser._id);
            },
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, '✏️ Edit'),
          
          React.createElement('button', {
            onClick: function() {
              closeModal();
              handleDeleteClick(modalUser);
            },
            style: {
              flex: 1,
              padding: '12px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, '🗑️ Delete')
        )
      )
    ) : null
  );
};

export default AdminUsers;