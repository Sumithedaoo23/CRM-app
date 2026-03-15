

import React, { useState, useEffect } from 'react';
import ticketService from '../../services/ticketService';

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadAllTickets();
  }, []);

  const loadAllTickets = async () => {
    try {
      const response = await ticketService.getAllTickets();
      setTickets(response.data || []);
    } catch (error) {
      console.error('Failed to load tickets:', error);
      alert('Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    if (!window.confirm(`Are you sure you want to mark this ticket as ${newStatus}?`)) {
      return;
    }

    try {
      await ticketService.updateTicket(id, { status: newStatus });
      
      // Update local state
      setTickets(tickets.map(t => 
        t._id === id ? { ...t, status: newStatus } : t
      ));
      
      alert(`Ticket marked as ${newStatus}`);
    } catch (error) {
      alert('Failed to update ticket: ' + (error.error || error.message));
    }
  };

  const addComment = async (ticketId) => {
    if (!comment.trim()) {
      alert('Please enter a comment');
      return;
    }

    try {
      await ticketService.addComment(ticketId, comment, 'Admin', 'Admin');
      setComment('');
      setShowCommentBox(false);
      
      // Reload tickets to get updated comments
      loadAllTickets();
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

  const getPriorityColor = (priority) => {
    const colors = {
      'low': '#6b7280',
      'medium': '#f59e0b',
      'high': '#ef4444',
      'urgent': '#dc2626'
    };
    return colors[priority] || '#6b7280';
  };

  const filteredTickets = filter === 'all' 
    ? tickets 
    : tickets.filter(t => t.status === filter);

  if (loading) {
    return React.createElement('div', { 
      style: { 
        textAlign: 'center', 
        padding: '50px',
        fontSize: '18px',
        color: '#6b7280'
      } 
    }, 'Loading tickets...');
  }

  return React.createElement('div', { 
    style: { 
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh'
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
      }, 'Ticket Management'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px'
        }
      },
        React.createElement('select', {
          value: filter,
          onChange: (e) => setFilter(e.target.value),
          style: {
            padding: '8px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white'
          }
        },
          React.createElement('option', { value: 'all' }, 'All Tickets'),
          React.createElement('option', { value: 'pending' }, 'Pending'),
          React.createElement('option', { value: 'in-progress' }, 'In Progress'),
          React.createElement('option', { value: 'resolved' }, 'Resolved'),
          React.createElement('option', { value: 'closed' }, 'Closed'),
          React.createElement('option', { value: 'rejected' }, 'Rejected')
        )
      )
    ),

    // Stats Summary
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '12px',
        marginBottom: '24px'
      }
    },
      ['pending', 'in-progress', 'resolved', 'closed', 'rejected'].map(status => {
        const count = tickets.filter(t => t.status === status).length;
        const colors = getStatusColor(status);
        return React.createElement('div', {
          key: status,
          style: {
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }
        },
          React.createElement('div', {
            style: {
              fontSize: '20px',
              fontWeight: '700',
              color: colors.text,
              marginBottom: '4px'
            }
          }, count),
          React.createElement('div', {
            style: {
              fontSize: '12px',
              color: '#6b7280',
              textTransform: 'capitalize'
            }
          }, status)
        );
      })
    ),

    // Tickets List
    filteredTickets.length === 0
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
              marginBottom: '16px'
            }
          }, 'No tickets found'),
          
          filter !== 'all' && React.createElement('button', {
            onClick: () => setFilter('all'),
            style: {
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }
          }, 'View All Tickets')
        )
      : React.createElement('div', {
          style: {
            display: 'grid',
            gap: '16px'
          }
        },
          filteredTickets.map(ticket => {
            const statusColors = getStatusColor(ticket.status);
            const isSelected = selectedTicket?._id === ticket._id;
            
            return React.createElement('div', {
              key: ticket._id,
              style: {
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: isSelected ? '2px solid #3b82f6' : 'none'
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
                      color: '#3b82f6'
                    }
                  }, `#${ticket._id.slice(-6)}`),
                  
                  React.createElement('span', {
                    style: {
                      fontSize: '14px',
                      color: '#6b7280'
                    }
                  }, `by ${ticket.userName || 'User'}`)
                ),
                
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }
                },
                  React.createElement('span', {
                    style: {
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }
                  }, ticket.status),
                  
                  React.createElement('span', {
                    style: {
                      fontSize: '20px',
                      color: '#9ca3af'
                    }
                  }, isSelected ? '▼' : '▶')
                )
              ),

              // Ticket Content
              React.createElement('div', {
                style: {
                  marginBottom: '16px',
                  padding: '16px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px'
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
                  React.createElement('span', null, `Priority: `,
                    React.createElement('span', {
                      style: {
                        color: getPriorityColor(ticket.priority),
                        fontWeight: '500'
                      }
                    }, ticket.priority)
                  ),
                  React.createElement('span', null, `Category: ${ticket.category}`),
                  React.createElement('span', null, `Created: ${new Date(ticket.createdAt).toLocaleDateString()}`)
                )
              ),

              // Comments Section (expanded)
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
                }, 'Comments'),
                
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
                            backgroundColor: '#3b82f6',
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
                        color: '#3b82f6',
                        border: '1px solid #3b82f6',
                        borderRadius: '6px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      }
                    }, '➕ Add Comment')
              ),

              // Action Buttons
              React.createElement('div', {
                style: {
                  display: 'flex',
                  gap: '8px',
                  marginTop: '16px',
                  flexWrap: 'wrap'
                }
              },
                ticket.status !== 'resolved' && React.createElement('button', {
                  onClick: () => updateStatus(ticket._id, 'resolved'),
                  style: {
                    padding: '8px 16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, '✓ Resolve'),
                
                ticket.status !== 'in-progress' && React.createElement('button', {
                  onClick: () => updateStatus(ticket._id, 'in-progress'),
                  style: {
                    padding: '8px 16px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, '▶ Start'),
                
                ticket.status !== 'closed' && React.createElement('button', {
                  onClick: () => updateStatus(ticket._id, 'closed'),
                  style: {
                    padding: '8px 16px',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, '🔒 Close'),
                
                ticket.status !== 'rejected' && React.createElement('button', {
                  onClick: () => updateStatus(ticket._id, 'rejected'),
                  style: {
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, '✗ Reject'),
                
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
                }, '🗑 Delete')
              )
            );
          })
        )
  );
};

export default AdminTickets;