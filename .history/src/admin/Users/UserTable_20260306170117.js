
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