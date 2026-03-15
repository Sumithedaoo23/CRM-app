
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import dashboardService from '../../services/dashboardService';
// import userService from '../../services/userService';
// // import ticketService from '../../services/ticketService';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     counts: {
//       users: 0,
//       contacts: 0,
//       leads: 0,
//       tickets: 0,
//       roles: 0,
//       permissions: 0
//     },
//     ticketStats: {
//       pending: 0,
//       'in-progress': 0,
//       resolved: 0,
//       closed: 0,
//       rejected: 0
//     },
//     successRate: 0,
//     recentActivities: {
//       tickets: [],
//       leads: []
//     },
//     loading: true,
//     error: null
//   });

//   useEffect(() => {
//     fetchDashboardStats();
//   }, []);

//   const fetchDashboardStats = async () => {
//     try {
//       const response = await dashboardService.getAdminStats();
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

//   const handleExportUsers = async () => {
//     try {
//       await userService.exportUsersPDF();
//     } catch (error) {
//       alert('Failed to export users: ' + error.message);
//     }
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
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
//           color: '#111827',
//           margin: 0
//         }
//       }, 'Admin Dashboard'),
      
//       React.createElement('button', {
//         onClick: handleExportUsers,
//         style: {
//           padding: '10px 20px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, '📥 Export Users PDF')
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
//       // Total Users Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           cursor: 'pointer'
//         },
//         onClick: () => handleNavigate('/admin/users')
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#3b82f6',
//             marginBottom: '8px'
//           }
//         }, stats.counts.users),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Total Users')
//       ),

//       // Total Tickets Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           cursor: 'pointer'
//         },
//         onClick: () => handleNavigate('/admin/tickets')
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#f59e0b',
//             marginBottom: '8px'
//           }
//         }, stats.counts.tickets),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Total Tickets')
//       ),

//       // Success Rate Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#10b981',
//             marginBottom: '8px'
//           }
//         }, `${stats.successRate}%`),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Success Rate')
//       ),

//       // Contacts Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           cursor: 'pointer'
//         },
//         onClick: () => handleNavigate('/admin/contacts')
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#8b5cf6',
//             marginBottom: '8px'
//           }
//         }, stats.counts.contacts),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Contacts')
//       ),

//       // Leads Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           cursor: 'pointer'
//         },
//         onClick: () => handleNavigate('/admin/leads')
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#ef4444',
//             marginBottom: '8px'
//           }
//         }, stats.counts.leads),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Leads')
//       ),

//       // Roles Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           cursor: 'pointer'
//         },
//         onClick: () => handleNavigate('/admin/roles')
//       },
//         React.createElement('div', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             color: '#6b7280',
//             marginBottom: '8px'
//           }
//         }, stats.counts.roles),
        
//         React.createElement('div', {
//           style: {
//             fontSize: '14px',
//             color: '#6b7280',
//             fontWeight: '500'
//           }
//         }, 'Roles')
//       )
//     ),

//     // Ticket Status Section
//     React.createElement('div', {
//       style: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '24px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         marginBottom: '32px'
//       }
//     },
//       React.createElement('h2', {
//         style: {
//           fontSize: '18px',
//           fontWeight: '600',
//           color: '#111827',
//           marginBottom: '20px'
//         }
//       }, 'Ticket Status Overview'),
      
//       React.createElement('div', {
//         style: {
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//           gap: '16px'
//         }
//       },
//         Object.entries(stats.ticketStats).map(([status, count]) =>
//           React.createElement('div', {
//             key: status,
//             style: {
//               padding: '16px',
//               backgroundColor: '#f9fafb',
//               borderRadius: '8px',
//               textAlign: 'center'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 fontSize: '20px',
//                 fontWeight: '600',
//                 color: getStatusColor(status),
//                 marginBottom: '4px'
//               }
//             }, count),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280',
//                 textTransform: 'capitalize'
//               }
//             }, status)
//           )
//         )
//       )
//     ),

//     // Recent Activities
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '20px'
//       }
//     },
//       // Recent Tickets
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
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, 'Recent Tickets'),
        
//         stats.recentActivities.tickets.map((ticket, index) =>
//           React.createElement('div', {
//             key: index,
//             style: {
//               padding: '12px',
//               borderBottom: index < stats.recentActivities.tickets.length - 1 ? '1px solid #e5e7eb' : 'none',
//               cursor: 'pointer'
//             },
//             onClick: () => handleNavigate(`/admin/tickets/${ticket._id}`)
//           },
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '4px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontWeight: '600',
//                   color: '#111827'
//                 }
//               }, ticket.ticketNumber),
              
//               React.createElement('span', {
//                 style: {
//                   padding: '2px 8px',
//                   borderRadius: '12px',
//                   fontSize: '11px',
//                   fontWeight: '500',
//                   backgroundColor: getStatusColor(ticket.status) + '20',
//                   color: getStatusColor(ticket.status)
//                 }
//               }, ticket.status)
//             ),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#6b7280',
//                 margin: '4px 0'
//               }
//             }, ticket.title),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '11px',
//                 color: '#9ca3af'
//               }
//             }, new Date(ticket.createdAt).toLocaleDateString())
//           )
//         )
//       ),

//       // Quick Actions
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
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px'
//           }
//         }, 'Quick Actions'),
        
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gap: '12px'
//           }
//         },
//           React.createElement('button', {
//             onClick: () => handleNavigate('/admin/users/new'),
//             style: {
//               padding: '12px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               textAlign: 'left'
//             }
//           }, '➕ Add New User'),
          
//           React.createElement('button', {
//             onClick: () => handleNavigate('/admin/tickets'),
//             style: {
//               padding: '12px',
//               backgroundColor: '#f59e0b',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               textAlign: 'left'
//             }
//           }, '🎫 View All Tickets'),
          
//           React.createElement('button', {
//             onClick: handleExportUsers,
//             style: {
//               padding: '12px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               textAlign: 'left'
//             }
//           }, '📥 Export Users PDF'),
          
//           React.createElement('button', {
//             onClick: () => handleNavigate('/admin/contacts/new'),
//             style: {
//               padding: '12px',
//               backgroundColor: '#8b5cf6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               textAlign: 'left'
//             }
//           }, '📞 Add New Contact')
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

// export default AdminDashboard;

















































