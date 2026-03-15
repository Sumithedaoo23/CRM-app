
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









import React from 'react';

const UserTickets = () => {
  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', { style: { fontSize: '24px', fontWeight: '700', color: '#111827' } }, 'My Tickets'),
    React.createElement('p', { style: { color: '#6b7280', marginTop: '16px' } }, 'No tickets found')
  );
};

export default UserTickets;