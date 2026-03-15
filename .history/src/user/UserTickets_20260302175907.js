// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserTickets = () => {
//   const navigate = useNavigate();
//   const [tickets, setTickets] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'resolved': return '#10b981';
//       case 'pending': return '#f59e0b';
//       case 'in-progress': return '#3b82f6';
//       default: return '#6b7280';
//     }
//   };

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header with actions
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
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827'
//         }
//       }, 'My Tickets'),
      
//       React.createElement('button', {
//         onClick: () => navigate('/user/generate-ticket'),
//         style: {
//           padding: '12px 24px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '15px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'all 0.2s'
//         },
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
//       }, '+ Generate New Ticket')
//     ),

//     // Filter tabs
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         gap: '12px',
//         marginBottom: '24px',
//         backgroundColor: '#ffffff',
//         padding: '8px',
//         borderRadius: '40px',
//         maxWidth: '400px'
//       }
//     },
//       ['all', 'pending', 'in-progress', 'resolved'].map((status) =>
//         React.createElement('button', {
//           key: status,
//           onClick: () => setFilter(status),
//           style: {
//             flex: 1,
//             padding: '8px 16px',
//             backgroundColor: filter === status ? '#10b981' : 'transparent',
//             color: filter === status ? 'white' : '#4b5563',
//             border: 'none',
//             borderRadius: '30px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             textTransform: 'capitalize',
//             transition: 'all 0.2s'
//           }
//         }, status === 'in-progress' ? 'In Progress' : status)
//       )
//     ),

//     // Tickets list
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       tickets.length === 0 ?
//         React.createElement('div', {
//           style: {
//             textAlign: 'center',
//             padding: '60px 20px'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '48px',
//               marginBottom: '16px'
//             }
//           }, '🎫'),
          
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#111827',
//               marginBottom: '8px'
//             }
//           }, 'No tickets yet'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '24px'
//             }
//           }, 'Create your first ticket to get started'),
          
//           React.createElement('button', {
//             onClick: () => navigate('/user/generate-ticket'),
//             style: {
//               padding: '12px 24px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Generate Ticket')
//         ) :
//         React.createElement('div', null, 'Ticket list will appear here')
//     )
//   );
// };

// export default UserTickets;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserTickets = () => {
//   const navigate = useNavigate();
//   const [tickets] = useState([]); // Fixed: removed unused setTickets
//   const [filter, setFilter] = useState('all');

//   // Fixed: added this function even though not used, to remove warning
//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'resolved': return '#10b981';
//       case 'pending': return '#f59e0b';
//       case 'in-progress': return '#3b82f6';
//       default: return '#6b7280';
//     }
//   };

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header
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
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827'
//         }
//       }, 'My Tickets'),
      
//       React.createElement('button', {
//         onClick: () => navigate('/user/generate-ticket'),
//         style: {
//           padding: '12px 24px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '15px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, '+ Generate New Ticket')
//     ),

//     // Filter tabs
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         gap: '12px',
//         marginBottom: '24px',
//         backgroundColor: '#ffffff',
//         padding: '8px',
//         borderRadius: '40px',
//         maxWidth: '400px'
//       }
//     },
//       ['all', 'pending', 'in-progress', 'resolved'].map((status) =>
//         React.createElement('button', {
//           key: status,
//           onClick: () => setFilter(status),
//           style: {
//             flex: 1,
//             padding: '8px 16px',
//             backgroundColor: filter === status ? '#10b981' : 'transparent',
//             color: filter === status ? 'white' : '#4b5563',
//             border: 'none',
//             borderRadius: '30px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             textTransform: 'capitalize'
//           }
//         }, status === 'in-progress' ? 'In Progress' : status)
//       )
//     ),

//     // Tickets list
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       tickets.length === 0 ?
//         React.createElement('div', {
//           style: {
//             textAlign: 'center',
//             padding: '60px 20px'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '48px',
//               marginBottom: '16px'
//             }
//           }, '🎫'),
          
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#111827',
//               marginBottom: '8px'
//             }
//           }, 'No tickets yet'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '24px'
//             }
//           }, 'Create your first ticket to get started'),
          
//           React.createElement('button', {
//             onClick: () => navigate('/user/generate-ticket'),
//             style: {
//               padding: '12px 24px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Generate Ticket')
//         ) :
//         React.createElement('div', null, 'Ticket list will appear here')
//     )
//   );
// };

// export default UserTickets;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserTickets = () => {
  const navigate = useNavigate();
  const [tickets] = useState([]);
  const [filter, setFilter] = useState('all');

  // Function is now used in the component
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
          color: '#111827'
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
          fontSize: '15px',
          fontWeight: '500',
          cursor: 'pointer'
        }
      }, '+ Generate New Ticket')
    ),

    // Filter tabs
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        backgroundColor: '#ffffff',
        padding: '8px',
        borderRadius: '40px',
        maxWidth: '400px'
      }
    },
      ['all', 'pending', 'in-progress', 'resolved'].map((status) =>
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
            textTransform: 'capitalize'
          }
        }, status === 'in-progress' ? 'In Progress' : status)
      )
    ),

    // Tickets list with status colors using the function
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      tickets.length === 0 ?
        React.createElement('div', {
          style: {
            textAlign: 'center',
            padding: '60px 20px'
          }
        },
          React.createElement('p', {
            style: {
              fontSize: '48px',
              marginBottom: '16px'
            }
          }, '🎫'),
          
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '8px'
            }
          }, 'No tickets yet'),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '24px'
            }
          }, 'Create your first ticket to get started'),
          
          React.createElement('button', {
            onClick: () => navigate('/user/generate-ticket'),
            style: {
              padding: '12px 24px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Generate Ticket')
        ) :
        React.createElement('div', null,
          tickets.map((ticket) => 
            React.createElement('div', {
              key: ticket.id,
              style: {
                padding: '16px',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }
            },
              React.createElement('div', null,
                React.createElement('h4', { style: { margin: '0 0 8px 0' } }, ticket.title),
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    backgroundColor: getStatusColor(ticket.status),
                    color: 'white',
                    fontSize: '12px'
                  }
                }, ticket.status)
              )
            )
          )
        )
    )
  );
};

export default UserTickets;