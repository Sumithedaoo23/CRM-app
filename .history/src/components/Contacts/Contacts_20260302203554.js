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