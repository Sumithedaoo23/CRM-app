// import React from 'react';

// const Roles = () => {
//   const roles = [
//     { id: 1, name: 'Administrator', permissions: ['All'] },
//     { id: 2, name: 'User', permissions: ['Read Only'] },
//     { id: 3, name: 'Manager', permissions: ['Read', 'Write'] },
//   ];

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Roles
//         </h1>
//       </div>

//       <div className="card">
//         <div style={{ overflowX: 'auto' }}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>NAME</th>
//                 <th>PERMISSIONS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {roles.map((role) => (
//                 <tr key={role.id}>
//                   <td>{role.name}</td>
//                   <td>{role.permissions.join(', ')}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roles;












import React from 'react';

const Roles = () => {
  const roles = [
    { id: 1, name: 'Administrator', permissions: 'All' },
    { id: 2, name: 'User', permissions: 'Read Only' },
    { id: 3, name: 'Manager', permissions: 'Read, Write' },
  ];

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
        paddingBottom: '16px',
        borderBottom: '1px solid #e5e7eb'
      }
    },
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
      }, 'Administrator'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '24px',
          marginTop: '16px'
        }
      },
        ['Dashboard', 'Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Roles' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Roles' ? '600' : '400',
              cursor: 'pointer'
            }
          }, item)
        )
      )
    ),

    // Main Content
    React.createElement('div', null,
      React.createElement('h2', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '20px'
        }
      }, 'Roles'),
      
      // Action Buttons
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          marginBottom: '20px'
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
        }, 'New Item'),
        
        React.createElement('button', {
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#4b5563',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Filter'),
        
        React.createElement('button', {
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#4b5563',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
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
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Upload CSV')
      ),
      
      // Table Headers
      React.createElement('div', {
        style: {
          marginBottom: '12px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#6b7280'
        }
      }, 'Table Headers:'),
      
      // Table
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6b7280'
                }
              }, 'NAME'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6b7280'
                }
              }, 'PERMISSIONS')
            )
          ),
          
          React.createElement('tbody', null,
            roles.map((role) =>
              React.createElement('tr', {
                key: role.id,
                style: {
                  borderBottom: '1px solid #f3f4f6'
                }
              },
                React.createElement('td', {
                  style: {
                    padding: '12px 8px',
                    fontSize: '14px',
                    color: '#111827'
                  }
                }, role.name),
                
                React.createElement('td', {
                  style: {
                    padding: '12px 8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }
                }, role.permissions)
              )
            )
          )
        )
      ),
      
      // Logout Button
      React.createElement('div', {
        style: {
          marginTop: '24px',
          textAlign: 'right'
        }
      },
        React.createElement('button', {
          style: {
            padding: '8px 24px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Logout')
      )
    )
  );
};

export default Roles;