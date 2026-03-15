import React from 'react';

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');
  
  return React.createElement('div', null,
    React.createElement('h1', { style: { fontSize: '24px', fontWeight: '600', marginBottom: '24px' } }, 'Welcome to Your Dashboard'),
    React.createElement('div', { style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
      React.createElement('h2', { style: { fontSize: '18px', fontWeight: '500', marginBottom: '16px' } }, 'Quick Stats'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' } },
        React.createElement('div', { style: { padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '6px' } },
          React.createElement('div', { style: { fontSize: '14px', color: '#0369a1' } }, 'Total Tickets'),
          React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
        ),
        React.createElement('div', { style: { padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '6px' } },
          React.createElement('div', { style: { fontSize: '14px', color: '#059669' } }, 'Resolved'),
          React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
        ),
        React.createElement('div', { style: { padding: '16px', backgroundColor: '#fef2f2', borderRadius: '6px' } },
          React.createElement('div', { style: { fontSize: '14px', color: '#dc2626' } }, 'Pending'),
          React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
        ),
        React.createElement('div', { style: { padding: '16px', backgroundColor: '#fefce8', borderRadius: '6px' } },
          React.createElement('div', { style: { fontSize: '14px', color: '#ca8a04' } }, 'In Progress'),
          React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
        )
      )
    )
  );
};

export default UserDashboard;