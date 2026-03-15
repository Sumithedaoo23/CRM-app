
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const AdminTickets = () => {
//   const navigate = useNavigate();
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     status: '',
//     priority: '',
//     page: 1
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0
//   });
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusUpdate, setStatusUpdate] = useState({
//     status: '',
//     resolution: ''
//   });

//   useEffect(() => {
//     fetchTickets();
//   }, [filters.page, filters.status, filters.priority]);

//   const fetchTickets = async () => {
//     try {
//       setLoading(true);
//       const response = await ticketService.getTickets(filters);
//       setTickets(response.data);
//       setPagination(response.pagination);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load tickets');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusClick = (ticket) => {
//     setSelectedTicket(ticket);
//     setStatusUpdate({
//       status: ticket.status,
//       resolution: ticket.resolution || ''
//     });
//     setShowStatusModal(true);
//   };

//   const handleStatusUpdate = async () => {
//     if (!selectedTicket) return;

//     try {
//       await ticketService.updateTicketStatus(
//         selectedTicket._id,
//         statusUpdate.status,
//         statusUpdate.resolution
//       );
//       setShowStatusModal(false);
//       fetchTickets();
//     } catch (err) {
//       alert('Failed to update ticket status: ' + err.message);
//     }
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'pending': '#f59e0b',
//       'in-progress': '#3b82f6',
//       'resolved': '#10b981',
//       'closed': '#6b7280',
//       'rejected': '#ef4444'
//     };
//     return colors[status] || '#6b7280';
//   };

//   const getPriorityColor = (priority) => {
//     const colors = {
//       'low': '#6b7280',
//       'medium': '#f59e0b',
//       'high': '#ef4444',
//       'critical': '#dc2626'
//     };
//     return colors[priority] || '#6b7280';
//   };

//   if (loading && tickets.length === 0) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     }, 'Loading...');
//   }

//   // Fix: Move conditional rendering outside of the array
//   const statusModalSection = showStatusModal ? React.createElement('div', {
//     style: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000
//     }
//   },
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         padding: '32px',
//         maxWidth: '400px',
//         width: '90%',
//         boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '16px'
//         }
//       }, 'Update Ticket Status'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '14px',
//           color: '#6b7280',
//           marginBottom: '20px'
//         }
//       }, `Ticket: ${selectedTicket?.ticketNumber}`),
      
//       React.createElement('div', {
//         style: {
//           marginBottom: '16px'
//         }
//       },
//         React.createElement('label', {
//           style: {
//             display: 'block',
//             fontSize: '14px',
//             fontWeight: '500',
//             color: '#374151',
//             marginBottom: '6px'
//           }
//         }, 'Status'),
        
//         React.createElement('select', {
//           value: statusUpdate.status,
//           onChange: (e) => setStatusUpdate({ ...statusUpdate, status: e.target.value }),
//           style: {
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             backgroundColor: 'white'
//           }
//         },
//           React.createElement('option', { value: 'pending' }, 'Pending'),
//           React.createElement('option', { value: 'in-progress' }, 'In Progress'),
//           React.createElement('option', { value: 'resolved' }, 'Resolved'),
//           React.createElement('option', { value: 'closed' }, 'Closed'),
//           React.createElement('option', { value: 'rejected' }, 'Rejected')
//         )
//       ),
      
//       // Fix: Move conditional rendering here
//       statusUpdate.status === 'resolved' ? React.createElement('div', {
//         style: {
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('label', {
//           style: {
//             display: 'block',
//             fontSize: '14px',
//             fontWeight: '500',
//             color: '#374151',
//             marginBottom: '6px'
//           }
//         }, 'Resolution Notes'),
        
//         React.createElement('textarea', {
//           value: statusUpdate.resolution,
//           onChange: (e) => setStatusUpdate({ ...statusUpdate, resolution: e.target.value }),
//           rows: 4,
//           style: {
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             resize: 'vertical',
//             boxSizing: 'border-box'
//           }
//         })
//       ) : null,
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           justifyContent: 'flex-end'
//         }
//       },
//         React.createElement('button', {
//           onClick: () => setShowStatusModal(false),
//           style: {
//             padding: '10px 20px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'Cancel'),
        
//         React.createElement('button', {
//           onClick: handleStatusUpdate,
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
//         }, 'Update Status')
//       )
//     )
//   ) : null;

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
//       }, 'Ticket Management'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px'
//         }
//       },
//         React.createElement('select', {
//           value: filters.status,
//           onChange: (e) => setFilters({ ...filters, status: e.target.value, page: 1 }),
//           style: {
//             padding: '10px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             backgroundColor: 'white'
//           }
//         },
//           React.createElement('option', { value: '' }, 'All Status'),
//           React.createElement('option', { value: 'pending' }, 'Pending'),
//           React.createElement('option', { value: 'in-progress' }, 'In Progress'),
//           React.createElement('option', { value: 'resolved' }, 'Resolved'),
//           React.createElement('option', { value: 'closed' }, 'Closed'),
//           React.createElement('option', { value: 'rejected' }, 'Rejected')
//         ),
        
//         React.createElement('select', {
//           value: filters.priority,
//           onChange: (e) => setFilters({ ...filters, priority: e.target.value, page: 1 }),
//           style: {
//             padding: '10px',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             backgroundColor: 'white'
//           }
//         },
//           React.createElement('option', { value: '' }, 'All Priority'),
//           React.createElement('option', { value: 'low' }, 'Low'),
//           React.createElement('option', { value: 'medium' }, 'Medium'),
//           React.createElement('option', { value: 'high' }, 'High'),
//           React.createElement('option', { value: 'critical' }, 'Critical')
//         )
//       )
//     ),

//     // Tickets Table
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
//           minWidth: '1000px'
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
//             }, 'Ticket #'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Title'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'User'),
            
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
//             }, 'Priority'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 textTransform: 'uppercase'
//               }
//             }, 'Created'),
            
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
//           tickets.map((ticket) =>
//             React.createElement('tr', {
//               key: ticket._id,
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
//                   fontWeight: '500',
//                   color: '#3b82f6'
//                 }
//               }, ticket.ticketNumber),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px',
//                   maxWidth: '200px'
//                 }
//               }, ticket.title),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px'
//                 }
//               }, ticket.createdByDetails?.name || 'N/A'),
              
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
//                     backgroundColor: getStatusColor(ticket.status) + '20',
//                     color: getStatusColor(ticket.status)
//                   }
//                 }, ticket.status)
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
//                     backgroundColor: getPriorityColor(ticket.priority) + '20',
//                     color: getPriorityColor(ticket.priority)
//                   }
//                 }, ticket.priority)
//               ),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '16px 8px',
//                   fontSize: '13px',
//                   color: '#6b7280'
//                 }
//               }, new Date(ticket.createdAt).toLocaleDateString()),
              
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
//                     onClick: () => navigate(`/admin/tickets/${ticket._id}`),
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
//                     onClick: () => handleStatusClick(ticket),
//                     style: {
//                       padding: '6px 12px',
//                       backgroundColor: '#f3f4f6',
//                       border: 'none',
//                       borderRadius: '6px',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       color: '#10b981'
//                     }
//                   }, 'Update Status')
//                 )
//               )
//             )
//           )
//         )
//       )
//     ),

//     // Pagination
//     pagination.pages > 1 ? React.createElement('div', {
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
//     ) : null,

//     // Status Update Modal
//     statusModalSection
//   );
// };

// export default AdminTickets;














// import React, { useState, useEffect } from 'react';
// import ticketService from '../../services/ticketService';

// const AdminTickets = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAllTickets();
//   }, []);

//   const loadAllTickets = async () => {
//     try {
//       const response = await ticketService.getAllTickets();
//       setTickets(response.data || []);
//     } catch (error) {
//       console.error('Failed to load tickets:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       await ticketService.updateTicket(id, { status: newStatus });
//       loadAllTickets(); // Reload list
//     } catch (error) {
//       alert('Failed to update ticket');
//     }
//   };

//   if (loading) {
//     return React.createElement('div', { style: { textAlign: 'center', padding: '50px' } }, 'Loading...');
//   }

//   return React.createElement('div', { style: { padding: '20px' } },
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '20px' } }, 'All Tickets (Admin)'),
    
//     tickets.length === 0
//       ? React.createElement('p', null, 'No tickets found')
//       : React.createElement('table', {
//           style: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             overflow: 'hidden',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('thead', { style: { backgroundColor: '#f3f4f6' } },
//             React.createElement('tr', null,
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Title'),
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Description'),
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Priority'),
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Status'),
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Created'),
//               React.createElement('th', { style: { padding: '12px', textAlign: 'left' } }, 'Actions')
//             )
//           ),
//           React.createElement('tbody', null,
//             tickets.map(ticket =>
//               React.createElement('tr', {
//                 key: ticket._id,
//                 style: { borderBottom: '1px solid #e5e7eb' }
//               },
//                 React.createElement('td', { style: { padding: '12px' } }, ticket.title),
//                 React.createElement('td', { style: { padding: '12px' } }, ticket.description.substring(0, 50) + '...'),
//                 React.createElement('td', { style: { padding: '12px' } }, ticket.priority),
//                 React.createElement('td', { style: { padding: '12px' } },
//                   React.createElement('select', {
//                     value: ticket.status,
//                     onChange: (e) => updateStatus(ticket._id, e.target.value),
//                     style: { padding: '5px', borderRadius: '4px' }
//                   },
//                     React.createElement('option', { value: 'pending' }, 'Pending'),
//                     React.createElement('option', { value: 'in-progress' }, 'In Progress'),
//                     React.createElement('option', { value: 'resolved' }, 'Resolved')
//                   )
//                 ),
//                 React.createElement('td', { style: { padding: '12px' } }, new Date(ticket.createdAt).toLocaleDateString()),
//                 React.createElement('td', { style: { padding: '12px' } },
//                   React.createElement('button', {
//                     onClick: () => updateStatus(ticket._id, 'resolved'),
//                     style: { padding: '5px 10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }
//                   }, 'Resolve'),
//                   React.createElement('button', {
//                     onClick: () => updateStatus(ticket._id, 'in-progress'),
//                     style: { padding: '5px 10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
//                   }, 'Start')
//                 )
//               )
//             )
//           )
//         )
//   );
// };

// export default AdminTickets;










