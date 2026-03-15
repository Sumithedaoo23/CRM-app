// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const TicketStatus = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const ticketId = queryParams.get('id');

//   const [ticket, setTicket] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     if (ticketId) {
//       fetchTicket();
//     } else {
//       fetchAllTickets();
//     }
//   }, [ticketId]);

//   const fetchTicket = async () => {
//     try {
//       setLoading(true);
//       const response = await ticketService.getTicket(ticketId);
//       setTicket(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load ticket');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAllTickets = async () => {
//     try {
//       setLoading(true);
//       const response = await ticketService.getUserTickets();
//       setTicket(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load tickets');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddComment = async () => {
//     if (!newComment.trim() || !ticketId) return;

//     try {
//       await ticketService.addComment(ticketId, newComment);
//       setNewComment('');
//       fetchTicket(); // Refresh ticket data
//     } catch (err) {
//       alert('Failed to add comment: ' + err.message);
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

//   if (loading) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     }, 'Loading...');
//   }

//   if (error) {
//     return React.createElement('div', {
//       style: {
//         padding: '24px',
//         textAlign: 'center'
//       }
//     },
//       React.createElement('p', {
//         style: {
//           color: '#ef4444',
//           fontSize: '16px',
//           marginBottom: '16px'
//         }
//       }, error),
      
//       React.createElement('button', {
//         onClick: () => navigate('/user/dashboard'),
//         style: {
//           padding: '10px 20px',
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           cursor: 'pointer'
//         }
//       }, '← Back to Dashboard')
//     );
//   }

//   // If no ticketId, show list of tickets
//   if (!ticketId && Array.isArray(ticket)) {
//     return React.createElement('div', {
//       style: {
//         padding: '24px',
//         backgroundColor: '#f3f4f6',
//         minHeight: '100vh',
//         fontFamily: 'system-ui, -apple-system, sans-serif'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           maxWidth: '800px',
//           margin: '0 auto'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('h1', {
//             style: {
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#111827',
//               margin: 0
//             }
//           }, 'My Tickets'),
          
//           React.createElement('button', {
//             onClick: () => navigate('/user/dashboard'),
//             style: {
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               cursor: 'pointer'
//             }
//           }, '← Back')
//         ),

//         ticket.length === 0 
//           ? React.createElement('div', {
//               style: {
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 padding: '48px',
//                 textAlign: 'center',
//                 boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//               }
//             },
//               React.createElement('p', {
//                 style: {
//                   fontSize: '16px',
//                   color: '#6b7280',
//                   marginBottom: '20px'
//                 }
//               }, 'You haven\'t created any tickets yet.'),
              
//               React.createElement('button', {
//                 onClick: () => navigate('/user/generate-ticket'),
//                 style: {
//                   padding: '12px 24px',
//                   backgroundColor: '#10b981',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   cursor: 'pointer'
//                 }
//               }, '➕ Create Your First Ticket')
//             )
//           : React.createElement('div', {
//               style: {
//                 display: 'grid',
//                 gap: '16px'
//               }
//             },
//               ticket.map((t) =>
//                 React.createElement('div', {
//                   key: t._id,
//                   style: {
//                     backgroundColor: 'white',
//                     borderRadius: '12px',
//                     padding: '20px',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     cursor: 'pointer',
//                     transition: 'transform 0.2s'
//                   },
//                   onClick: () => navigate(`/user/ticket-status?id=${t._id}`),
//                   onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//                   onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//                 },
//                   React.createElement('div', {
//                     style: {
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '12px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         fontWeight: '600',
//                         color: '#3b82f6'
//                       }
//                     }, t.ticketNumber),
                    
//                     React.createElement('span', {
//                       style: {
//                         padding: '4px 12px',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         backgroundColor: getStatusColor(t.status) + '20',
//                         color: getStatusColor(t.status)
//                       }
//                     }, t.status)
//                   ),
                  
//                   React.createElement('h3', {
//                     style: {
//                       fontSize: '16px',
//                       fontWeight: '600',
//                       color: '#111827',
//                       marginBottom: '8px'
//                     }
//                   }, t.title),
                  
//                   React.createElement('p', {
//                     style: {
//                       fontSize: '14px',
//                       color: '#6b7280',
//                       marginBottom: '12px',
//                       lineHeight: '1.5'
//                     }
//                   }, t.description.substring(0, 100) + (t.description.length > 100 ? '...' : '')),
                  
//                   React.createElement('div', {
//                     style: {
//                       fontSize: '12px',
//                       color: '#9ca3af'
//                     }
//                   }, `Created: ${new Date(t.createdAt).toLocaleDateString()}`)
//                 )
//               )
//             )
//       )
//     );
//   }

//   // Show single ticket details
//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '800px',
//         margin: '0 auto'
//       }
//     },
//       // Header
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, `Ticket ${ticket?.ticketNumber}`),
        
//         React.createElement('button', {
//           onClick: () => navigate('/user/ticket-status'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, '← Back to List')
//       ),

//       // Ticket Details
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '32px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           marginBottom: '24px'
//         }
//       },
//         // Status and Priority
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '16px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               padding: '8px 16px',
//               borderRadius: '30px',
//               fontSize: '14px',
//               fontWeight: '500',
//               backgroundColor: getStatusColor(ticket?.status) + '20',
//               color: getStatusColor(ticket?.status)
//             }
//           }, ticket?.status),
          
//           React.createElement('div', {
//             style: {
//               padding: '8px 16px',
//               borderRadius: '30px',
//               fontSize: '14px',
//               fontWeight: '500',
//               backgroundColor: '#f3f4f6',
//               color: '#374151'
//             }
//           }, ticket?.priority)
//         ),

//         // Title
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, ticket?.title),

//         // Description
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#f9fafb',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#374151',
//               lineHeight: '1.6',
//               margin: 0
//             }
//           }, ticket?.description)
//         ),

//         // Metadata
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             padding: '16px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Category'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827',
//                 textTransform: 'capitalize'
//               }
//             }, ticket?.category)
//           ),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Created'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, new Date(ticket?.createdAt).toLocaleString())
//           ),
          
//           ticket?.resolvedAt && React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Resolved'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, new Date(ticket?.resolvedAt).toLocaleString())
//           ),
          
//           ticket?.assignedTo && React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Assigned To'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#111827'
//               }
//             }, ticket?.assignedTo)
//           )
//         )
//       ),

//       // Comments Section
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '32px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px'
//           }
//         }, 'Comments'),
        
//         // Comments List
//         ticket?.comments && ticket.comments.length > 0
//           ? React.createElement('div', {
//               style: {
//                 marginBottom: '24px'
//               }
//             },
//               ticket.comments.map((comment, index) =>
//                 React.createElement('div', {
//                   key: index,
//                   style: {
//                     padding: '16px',
//                     backgroundColor: '#f9fafb',
//                     borderRadius: '8px',
//                     marginBottom: '12px'
//                   }
//                 },
//                   React.createElement('div', {
//                     style: {
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '8px'
//                     }
//                   },
//                     React.createElement('span', {
//                       style: {
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         color: '#3b82f6'
//                       }
//                     }, comment.userType === 'Admin' ? 'Admin' : 'You'),
                    
//                     React.createElement('span', {
//                       style: {
//                         fontSize: '11px',
//                         color: '#9ca3af'
//                       }
//                     }, new Date(comment.createdAt).toLocaleString())
//                   ),
                  
//                   React.createElement('p', {
//                     style: {
//                       fontSize: '14px',
//                       color: '#374151',
//                       margin: 0,
//                       lineHeight: '1.5'
//                     }
//                   }, comment.content)
//                 )
//               )
//             )
//           : React.createElement('p', {
//               style: {
//                 textAlign: 'center',
//                 color: '#6b7280',
//                 padding: '20px'
//               }
//             }, 'No comments yet'),

//         // Add Comment
//         ticket?.status !== 'closed' && ticket?.status !== 'resolved' && React.createElement('div', {
//           style: {
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('textarea', {
//             value: newComment,
//             onChange: (e) => setNewComment(e.target.value),
//             placeholder: 'Add a comment...',
//             rows: 3,
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               marginBottom: '12px',
//               resize: 'vertical',
//               boxSizing: 'border-box'
//             }
//           }),
          
//           React.createElement('button', {
//             onClick: handleAddComment,
//             disabled: !newComment.trim(),
//             style: {
//               padding: '10px 20px',
//               backgroundColor: newComment.trim() ? '#3b82f6' : '#9ca3af',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: newComment.trim() ? 'pointer' : 'not-allowed'
//             }
//           }, 'Post Comment')
//         )
//       )
//     )
//   );
// };

// export default TicketStatus;
















