// import React from 'react';

// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');
  
//   return React.createElement('div', null,
//     React.createElement('h1', { style: { fontSize: '24px', fontWeight: '600', marginBottom: '24px' } }, 'Welcome to Your Dashboard'),
//     React.createElement('div', { style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
//       React.createElement('h2', { style: { fontSize: '18px', fontWeight: '500', marginBottom: '16px' } }, 'Quick Stats'),
//       React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' } },
//         React.createElement('div', { style: { padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '6px' } },
//           React.createElement('div', { style: { fontSize: '14px', color: '#0369a1' } }, 'Total Tickets'),
//           React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
//         ),
//         React.createElement('div', { style: { padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '6px' } },
//           React.createElement('div', { style: { fontSize: '14px', color: '#059669' } }, 'Resolved'),
//           React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
//         ),
//         React.createElement('div', { style: { padding: '16px', backgroundColor: '#fef2f2', borderRadius: '6px' } },
//           React.createElement('div', { style: { fontSize: '14px', color: '#dc2626' } }, 'Pending'),
//           React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
//         ),
//         React.createElement('div', { style: { padding: '16px', backgroundColor: '#fefce8', borderRadius: '6px' } },
//           React.createElement('div', { style: { fontSize: '14px', color: '#ca8a04' } }, 'In Progress'),
//           React.createElement('div', { style: { fontSize: '24px', fontWeight: '600' } }, '0')
//         )
//       )
//     )
//   );
// };

// export default UserDashboard;







import React from 'react';

const UserDashboard = () => {
  const stats = [
    { label: 'Total Tickets', value: '0', color: '#3b82f6' },
    { label: 'Resolved', value: '0', color: '#10b981' },
    { label: 'Pending', value: '0', color: '#f59e0b' },
    { label: 'In Progress', value: '0', color: '#8b5cf6' },
  ];

  const menuItems = ['Profile', 'My Tickets', 'Generate Ticket', 'Ticket Status'];

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header with User info
    React.createElement('div', {
      style: {
        marginBottom: '32px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '16px'
        }
      }, 'User Dashboard'),
      
      // Navigation tabs
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '8px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '16px',
          flexWrap: 'wrap'
        }
      },
        menuItems.map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Profile' ? '#10b981' : '#4b5563',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: item === 'Profile' ? '#f0fdf4' : 'transparent',
              fontWeight: item === 'Profile' ? '500' : '400'
            }
          }, item)
        )
      )
    ),

    // Welcome Section
    React.createElement('div', {
      style: {
        marginBottom: '32px'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '24px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '8px'
        }
      }, 'Welcome to Your Dashboard'),
      
      React.createElement('p', {
        style: {
          fontSize: '16px',
          color: '#6b7280'
        }
      }, 'Manage your tickets and profile settings')
    ),

    // Quick Stats Section
    React.createElement('div', {
      style: {
        marginBottom: '24px'
      }
    },
      React.createElement('h3', {
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px'
        }
      }, 'Quick Stats'),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }
      },
        stats.map((stat, index) =>
          React.createElement('div', {
            key: index,
            style: {
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${stat.color}`
            }
          },
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '8px',
                fontWeight: '500'
              }
            }, stat.label),
            
            React.createElement('p', {
              style: {
                fontSize: '36px',
                fontWeight: '700',
                color: '#111827'
              }
            }, stat.value)
          )
        )
      )
    ),

    // Recent Activity Placeholder
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      React.createElement('h3', {
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px'
        }
      }, 'Recent Activity'),
      
      React.createElement('p', {
        style: {
          fontSize: '14px',
          color: '#6b7280',
          textAlign: 'center',
          padding: '40px'
        }
      }, 'No recent activity to display')
    )
  );
};

export default UserDashboard;