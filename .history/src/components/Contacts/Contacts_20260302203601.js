// import React from 'react';

// const Contacts = () => {
//   const contacts = [
//     { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com' },
//     { id: 2, name: 'Rama', email: 'rama@gmail.com' },
//     { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name' },
//     { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org' },
//   ];

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Contacts
//         </h1>
//       </div>

//       <div className="card">
//         <div style={{ overflowX: 'auto' }}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>NAME</th>
//                 <th>EMAIL</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact) => (
//                 <tr key={contact.id}>
//                   <td>{contact.name}</td>
//                   <td>{contact.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;















// import React from 'react';

// const Contacts = () => {
//   const contacts = [
//     { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com' },
//     { id: 2, name: 'Rama', email: 'rama@gmail.com' },
//     { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name' },
//     { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org' },
//   ];

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('h1', {
//       style: {
//         fontSize: '28px',
//         fontWeight: '700',
//         color: '#111827',
//         marginBottom: '24px'
//       }
//     }, 'CRM Dashboard'),
    
//     React.createElement('h2', {
//       style: {
//         fontSize: '24px',
//         fontWeight: '600',
//         color: '#111827',
//         marginBottom: '20px'
//       }
//     }, 'Contacts'),
    
//     // Action Buttons
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         gap: '12px',
//         marginBottom: '24px'
//       }
//     },
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, 'New Item'),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, 'Filter'),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, 'Download CSV'),
      
//       React.createElement('button', {
//         style: {
//           padding: '8px 16px',
//           backgroundColor: 'white',
//           color: '#4b5563',
//           border: '1px solid #d1d5db',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, 'Upload CSV')
//     ),
    
//     // Table Headers
//     React.createElement('div', {
//       style: {
//         marginBottom: '12px',
//         fontSize: '14px',
//         fontWeight: '600',
//         color: '#6b7280'
//       }
//     }, 'Table Headers:'),
    
//     // Table
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'NAME'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'EMAIL')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           contacts.map((contact) =>
//             React.createElement('tr', {
//               key: contact.id,
//               style: {
//                 borderBottom: '1px solid #f3f4f6'
//               }
//             },
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#111827',
//                   fontWeight: '500'
//                 }
//               }, contact.name),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#2563eb'
//                 }
//               }, contact.email)
//             )
//           )
//         )
//       )
//     ),
    
//     // Logout Button
//     React.createElement('div', {
//       style: {
//         marginTop: '24px',
//         textAlign: 'right'
//       }
//     },
//       React.createElement('button', {
//         style: {
//           padding: '8px 24px',
//           backgroundColor: '#ef4444',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer'
//         }
//       }, 'Logout')
//     )
//   );
// };

// export default Contacts;










import React from 'react';

const Contacts = () => {
  const contacts = [
    { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com', phone: '+91 98765 43210', company: 'Tech Solutions' },
    { id: 2, name: 'Rama', email: 'rama@gmail.com', phone: '+91 87654 32109', company: 'Design Studio' },
    { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name', phone: '+1 234 567 8901', company: 'Research Labs' },
    { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org', phone: '+1 345 678 9012', company: 'Medical Institute' },
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
      }, 'Contacts'),
      
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
      }, '+ Add Contact')
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
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PHONE'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'COMPANY'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ACTIONS')
          )
        ),
        
        React.createElement('tbody', null,
          contacts.map((contact) =>
            React.createElement('tr', {
              key: contact.id,
              style: {
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, contact.name),
              React.createElement('td', { style: { padding: '16px 8px', color: '#3b82f6' } }, contact.email),
              React.createElement('td', { style: { padding: '16px 8px' } }, contact.phone),
              React.createElement('td', { style: { padding: '16px 8px' } }, contact.company),
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
    }, 'Showing 1-4 of 4 contacts')
  );
};

export default Contacts;