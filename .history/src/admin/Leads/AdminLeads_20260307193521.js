
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
//     localStorage.removeItem('crm-user');
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
//               color: item === 'Leads' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Leads' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Leads' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Leads Title
//       React.createElement('h2', {
//         style: {
//           fontSize: 'clamp(20px, 4vw, 24px)',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '20px'
//         }
//       }, 'Leads'),
      
//       // Action Buttons
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           marginBottom: '24px',
//           flexWrap: 'wrap'
//         }
//       },
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.target.style.backgroundColor = '#2563eb',
//           onMouseLeave: (e) => e.target.style.backgroundColor = '#3b82f6'
//         }, '+ New Item'),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '4px',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//           onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//         }, 'Filter', 
//           React.createElement('span', { style: { fontSize: '12px' } }, '▼')
//         ),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//           onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//         }, 'Download CSV'),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
//           onMouseLeave: (e) => e.target.style.backgroundColor = 'white'
//         }, 'Upload CSV')
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
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'Status'),
              
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
//               }, 'Date'),
              
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
//               }, 'Contacts'),
              
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
//               }, 'Notes'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em',
//                   width: '50px'
//                 }
//               }, 'Actions')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             leads.map((lead) =>
//               React.createElement('tr', {
//                 key: lead.id,
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
//                     fontSize: '14px'
//                   }
//                 },
//                   React.createElement('span', {
//                     style: {
//                       backgroundColor: getStatusColor(lead.status) + '20',
//                       color: getStatusColor(lead.status),
//                       padding: '4px 8px',
//                       borderRadius: '4px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       display: 'inline-block'
//                     }
//                   }, lead.status)
//                 ),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#111827'
//                   }
//                 }, lead.date),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, lead.contact || '—'),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, lead.user || '—'),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280',
//                     maxWidth: '200px',
//                     whiteSpace: 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis'
//                   }
//                 }, lead.notes || '—'),
                
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
//           }, 'Showing 1-4 of 24 leads'),
          
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
//                 cursor: 'pointer'
//               }
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
//                 cursor: 'pointer'
//               }
//             }, '2'),
            
//             React.createElement('button', {
//               style: {
//                 padding: '4px 8px',
//                 backgroundColor: 'white',
//                 color: '#4b5563',
//                 border: '1px solid #d1d5db',
//                 borderRadius: '4px',
//                 fontSize: '12px',
//                 cursor: 'pointer'
//               }
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

// export default Leads;

















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import messageService from '../../services/messageService';
// import userService from '../../services/userService';

// const AdminLeads = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [messageText, setMessageText] = useState('');
//   const [attachments, setAttachments] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [filters, setFilters] = useState({
//     search: '',
//     role: '',
//     page: 1,
//     limit: 10
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });

//   const adminUser = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.search, filters.role]);

//   useEffect(() => {
//     if (selectedUser) {
//       loadMessages();
//     }
//   }, [selectedUser]);

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

//   const loadMessages = async () => {
//     try {
//       const response = await messageService.getMessages(adminUser._id, selectedUser._id);
//       setMessages(response.data || []);
//     } catch (err) {
//       console.error('Failed to load messages:', err);
//     }
//   };

//   const handleViewUser = (user) => {
//     setSelectedUser(user);
//     setShowMessageModal(true);
//     setMessages([]);
//     setMessageText('');
//     setAttachments([]);
//   };

//   const closeModal = () => {
//     setShowMessageModal(false);
//     setSelectedUser(null);
//     setMessages([]);
//     setMessageText('');
//     setAttachments([]);
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setAttachments(prev => [...prev, ...files]);
//   };

//   const removeAttachment = (index) => {
//     setAttachments(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSendMessage = async () => {
//     if (!messageText.trim() && attachments.length === 0) return;

//     setSendingMessage(true);
//     try {
//       const messageData = {
//         senderId: adminUser._id,
//         senderName: adminUser.name || 'Admin User',
//         senderRole: 'admin',
//         receiverId: selectedUser._id,
//         content: messageText
//       };

//       await messageService.sendMessage(messageData, attachments);
      
//       // Reload messages
//       await loadMessages();
      
//       // Clear input
//       setMessageText('');
//       setAttachments([]);
      
//     } catch (err) {
//       alert('Failed to send message: ' + (err.error || err.message));
//     } finally {
//       setSendingMessage(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'new': '#3b82f6',
//       'contacted': '#f59e0b',
//       'qualified': '#10b981',
//       'proposal': '#8b5cf6',
//       'negotiation': '#ec4899',
//       'won': '#10b981',
//       'lost': '#ef4444'
//     };
//     return colors[status] || '#6b7280';
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
//     }, 'Loading leads...');
//   }

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '20px 24px 24px 24px',
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
//       // Header with title and user menu
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
//         React.createElement('h1', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Leads Management'),
        
//         // User Menu
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px',
//               backgroundColor: '#ffffff',
//               padding: '6px 16px 6px 12px',
//               borderRadius: '40px',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 width: '36px',
//                 height: '36px',
//                 borderRadius: '50%',
//                 backgroundColor: '#3b82f6',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 color: '#ffffff'
//               }
//             }, adminUser?.name?.charAt(0) || 'A'),
            
//             React.createElement('div', null,
//               React.createElement('div', {
//                 style: {
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#111827'
//                 }
//               }, adminUser?.name || 'Admin User'),
              
//               React.createElement('div', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#6b7280'
//                 }
//               }, adminUser?.role || 'Administrator')
//             )
//           ),
          
//           React.createElement('button', {
//             onClick: handleLogout,
//             style: {
//               padding: '8px 16px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//           }, 'Logout')
//         )
//       ),

//       // Navigation Tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '20px',
//           marginBottom: '20px',
//           paddingBottom: '8px',
//           borderBottom: '1px solid #e5e7eb',
//           flexWrap: 'wrap',
//           backgroundColor: '#ffffff',
//           padding: '12px 20px',
//           borderRadius: '8px',
//           boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
//         }
//       },
//         ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             onClick: () => {
//               if (item === 'Dashboard') navigate('/admin/dashboard');
//               else if (item === 'Users') navigate('/admin/users');
//               else if (item === 'Contacts') navigate('/admin/contacts');
//               else if (item === 'Tickets') navigate('/admin/tickets');
//               else if (item === 'Profile') navigate('/admin/profile');
//             },
//             style: {
//               fontSize: '14px',
//               color: item === 'Leads' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Leads' ? '600' : '500',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Leads' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Search and Filter
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           padding: '16px 20px',
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
//               minWidth: '250px'
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
//                 padding: '10px 14px',
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
//               minWidth: '150px'
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
//             }, 'Role'),
            
//             React.createElement('select', {
//               value: filters.role,
//               onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//               style: {
//                 width: '100%',
//                 padding: '10px 14px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 backgroundColor: 'white'
//               }
//             },
//               React.createElement('option', { value: '' }, 'All'),
//               React.createElement('option', { value: 'admin' }, 'Admin'),
//               React.createElement('option', { value: 'user' }, 'User')
//             )
//           ),
          
//           React.createElement('button', {
//             type: 'submit',
//             style: {
//               padding: '10px 24px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               height: '42px'
//             }
//           }, 'Search')
//         )
//       ),

//       // Error message
//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '6px',
//           marginBottom: '20px'
//         }
//       }, error),

//       // Table Container
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           overflowX: 'auto'
//         }
//       },
//         users.length === 0
//           ? React.createElement('p', {
//               style: {
//                 textAlign: 'center',
//                 padding: '60px',
//                 color: '#6b7280'
//               }
//             }, 'No users found')
//           : React.createElement('table', {
//               style: {
//                 width: '100%',
//                 borderCollapse: 'collapse',
//                 minWidth: '1000px'
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
//                   }, 'Name'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'Email'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'Phone'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'Role'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'Status'),
                  
//                   React.createElement('th', {
//                     style: {
//                       textAlign: 'left',
//                       padding: '12px 8px',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       textTransform: 'uppercase'
//                     }
//                   }, 'Actions')
//                 )
//               ),
              
//               React.createElement('tbody', null,
//                 users.map((user) => {
//                   const fullName = ((user.firstName || '') + ' ' + (user.lastName || '')).trim() || 'N/A';
                  
//                   return React.createElement('tr', {
//                     key: user._id,
//                     style: {
//                       borderBottom: '1px solid #f3f4f6'
//                     }
//                   },
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         fontWeight: '500'
//                       }
//                     }, fullName),
                    
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px',
//                         color: '#3b82f6'
//                       }
//                     }, user.email || 'N/A'),
                    
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     }, user.phone || 'N/A'),
                    
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     },
//                       React.createElement('span', {
//                         style: {
//                           padding: '4px 10px',
//                           borderRadius: '20px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
//                           color: user.role === 'admin' ? '#3b82f6' : '#6b7280'
//                         }
//                       }, user.role === 'admin' ? 'Admin' : 'User')
//                     ),
                    
//                     React.createElement('td', {
//                       style: {
//                         padding: '16px 8px'
//                       }
//                     },
//                       React.createElement('span', {
//                         style: {
//                           padding: '4px 10px',
//                           borderRadius: '20px',
//                           fontSize: '12px',
//                           fontWeight: '500',
//                           backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
//                           color: user.isActive ? '#10b981' : '#ef4444'
//                         }
//                       }, user.isActive ? 'Active' : 'Inactive')
//                     ),
                    
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
//                           onClick: () => handleViewUser(user),
//                           style: {
//                             padding: '6px 12px',
//                             backgroundColor: '#3b82f6',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '6px',
//                             fontSize: '12px',
//                             fontWeight: '500',
//                             cursor: 'pointer'
//                           }
//                         }, 'Message'),
                        
//                         React.createElement('button', {
//                           onClick: () => navigate(`/admin/users/${user._id}`),
//                           style: {
//                             padding: '6px 12px',
//                             backgroundColor: '#10b981',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '6px',
//                             fontSize: '12px',
//                             cursor: 'pointer'
//                           }
//                         }, 'View Profile')
//                       )
//                     )
//                   );
//                 })
//               )
//             )
//       ),

//       // Pagination
//       pagination.pages > 1 && React.createElement('div', {
//         style: {
//           marginTop: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '8px'
//         }
//       },
//         Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//           React.createElement('button', {
//             key: page,
//             onClick: () => setFilters({ ...filters, page }),
//             style: {
//               padding: '8px 14px',
//               backgroundColor: page === filters.page ? '#3b82f6' : 'white',
//               color: page === filters.page ? 'white' : '#4b5563',
//               border: page === filters.page ? 'none' : '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer'
//             }
//           }, page)
//         )
//       )
//     ),

//     // Message Modal
//     showMessageModal && selectedUser && React.createElement('div', {
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
//         padding: '20px'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '16px',
//           padding: '24px',
//           maxWidth: '600px',
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
//             fontSize: '24px',
//             cursor: 'pointer',
//             color: '#9ca3af'
//           }
//         }, '×'),

//         // User info
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '20px',
//             paddingBottom: '16px',
//             borderBottom: '1px solid #e5e7eb'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '48px',
//               height: '48px',
//               borderRadius: '50%',
//               backgroundColor: selectedUser.profilePhotoPreview ? 'transparent' : '#3b82f6',
//               overflow: 'hidden',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '20px',
//               fontWeight: '600',
//               color: 'white'
//             }
//           },
//             selectedUser.profilePhotoPreview ?
//               React.createElement('img', {
//                 src: selectedUser.profilePhotoPreview,
//                 alt: 'Profile',
//                 style: {
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover'
//                 }
//               }) :
//               ((selectedUser.firstName?.charAt(0) || '') + (selectedUser.lastName?.charAt(0) || '')).toUpperCase()
//           ),
          
//           React.createElement('div', null,
//             React.createElement('h3', {
//               style: {
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, `${selectedUser.firstName || ''} ${selectedUser.lastName || ''}`.trim()),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#6b7280'
//               }
//             }, selectedUser.email || 'No email')
//           )
//         ),

//         // Messages area
//         React.createElement('div', {
//           style: {
//             height: '300px',
//             overflowY: 'auto',
//             padding: '12px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px',
//             marginBottom: '16px',
//             display: 'flex',
//             flexDirection: 'column'
//           }
//         },
//           messages.length === 0 ?
//             React.createElement('p', {
//               style: {
//                 textAlign: 'center',
//                 color: '#9ca3af',
//                 padding: '40px'
//               }
//             }, 'No messages yet. Start the conversation!') :
//             messages.map((msg, index) => {
//               const isAdmin = msg.senderRole === 'admin';
//               return React.createElement('div', {
//                 key: index,
//                 style: {
//                   display: 'flex',
//                   justifyContent: isAdmin ? 'flex-end' : 'flex-start',
//                   marginBottom: '12px'
//                 }
//               },
//                 React.createElement('div', {
//                   style: {
//                     maxWidth: '70%',
//                     padding: '10px 14px',
//                     borderRadius: isAdmin ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
//                     backgroundColor: isAdmin ? '#3b82f6' : 'white',
//                     color: isAdmin ? 'white' : '#111827',
//                     boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
//                   }
//                 },
//                   React.createElement('p', {
//                     style: {
//                       margin: 0,
//                       fontSize: '14px',
//                       lineHeight: '1.5',
//                       wordBreak: 'break-word'
//                     }
//                   }, msg.content),
                  
//                   msg.attachments && msg.attachments.length > 0 && React.createElement('div', {
//                     style: {
//                       marginTop: '8px',
//                       paddingTop: '8px',
//                       borderTop: `1px solid ${isAdmin ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}`
//                     }
//                   },
//                     msg.attachments.map((file, i) =>
//                       React.createElement('div', {
//                         key: i,
//                         style: {
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '4px',
//                           fontSize: '12px',
//                           color: isAdmin ? 'rgba(255,255,255,0.9)' : '#6b7280'
//                         }
//                       },
//                         React.createElement('span', null, '📎'),
//                         React.createElement('span', null, file.filename || 'Attachment')
//                       )
//                     )
//                   ),
                  
//                   React.createElement('div', {
//                     style: {
//                       fontSize: '10px',
//                       marginTop: '4px',
//                       textAlign: 'right',
//                       color: isAdmin ? 'rgba(255,255,255,0.7)' : '#9ca3af'
//                     }
//                   }, new Date(msg.createdAt).toLocaleTimeString())
//                 )
//               );
//             })
//         ),

//         // Attachment preview
//         attachments.length > 0 && React.createElement('div', {
//           style: {
//             padding: '8px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '6px',
//             marginBottom: '12px'
//           }
//         },
//           attachments.map((file, index) =>
//             React.createElement('div', {
//               key: index,
//               style: {
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '4px 8px',
//                 backgroundColor: 'white',
//                 borderRadius: '4px',
//                 marginBottom: '4px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#374151'
//                 }
//               }, `📎 ${file.name}`),
              
//               React.createElement('button', {
//                 onClick: () => removeAttachment(index),
//                 style: {
//                   background: 'none',
//                   border: 'none',
//                   color: '#ef4444',
//                   cursor: 'pointer',
//                   fontSize: '14px'
//                 }
//               }, '×')
//             )
//           )
//         ),

//         // Message input
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '8px',
//             alignItems: 'flex-end'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               flex: 1,
//               position: 'relative'
//             }
//           },
//             React.createElement('textarea', {
//               value: messageText,
//               onChange: (e) => setMessageText(e.target.value),
//               placeholder: 'Type your message...',
//               rows: 3,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 resize: 'none',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),
          
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '8px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 padding: '10px',
//                 backgroundColor: '#f3f4f6',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '20px'
//               }
//             },
//               React.createElement('input', {
//                 type: 'file',
//                 multiple: true,
//                 onChange: handleFileChange,
//                 style: { display: 'none' }
//               }),
//               '📎'
//             ),
            
//             React.createElement('button', {
//               onClick: handleSendMessage,
//               disabled: (!messageText.trim() && attachments.length === 0) || sendingMessage,
//               style: {
//                 padding: '10px 20px',
//                 backgroundColor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? '#9ca3af' : '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 cursor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? 'not-allowed' : 'pointer'
//               }
//             }, sendingMessage ? 'Sending...' : 'Send')
//           )
//         )
//       )
//     )
//   );
// };

// export default AdminLeads;