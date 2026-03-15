import React from 'react';

const AdminPermissions = () => {
  const permissions = [
    { id: 1, name: 'Administrator', readUsers: true, updateUsers: true, deleteUsers: true, createContacts: true, manageRoles: true, viewReports: true },
    { id: 2, name: 'Manager', readUsers: true, updateUsers: true, deleteUsers: false, createContacts: true, manageRoles: false, viewReports: true },
    { id: 3, name: 'Editor', readUsers: true, updateUsers: false, deleteUsers: false, createContacts: true, manageRoles: false, viewReports: false },
    { id: 4, name: 'User', readUsers: true, updateUsers: false, deleteUsers: false, createContacts: false, manageRoles: false, viewReports: false },
    { id: 5, name: 'Viewer', readUsers: false, updateUsers: false, deleteUsers: false, createContacts: false, manageRoles: false, viewReports: true },
  ];

  const permissionColumns = [
    { key: 'readUsers', label: 'READ USERS' },
    { key: 'updateUsers', label: 'UPDATE USERS' },
    { key: 'deleteUsers', label: 'DELETE USERS' },
    { key: 'createContacts', label: 'CREATE CONTACTS' },
    { key: 'manageRoles', label: 'MANAGE ROLES' },
    { key: 'viewReports', label: 'VIEW REPORTS' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6',
      padding: '94px 24px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Main Content Container
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }
    },
      // Header with CRM title and user menu
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'CRM Dashboard'),
        
        // User Menu
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#ffffff',
            padding: '8px 16px',
            borderRadius: '40px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('div', {
            style: {
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
              color: '#ffffff'
            }
          }, user?.name?.charAt(0) || 'A'),
          
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }
            }, user?.name || 'Admin User'),
            
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: '#6b7280'
              }
            }, user?.role || 'Administrator')
          ),
          
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              cursor: 'pointer'
            }
          }, '▼')
        )
      ),

      // Navigation Tabs
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '24px',
          marginBottom: '24px',
          paddingBottom: '8px',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap'
        }
      },
        ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Permissions' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Permissions' ? '600' : '400',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Permissions' ? '2px solid #2563eb' : 'none'
            }
          }, item)
        )
      ),

      // Title and Actions Row
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'Permissions Matrix'),
        
        // Action Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
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
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
          }, '+ New Permission'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Filter', 
            React.createElement('span', { style: { fontSize: '12px' } }, '▼')
          ),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Download CSV'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Upload CSV')
        )
      ),
      
      // Table
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflowX: 'auto',
          width: '100%'
        }
      },
        React.createElement('table', {
          style: {
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '1000px'
          }
        },
          React.createElement('thead', null,
            React.createElement('tr', {
              style: {
                borderBottom: '2px solid #e5e7eb'
              }
            },
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  position: 'sticky',
                  left: 0,
                  backgroundColor: 'white',
                  zIndex: 10
                }
              }, 'Role'),
              
              permissionColumns.map((col) =>
                React.createElement('th', {
                  key: col.key,
                  style: {
                    textAlign: 'center',
                    padding: '12px 8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }
                }, col.label)
              ),
              
              React.createElement('th', {
                style: {
                  textAlign: 'center',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  width: '100px'
                }
              }, 'Actions')
            )
          ),
          
          React.createElement('tbody', null,
            permissions.map((role) =>
              React.createElement('tr', {
                key: role.id,
                style: {
                  borderBottom: '1px solid #f3f4f6',
                  transition: 'background-color 0.2s'
                },
                onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
                onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
              },
                // Role Name (sticky column)
                React.createElement('td', {
                  style: {
                    padding: '12px 8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: 'white',
                    zIndex: 5
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }, role.name),
                
                // Permission columns
                permissionColumns.map((col) =>
                  React.createElement('td', {
                    key: col.key,
                    style: {
                      padding: '12px 8px',
                      fontSize: '14px',
                      textAlign: 'center'
                    }
                  },
                    role[col.key] 
                      ? React.createElement('span', {
                          style: {
                            color: '#10b981',
                            fontSize: '18px',
                            fontWeight: '600'
                          }
                        }, '✓')
                      : React.createElement('span', {
                          style: {
                            color: '#ef4444',
                            fontSize: '18px',
                            fontWeight: '600'
                          }
                        }, '✗')
                  )
                ),
                
                // Actions
                React.createElement('td', {
                  style: {
                    padding: '12px 8px',
                    textAlign: 'center'
                  }
                },
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center'
                    }
                  },
                    React.createElement('button', {
                      style: {
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        color: '#3b82f6',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
                    }, 'Edit'),
                    
                    React.createElement('button', {
                      style: {
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        color: '#ef4444',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
                    }, 'Delete')
                  )
                )
              )
            )
          )
        )
      ),
      
      // Footer with Pagination and Logout
      React.createElement('div', {
        style: {
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        // Pagination
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280'
            }
          }, 'Showing 1-5 of 5 permission sets'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '4px',
              marginLeft: '16px'
            }
          },
            React.createElement('button', {
              style: {
                padding: '4px 8px',
                backgroundColor: 'white',
                color: '#4b5563',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                opacity: '0.5'
              },
              disabled: true
            }, 'Previous'),
            
            React.createElement('button', {
              style: {
                padding: '4px 8px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '1'),
            
            React.createElement('button', {
              style: {
                padding: '4px 8px',
                backgroundColor: 'white',
                color: '#4b5563',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                opacity: '0.5'
              },
              disabled: true
            }, 'Next')
          )
        ),

        // Logout Button
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '8px 24px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
        }, 'Logout')
      )
    ),

    // Dark Mode Toggle
    React.createElement('div', {
      style: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
      }
    },
      React.createElement('button', {
        style: {
          padding: '8px 16px',
          backgroundColor: '#1f2937',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }, '🌙 Dark')
    )
  );
};

export default AdminPermissions;












// import React from 'react';

// const AdminPermissions = () => {
//   const permissions = [
//     { id: 1, name: 'Administrator', users: '3', permissions: 'Full Access' },
//     { id: 2, name: 'Manager', users: '5', permissions: 'Read, Write, Delete' },
//     { id: 3, name: 'User', users: '12', permissions: 'Read Only' },
//     { id: 4, name: 'Guest', users: '8', permissions: 'Limited Access' },
//   ];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
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
//       }, 'Permissions Management'),
      
//       React.createElement('button', {
//         style: {
//           padding: '10px 20px',
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, '+ New Role')
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
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ROLE NAME'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'USERS'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PERMISSIONS'),
//             React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ACTIONS')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           permissions.map((permission) =>
//             React.createElement('tr', {
//               key: permission.id,
//               style: {
//                 borderBottom: '1px solid #e5e7eb'
//               }
//             },
//               React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, permission.name),
//               React.createElement('td', { style: { padding: '16px 8px' } }, permission.users),
//               React.createElement('td', { style: { padding: '16px 8px' } }, permission.permissions),
//               React.createElement('td', { style: { padding: '16px 8px' } },
//                 React.createElement('button', {
//                   style: {
//                     padding: '6px 12px',
//                     backgroundColor: '#f3f4f6',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '13px',
//                     cursor: 'pointer',
//                     marginRight: '8px'
//                   }
//                 }, 'Edit'),
                
//                 React.createElement('button', {
//                   style: {
//                     padding: '6px 12px',
//                     backgroundColor: '#f3f4f6',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '13px',
//                     cursor: 'pointer'
//                   }
//                 }, 'Delete')
//               )
//             )
//           )
//         )
//       )
//     ),

//     React.createElement('div', {
//       style: {
//         marginTop: '20px',
//         display: 'flex',
//         justifyContent: 'flex-end',
//         color: '#6b7280',
//         fontSize: '14px'
//       }
//     }, 'Showing 1-4 of 4 roles')
//   );
// };

// export default AdminPermissions;