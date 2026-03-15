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
















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const TicketStatus = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  useEffect(() => {
    loadUserTickets();
  }, []);

  const loadUserTickets = async () => {
    try {
      const response = await ticketService.getUserTickets();
      setTickets(response.data || []);
    } catch (error) {
      console.error('Failed to load tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (ticketId) => {
    if (!comment.trim()) {
      alert('Please enter a comment');
      return;
    }

    try {
      await ticketService.addComment(ticketId, comment, 'User', 'You');
      setComment('');
      setShowCommentBox(false);
      loadUserTickets(); // Reload to show new comment
      alert('Comment added successfully');
    } catch (error) {
      alert('Failed to add comment: ' + (error.error || error.message));
    }
  };

  const deleteTicket = async (id) => {
    if (!window.confirm('⚠️ Are you sure you want to delete this ticket? This action cannot be undone.')) {
      return;
    }

    try {
      await ticketService.deleteTicket(id);
      setTickets(tickets.filter(t => t._id !== id));
      alert('Ticket deleted successfully');
    } catch (error) {
      alert('Failed to delete ticket: ' + (error.error || error.message));
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': { bg: '#fef3c7', text: '#d97706' },
      'in-progress': { bg: '#dbeafe', text: '#2563eb' },
      'resolved': { bg: '#d1fae5', text: '#10b981' },
      'closed': { bg: '#e5e7eb', text: '#6b7280' },
      'rejected': { bg: '#fee2e2', text: '#dc2626' }
    };
    return colors[status] || { bg: '#e5e7eb', text: '#6b7280' };
  };

  if (loading) {
    return React.createElement('div', { 
      style: { 
        textAlign: 'center', 
        padding: '50px',
        fontSize: '18px',
        color: '#6b7280'
      } 
    }, 'Loading your tickets...');
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
        marginBottom: '24px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'My Tickets'),
      
      React.createElement('button', {
        onClick: () => navigate('/user/generate-ticket'),
        style: {
          padding: '12px 24px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }
      }, '+ New Ticket')
    ),

    tickets.length === 0
      ? React.createElement('div', {
          style: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('p', {
            style: {
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '20px'
            }
          }, "You haven't created any tickets yet"),
          
          React.createElement('button', {
            onClick: () => navigate('/user/generate-ticket'),
            style: {
              padding: '12px 24px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, 'Create Your First Ticket')
        )
      : React.createElement('div', {
          style: {
            display: 'grid',
            gap: '16px'
          }
        },
          tickets.map(ticket => {
            const statusColors = getStatusColor(ticket.status);
            const isSelected = selectedTicket?._id === ticket._id;
            
            return React.createElement('div', {
              key: ticket._id,
              style: {
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: isSelected ? '2px solid #10b981' : 'none'
              }
            },
              // Ticket Header
              React.createElement('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  cursor: 'pointer'
                },
                onClick: () => setSelectedTicket(isSelected ? null : ticket)
              },
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }
                },
                  React.createElement('span', {
                    style: {
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#10b981'
                    }
                  }, `#${ticket._id.slice(-6)}`),
                  
                  React.createElement('span', {
                    style: {
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }
                  }, ticket.status)
                ),
                
                React.createElement('span', {
                  style: {
                    fontSize: '20px',
                    color: '#9ca3af'
                  }
                }, isSelected ? '▼' : '▶')
              ),

              // Ticket Content
              React.createElement('div', {
                style: {
                  marginBottom: '16px'
                }
              },
                React.createElement('h3', {
                  style: {
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '8px'
                  }
                }, ticket.title),
                
                React.createElement('p', {
                  style: {
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: '1.5',
                    marginBottom: '12px'
                  }
                }, ticket.description),
                
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    gap: '16px',
                    fontSize: '13px',
                    color: '#6b7280'
                  }
                },
                  React.createElement('span', null, `Priority: ${ticket.priority}`),
                  React.createElement('span', null, `Category: ${ticket.category}`),
                  React.createElement('span', null, `Created: ${new Date(ticket.createdAt).toLocaleDateString()}`)
                )
              ),

              // Comments Section
              isSelected && React.createElement('div', {
                style: {
                  marginTop: '16px',
                  padding: '16px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px'
                }
              },
                React.createElement('h4', {
                  style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '12px'
                  }
                }, 'Comments & Updates'),
                
                // Comments List
                ticket.comments && ticket.comments.length > 0
                  ? React.createElement('div', {
                      style: {
                        marginBottom: '16px',
                        maxHeight: '200px',
                        overflowY: 'auto'
                      }
                    },
                      ticket.comments.map((comment, idx) => 
                        React.createElement('div', {
                          key: idx,
                          style: {
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            marginBottom: '8px'
                          }
                        },
                          React.createElement('div', {
                            style: {
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginBottom: '4px'
                            }
                          },
                            React.createElement('span', {
                              style: {
                                fontSize: '12px',
                                fontWeight: '600',
                                color: comment.userType === 'Admin' ? '#3b82f6' : '#10b981'
                              }
                            }, comment.userName || comment.userType),
                            
                            React.createElement('span', {
                              style: {
                                fontSize: '11px',
                                color: '#9ca3af'
                              }
                            }, new Date(comment.createdAt).toLocaleString())
                          ),
                          
                          React.createElement('p', {
                            style: {
                              fontSize: '13px',
                              color: '#374151',
                              margin: 0
                            }
                          }, comment.text)
                        )
                      )
                    )
                  : React.createElement('p', {
                      style: {
                        fontSize: '13px',
                        color: '#9ca3af',
                        textAlign: 'center',
                        padding: '12px'
                      }
                    }, 'No comments yet'),

                // Add Comment
                ticket.status !== 'closed' && ticket.status !== 'resolved' && (
                  showCommentBox === ticket._id
                    ? React.createElement('div', null,
                        React.createElement('textarea', {
                          value: comment,
                          onChange: (e) => setComment(e.target.value),
                          placeholder: 'Type your comment here...',
                          rows: 3,
                          style: {
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '14px',
                            marginBottom: '12px',
                            resize: 'vertical'
                          }
                        }),
                        
                        React.createElement('div', {
                          style: {
                            display: 'flex',
                            gap: '8px',
                            justifyContent: 'flex-end'
                          }
                        },
                          React.createElement('button', {
                            onClick: () => {
                              setShowCommentBox(false);
                              setComment('');
                            },
                            style: {
                              padding: '8px 16px',
                              backgroundColor: 'white',
                              color: '#6b7280',
                              border: '1px solid #e5e7eb',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }
                          }, 'Cancel'),
                          
                          React.createElement('button', {
                            onClick: () => addComment(ticket._id),
                            style: {
                              padding: '8px 16px',
                              backgroundColor: '#10b981',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }
                          }, 'Post Comment')
                        )
                      )
                    : React.createElement('button', {
                        onClick: () => setShowCommentBox(ticket._id),
                        style: {
                          padding: '8px 16px',
                          backgroundColor: 'white',
                          color: '#10b981',
                          border: '1px solid #10b981',
                          borderRadius: '6px',
                          fontSize: '13px',
                          cursor: 'pointer'
                        }
                      }, '➕ Add Comment')
                )
              ),

              // Delete Button
              React.createElement('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '16px'
                }
              },
                React.createElement('button', {
                  onClick: () => deleteTicket(ticket._id),
                  style: {
                    padding: '8px 16px',
                    backgroundColor: '#fee2e2',
                    color: '#dc2626',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, '🗑 Delete Ticket')
              )
            );
          })
        )
  );
};

export default TicketStatus;