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










