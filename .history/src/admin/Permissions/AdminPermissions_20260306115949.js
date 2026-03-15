












import React from 'react';

const AdminPermissions = () => {
  const permissions = [
    { id: 1, name: 'Administrator', users: '3', permissions: 'Full Access' },
    { id: 2, name: 'Manager', users: '5', permissions: 'Read, Write, Delete' },
    { id: 3, name: 'User', users: '12', permissions: 'Read Only' },
    { id: 4, name: 'Guest', users: '8', permissions: 'Limited Access' },
  ];

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
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
      }, 'Permissions Management'),
      
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
      }, '+ New Role')
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
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ROLE NAME'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'USERS'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PERMISSIONS'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ACTIONS')
          )
        ),
        
        React.createElement('tbody', null,
          permissions.map((permission) =>
            React.createElement('tr', {
              key: permission.id,
              style: {
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, permission.name),
              React.createElement('td', { style: { padding: '16px 8px' } }, permission.users),
              React.createElement('td', { style: { padding: '16px 8px' } }, permission.permissions),
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
    }, 'Showing 1-4 of 4 roles')
  );
};

export default AdminPermissions;