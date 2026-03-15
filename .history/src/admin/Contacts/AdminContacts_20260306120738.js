








import React from 'react';

const AdminContacts = () => {
  const contacts = [
    { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com', phone: '+91 98765 43210', company: 'Tech Solutions' },
    { id: 2, name: 'Rama', email: 'rama@gmail.com', phone: '+91 87654 32109', company: 'Design Studio' },
    { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name', phone: '+1 234 567 8901', company: 'Research Labs' },
    { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org', phone: '+1 345 678 9012', company: 'Medical Institute' },
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
      }, 'Contacts Management'),
      
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

export default AdminContacts;