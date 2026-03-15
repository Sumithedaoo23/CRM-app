import React from 'react';

const UserContacts = () => {
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8901' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8902' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8903' },
  ];

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'My Contacts'),

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
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PHONE')
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
              React.createElement('td', { style: { padding: '16px 8px', color: '#10b981' } }, contact.email),
              React.createElement('td', { style: { padding: '16px 8px' } }, contact.phone)
            )
          )
        )
      )
    )
  );
};

export default UserContacts;