// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const TicketStatus = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const fetchTickets = async () => {
//     try {
//       const response = await ticketService.getUserTickets();
//       setTickets(response.data);
//     } catch (error) {
//       console.error('Failed to load tickets', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return React.createElement('div', { style: { textAlign: 'center', padding: '50px' } }, 'Loading...');
//   }

//   return React.createElement('div', null,
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'My Tickets'),
//     tickets.length === 0
//       ? React.createElement('div', { style: { textAlign: 'center', padding: '50px', backgroundColor: 'white', borderRadius: '8px' } },
//           React.createElement('p', { style: { marginBottom: '20px' } }, 'No tickets found'),
//           React.createElement('button', {
//             onClick: () => navigate('/user/generate-ticket'),
//             style: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
//           }, 'Create Your First Ticket')
//         )
//       : React.createElement('div', { style: { display: 'grid', gap: '16px' } },
//           tickets.map(ticket =>
//             React.createElement('div', {
//               key: ticket._id,
//               style: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
//             },
//               React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' } },
//                 React.createElement('h3', { style: { margin: 0, color: '#3b82f6' } }, ticket.ticketNumber || 'New Ticket'),
//                 React.createElement('span', {
//                   style: {
//                     padding: '4px 8px',
//                     borderRadius: '4px',
//                     backgroundColor: ticket.status === 'pending' ? '#fef3c7' : ticket.status === 'resolved' ? '#d1fae5' : '#e5e7eb',
//                     color: ticket.status === 'pending' ? '#d97706' : ticket.status === 'resolved' ? '#10b981' : '#6b7280'
//                   }
//                 }, ticket.status)
//               ),
//               React.createElement('h4', { style: { margin: '10px 0' } }, ticket.title),
//               React.createElement('p', { style: { color: '#6b7280' } }, ticket.description.substring(0, 100) + '...')
//             )
//           )
//         )
//   );
// };

// export default TicketStatus;











import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const TicketStatus = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await ticketService.getUserTickets();
      console.log('Tickets loaded:', response);
      setTickets(response.data || []);
      setError('');
    } catch (error) {
      console.error('Failed to load tickets', error);
      setError(error.error || 'Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (ticketId) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      try {
        await ticketService.deleteTicket(ticketId);
        // Refresh the list
        fetchTickets();
        alert('Ticket deleted successfully');
      } catch (error) {
        alert('Failed to delete ticket: ' + (error.error || 'Unknown error'));
      }
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': { bg: '#fef3c7', text: '#d97706' },
      'in-progress': { bg: '#dbeafe', text: '#2563eb' },
      'resolved': { bg: '#d1fae5', text: '#10b981' },
      'closed': { bg: '#e5e7eb', text: '#6b7280' }
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

  if (loading) {
    return React.createElement('div', { 
      style: { 
        textAlign: 'center', 
        padding: '50px',
        color: '#6b7280'
      } 
    }, 'Loading tickets...');
  }

  return React.createElement('div', { 
    style: { 
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    } 
  },
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
          fontSize: '24px', 
          margin: 0,
          color: '#111827'
        } 
      }, 'My Tickets'),
      
      React.createElement('button', {
        onClick: () => navigate('/user/generate-ticket'),
        style: {
          padding: '10px 20px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
      }, '+ New Ticket')
    ),

    error && React.createElement('div', {
      style: {
        backgroundColor: '#fee2e2',
        color: '#ef4444',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '20px'
      }
    }, error),

    tickets.length === 0
      ? React.createElement('div', { 
          style: { 
            textAlign: 'center', 
            padding: '60px', 
            backgroundColor: 'white', 
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          } 
        },
          React.createElement('p', { 
            style: { 
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '20px' 
            } 
          }, 'No tickets found'),
          
          React.createElement('button', {
            onClick: () => navigate('/user/generate-ticket'),
            style: { 
              padding: '12px 24px', 
              backgroundColor: '#10b981', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
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
          tickets.map(ticket =>
            React.createElement('div', {
              key: ticket._id,
              style: { 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '8px', 
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }
            },
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
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#3b82f6'
                  } 
                }, ticket.ticketNumber || 'New Ticket'),
                
                React.createElement('div', { style: { display: 'flex', gap: '8px' } },
                  React.createElement('span', {
                    style: {
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: getStatusColor(ticket.status).bg,
                      color: getStatusColor(ticket.status).text
                    }
                  }, ticket.status),
                  
                  React.createElement('span', {
                    style: {
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: getPriorityColor(ticket.priority).bg,
                      color: getPriorityColor(ticket.priority).text
                    }
                  }, ticket.priority)
                )
              ),
              
              React.createElement('h4', { 
                style: { 
                  margin: '0 0 8px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827'
                } 
              }, ticket.title),
              
              React.createElement('p', { 
                style: { 
                  color: '#6b7280',
                  fontSize: '14px',
                  marginBottom: '16px',
                  lineHeight: '1.5'
                } 
              }, ticket.description.substring(0, 150) + (ticket.description.length > 150 ? '...' : '')),
              
              React.createElement('div', { 
                style: { 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#9ca3af',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '12px'
                } 
              },
                React.createElement('span', null, 
                  'Created: ', new Date(ticket.createdAt).toLocaleDateString()
                ),
                
                React.createElement('div', { style: { display: 'flex', gap: '8px' } },
                  React.createElement('button', {
                    onClick: () => handleDelete(ticket._id),
                    style: {
                      padding: '4px 8px',
                      backgroundColor: 'transparent',
                      color: '#ef4444',
                      border: '1px solid #ef4444',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }
                  }, 'Delete')
                )
              )
            )
          )
        )
  );
};

export default TicketStatus;