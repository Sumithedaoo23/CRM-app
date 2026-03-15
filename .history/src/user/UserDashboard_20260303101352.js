
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






// import React from 'react';

// const UserDashboard = () => {
//   return React.createElement('div', {
//     style: {
//       padding: '40px',
//       backgroundColor: '#10b981',
//       color: 'white',
//       borderRadius: '10px',
//       textAlign: 'center',
//       fontSize: '24px'
//     }
//   }, 'USER DASHBOARD IS WORKING! 🎉');
// };

// export default UserDashboard;










// user/UserDashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6',
      padding: '24px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: 'clamp(24px, 4vw, 32px)',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '8px'
        }
      }, 'User Dashboard'),
      
      React.createElement('p', {
        style: {
          fontSize: '16px',
          color: '#4b5563',
          marginBottom: '24px'
        }
      }, `Welcome back, ${user?.name || 'User'}!`),
      
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px'
          }
        }, 'Quick Actions'),
        
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }
        },
          React.createElement('button', {
            onClick: () => window.location.href = '/user/generate-ticket',
            style: {
              padding: '16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              textAlign: 'left'
            }
          }, '➕ Generate New Ticket'),
          
          React.createElement('button', {
            onClick: () => window.location.href = '/user/tickets',
            style: {
              padding: '16px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              textAlign: 'left'
            }
          }, '🎫 View My Tickets'),
          
          React.createElement('button', {
            onClick: () => window.location.href = '/user/profile',
            style: {
              padding: '16px',
              backgroundColor: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              textAlign: 'left'
            }
          }, '👤 Edit Profile')
        )
      )
    )
  );
};

export default UserDashboard;