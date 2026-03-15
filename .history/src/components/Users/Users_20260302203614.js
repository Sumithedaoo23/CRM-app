// import React, { useState } from 'react';

// const Users = () => {
//   const [users] = useState([
//     { id: 1, firstName: 'Admin', lastName: 'User', email: 'admin@flatlogic.com', disabled: false, appRole: 'Administrator' },
//     { id: 2, firstName: 'Client', lastName: 'User', email: 'client@example.com', disabled: false, appRole: 'User' },
//     { id: 3, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', disabled: false, appRole: 'User' },
//   ]);

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Users
//         </h1>
//       </div>

//       <div className="card">
//         <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
//           <div style={{ display: 'flex', gap: '8px' }}>
//             <button className="btn-primary">Add/Invite User</button>
//             <button style={{ padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
//               Filter
//             </button>
//             <button style={{ padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
//               Download CSV
//             </button>
//             <button style={{ padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
//               Upload CSV
//             </button>
//           </div>
//         </div>

//         <div style={{ overflowX: 'auto' }}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>FIRST NAME</th>
//                 <th>LAST NAME</th>
//                 <th>E-MAIL</th>
//                 <th>DISABLED</th>
//                 <th>APP ROLE</th>
//                 <th>ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.firstName}</td>
//                   <td>{user.lastName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.disabled ? '✓' : '✗'}</td>
//                   <td>{user.appRole}</td>
//                   <td>
//                     <button style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer' }}>
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         <div style={{ 
//           padding: '12px 16px', 
//           backgroundColor: '#f9fafb', 
//           fontSize: '12px', 
//           color: '#6b7280',
//           borderTop: '1px solid #e5e7eb'
//         }}>
//           1-{users.length} of {users.length}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;

















// import React, { useState } from 'react';
// import UserForm from './UserForm';
// import UserTable from './UserTable';
// import './UserManagement.css';

// const Users = () => {
//   const [users, setUsers] = useState([
//     { 
//       id: 1, 
//       firstName: 'Admin', 
//       lastName: 'User', 
//       email: 'admin@flatlogic.com', 
//       password: 'admin123',
//       disabled: false, 
//       appRole: 'Administrator',
//       customerName: 'Admin User',
//       mobileNumber: '+1234567890',
//       address: '123 Admin St, Admin City',
//       systemCapacity: '10',
//       daqLink: 'https://admin-daq.example.com',
//       invoice: {
//         totalFees: '1000',
//         pendingFees: '0',
//         paidFees: '1000',
//         paymentDate: '2024-01-15'
//       }
//     },
//     { 
//       id: 2, 
//       firstName: 'Client', 
//       lastName: 'User', 
//       email: 'client@example.com', 
//       password: 'client123',
//       disabled: false, 
//       appRole: 'User',
//       customerName: 'Client User',
//       mobileNumber: '+1987654321',
//       address: '456 Client Ave, Client City',
//       systemCapacity: '5.5',
//       daqLink: 'https://client-daq.example.com',
//       invoice: {
//         totalFees: '500',
//         pendingFees: '100',
//         paidFees: '400',
//         paymentDate: '2024-01-20'
//       }
//     },
//     { 
//       id: 3, 
//       firstName: 'John', 
//       lastName: 'Doe', 
//       email: 'john@doe.com', 
//       password: 'john123',
//       disabled: false, 
//       appRole: 'User',
//       customerName: 'John Doe',
//       mobileNumber: '+1555123456',
//       address: '789 Doe Rd, Doe Town',
//       systemCapacity: '7.2',
//       daqLink: 'https://john-daq.example.com',
//       invoice: {
//         totalFees: '720',
//         pendingFees: '720',
//         paidFees: '0',
//         paymentDate: ''
//       }
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

//   const handleAddUser = () => {
//     setEditingUser(null);
//     setShowForm(true);
//   };

//   const handleEditUser = (user) => {
//     setEditingUser(user);
//     setShowForm(true);
//   };

//   const handleSaveUser = (userData) => {
//     if (editingUser) {
//       setUsers(users.map(user => 
//         user.id === editingUser.id ? { ...userData, id: editingUser.id } : user
//       ));
//     } else {
//       const newUser = {
//         ...userData,
//         id: users.length + 1
//       };
//       setUsers([...users, newUser]);
//     }
//     setShowForm(false);
//     setEditingUser(null);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setEditingUser(null);
//   };

//   const exportToCSV = () => {
//     const headers = ['Customer Name', 'Mobile', 'Email', 'System Capacity', 'Status', 'App Role', 'Total Fees', 'Paid', 'Pending'];
//     const csvData = users.map(user => [
//       user.customerName,
//       user.mobileNumber,
//       user.email,
//       `${user.systemCapacity} kW`,
//       user.disabled ? 'Disabled' : 'Active',
//       user.appRole,
//       `$${user.invoice?.totalFees || '0'}`,
//       `$${user.invoice?.paidFees || '0'}`,
//       `$${user.invoice?.pendingFees || '0'}`
//     ]);

//     const csvContent = [headers.join(','), ...csvData.map(row => row.join(','))].join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'users.csv';
//     a.click();
//   };

//   // Calculate totals
//   const totalSystemCapacity = users.reduce((sum, user) => sum + (parseFloat(user.systemCapacity) || 0), 0);
//   const totalFees = users.reduce((sum, user) => sum + (parseFloat(user.invoice?.totalFees) || 0), 0);
//   const totalPaid = users.reduce((sum, user) => sum + (parseFloat(user.invoice?.paidFees) || 0), 0);
//   const totalPending = users.reduce((sum, user) => sum + (parseFloat(user.invoice?.pendingFees) || 0), 0);

//   return React.createElement('div', { className: 'users-container' },
//     // Header
//     React.createElement('div', { className: 'page-header' },
//       React.createElement('h1', null, 'Users Management'),
//       React.createElement('p', { className: 'page-subtitle' }, 'Manage customer profiles, system information, and billing details')
//     ),

//     // Action Bar
//     React.createElement('div', { className: 'action-bar' },
//       React.createElement('button', {
//         onClick: handleAddUser,
//         className: 'primary-btn add-user-btn'
//       }, '+ Add User'),
//       React.createElement('button', {
//         onClick: exportToCSV,
//         className: 'secondary-btn'
//       }, 'Download CSV'),
//       React.createElement('button', {
//         className: 'secondary-btn'
//       }, 'Upload CSV')
//     ),

//     // Main Table
//     React.createElement('div', { className: 'main-card' },
//       React.createElement(UserTable, {
//         users: users,
//         onEdit: handleEditUser
//       })
//     ),

//     // Summary Section
//     React.createElement('div', { className: 'summary-section' },
//       // System Capacity Card
//       React.createElement('div', { className: 'summary-card' },
//         React.createElement('h3', null, 'System Capacity Summary'),
//         React.createElement('div', { className: 'capacity-list' },
//           users.map(user => React.createElement('div', { key: user.id, className: 'capacity-item' },
//             React.createElement('span', null, user.customerName),
//             React.createElement('span', { className: 'capacity-value' }, `${user.systemCapacity} kW`)
//           ))
//         ),
//         React.createElement('div', { className: 'total-capacity' },
//           React.createElement('span', null, 'Total Capacity'),
//           React.createElement('span', { className: 'total-value' }, `${totalSystemCapacity.toFixed(2)} kW`)
//         )
//       ),

//       // Invoice Summary Card
//       React.createElement('div', { className: 'summary-card' },
//         React.createElement('h3', null, 'Invoice Summary'),
//         React.createElement('div', { className: 'invoice-summary' },
//           React.createElement('div', { className: 'invoice-item' },
//             React.createElement('span', null, 'Total Fees'),
//             React.createElement('span', null, `$${totalFees.toFixed(2)}`)
//           ),
//           React.createElement('div', { className: 'invoice-item paid' },
//             React.createElement('span', null, 'Paid'),
//             React.createElement('span', null, `$${totalPaid.toFixed(2)}`)
//           ),
//           React.createElement('div', { className: 'invoice-item pending' },
//             React.createElement('span', null, 'Pending'),
//             React.createElement('span', null, `$${totalPending.toFixed(2)}`)
//           )
//         )
//       ),

//       // Quick Actions Card
//       React.createElement('div', { className: 'summary-card' },
//         React.createElement('h3', null, 'Quick Actions'),
//         React.createElement('div', { className: 'quick-actions' },
//           React.createElement('button', {
//             onClick: handleAddUser,
//             className: 'primary-btn full-width'
//           }, 'Add New Customer'),
//           React.createElement('button', {
//             onClick: exportToCSV,
//             className: 'secondary-btn full-width'
//           }, 'Export All Data')
//         ),
//         React.createElement('div', { className: 'user-count' },
//           `Showing ${users.length} users`
//         )
//       )
//     ),

//     // Modal Form
//     showForm && React.createElement(UserForm, {
//       user: editingUser,
//       onClose: handleCloseForm,
//       onSave: handleSaveUser
//     })
//   );
// };

// export default Users;