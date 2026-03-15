import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TicketDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock ticket data
  const ticket = {
    id: id,
    title: 'Sample Ticket',
    description: 'Detailed description of the ticket issue goes here...',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2024-03-02',
    createdBy: 'Regular User',
    comments: [
      {
        id: 1,
        user: 'Support Agent',
        message: 'We are looking into this issue.',
        timestamp: '2024-03-02 10:30 AM'
      },
      {
        id: 2,
        user: 'Regular User',
        message: 'Thank you for the quick response.',
        timestamp: '2024-03-02 11:15 AM'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'resolved': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'in-progress': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header with back button
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }
    },
      React.createElement('button', {
        onClick: () => navigate('/user/tickets'),
        style: {
          padding: '8px 16px',
          backgroundColor: 'white',
          color: '#4b5563',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }
      }, '← Back'),
      
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'Ticket Details')
    ),

    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }
    },
      // Main Content
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px'
          }
        }, ticket.title),
        
        React.createElement('p', {
          style: {
            fontSize: '15px',
            color: '#4b5563',
            lineHeight: '1.6',
            marginBottom: '32px'
          }
        }, ticket.description),

        // Comments Section
        React.createElement('div', null,
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '20px'
            }
          }, 'Comments'),
          
          ticket.comments.map((comment) =>
            React.createElement('div', {
              key: comment.id,
              style: {
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                marginBottom: '12px'
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }
              },
                React.createElement('span', {
                  style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#111827'
                  }
                }, comment.user),
                
                React.createElement('span', {
                  style: {
                    fontSize: '12px',
                    color: '#6b7280'
                  }
                }, comment.timestamp)
              ),
              
              React.createElement('p', {
                style: {
                  fontSize: '14px',
                  color: '#4b5563',
                  margin: 0
                }
              }, comment.message)
            )
          ),

          // Add Comment
          React.createElement('div', {
            style: {
              marginTop: '20px'
            }
          },
            React.createElement('textarea', {
              placeholder: 'Add a comment...',
              rows: '3',
              style: {
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '12px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }
            }),
            
            React.createElement('button', {
              style: {
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }
            }, 'Post Comment')
          )
        )
      ),

      // Sidebar
      React.createElement('div', null,
        // Status Card
        React.createElement('div', {
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '16px'
            }
          }, 'Ticket Status'),
          
          React.createElement('div', {
            style: {
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '30px',
              backgroundColor: getStatusColor(ticket.status),
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'capitalize',
              marginBottom: '16px'
            }
          }, ticket.status),
          
          React.createElement('div', {
            style: {
              display: 'grid',
              gap: '12px'
            }
          },
            React.createElement('div', null,
              React.createElement('p', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '2px'
                }
              }, 'Priority'),
              
              React.createElement('p', {
                style: {
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#111827',
                  textTransform: 'capitalize'
                }
              }, ticket.priority)
            ),
            
            React.createElement('div', null,
              React.createElement('p', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '2px'
                }
              }, 'Created'),
              
              React.createElement('p', {
                style: {
                  fontSize: '14px',
                  color: '#111827'
                }
              }, ticket.createdAt)
            ),
            
            React.createElement('div', null,
              React.createElement('p', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '2px'
                }
              }, 'Created By'),
              
              React.createElement('p', {
                style: {
                  fontSize: '14px',
                  color: '#111827'
                }
              }, ticket.createdBy)
            )
          )
        ),

        // Actions Card
        React.createElement('div', {
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '16px'
            }
          }, 'Actions'),
          
          React.createElement('div', {
            style: {
              display: 'grid',
              gap: '12px'
            }
          },
            React.createElement('button', {
              style: {
                width: '100%',
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#4b5563',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left'
              }
            }, 'Update Status'),
            
            React.createElement('button', {
              style: {
                width: '100%',
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#4b5563',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left'
              }
            }, 'Assign to me'),
            
            React.createElement('button', {
              style: {
                width: '100%',
                padding: '12px',
                backgroundColor: '#fee2e2',
                color: '#ef4444',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left'
              }
            }, 'Close Ticket')
          )
        )
      )
    )
  );
};

export default TicketDetails;