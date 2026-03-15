

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
















import React from 'react';

const Dashboard = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  const users = [
    { 
      name: 'Admin User', 
      mobile: '+1234567890', 
      email: 'admin@flatlogic.com', 
      capacity: '10kW', 
      disabled: false, 
      role: 'Administrator' 
    },
    { 
      name: 'Client User', 
      mobile: '+1987654321', 
      email: 'client@example.com', 
      capacity: '5.5kW', 
      disabled: false, 
      role: 'User' 
    },
    { 
      name: 'John Doe', 
      mobile: '+1555123456', 
      email: 'john@doe.com', 
      capacity: '7.2kW', 
      disabled: false, 
      role: 'User' 
    },
  ];

  const quickActions = [
    { label: 'Add New Customer', icon: '➕' },
    { label: 'Export All Data', icon: '📤' },
  ];

  const navItems = ['Dashboard', 'Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'];

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header with Admin User info
    React.createElement('div', {
      style: {
        marginBottom: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '20px 24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }
      },
        React.createElement('div', null,
          React.createElement('h1', {
            style: {
              fontSize: '24px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '4px'
            }
          }, 'Admin User'),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280'
            }
          }, 'Administrator')
        ),
        
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            backgroundColor: '#f3f4f6',
            padding: '6px 12px',
            borderRadius: '6px'
          }
        }, `Today: ${formattedDate}`)
      ),
      
      // Navigation tabs
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '8px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '16px',
          flexWrap: 'wrap'
        }
      },
        navItems.map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Users' ? '#2563eb' : '#4b5563',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: item === 'Users' ? '#eff6ff' : 'transparent',
              fontWeight: item === 'Users' ? '500' : '400'
            },
            onMouseEnter: (e) => {
              if (item !== 'Users') {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            },
            onMouseLeave: (e) => {
              if (item !== 'Users') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }
          }, item)
        )
      )
    ),

    // Users Management Section
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '24px'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }
      },
        React.createElement('div', null,
          React.createElement('h2', {
            style: {
              fontSize: '20px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '4px'
            }
          }, 'Users Management'),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280'
            }
          }, 'Manage customer profiles, system information, and billing details')
        ),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px'
          }
        },
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, '+ Add User'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, 'Download CSV'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, 'Upload CSV')
        )
      ),

      // Users Table
      React.createElement('div', {
        style: {
          overflowX: 'auto',
          marginTop: '20px'
        }
      },
        React.createElement('table', {
          style: {
            width: '100%',
            borderCollapse: 'collapse'
          }
        },
          React.createElement('thead', null,
            React.createElement('tr', {
              style: {
                borderBottom: '2px solid #e5e7eb'
              }
            },
              ['CUSTOMER NAME', 'MOBILE NUMBER', 'E-MAIL', 'SYSTEM CAPACITY', 'DISABLED', 'APP ROLE', 'ACTIONS'].map((header) =>
                React.createElement('th', {
                  key: header,
                  style: {
                    textAlign: 'left',
                    padding: '12px 8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#6b7280'
                  }
                }, header)
              )
            )
          ),
          
          React.createElement('tbody', null,
            users.map((user, index) =>
              React.createElement('tr', {
                key: index,
                style: {
                  borderBottom: '1px solid #f3f4f6'
                }
              },
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#111827',
                    fontWeight: '500'
                  }
                }, user.name),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#4b5563'
                  }
                }, user.mobile),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#2563eb'
                  }
                }, user.email),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#4b5563'
                  }
                }, user.capacity),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#4b5563'
                  }
                }, '—'),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#4b5563'
                  }
                }, user.role),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px'
                  }
                },
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      gap: '8px'
                    }
                  },
                    React.createElement('button', {
                      style: {
                        padding: '4px 12px',
                        backgroundColor: '#f3f4f6',
                        color: '#4b5563',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      }
                    }, 'Edit'),
                    
                    React.createElement('button', {
                      style: {
                        padding: '4px 12px',
                        backgroundColor: '#f3f4f6',
                        color: '#4b5563',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      }
                    }, 'View DAQ')
                  )
                )
              )
            )
          )
        )
      ),

      // Pagination
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '16px',
          fontSize: '14px',
          color: '#6b7280'
        }
      }, '1-3 of 3')
    ),

    // Bottom Section - System Summary and Quick Actions
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }
    },
      // System Capacity Summary
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px'
          }
        }, 'System Capacity Summary'),
        
        ['Admin User', 'Client User'].map((user, index) =>
          React.createElement('div', {
            key: index,
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: index === 0 ? '1px solid #f3f4f6' : 'none'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '14px',
                color: '#4b5563'
              }
            }, user),
            
            React.createElement('span', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }
            }, user === 'Admin User' ? '10kW' : '5.5kW')
          )
        )
      ),

      // Invoice Summary and Quick Actions
      React.createElement('div', null,
        // Invoice Summary
        React.createElement('div', {
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '16px'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '16px'
            }
          }, 'Invoice Summary'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '14px',
                color: '#4b5563'
              }
            }, 'Total Fees'),
            
            React.createElement('span', {
              style: {
                fontSize: '20px',
                fontWeight: '700',
                color: '#111827'
              }
            }, '$2220.00')
          )
        ),

        // Quick Actions
        React.createElement('div', {
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('h3', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '16px'
            }
          }, 'Quick Actions'),
          
          quickActions.map((action, index) =>
            React.createElement('button', {
              key: index,
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px',
                marginBottom: index === 0 ? '8px' : '0',
                backgroundColor: '#f9fafb',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#4b5563',
                cursor: 'pointer',
                textAlign: 'left'
              },
              onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
              onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f9fafb'
            },
              React.createElement('span', { style: { fontSize: '18px' } }, action.icon),
              action.label
            )
          )
        )
      )
    )
  );
};

export default Dashboard;