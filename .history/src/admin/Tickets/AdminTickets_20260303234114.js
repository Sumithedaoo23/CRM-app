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