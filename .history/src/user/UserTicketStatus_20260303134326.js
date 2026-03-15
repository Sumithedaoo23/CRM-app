import React from 'react';

const UserTicketStatus = () => {
  const tickets = [
    { id: 1, title: 'Cannot access dashboard', status: 'pending', statusText: 'Waiting for response', lastUpdate: '2 hours ago' },
    { id: 2, title: 'Need help with permissions', status: 'in-progress', statusText: 'Being reviewed', lastUpdate: '1 day ago' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#f59e0b',
      'in-progress': '#3b82f6',
      'resolved': '#10b981'
    };
    return colors[status] || '#6b7280';
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Ticket Status'),

    tickets.map((ticket) =>
      React.createElement('div', {
        key: ticket.id,
        style: {
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: 0
            }
          }, ticket.title),
          
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
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '4px'
          }
        }, ticket.statusText),
        
        React.createElement('p', {
          style: {
            fontSize: '12px',
            color: '#9ca3af'
          }
        }, `Last updated: ${ticket.lastUpdate}`)
      )
    )
  );
};

export default UserTicketStatus;