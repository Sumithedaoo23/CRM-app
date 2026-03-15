
import React from 'react';

const Dashboard = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  const stats = [
    { value: "1,254", label: "Total Users", change: "+12% this month" },
    { value: "$48,560", label: "Revenue", change: "+8% this month" },
    { value: "367", label: "New Leads", change: "+15% this month" },
    { value: "89%", label: "Conversion Rate", change: "+2% this month" },
  ];

  const activities = [
    { time: "10:30 AM", description: "New user registration: John Doe", by: "by admin" },
    { time: "9:15 AM", description: "Monthly report generated", by: "by system" },
    { time: "Yesterday", description: "Meeting with ABC Company", by: "by sales" },
    { time: "2 days ago", description: "New product launched", by: "by marketing" },
  ];

  const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"];

  const bottomStats = [
    { value: "24", label: "Pending Tasks" },
    { value: "156", label: "New Messages" },
    { value: "89%", label: "Server Uptime" },
    { value: "42", label: "Support Tickets" },
  ];

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header Section
    React.createElement('div', { style: { marginBottom: '24px' } },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '8px'
        }
      }, 'Dashboard'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '16px',
            color: '#4b5563'
          }
        }, 'Welcome back, Admin User'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            backgroundColor: '#e5e7eb',
            padding: '4px 12px',
            borderRadius: '16px'
          }
        }, `Today: ${formattedDate}`)
      )
    ),

    // Stats Grid - 4 cards in a row
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      stats.map((stat, index) =>
        React.createElement('div', {
          key: index,
          style: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('div', { style: { textAlign: 'center' } },
            React.createElement('p', {
              style: {
                fontSize: '32px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '8px'
              }
            }, stat.value),
            
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '4px'
              }
            }, stat.label),
            
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#10b981',
                fontWeight: '500'
              }
            }, stat.change)
          )
        )
      )
    ),

    // Monthly Revenue and Recent Activity Section
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      // Monthly Revenue Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
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
          React.createElement('h3', {
            style: {
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827'
            }
          }, 'Monthly Revenue'),
          
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              backgroundColor: '#f3f4f6',
              padding: '4px 12px',
              borderRadius: '20px',
              cursor: 'pointer'
            }
          }, 'Last 6 Months ▼')
        ),

        // Chart Bars
        React.createElement('div', {
          style: {
            height: '200px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '12px'
          }
        },
          months.map((month, index) =>
            React.createElement('div', {
              key: index,
              style: {
                flex: 1,
                height: `${60 + (index * 15)}px`,
                backgroundColor: index === 5 ? '#3b82f6' : '#93c5fd',
                borderRadius: '6px 6px 0 0',
                transition: 'height 0.3s'
              }
            })
          )
        ),

        // Month Labels
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '16px'
          }
        },
          months.map((month, index) =>
            React.createElement('div', {
              key: index,
              style: {
                flex: 1,
                fontSize: '14px',
                color: '#6b7280',
                textAlign: 'center'
              }
            }, month)
          )
        )
      ),

      // Recent Activity Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
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
            marginBottom: '20px'
          }
        }, 'Recent Activity'),
        
        activities.map((activity, index) =>
          React.createElement('div', {
            key: index,
            style: {
              padding: '12px 0',
              borderBottom: index < activities.length - 1 ? '1px solid #e5e7eb' : 'none'
            }
          },
            React.createElement('p', {
              style: {
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827',
                marginBottom: '4px'
              }
            }, activity.time),
            
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                marginBottom: '2px'
              }
            }, activity.description),
            
            React.createElement('p', {
              style: {
                fontSize: '12px',
                color: '#9ca3af',
                fontStyle: 'italic'
              }
            }, activity.by)
          )
        )
      )
    ),

    // Bottom Stats Grid
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px'
      }
    },
      bottomStats.map((stat, index) =>
        React.createElement('div', {
          key: index,
          style: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('div', { style: { textAlign: 'center' } },
            React.createElement('p', {
              style: {
                fontSize: '32px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '8px'
              }
            }, stat.value),
            
            React.createElement('p', {
              style: {
                fontSize: '14px',
                color: '#6b7280'
              }
            }, stat.label)
          )
        )
      )
    ),

    // User Info Debug
    React.createElement('div', {
      style: {
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#e5e7eb',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#4b5563',
        fontSize: '14px'
      }
    },
      React.createElement('span', { style: { fontSize: '18px' } }, '▶'),
      'User Info (Debug)'
    )
  );
};

export default Dashboard;