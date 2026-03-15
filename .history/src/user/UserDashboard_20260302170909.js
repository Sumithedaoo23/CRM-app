
// import React from 'react';

// const UserDashboard = () => {
//   const stats = [
//     { label: 'Total Tickets', value: '0', color: '#3b82f6' },
//     { label: 'Resolved', value: '0', color: '#10b981' },
//     { label: 'Pending', value: '0', color: '#f59e0b' },
//     { label: 'In Progress', value: '0', color: '#8b5cf6' },
//   ];

//   const recentTickets = [];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Welcome Section
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
//       }, 'User Dashboard'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#6b7280'
//         }
//       }, 'Welcome to Your Dashboard')
//     ),

//     // Quick Stats Section
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '16px'
//         }
//       }, 'Quick Stats'),
      
//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '20px'
//         }
//       },
//         stats.map((stat, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               backgroundColor: '#ffffff',
//               borderRadius: '12px',
//               padding: '24px',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               borderLeft: `4px solid ${stat.color}`
//             }
//           },
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 color: '#6b7280',
//                 marginBottom: '8px',
//                 fontWeight: '500'
//               }
//             }, stat.label),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '36px',
//                 fontWeight: '700',
//                 color: '#111827'
//               }
//             }, stat.value)
//           )
//         )
//       )
//     ),

//     // Recent Tickets Section
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '16px'
//         }
//       }, 'Recent Tickets'),
      
//       recentTickets.length === 0 ? 
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             textAlign: 'center',
//             padding: '40px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         }, 'No tickets found. Create your first ticket!') :
//         React.createElement('div', null, 'Ticket list will appear here')
//     )
//   );
// };

// export default UserDashboard;










// import React from 'react';

// const UserDashboard = () => {
//   const stats = [
//     { label: 'Total Tickets', value: '0', color: '#3b82f6' },
//     { label: 'Resolved', value: '0', color: '#10b981' },
//     { label: 'Pending', value: '0', color: '#f59e0b' },
//     { label: 'In Progress', value: '0', color: '#8b5cf6' }
//   ];

//   const recentTickets = [];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Welcome Section
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
//       }, 'User Dashboard'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#6b7280'
//         }
//       }, 'Welcome to Your Dashboard')
//     ),

//     // Quick Stats Section
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '16px'
//         }
//       }, 'Quick Stats'),
      
//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '20px'
//         }
//       },
//         stats.map((stat, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               backgroundColor: '#ffffff',
//               borderRadius: '12px',
//               padding: '24px',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               borderLeft: `4px solid ${stat.color}`
//             }
//           },
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 color: '#6b7280',
//                 marginBottom: '8px',
//                 fontWeight: '500'
//               }
//             }, stat.label),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '36px',
//                 fontWeight: '700',
//                 color: '#111827'
//               }
//             }, stat.value)
//           )
//         )
//       )
//     ),

//     // Recent Tickets Section
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '16px'
//         }
//       }, 'Recent Tickets'),
      
//       recentTickets.length === 0 ? 
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             textAlign: 'center',
//             padding: '40px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         }, 'No tickets found. Create your first ticket!') :
//         React.createElement('div', null, 'Ticket list will appear here')
//     )
//   );
// };

// export default UserDashboard;







import React from 'react';

const UserDashboard = () => {
  return React.createElement('div', {
    style: {
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', {
      style: {
        color: '#10b981',
        fontSize: '24px',
        marginBottom: '10px'
      }
    }, 'User Dashboard'),
    
    React.createElement('p', null, 'Welcome to your dashboard!'),
    
    React.createElement('div', {
      style: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f3f4f6',
        borderRadius: '4px'
      }
    },
      React.createElement('p', null, '✅ Dashboard is working!'),
      React.createElement('p', null, 'Time: ', new Date().toLocaleTimeString())
    )
  );
};

export default UserDashboard;