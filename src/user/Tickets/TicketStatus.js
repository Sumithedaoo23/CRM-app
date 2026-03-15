

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const TicketStatus = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const response = await ticketService.getUserTickets();
      setTickets(response.data || []);
    } catch (error) {
      console.error('Failed to load tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this ticket?')) {
      try {
        await ticketService.deleteTicket(id);
        loadTickets(); // Reload list
      } catch (error) {
        alert('Failed to delete ticket');
      }
    }
  };

  if (loading) {
    return React.createElement('div', { style: { textAlign: 'center', padding: '50px' } }, 'Loading...');
  }

  return React.createElement('div', { style: { padding: '20px' } },
    React.createElement('h1', { style: { fontSize: '24px', marginBottom: '20px' } }, 'My Tickets'),
    
    tickets.length === 0
      ? React.createElement('div', { style: { textAlign: 'center', padding: '50px', backgroundColor: 'white', borderRadius: '8px' } },
          React.createElement('p', null, 'No tickets found'),
          React.createElement('button', {
            onClick: () => navigate('/user/generate-ticket'),
            style: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', marginTop: '10px', cursor: 'pointer' }
          }, 'Create Ticket')
        )
      : React.createElement('div', { style: { display: 'grid', gap: '15px' } },
          tickets.map(ticket => 
            React.createElement('div', {
              key: ticket._id,
              style: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
            },
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' } },
                React.createElement('h3', { style: { margin: 0, color: '#3b82f6' } }, ticket.title),
                React.createElement('span', {
                  style: {
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: ticket.status === 'pending' ? '#fef3c7' : '#e5e7eb',
                    color: ticket.status === 'pending' ? '#d97706' : '#6b7280'
                  }
                }, ticket.status)
              ),
              React.createElement('p', { style: { color: '#6b7280' } }, ticket.description),
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '12px', color: '#9ca3af' } },
                React.createElement('span', null, `Priority: ${ticket.priority}`),
                React.createElement('span', null, new Date(ticket.createdAt).toLocaleDateString()),
                React.createElement('button', {
                  onClick: () => handleDelete(ticket._id),
                  style: { color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }
                }, 'Delete')
              )
            )
          )
        )
  );
};

export default TicketStatus;