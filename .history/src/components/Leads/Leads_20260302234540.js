// import React from 'react';

// const Leads = () => {
//   const leads = [
//     { id: 1, status: 'created', date: '6/9/2024, 4:08:00 PM', contactId: '09f1134c-8846-4eb...', user: 'Admin', notes: 'Development of w...' },
//     { id: 2, status: 'contacted', date: '1/2/2024, 5:30:00 PM', contactId: '', user: '', notes: 'To answer power...' },
//   ];

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Leads
//         </h1>
//       </div>

//       <div className="card">
//         <div style={{ overflowX: 'auto' }}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>STATUS</th>
//                 <th>DATE</th>
//                 <th>CONTACTS</th>
//                 <th>USERS</th>
//                 <th>NOTES</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td>{lead.status}</td>
//                   <td>{lead.date}</td>
//                   <td>{lead.contactId}</td>
//                   <td>{lead.user}</td>
//                   <td>{lead.notes}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leads;












// import React from 'react';

// const Leads = () => {
//   const leads = [
//     { 
//       id: 1, 
//       status: 'Created', 
//       date: '6/9/2024, 4:08:00 PM', 
//       contact: '09f1134c-8846-4eb...', 
//       user: 'Admin', 
//       notes: 'Development of w...' 
//     },
//     { 
//       id: 2, 
//       status: 'Contacted', 
//       date: '1/2/2024, 5:30:00 PM', 
//       contact: '', 
//       user: '', 
//       notes: 'To answer power...' 
//     },
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
//     }, 'Leads'),
    
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
//             }, 'STATUS'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'DATE'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'CONTACTS'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'USERS'),
            
//             React.createElement('th', {
//               style: {
//                 textAlign: 'left',
//                 padding: '12px 8px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#6b7280'
//               }
//             }, 'NOTES')
//           )
//         ),
        
//         React.createElement('tbody', null,
//           leads.map((lead) =>
//             React.createElement('tr', {
//               key: lead.id,
//               style: {
//                 borderBottom: '1px solid #f3f4f6'
//               }
//             },
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#111827',
//                   textTransform: 'capitalize'
//                 }
//               }, lead.status),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.date),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.contact),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.user),
              
//               React.createElement('td', {
//                 style: {
//                   padding: '12px 8px',
//                   fontSize: '14px',
//                   color: '#6b7280'
//                 }
//               }, lead.notes)
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

// export default Leads;








import React from 'react';

const Leads = () => {
  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }
  },
    React.createElement('h1', { style: { fontSize: '24px', color: '#111827' } }, 'Leads Page'),
    React.createElement('p', { style: { color: '#6b7280', marginTop: '16px' } }, 'Coming soon...')
  );
};

export default Leads;