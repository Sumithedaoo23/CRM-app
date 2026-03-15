
// import React from 'react';

// const Dashboard = () => {
//   // Get today's date
//   const today = new Date();
//   const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

//   const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"];

//   const activities = [
//     { time: "10:30 AM", description: "New user registration: John Doe", by: "by admin" },
//     { time: "9:15 AM", description: "Monthly report generated", by: "by system" },
//     { time: "Yesterday", description: "Meeting with ABC Company", by: "by sales" },
//     { time: "2 days ago", description: "New product launched", by: "by marketina" },
//   ];

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
//         marginBottom: '24px'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '8px'
//         }
//       }, 'Dashboard'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#4b5563'
//         }
//       }, 'Welcome back, Admin User')
//     ),

//     // Stats Row - 4 cards
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '20px',
//         marginBottom: '32px'
//       }
//     },
//       // Total Users
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '1,254'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Total Users'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#10b981',
//             fontWeight: '500'
//           }
//         }, '+12% this month')
//       ),

//       // Revenue
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '$48,560'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Revenue'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#10b981',
//             fontWeight: '500'
//           }
//         }, '+8% this month')
//       ),

//       // New Leads
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '367'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'New Leads'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#10b981',
//             fontWeight: '500'
//           }
//         }, '+15% this month')
//       ),

//       // Conversion Rate
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '89%'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, 'Conversion Rate'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#10b981',
//             fontWeight: '500'
//           }
//         }, '+2% this month')
//       )
//     ),

//     // Monthly Revenue and Recent Activity Row
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: '2fr 1fr',
//         gap: '20px',
//         marginBottom: '32px'
//       }
//     },
//       // Monthly Revenue Card
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
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#111827'
//             }
//           }, 'Monthly Revenue'),
          
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               backgroundColor: '#f3f4f6',
//               padding: '4px 12px',
//               borderRadius: '20px',
//               cursor: 'pointer'
//             }
//           }, 'Last 6 Months ▼')
//         ),

//         // Chart Bars
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'flex-end',
//             gap: '8px',
//             height: '180px',
//             marginBottom: '8px'
//           }
//         },
//           ...months.map((month, index) =>
//             React.createElement('div', {
//               key: index,
//               style: {
//                 flex: 1,
//                 height: `${50 + (index * 12)}px`,
//                 backgroundColor: '#3b82f6',
//                 borderRadius: '4px 4px 0 0'
//               }
//             })
//           )
//         ),

//         // Month Labels
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '8px',
//             marginTop: '8px'
//           }
//         },
//           ...months.map((month, index) =>
//             React.createElement('div', {
//               key: index,
//               style: {
//                 flex: 1,
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 textAlign: 'center'
//               }
//             }, month)
//           )
//         )
//       ),

//       // Recent Activity Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px'
//           }
//         }, 'Recent Activity'),
        
//         ...activities.map((activity, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               marginBottom: index < activities.length - 1 ? '16px' : 0,
//               paddingBottom: index < activities.length - 1 ? '16px' : 0,
//               borderBottom: index < activities.length - 1 ? '1px solid #e5e7eb' : 'none'
//             }
//           },
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#3b82f6',
//                 marginBottom: '4px'
//               }
//             }, activity.time),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 color: '#111827',
//                 marginBottom: '2px'
//               }
//             }, activity.description),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '12px',
//                 color: '#9ca3af'
//               }
//             }, activity.by)
//           )
//         )
//       )
//     ),

//     // Bottom Stats Row - 4 cards
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '20px'
//       }
//     },
//       // Pending Tasks
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '24'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'Pending Tasks')
//       ),

//       // New Messages
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '156'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'New Messages')
//       ),

//       // Server Uptime
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '89%'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'Server Uptime')
//       ),

//       // Support Tickets
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '4px'
//           }
//         }, '42'),
        
//         React.createElement('p', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280'
//           }
//         }, 'Support Tickets')
//       )
//     )
//   );
// };

// export default Dashboard;







// // components/Dashboard/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '94px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: 'clamp(24px, 4vw, 32px)',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '24px'
//         }
//       }, 'Admin Dashboard'),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('p', {
//           style: {
//             fontSize: '16px',
//             color: '#4b5563'
//           }
//         }, 'Welcome to the Admin Dashboard!'),
        
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '20px',
//             marginTop: '24px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               backgroundColor: '#f9fafb',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #e5e7eb'
//             }
//           },
//             React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Total Users'),
//             React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#3b82f6' } }, '1,254')
//           ),
          
//           React.createElement('div', {
//             style: {
//               backgroundColor: '#f9fafb',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #e5e7eb'
//             }
//           },
//             React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Revenue'),
//             React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#10b981' } }, '$48,560')
//           ),
          
//           React.createElement('div', {
//             style: {
//               backgroundColor: '#f9fafb',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #e5e7eb'
//             }
//           },
//             React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Open Tickets'),
//             React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#f59e0b' } }, '24')
//           ),
          
//           React.createElement('div', {
//             style: {
//               backgroundColor: '#f9fafb',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #e5e7eb'
//             }
//           },
//             React.createElement('h3', { style: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' } }, 'Active Leads'),
//             React.createElement('p', { style: { fontSize: '32px', fontWeight: '700', color: '#8b5cf6' } }, '367')
//           )
//         )
//       )
//     )
//   );
// };

// export default Dashboard;