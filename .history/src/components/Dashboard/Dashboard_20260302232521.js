

// import React from 'react';

// const Dashboard = () => {
//   // Get today's date
//   const today = new Date();
//   const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

//   const stats = [
//     { value: "1,254", label: "Total Users", change: "+12% this month" },
//     { value: "$48,560", label: "Revenue", change: "+8% this month" },
//     { value: "367", label: "New Leads", change: "+15% this month" },
//     { value: "89%", label: "Conversion Rate", change: "+2% this month" },
//   ];

//   const activities = [
//     { time: "10:30 AM", description: "New user registration: John Doe", by: "by admin" },
//     { time: "9:15 AM", description: "Monthly report generated", by: "by system" },
//     { time: "Yesterday", description: "Meeting with ABC Company", by: "by sales" },
//   ];

//   const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];

//   // Admin navigation items
//   const navItems = ['Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f8fafc',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Admin User Header
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px',
//         backgroundColor: '#ffffff',
//         borderRadius: '16px',
//         padding: '24px',
//         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '16px'
//         }
//       },
//         React.createElement('div', null,
//           React.createElement('h1', {
//             style: {
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#0f172a',
//               marginBottom: '4px'
//             }
//           }, 'Admin User'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '16px',
//               color: '#64748b'
//             }
//           }, 'Administrator')
//         ),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#0f172a',
//             backgroundColor: '#f1f5f9',
//             padding: '8px 16px',
//             borderRadius: '40px',
//             fontWeight: '500'
//           }
//         }, `Today: ${formattedDate}`)
//       ),
      
//       // Navigation tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '8px',
//           marginTop: '16px',
//           borderTop: '1px solid #e2e8f0',
//           paddingTop: '16px'
//         }
//       },
//         navItems.map((item) =>
//           React.createElement('span', {
//             key: item,
//             style: {
//               fontSize: '14px',
//               color: '#64748b',
//               padding: '8px 16px',
//               borderRadius: '40px',
//               cursor: 'pointer',
//               backgroundColor: item === 'Dashboard' ? '#3b82f6' : 'transparent',
//               color: item === 'Dashboard' ? '#ffffff' : '#64748b',
//               fontWeight: item === 'Dashboard' ? '600' : '400',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => {
//               if (item !== 'Dashboard') {
//                 e.currentTarget.style.backgroundColor = '#f1f5f9';
//               }
//             },
//             onMouseLeave: (e) => {
//               if (item !== 'Dashboard') {
//                 e.currentTarget.style.backgroundColor = 'transparent';
//               }
//             }
//           }, item)
//         )
//       )
//     ),

//     // Welcome Section
//     React.createElement('div', {
//       style: {
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#0f172a',
//           marginBottom: '8px'
//         }
//       }, 'Dashboard'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#475569'
//         }
//       }, 'Welcome back, Admin User')
//     ),

//     // Stats Grid - 4 cards in a row
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '24px',
//         marginBottom: '32px'
//       }
//     },
//       stats.map((stat, index) =>
//         React.createElement('div', {
//           key: index,
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '16px',
//             padding: '24px',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//             transition: 'transform 0.2s, box-shadow 0.2s'
//           },
//           onMouseEnter: (e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
//           },
//           onMouseLeave: (e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
//           }
//         },
//           React.createElement('div', { style: { textAlign: 'center' } },
//             React.createElement('p', {
//               style: {
//                 fontSize: '36px',
//                 fontWeight: '700',
//                 color: '#0f172a',
//                 marginBottom: '8px',
//                 lineHeight: '1.2'
//               }
//             }, stat.value),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '15px',
//                 color: '#64748b',
//                 marginBottom: '8px',
//                 fontWeight: '500'
//               }
//             }, stat.label),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 color: stat.change.includes('+') ? '#10b981' : '#64748b',
//                 fontWeight: '600',
//                 backgroundColor: stat.change.includes('+') ? '#d1fae5' : 'transparent',
//                 padding: stat.change.includes('+') ? '4px 12px' : '0',
//                 borderRadius: '20px',
//                 display: 'inline-block'
//               }
//             }, stat.change)
//           )
//         )
//       )
//     ),

//     // Monthly Revenue and Recent Activity Section
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: '2fr 1fr',
//         gap: '24px',
//         marginBottom: '32px'
//       }
//     },
//       // Monthly Revenue Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '24px',
//           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#0f172a'
//             }
//           }, 'Monthly Revenue'),
          
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#3b82f6',
//               backgroundColor: '#eff6ff',
//               padding: '6px 14px',
//               borderRadius: '40px',
//               cursor: 'pointer',
//               fontWeight: '500'
//             }
//           }, 'Last 6 Months ▼')
//         ),

//         // Chart Bars
//         React.createElement('div', {
//           style: {
//             height: '200px',
//             marginBottom: '16px',
//             display: 'flex',
//             alignItems: 'flex-end',
//             gap: '12px'
//           }
//         },
//           months.map((month, index) =>
//             React.createElement('div', {
//               key: index,
//               style: {
//                 flex: 1,
//                 height: `${80 + (index * 20)}px`,
//                 background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)',
//                 borderRadius: '8px 8px 0 0',
//                 transition: 'height 0.3s',
//                 boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2)'
//               }
//             })
//           )
//         ),

//         // Month Labels
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             borderTop: '1px solid #e2e8f0',
//             paddingTop: '16px'
//           }
//         },
//           months.map((month, index) =>
//             React.createElement('div', {
//               key: index,
//               style: {
//                 flex: 1,
//                 fontSize: '14px',
//                 color: '#64748b',
//                 textAlign: 'center',
//                 fontWeight: '500'
//               }
//             }, month)
//           )
//         )
//       ),

//       // Recent Activity Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '24px',
//           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#0f172a',
//             marginBottom: '20px'
//           }
//         }, 'Recent Activity'),
        
//         activities.map((activity, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               padding: '16px 0',
//               borderBottom: index < activities.length - 1 ? '1px solid #e2e8f0' : 'none'
//             }
//           },
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#3b82f6',
//                 marginBottom: '6px'
//               }
//             }, activity.time),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '15px',
//                 color: '#0f172a',
//                 fontWeight: '500',
//                 marginBottom: '4px'
//               }
//             }, activity.description),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#94a3b8'
//               }
//             }, activity.by)
//           )
//         )
//       )
//     ),

//     // Bottom Section with additional stats
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '24px'
//       }
//     },
//       [
//         { value: "24", label: "Pending Tasks", color: "#f59e0b" },
//         { value: "156", label: "New Messages", color: "#3b82f6" },
//         { value: "89%", label: "Server Uptime", color: "#10b981" },
//         { value: "42", label: "Support Tickets", color: "#ef4444" }
//       ].map((stat, index) =>
//         React.createElement('div', {
//           key: index,
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '16px',
//             padding: '20px',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//             borderLeft: `4px solid ${stat.color}`
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('p', {
//               style: {
//                 fontSize: '28px',
//                 fontWeight: '700',
//                 color: '#0f172a',
//                 marginBottom: '4px'
//               }
//             }, stat.value),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '14px',
//                 color: '#64748b',
//                 fontWeight: '500'
//               }
//             }, stat.label)
//           )
//         )
//       )
//     ),

//     // User Info Debug
//     React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         padding: '16px 20px',
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '12px',
//         color: '#475569',
//         fontSize: '15px',
//         fontWeight: '500',
//         border: '1px solid #e2e8f0'
//       },
//       onMouseEnter: (e) => {
//         e.currentTarget.style.backgroundColor = '#f8fafc';
//       },
//       onMouseLeave: (e) => {
//         e.currentTarget.style.backgroundColor = '#ffffff';
//       }
//     },
//       React.createElement('span', { 
//         style: { 
//           fontSize: '20px',
//           color: '#3b82f6'
//         } 
//       }, '▶'),
//       'User Info (Debug)'
//     )
//   );
// };

// export default Dashboard;














// import React from 'react';

// const Dashboard = () => {
//   // Get today's date
//   const today = new Date();
//   const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

//   const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"];

//   const activities = [
//     { time: "10:30 AM", description: "New user registration: John Doe by admin" },
//     { time: "9:15 AM", description: "Monthly report generated by system" },
//     { time: "Yesterday", description: "Meeting with ABC Company by sales" },
//     { time: "2 days ago", description: "New product launched by marketina" },
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

//     // Monthly Revenue Section
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         marginBottom: '24px'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '20px'
//         }
//       }, 'Monthly Revenue'),
      
//       // Stats Row
//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '20px',
//           marginBottom: '24px'
//         }
//       },
//         // Total Users
//         React.createElement('div', null,
//           React.createElement('p', {
//             style: {
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '1,254'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '4px'
//             }
//           }, 'Total Users'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#10b981',
//               fontWeight: '500'
//             }
//           }, '+12% this month')
//         ),
        
//         // Revenue (in Indian Rupees)
//         React.createElement('div', null,
//           React.createElement('p', {
//             style: {
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '₹48,560'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '4px'
//             }
//           }, 'Revenue'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#10b981',
//               fontWeight: '500'
//             }
//           }, '+8% this month')
//         ),
        
//         // New Leads
//         React.createElement('div', null,
//           React.createElement('p', {
//             style: {
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '367'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '4px'
//             }
//           }, 'New Leads'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#10b981',
//               fontWeight: '500'
//             }
//           }, '+15% this month')
//         ),
        
//         // Conversion Rate
//         React.createElement('div', null,
//           React.createElement('p', {
//             style: {
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '89%'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               marginBottom: '4px'
//             }
//           }, 'Conversion Rate'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#10b981',
//               fontWeight: '500'
//             }
//           }, '+2% this month')
//         )
//       ),

//       // Last 6 Months Label
//       React.createElement('p', {
//         style: {
//           fontSize: '14px',
//           fontWeight: '500',
//           color: '#6b7280',
//           marginBottom: '16px'
//         }
//       }, 'Last 6 Months'),

//       // Chart Bars
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           alignItems: 'flex-end',
//           gap: '12px',
//           height: '160px',
//           marginBottom: '8px'
//         }
//       },
//         months.map((month, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               flex: 1,
//               height: `${60 + (index * 15)}px`,
//               backgroundColor: '#3b82f6',
//               borderRadius: '4px 4px 0 0',
//               opacity: 0.7 + (index * 0.05)
//             }
//           })
//         )
//       ),

//       // Month Labels
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px'
//         }
//       },
//         months.map((month, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               flex: 1,
//               fontSize: '12px',
//               color: '#6b7280',
//               textAlign: 'center'
//             }
//           }, month)
//         )
//       )
//     ),

//     // Recent Activity and Metrics Row
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '24px',
//         marginBottom: '24px'
//       }
//     },
//       // Recent Activity
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px'
//           }
//         }, 'Recent Activity'),
        
//         activities.map((activity, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               marginBottom: index < activities.length - 1 ? '16px' : '0',
//               paddingBottom: index < activities.length - 1 ? '16px' : '0',
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
//                 color: '#4b5563',
//                 lineHeight: '1.5'
//               }
//             }, activity.description)
//           )
//         )
//       ),

//       // Metrics
//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '16px'
//         }
//       },
//         // Pending Tasks
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '24'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, 'Pending Tasks')
//         ),
        
//         // New Messages
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '156'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, 'New Messages')
//         ),
        
//         // Server Uptime
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '89%'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, 'Server Uptime')
//         ),
        
//         // Support Tickets
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, '42'),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, 'Support Tickets')
//         )
//       )
//     ),

//     // Bottom Stats Row (Additional metrics if needed)
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '20px'
//       }
//     },
//       [
//         { value: '24', label: 'Pending Tasks' },
//         { value: '156', label: 'New Messages' },
//         { value: '89%', label: 'Server Uptime' },
//         { value: '42', label: 'Support Tickets' }
//       ].map((stat, index) =>
//         React.createElement('div', {
//           key: index,
//           style: {
//             backgroundColor: '#ffffff',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('p', {
//             style: {
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '4px'
//             }
//           }, stat.value),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280'
//             }
//           }, stat.label)
//         )
//       )
//     )
//   );
// };

// export default Dashboard;















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
//           months.map((month, index) =>
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
//           months.map((month, index) =>
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
        
//         activities.map((activity, index) =>
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
//     ),

    
//   );
// };

// export default Dashboard;








// import React from 'react';

// const Dashboard = () => {
//   return React.createElement('div', {
//     style: {
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       padding: '32px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       textAlign: 'center'
//     }
//   },
//     React.createElement('h1', {
//       style: {
//         fontSize: '32px',
//         fontWeight: '700',
//         color: '#3b82f6',
//         marginBottom: '16px'
//       }
//     }, '✅ DASHBOARD IS WORKING!'),
    
//     React.createElement('p', {
//       style: {
//         fontSize: '18px',
//         color: '#4b5563',
//         marginBottom: '24px'
//       }
//     }, 'If you can see this, routing is working correctly.'),
    
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#f3f4f6',
//         padding: '20px',
//         borderRadius: '8px',
//         textAlign: 'left'
//       }
//     },
//       React.createElement('p', { style: { margin: '8px 0' } }, '📍 Current path: /dashboard'),
//       React.createElement('p', { style: { margin: '8px 0' } }, '🕒 Time: ' + new Date().toLocaleTimeString()),
//       React.createElement('p', { style: { margin: '8px 0' } }, '📅 Date: ' + new Date().toLocaleDateString())
//     )
//   );
// };

// export default Dashboard;










import React from 'react';

const Dashboard = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"];

  const activities = [
    { time: "10:30 AM", description: "New user registration: John Doe", by: "by admin" },
    { time: "9:15 AM", description: "Monthly report generated", by: "by system" },
    { time: "Yesterday", description: "Meeting with ABC Company", by: "by sales" },
    { time: "2 days ago", description: "New product launched", by: "by marketina" },
  ];

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
        marginBottom: '24px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '8px'
        }
      }, 'Dashboard'),
      
      React.createElement('p', {
        style: {
          fontSize: '16px',
          color: '#4b5563'
        }
      }, 'Welcome back, Admin User')
    ),

    // Stats Row - 4 cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      // Total Users
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '1,254'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Total Users'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#10b981',
            fontWeight: '500'
          }
        }, '+12% this month')
      ),

      // Revenue
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '$48,560'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Revenue'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#10b981',
            fontWeight: '500'
          }
        }, '+8% this month')
      ),

      // New Leads
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '367'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'New Leads'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#10b981',
            fontWeight: '500'
          }
        }, '+15% this month')
      ),

      // Conversion Rate
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '89%'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Conversion Rate'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#10b981',
            fontWeight: '500'
          }
        }, '+2% this month')
      )
    ),

    // Monthly Revenue and Recent Activity Row
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      // Monthly Revenue Card
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827'
            }
          }, 'Monthly Revenue'),
          
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              backgroundColor: '#f3f4f6',
              padding: '4px 12px',
              borderRadius: '20px',
              cursor: 'pointer'
            }
          }, 'Last 6 Months ▼')
        ),

        // Chart Bars
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
            height: '180px',
            marginBottom: '8px'
          }
        },
          ...months.map((month, index) =>
            React.createElement('div', {
              key: index,
              style: {
                flex: 1,
                height: `${50 + (index * 12)}px`,
                backgroundColor: '#3b82f6',
                borderRadius: '4px 4px 0 0'
              }
            })
          )
        ),

        // Month Labels
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '8px',
            marginTop: '8px'
          }
        },
          ...months.map((month, index) =>
            React.createElement('div', {
              key: index,
              style: {
                flex: 1,
                fontSize: '12px',
                color: '#6b7280',
                textAlign: 'center'
              }
            }, month)
          )
        )
      ),

      // Recent Activity Card
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px'
          }
        }, 'Recent Activity'),
        
        ...activities.map((activity, index) =>
          React.createElement('div', {
            key: index,
            style: {
              marginBottom: index < activities.length - 1 ? '16px' : 0,
              paddingBottom: index < activities.length - 1 ? '16px' : 0,
              borderBottom: index < activities.length - 1 ? '1px solid #e5e7eb' : 'none'
            }
          },
            React.createElement('p', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '4px'
              }
            }, activity.time),
            
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#111827',
                marginBottom: '2px'
              }
            }, activity.description),
            
            React.createElement('p', {
              style: {
                fontSize: '12px',
                color: '#9ca3af'
              }
            }, activity.by)
          )
        )
      )
    ),

    // Bottom Stats Row - 4 cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px'
      }
    },
      // Pending Tasks
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '24'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, 'Pending Tasks')
      ),

      // New Messages
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '156'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, 'New Messages')
      ),

      // Server Uptime
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '89%'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, 'Server Uptime')
      ),

      // Support Tickets
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '4px'
          }
        }, '42'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, 'Support Tickets')
      )
    )
  );
};

export default Dashboard;