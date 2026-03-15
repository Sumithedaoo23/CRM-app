// import React from 'react';

// const Permissions = () => {
//   const permissions = [
//     { id: 1, name: 'READ_USERS' },
//     { id: 2, name: 'UPDATE_USERS' },
//     { id: 3, name: 'DELETE_USERS' },
//     { id: 4, name: 'CREATE_CONTACTS' },
//   ];

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Permissions
//         </h1>
//       </div>

//       <div className="card">
//         <div style={{ overflowX: 'auto' }}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>NAME</th>
//               </tr>
//             </thead>
//             <tbody>
//               {permissions.map((permission) => (
//                 <tr key={permission.id}>
//                   <td>{permission.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Permissions;










// import React from 'react';

// const Permissions = () => {
//   const permissions = [
//     { id: 1, name: 'READ_USERS' },
//     { id: 2, name: 'UPDATE_USERS' },
//     { id: 3, name: 'DELETE_USERS' },
//     { id: 4, name: 'CREATE_CONTACTS' },
//   ];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Header with Admin User info
//     React.createElement('div', {
//       style: {
//         marginBottom: '24px',
//         paddingBottom: '16px',
//         borderBottom: '1px solid #e5e7eb'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '4px'
//         }
//       }, 'Admin User'),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '14px',
//           color: '#6b7280'
//         }
//       }, 'Administrator'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '24px',
//           marginTop: '16px'
//         }
//       },
//         ['Dashboard', 'Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             style: {
//               fontSize: '14px',
//               color: item === 'Permissions' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Permissions' ? '600' : '400',
//               cursor: 'pointer'
//             }
//           }, item)
//         )
//       )
//     ),

//     // Main Content
//     React.createElement('div', null,
//       React.createElement('h2', {
//         style: {
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '20px'
//         }
//       }, 'Permissions'),
      
//       // Action Buttons
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px',
//           marginBottom: '20px'
//         }
//       },
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'New Item'),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'Filter'),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'Download CSV'),
        
//         React.createElement('button', {
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#4b5563',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'Upload CSV')
//       ),
      
//       // Table Headers
//       React.createElement('div', {
//         style: {
//           marginBottom: '12px',
//           fontSize: '14px',
//           fontWeight: '600',
//           color: '#6b7280'
//         }
//       }, 'Table Headers:'),
      
//       // Table
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '20px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           overflowX: 'auto'
//         }
//       },
//         React.createElement('table', {
//           style: {
//             width: '100%',
//             borderCollapse: 'collapse'
//           }
//         },
//           React.createElement('thead', null,
//             React.createElement('tr', {
//               style: {
//                 borderBottom: '2px solid #e5e7eb'
//               }
//             },
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#6b7280'
//                 }
//               }, 'NAME'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#6b7280'
//                 }
//               }, 'READ_USERS'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#6b7280'
//                 }
//               }, 'UPDATE_USERS'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#6b7280'
//                 }
//               }, 'DELETE_USERS'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   color: '#6b7280'
//                 }
//               }, 'CREATE_CONTACTS')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             permissions.map((permission) =>
//               React.createElement('tr', {
//                 key: permission.id,
//                 style: {
//                   borderBottom: '1px solid #f3f4f6'
//                 }
//               },
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#111827'
//                   }
//                 }, permission.name),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, '—'),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, '—'),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, '—'),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '12px 8px',
//                     fontSize: '14px',
//                     color: '#6b7280'
//                   }
//                 }, '—')
//               )
//             )
//           )
//         )
//       ),
      
//       // Logout Button
//       React.createElement('div', {
//         style: {
//           marginTop: '24px',
//           textAlign: 'right'
//         }
//       },
//         React.createElement('button', {
//           style: {
//             padding: '8px 24px',
//             backgroundColor: '#ef4444',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer'
//           }
//         }, 'Logout')
//       )
//     )
//   );
// };

// export default Permissions;














import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Admin User', email: 'admin@crm.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@crm.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Jane Smith', email: 'jane@crm.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Bob Wilson', email: 'bob@crm.com', role: 'User', status: 'Active' },
  ];

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
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
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'Users'),
      
      React.createElement('button', {
        style: {
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }
      }, '+ Add User')
    ),

    React.createElement('div', {
      style: {
        overflowX: 'auto'
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
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'NAME'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'EMAIL'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ROLE'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'STATUS'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ACTIONS')
          )
        ),
        
        React.createElement('tbody', null,
          users.map((user) =>
            React.createElement('tr', {
              key: user.id,
              style: {
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, user.name),
              React.createElement('td', { style: { padding: '16px 8px', color: '#3b82f6' } }, user.email),
              React.createElement('td', { style: { padding: '16px 8px' } }, user.role),
              React.createElement('td', { style: { padding: '16px 8px' } },
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
                    color: user.status === 'Active' ? '#10b981' : '#ef4444'
                  }
                }, user.status)
              ),
              React.createElement('td', { style: { padding: '16px 8px' } },
                React.createElement('button', {
                  style: {
                    padding: '6px 12px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    marginRight: '8px'
                  }
                }, 'Edit'),
                
                React.createElement('button', {
                  style: {
                    padding: '6px 12px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }
                }, 'Delete')
              )
            )
          )
        )
      )
    ),

    React.createElement('div', {
      style: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#6b7280',
        fontSize: '14px'
      }
    }, 'Showing 1-4 of 4 users')
  );
};

export default Users;