
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import dashboardService from '../services/dashboardService';
// import ticketService from '../services/ticketService';

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalTickets: 0,
//     ticketStats: {
//       pending: 0,
//       'in-progress': 0,
//       resolved: 0,
//       closed: 0,
//       rejected: 0
//     },
//     recentTickets: [],
//     loading: true,
//     error: null
//   });

//   useEffect(() => {
//     fetchDashboardStats();
//   }, []);

//   const fetchDashboardStats = async () => {
//     try {
//       const response = await dashboardService.getUserStats();
//       setStats({
//         ...response.data,
//         loading: false,
//         error: null
//       });
//     } catch (error) {
//       setStats(prev => ({
//         ...prev,
//         loading: false,
//         error: error.message || 'Failed to load dashboard stats'
//       }));
//     }
//   };

//   const handleCreateTicket = () => {
//     navigate('/user/generate-ticket');
//   };

//   const handleViewTicket = (id) => {
//     navigate(`/user/ticket-status?id=${id}`);
//   };

//   if (stats.loading) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     }, 'Loading...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Welcome Header
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '8px'
//         }
//       }, 'My Dashboard'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#6b7280'
//         }
//       }, `Welcome back, ${user?.firstName || 'User'}!`)
//     ),

//     // Quick Actions
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('button', {
//         onClick: handleCreateTicket,
//         style: {
//           padding: '14px 28px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '16px',
//           fontWeight: '600',
//           cursor: 'pointer',
//           boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)'
//         }
//       }, '➕ Create New Ticket')
//     ),

//     // Stats Cards
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         gap: '20px',
//         marginBottom: '32px'
//       }
//     },
//       // Total Tickets
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Total Tickets'),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '36px',
//             fontWeight: '700',
//             color: '#3b82f6'
//           }
//         }, stats.totalTickets)
//       ),

//       // Pending Tickets
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Pending'),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '36px',
//             fontWeight: '700',
//             color: '#f59e0b'
//           }
//         }, stats.ticketStats.pending)
//       ),

//       // In Progress
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'In Progress'),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '36px',
//             fontWeight: '700',
//             color: '#3b82f6'
//           }
//         }, stats.ticketStats['in-progress'])
//       ),

//       // Resolved
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Resolved'),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '36px',
//             fontWeight: '700',
//             color: '#10b981'
//           }
//         }, stats.ticketStats.resolved)
//       )
//     ),

//     // Recent Tickets
//     stats.recentTickets.length > 0 && React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '18px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '20px'
//         }
//       }, 'Recent Tickets'),
      
//       stats.recentTickets.map((ticket, index) =>
//         React.createElement('div', {
//           key: index,
//           style: {
//             padding: '16px',
//             borderBottom: index < stats.recentTickets.length - 1 ? '1px solid #e5e7eb' : 'none',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onClick: () => handleViewTicket(ticket._id),
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '8px'
//             }
//           },
//             React.createElement('span', {
//               style: {
//                 fontWeight: '600',
//                 color: '#3b82f6'
//               }
//             }, ticket.ticketNumber),
            
//             React.createElement('span', {
//               style: {
//                 padding: '2px 8px',
//                 borderRadius: '12px',
//                 fontSize: '11px',
//                 fontWeight: '500',
//                 backgroundColor: getStatusColor(ticket.status) + '20',
//                 color: getStatusColor(ticket.status)
//               }
//             }, ticket.status)
//           ),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, ticket.title),
          
//           React.createElement('div', {
//             style: {
//               fontSize: '12px',
//               color: '#9ca3af'
//             }
//           }, new Date(ticket.createdAt).toLocaleDateString())
//         )
//       )
//     )
//   );
// };

// // Helper function for status colors
// const getStatusColor = (status) => {
//   const colors = {
//     'pending': '#f59e0b',
//     'in-progress': '#3b82f6',
//     'resolved': '#10b981',
//     'closed': '#6b7280',
//     'rejected': '#ef4444'
//   };
//   return colors[status] || '#6b7280';
// };

// export default UserDashboard;



















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../services/ticketService';

const UserDashboard = () => {
  const [ticketCount, setTicketCount] = useState(0);
  const [recentTickets, setRecentTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const response = await ticketService.getUserTickets();
      const tickets = response.data || [];
      setTicketCount(tickets.length);
      setRecentTickets(tickets.slice(0, 3)); // Show only 3 most recent
    } catch (error) {
      console.error('Failed to load dashboard:', error);
    }
  };

  return React.createElement('div', { style: { padding: '20px' } },
    React.createElement('h1', { style: { fontSize: '28px', marginBottom: '20px' } }, 'My Dashboard'),
    
    // Stats Card
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '30px',
        textAlign: 'center'
      }
    },
      React.createElement('h2', { style: { fontSize: '48px', color: '#3b82f6', margin: '0 0 10px 0' } }, ticketCount),
      React.createElement('p', { style: { fontSize: '18px', color: '#6b7280' } }, 'Total Tickets')
    ),
    
    // Quick Actions
    React.createElement('div', { style: { marginBottom: '30px' } },
      React.createElement('button', {
        onClick: () => navigate('/user/generate-ticket'),
        style: {
          padding: '15px 30px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }
      }, '+ Create New Ticket')
    ),
    
    // Recent Tickets
    recentTickets.length > 0 && React.createElement('div', null,
      React.createElement('h3', { style: { marginBottom: '15px' } }, 'Recent Tickets'),
      recentTickets.map(ticket =>
        React.createElement('div', {
          key: ticket._id,
          style: {
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('h4', { style: { margin: '0 0 5px 0' } }, ticket.title),
          React.createElement('p', { style: { color: '#6b7280', fontSize: '14px' } }, ticket.description.substring(0, 50) + '...')
        )
      )
    )
  );
};

export default UserDashboard;