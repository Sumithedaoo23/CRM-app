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