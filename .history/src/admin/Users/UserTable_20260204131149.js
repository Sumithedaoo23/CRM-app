// import React from 'react';

// const UserTable = ({ users, onEdit }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//         <thead className="bg-gray-50 dark:bg-gray-700">
//           <tr>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               FIRST NAME
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               LAST NAME
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               E-MAIL
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               DISABLED
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               APP ROLE
//             </th>
//             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//               ACTIONS
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//           {users.map((user) => (
//             <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                 {user.firstName}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                 {user.lastName}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                 {user.email}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                 {user.disabled ? '✓' : '✗'}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                 {user.appRole}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
//                 <button
//                   onClick={() => onEdit(user)}
//                   className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400">
//         1-{users.length} of {users.length}
//       </div>
//     </div>
//   );
// };

// export default UserTable;




















import React from 'react';
import './UserManagement.css';

const UserTable = ({ users, onEdit }) => {
  return React.createElement('div', { className: 'table-container' },
    React.createElement('table', { className: 'users-table' },
      React.createElement('thead', null,
        React.createElement('tr', null,
          React.createElement('th', null, 'CUSTOMER NAME'),
          React.createElement('th', null, 'MOBILE NUMBER'),
          React.createElement('th', null, 'E-MAIL'),
          React.createElement('th', null, 'SYSTEM CAPACITY'),
          React.createElement('th', null, 'DISABLED'),
          React.createElement('th', null, 'APP ROLE'),
          React.createElement('th', null, 'ACTIONS')
        )
      ),
      React.createElement('tbody', null,
        users.map((user) => React.createElement('tr', { key: user.id },
          React.createElement('td', { className: 'customer-name' }, user.customerName || `${user.firstName} ${user.lastName}`),
          React.createElement('td', null, user.mobileNumber || 'N/A'),
          React.createElement('td', { className: 'email-cell' }, user.email),
          React.createElement('td', { className: 'capacity-cell' }, user.systemCapacity ? `${user.systemCapacity} kW` : 'N/A'),
          React.createElement('td', null, user.disabled ? '✓' : '✗'),
          React.createElement('td', null,
            React.createElement('span', { className: `role-badge ${user.appRole.toLowerCase()}` }, user.appRole)
          ),
          React.createElement('td', null,
            React.createElement('div', { className: 'action-buttons' },
              React.createElement('button', {
                onClick: () => onEdit(user),
                className: 'edit-btn'
              }, 'Edit'),
              user.daqLink && React.createElement('button', {
                onClick: () => window.open(user.daqLink, '_blank'),
                className: 'view-btn'
              }, 'View DAQ')
            )
          )
        ))
      )
    ),
    React.createElement('div', { className: 'table-footer' },
      `1-${users.length} of ${users.length}`
    )
  );
};

export default UserTable;