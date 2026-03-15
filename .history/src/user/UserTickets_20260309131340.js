
// import React from 'react';

// const UserTickets = () => {
//   const tickets = [
//     { id: 1, title: 'Cannot access dashboard', status: 'pending', priority: 'high', date: '2024-03-01' },
//     { id: 2, title: 'Need help with permissions', status: 'in-progress', priority: 'medium', date: '2024-03-02' },
//     { id: 3, title: 'Data export not working', status: 'resolved', priority: 'low', date: '2024-02-28' },
//   ];

//   const getStatusColor = (status) => {
//     const colors = {
//       'pending': '#f59e0b',
//       'in-progress': '#3b82f6',
//       'resolved': '#10b981'
//     };
//     return colors[status] || '#6b7280';
//   };

//   const getPriorityColor = (priority) => {
//     const colors = {
//       'high': '#ef4444',
//       'medium': '#f59e0b',
//       'low': '#6b7280'
//     };
//     return colors[priority] || '#6b7280';
//   };

//   return React.createElement('div', {
//     style: {
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       padding: '24px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '24px'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'My Tickets'),
      
//       React.createElement('a', {
//         href: '/user/generate-ticket',
//         style: {
//           padding: '10px 20px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           textDecoration: 'none'
//         }
//       }, '+ New Ticket')
//     ),

//     React.createElement('div', {
//       style: {
//         overflowX: 'auto'
//       }
//     },
//       React.createElement('table', {
//         style: {
//           width: '100%',
//           borderCollapse: 'collapse'
//         }
//       },
//         React.createElement('thead', null,
//           React.createElement('tr', {
//             style: {
//               borderBottom: '2px solid #e5e7eb'
//             }
//           },
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ID'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'TITLE'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'STATUS'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PRIORITY'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'DATE')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           tickets.map((ticket) =>
//             React.createElement('tr', {
//               key: ticket.id,
//               style: {
//                 borderBottom: '1px solid #e5e7eb'
//               }
//             },
//               React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, `#${ticket.id}`),
//               React.createElement('td', { style: { padding: '16px 8px' } }, ticket.title),
//               React.createElement('td', { style: { padding: '16px 8px' } },
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
//               React.createElement('td', { style: { padding: '16px 8px' } },
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
//               React.createElement('td', { style: { padding: '16px 8px', color: '#6b7280' } }, ticket.date)
//             )
//           )
//         )
//       )
//     )
//   );
// };

// export default UserTickets;

















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../services/ticketService';
import { useAuth } from '../context/AuthContext';

const UserTickets = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      setLoading(true);
      const response = await ticketService.getUserTickets();
      setTickets(response.data || []);
    } catch (err) {
      setError(err.error || 'Failed to load tickets');
    } finally {
      setLoading(false);
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
      'low': { bg: '#e5e7eb', text: '#6b7280' },
      'medium': { bg: '#fef3c7', text: '#d97706' },
      'high': { bg: '#fee2e2', text: '#ef4444' },
      'urgent': { bg: '#fecaca', text: '#dc2626' }
    };
    return colors[priority] || { bg: '#e5e7eb', text: '#6b7280' };
  };

  const filteredTickets = filter === 'all' 
    ? tickets 
    : tickets.filter(t => t.status === filter);

  if (loading) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading your tickets...');
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
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
      }, '+ New Ticket')
    ),

    // Filter Tabs
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        backgroundColor: '#ffffff',
        padding: '8px',
        borderRadius: '40px',
        maxWidth: '500px'
      }
    },
      ['all', 'pending', 'in-progress', 'resolved', 'closed'].map((status) =>
        React.createElement('button', {
          key: status,
          onClick: () => setFilter(status),
          style: {
            flex: 1,
            padding: '8px 16px',
            backgroundColor: filter === status ? '#10b981' : 'transparent',
            color: filter === status ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textTransform: 'capitalize',
            transition: 'all 0.2s'
          }
        }, status === 'in-progress' ? 'In Progress' : status)
      )
    ),

    // Error message
    error && React.createElement('div', {
      style: {
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px'
      }
    }, error),

    // Tickets List
    filteredTickets.length === 0
      ? React.createElement('div', {
          style: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('p', {
            style: {
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '20px'
            }
          }, filter === 'all' ? "You haven't created any tickets yet" : `No ${filter} tickets found`),
          
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
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
          }
        },
          filteredTickets.map(ticket => {
            const statusColors = getStatusColor(ticket.status);
            const priorityColors = getPriorityColor(ticket.priority);
            
            return React.createElement('div', {
              key: ticket._id,
              style: {
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
              },
              onClick: () => navigate(`/user/ticket-status?id=${ticket._id}`),
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }
            },
              // Header with ticket number and status
              React.createElement('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }
              },
                React.createElement('span', {
                  style: {
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#3b82f6'
                  }
                }, ticket.ticketNumber || 'New Ticket'),
                
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    gap: '8px'
                  }
                },
                  React.createElement('span', {
                    style: {
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '500',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }
                  }, ticket.status),
                  
                  React.createElement('span', {
                    style: {
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '500',
                      backgroundColor: priorityColors.bg,
                      color: priorityColors.text
                    }
                  }, ticket.priority)
                )
              ),

              // Title
              React.createElement('h3', {
                style: {
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px'
                }
              }, ticket.title),

              // Description preview
              React.createElement('p', {
                style: {
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.5'
                }
              }, (ticket.description || '').substring(0, 120) + '...'),

              // Footer with date
              React.createElement('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '12px',
                  fontSize: '12px',
                  color: '#9ca3af'
                }
              },
                React.createElement('span', null, 
                  'Created: ', new Date(ticket.createdAt).toLocaleDateString()
                ),
                
                ticket.resolvedAt && React.createElement('span', null,
                  'Resolved: ', new Date(ticket.resolvedAt).toLocaleDateString()
                )
              )
            );
          })
        )
  );
};

export default UserTickets;