// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';

// const Tickets = () => {
//   const { user } = useAuth();
//   const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       title: 'Cannot access dashboard',
//       description: 'I keep getting redirected to login page',
//       status: 'pending',
//       priority: 'high',
//       createdBy: 'user@crm.com',
//       createdBy_name: 'Regular User',
//       createdAt: '2024-03-01 10:30 AM',
//       updatedAt: '2024-03-01 10:30 AM',
//       comments: []
//     },
//     {
//       id: 2,
//       title: 'Need help with user permissions',
//       description: 'I want to give edit access to my team members',
//       status: 'in-progress',
//       priority: 'medium',
//       createdBy: 'user@crm.com',
//       createdBy_name: 'Regular User',
//       createdAt: '2024-03-02 02:15 PM',
//       updatedAt: '2024-03-03 09:20 AM',
//       comments: [
//         {
//           user: 'Admin User',
//           comment: 'We are working on your request. Please provide more details.',
//           timestamp: '2024-03-03 09:20 AM'
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Data export not working',
//       description: 'CSV download button is not responding',
//       status: 'resolved',
//       priority: 'low',
//       createdBy: 'user@crm.com',
//       createdBy_name: 'Regular User',
//       createdAt: '2024-02-28 04:45 PM',
//       updatedAt: '2024-03-01 11:30 AM',
//       comments: [
//         {
//           user: 'Admin User',
//           comment: 'Fixed the issue. Please try again.',
//           timestamp: '2024-03-01 11:30 AM'
//         }
//       ]
//     }
//   ]);

//   const [showNewTicketForm, setShowNewTicketForm] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [newTicket, setNewTicket] = useState({
//     title: '',
//     description: '',
//     priority: 'medium'
//   });
//   const [newComment, setNewComment] = useState('');

//   const handleCreateTicket = (e) => {
//     e.preventDefault();
//     const ticket = {
//       id: tickets.length + 1,
//       ...newTicket,
//       status: 'pending',
//       createdBy: user.email,
//       createdBy_name: user.name,
//       createdAt: new Date().toLocaleString(),
//       updatedAt: new Date().toLocaleString(),
//       comments: []
//     };
//     setTickets([ticket, ...tickets]);
//     setNewTicket({ title: '', description: '', priority: 'medium' });
//     setShowNewTicketForm(false);
//   };

//   const handleUpdateStatus = (ticketId, newStatus) => {
//     setTickets(tickets.map(ticket => 
//       ticket.id === ticketId 
//         ? { ...ticket, status: newStatus, updatedAt: new Date().toLocaleString() }
//         : ticket
//     ));
//   };

//   const handleAddComment = (ticketId) => {
//     if (!newComment.trim()) return;
    
//     setTickets(tickets.map(ticket => 
//       ticket.id === ticketId 
//         ? { 
//             ...ticket, 
//             comments: [
//               ...ticket.comments, 
//               {
//                 user: user.name,
//                 comment: newComment,
//                 timestamp: new Date().toLocaleString()
//               }
//             ],
//             updatedAt: new Date().toLocaleString()
//           }
//         : ticket
//     ));
//     setNewComment('');
//   };

//   const getStatusBadge = (status) => {
//     const styles = {
//       pending: { backgroundColor: '#f59e0b', color: 'white' },
//       'in-progress': { backgroundColor: '#3b82f6', color: 'white' },
//       resolved: { backgroundColor: '#10b981', color: 'white' }
//     };
//     return styles[status] || styles.pending;
//   };

//   const getPriorityBadge = (priority) => {
//     const styles = {
//       high: { backgroundColor: '#ef4444', color: 'white' },
//       medium: { backgroundColor: '#f59e0b', color: 'white' },
//       low: { backgroundColor: '#6b7280', color: 'white' }
//     };
//     return styles[priority] || styles.medium;
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
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
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
//         }, 'Support Tickets'),
        
//         !isAdmin && React.createElement('button', {
//           onClick: () => setShowNewTicketForm(!showNewTicketForm),
//           style: {
//             padding: '10px 20px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//         }, '+ New Ticket')
//       ),

//       // New Ticket Form
//       showNewTicketForm && React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           marginBottom: '24px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, 'Create New Ticket'),
        
//         React.createElement('form', {
//           onSubmit: handleCreateTicket
//         },
//           React.createElement('div', {
//             style: {
//               marginBottom: '16px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#4b5563',
//                 marginBottom: '6px'
//               }
//             }, 'Title'),
            
//             React.createElement('input', {
//               type: 'text',
//               value: newTicket.title,
//               onChange: (e) => setNewTicket({ ...newTicket, title: e.target.value }),
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px'
//               },
//               required: true
//             })
//           ),

//           React.createElement('div', {
//             style: {
//               marginBottom: '16px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#4b5563',
//                 marginBottom: '6px'
//               }
//             }, 'Description'),
            
//             React.createElement('textarea', {
//               value: newTicket.description,
//               onChange: (e) => setNewTicket({ ...newTicket, description: e.target.value }),
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 minHeight: '100px'
//               },
//               required: true
//             })
//           ),

//           React.createElement('div', {
//             style: {
//               marginBottom: '16px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#4b5563',
//                 marginBottom: '6px'
//               }
//             }, 'Priority'),
            
//             React.createElement('select', {
//               value: newTicket.priority,
//               onChange: (e) => setNewTicket({ ...newTicket, priority: e.target.value }),
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px'
//               }
//             },
//               React.createElement('option', { value: 'high' }, 'High'),
//               React.createElement('option', { value: 'medium' }, 'Medium'),
//               React.createElement('option', { value: 'low' }, 'Low')
//             )
//           ),

//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '12px',
//               justifyContent: 'flex-end'
//             }
//           },
//             React.createElement('button', {
//               type: 'button',
//               onClick: () => setShowNewTicketForm(false),
//               style: {
//                 padding: '8px 16px',
//                 backgroundColor: 'white',
//                 color: '#4b5563',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 cursor: 'pointer'
//               }
//             }, 'Cancel'),
            
//             React.createElement('button', {
//               type: 'submit',
//               style: {
//                 padding: '8px 16px',
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 cursor: 'pointer'
//               }
//             }, 'Create Ticket')
//           )
//         )
//       ),

//       // Tickets List
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }
//       },
//         tickets.map((ticket) => (
//           React.createElement('div', {
//             key: ticket.id,
//             style: {
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               marginBottom: '16px',
//               overflow: 'hidden'
//             }
//           },
//             React.createElement('div', {
//               onClick: () => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id),
//               style: {
//                 padding: '16px',
//                 backgroundColor: '#f9fafb',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 flexWrap: 'wrap',
//                 gap: '12px'
//               }
//             },
//               React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   flexWrap: 'wrap'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     color: '#111827'
//                   }
//                 }, ticket.title),
                
//                 React.createElement('span', {
//                   style: {
//                     ...getStatusBadge(ticket.status),
//                     padding: '4px 12px',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     fontWeight: '500'
//                   }
//                 }, ticket.status.toUpperCase()),
                
//                 React.createElement('span', {
//                   style: {
//                     ...getPriorityBadge(ticket.priority),
//                     padding: '4px 12px',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     fontWeight: '500'
//                   }
//                 }, ticket.priority.toUpperCase())
//               ),
              
//               React.createElement('span', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#6b7280'
//                 }
//               }, `Created: ${ticket.createdAt}`)
//             ),

//             selectedTicket === ticket.id && React.createElement('div', {
//               style: {
//                 padding: '16px',
//                 borderTop: '1px solid #e5e7eb'
//               }
//             },
//               React.createElement('div', {
//                 style: {
//                   marginBottom: '16px'
//                 }
//               },
//                 React.createElement('p', {
//                   style: {
//                     fontSize: '14px',
//                     color: '#4b5563',
//                     marginBottom: '8px'
//                   }
//                 }, ticket.description),
                
//                 React.createElement('p', {
//                   style: {
//                     fontSize: '12px',
//                     color: '#9ca3af'
//                   }
//                 }, `Created by: ${ticket.createdBy_name} (${ticket.createdBy})`)
//               ),

//               // Comments
//               ticket.comments.length > 0 && React.createElement('div', {
//                 style: {
//                   marginBottom: '16px',
//                   backgroundColor: '#f3f4f6',
//                   padding: '12px',
//                   borderRadius: '8px'
//                 }
//               },
//                 React.createElement('h4', {
//                   style: {
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     color: '#374151',
//                     marginBottom: '8px'
//                   }
//                 }, 'Comments'),
                
//                 ticket.comments.map((comment, index) => (
//                   React.createElement('div', {
//                     key: index,
//                     style: {
//                       marginBottom: '8px',
//                       padding: '8px',
//                       backgroundColor: 'white',
//                       borderRadius: '6px'
//                     }
//                   },
//                     React.createElement('p', {
//                       style: {
//                         fontSize: '13px',
//                         color: '#4b5563',
//                         marginBottom: '4px'
//                       }
//                     }, comment.comment),
                    
//                     React.createElement('p', {
//                       style: {
//                         fontSize: '11px',
//                         color: '#9ca3af'
//                       }
//                     }, `${comment.user} - ${comment.timestamp}`)
//                   )
//                 ))
//               ),

//               // Add Comment
//               React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   gap: '8px',
//                   marginBottom: '16px'
//                 }
//               },
//                 React.createElement('input', {
//                   type: 'text',
//                   placeholder: 'Add a comment...',
//                   value: newComment,
//                   onChange: (e) => setNewComment(e.target.value),
//                   style: {
//                     flex: 1,
//                     padding: '8px 12px',
//                     border: '1px solid #e5e7eb',
//                     borderRadius: '6px',
//                     fontSize: '13px'
//                   }
//                 }),
                
//                 React.createElement('button', {
//                   onClick: () => handleAddComment(ticket.id),
//                   style: {
//                     padding: '8px 16px',
//                     backgroundColor: '#3b82f6',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '13px',
//                     cursor: 'pointer'
//                   }
//                 }, 'Comment')
//               ),

//               // Admin Actions
//               isAdmin && React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   gap: '8px',
//                   justifyContent: 'flex-end'
//                 }
//               },
//                 ticket.status !== 'pending' && React.createElement('button', {
//                   onClick: () => handleUpdateStatus(ticket.id, 'pending'),
//                   style: {
//                     padding: '6px 12px',
//                     backgroundColor: '#f59e0b',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '12px',
//                     cursor: 'pointer'
//                   }
//                 }, 'Mark Pending'),
                
//                 ticket.status !== 'in-progress' && React.createElement('button', {
//                   onClick: () => handleUpdateStatus(ticket.id, 'in-progress'),
//                   style: {
//                     padding: '6px 12px',
//                     backgroundColor: '#3b82f6',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '12px',
//                     cursor: 'pointer'
//                   }
//                 }, 'Start Progress'),
                
//                 ticket.status !== 'resolved' && React.createElement('button', {
//                   onClick: () => handleUpdateStatus(ticket.id, 'resolved'),
//                   style: {
//                     padding: '6px 12px',
//                     backgroundColor: '#10b981',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '12px',
//                     cursor: 'pointer'
//                   }
//                 }, 'Resolve')
//               )
//             )
//           )
//         ))
//       )
//     )
//   );
// };

// export default Tickets;

















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const AdminTickets = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    page: 1
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState({
    status: '',
    resolution: ''
  });

  useEffect(() => {
    fetchTickets();
  }, [filters.page, filters.status, filters.priority]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await ticketService.getTickets(filters);
      setTickets(response.data);
      setPagination(response.pagination);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusClick = (ticket) => {
    setSelectedTicket(ticket);
    setStatusUpdate({
      status: ticket.status,
      resolution: ticket.resolution || ''
    });
    setShowStatusModal(true);
  };

  const handleStatusUpdate = async () => {
    if (!selectedTicket) return;

    try {
      await ticketService.updateTicketStatus(
        selectedTicket._id,
        statusUpdate.status,
        statusUpdate.resolution
      );
      setShowStatusModal(false);
      fetchTickets();
    } catch (err) {
      alert('Failed to update ticket status: ' + err.message);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#f59e0b',
      'in-progress': '#3b82f6',
      'resolved': '#10b981',
      'closed': '#6b7280',
      'rejected': '#ef4444'
    };
    return colors[status] || '#6b7280';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'low': '#6b7280',
      'medium': '#f59e0b',
      'high': '#ef4444',
      'critical': '#dc2626'
    };
    return colors[priority] || '#6b7280';
  };

  if (loading && tickets.length === 0) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    }, 'Loading...');
  }

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
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
      }, 'Ticket Management'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px'
        }
      },
        React.createElement('select', {
          value: filters.status,
          onChange: (e) => setFilters({ ...filters, status: e.target.value, page: 1 }),
          style: {
            padding: '10px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white'
          }
        },
          React.createElement('option', { value: '' }, 'All Status'),
          React.createElement('option', { value: 'pending' }, 'Pending'),
          React.createElement('option', { value: 'in-progress' }, 'In Progress'),
          React.createElement('option', { value: 'resolved' }, 'Resolved'),
          React.createElement('option', { value: 'closed' }, 'Closed'),
          React.createElement('option', { value: 'rejected' }, 'Rejected')
        ),
        
        React.createElement('select', {
          value: filters.priority,
          onChange: (e) => setFilters({ ...filters, priority: e.target.value, page: 1 }),
          style: {
            padding: '10px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white'
          }
        },
          React.createElement('option', { value: '' }, 'All Priority'),
          React.createElement('option', { value: 'low' }, 'Low'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'high' }, 'High'),
          React.createElement('option', { value: 'critical' }, 'Critical')
        )
      )
    ),

    // Tickets Table
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflowX: 'auto'
      }
    },
      React.createElement('table', {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          minWidth: '1000px'
        }
      },
        React.createElement('thead', null,
          React.createElement('tr', {
            style: {
              borderBottom: '2px solid #e5e7eb'
            }
          },
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Ticket #'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Title'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'User'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Status'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Priority'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Created'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Actions')
          )
        ),
        
        React.createElement('tbody', null,
          tickets.map((ticket) =>
            React.createElement('tr', {
              key: ticket._id,
              style: {
                borderBottom: '1px solid #e5e7eb',
                transition: 'background-color 0.2s'
              },
              onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
              onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
            },
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  fontWeight: '500',
                  color: '#3b82f6'
                }
              }, ticket.ticketNumber),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  maxWidth: '200px'
                }
              }, ticket.title),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              }, ticket.createdByDetails?.name || 'N/A'),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: getStatusColor(ticket.status) + '20',
                    color: getStatusColor(ticket.status)
                  }
                }, ticket.status)
              ),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: getPriorityColor(ticket.priority) + '20',
                    color: getPriorityColor(ticket.priority)
                  }
                }, ticket.priority)
              ),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  fontSize: '13px',
                  color: '#6b7280'
                }
              }, new Date(ticket.createdAt).toLocaleDateString()),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    gap: '8px'
                  }
                },
                  React.createElement('button', {
                    onClick: () => navigate(`/admin/tickets/${ticket._id}`),
                    style: {
                      padding: '6px 12px',
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#3b82f6'
                    }
                  }, 'View'),
                  
                  React.createElement('button', {
                    onClick: () => handleStatusClick(ticket),
                    style: {
                      padding: '6px 12px',
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#10b981'
                    }
                  }, 'Update Status')
                )
              )
            )
          )
        )
      )
    ),

    // Pagination
    pagination.pages > 1 && React.createElement('div', {
      style: {
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center',
        gap: '8px'
      }
    },
      Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
        React.createElement('button', {
          key: page,
          onClick: () => setFilters({ ...filters, page }),
          style: {
            padding: '8px 12px',
            backgroundColor: page === filters.page ? '#3b82f6' : 'white',
            color: page === filters.page ? 'white' : '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, page)
      )
    ),

    // Status Update Modal
    showStatusModal && React.createElement('div', {
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
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }
        }, 'Update Ticket Status'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '20px'
          }
        }, `Ticket: ${selectedTicket?.ticketNumber}`),
        
        React.createElement('div', {
          style: {
            marginBottom: '16px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Status'),
          
          React.createElement('select', {
            value: statusUpdate.status,
            onChange: (e) => setStatusUpdate({ ...statusUpdate, status: e.target.value }),
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: 'white'
            }
          },
            React.createElement('option', { value: 'pending' }, 'Pending'),
            React.createElement('option', { value: 'in-progress' }, 'In Progress'),
            React.createElement('option', { value: 'resolved' }, 'Resolved'),
            React.createElement('option', { value: 'closed' }, 'Closed'),
            React.createElement('option', { value: 'rejected' }, 'Rejected')
          )
        ),
        
        {statusUpdate.status === 'resolved' && React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Resolution Notes'),
          
          React.createElement('textarea', {
            value: statusUpdate.resolution,
            onChange: (e) => setStatusUpdate({ ...statusUpdate, resolution: e.target.value }),
            rows: 4,
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }
          })
        )},
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }
        },
          React.createElement('button', {
            onClick: () => setShowStatusModal(false),
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            onClick: handleStatusUpdate,
            style: {
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Update Status')
        )
      )
    )
  );
};

export default AdminTickets;