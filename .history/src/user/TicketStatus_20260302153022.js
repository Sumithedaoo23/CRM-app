// import React from 'react';

// const TicketStatus = () => {
//   return React.createElement('div', null,
//     // Ticket status tracking
//   );
// };

// export default TicketStatus;







import React, { useState } from 'react';

const TicketStatus = () => {
  const [ticketId, setTicketId] = useState('');
  const [searchedTicket, setSearchedTicket] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search ticket logic here
    console.log('Searching for ticket:', ticketId);
    // Mock response for demo
    setSearchedTicket({
      id: ticketId,
      title: 'Sample Ticket',
      status: 'in-progress',
      priority: 'high',
      createdAt: '2024-03-02',
      description: 'This is a sample ticket description'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'resolved': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'in-progress': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'low': return '#6b7280';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'urgent': return '#dc2626';
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
    React.createElement('h1', {
      style: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Ticket Status'),

    // Search Section
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto 32px auto'
      }
    },
      React.createElement('form', { onSubmit: handleSearch },
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Enter Ticket ID'),
          
          React.createElement('input', {
            type: 'text',
            value: ticketId,
            onChange: (e) => setTicketId(e.target.value),
            placeholder: 'e.g., TICKET-123',
            required: true,
            style: {
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'all 0.2s',
              outline: 'none'
            },
            onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
            onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
          })
        ),

        React.createElement('button', {
          type: 'submit',
          style: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
        }, 'Check Status')
      )
    ),

    // Ticket Details
    searchedTicket && React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '20px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '20px'
        }
      }, 'Ticket Details'),

      // Status Badges
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          marginBottom: '24px'
        }
      },
        React.createElement('span', {
          style: {
            padding: '6px 16px',
            borderRadius: '30px',
            backgroundColor: getStatusColor(searchedTicket.status),
            color: 'white',
            fontSize: '13px',
            fontWeight: '500',
            textTransform: 'capitalize'
          }
        }, searchedTicket.status),
        
        React.createElement('span', {
          style: {
            padding: '6px 16px',
            borderRadius: '30px',
            backgroundColor: getPriorityColor(searchedTicket.priority),
            color: 'white',
            fontSize: '13px',
            fontWeight: '500',
            textTransform: 'capitalize'
          }
        }, searchedTicket.priority)
      ),

      // Ticket Info
      React.createElement('div', {
        style: {
          display: 'grid',
          gap: '16px'
        }
      },
        React.createElement('div', null,
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '4px'
            }
          }, 'Ticket ID'),
          
          React.createElement('p', {
            style: {
              fontSize: '16px',
              fontWeight: '500',
              color: '#111827'
            }
          }, searchedTicket.id)
        ),

        React.createElement('div', null,
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '4px'
            }
          }, 'Title'),
          
          React.createElement('p', {
            style: {
              fontSize: '16px',
              fontWeight: '500',
              color: '#111827'
            }
          }, searchedTicket.title)
        ),

        React.createElement('div', null,
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '4px'
            }
          }, 'Created On'),
          
          React.createElement('p', {
            style: {
              fontSize: '16px',
              fontWeight: '500',
              color: '#111827'
            }
          }, searchedTicket.createdAt)
        ),

        React.createElement('div', null,
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '4px'
            }
          }, 'Description'),
          
          React.createElement('p', {
            style: {
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: '1.6'
            }
          }, searchedTicket.description)
        )
      )
    )
  );
};

export default TicketStatus;