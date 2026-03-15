import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardService from '../../services/dashboardService';
import userService from '../../services/userService';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    counts: {
      users: 0,
      contacts: 0,
      leads: 0,
      tickets: 0,
      roles: 0,
      permissions: 0
    },
    ticketStats: {
      pending: 0,
      'in-progress': 0,
      resolved: 0,
      closed: 0,
      rejected: 0
    },
    successRate: 0,
    recentActivities: {
      tickets: [],
      leads: []
    },
    loading: true,
    error: null
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      console.log('Fetching dashboard stats...');
      const response = await dashboardService.getAdminStats();
      console.log('Dashboard data received:', response.data);
      
      setStats({
        ...response.data,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
      setStats(prev => ({
        ...prev,
        loading: false,
        error: error.error || 'Failed to load dashboard stats'
      }));
    }
  };

  const handleExportUsers = async () => {
    try {
      await userService.exportUsersPDF();
    } catch (error) {
      alert('Failed to export users: ' + (error.error || error.message));
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const retryFetch = () => {
    setStats(prev => ({ ...prev, loading: true, error: null }));
    fetchDashboardStats();
  };

  if (stats.loading) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading dashboard...');
  }

  if (stats.error) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '20px',
        backgroundColor: '#f3f4f6'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '12px'
          }
        }, 'Unable to Load Dashboard'),
        
        React.createElement('p', {
          style: {
            color: '#ef4444',
            fontSize: '14px',
            marginBottom: '24px'
          }
        }, stats.error),
        
        React.createElement('p', {
          style: {
            color: '#6b7280',
            fontSize: '13px',
            marginBottom: '24px'
          }
        }, 'Please check if the backend server is running on port 5000'),
        
        React.createElement('button', {
          onClick: retryFetch,
          style: {
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            marginRight: '12px'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
        }, 'Retry'),
        
        React.createElement('button', {
          onClick: () => window.open('http://localhost:5000/api/test/db', '_blank'),
          style: {
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#4b5563',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Test Database')
      )
    );
  }

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Header
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
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'Admin Dashboard'),
      
      React.createElement('button', {
        onClick: handleExportUsers,
        style: {
          padding: '10px 20px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
      }, '📥 Export Users PDF')
    ),

    // Stats Cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      // Total Users Card
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        },
        onClick: () => handleNavigate('/admin/users'),
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px',
            fontWeight: '500'
          }
        }, 'Total Users'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#3b82f6',
            marginBottom: '4px'
          }
        }, stats.counts.users)
      ),

      // Total Tickets Card
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        },
        onClick: () => handleNavigate('/admin/tickets'),
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px',
            fontWeight: '500'
          }
        }, 'Total Tickets'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#f59e0b',
            marginBottom: '4px'
          }
        }, stats.counts.tickets)
      ),

      // Success Rate Card
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px',
            fontWeight: '500'
          }
        }, 'Success Rate'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#10b981',
            marginBottom: '4px'
          }
        }, `${stats.successRate}%`)
      )
    ),

    // Ticket Status Section
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '32px'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '20px'
        }
      }, 'Ticket Status Overview'),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px'
        }
      },
        Object.entries(stats.ticketStats).map(([status, count]) => {
          const colors = getStatusColors(status);
          return React.createElement('div', {
            key: status,
            style: {
              padding: '16px',
              backgroundColor: colors.bg,
              borderRadius: '8px',
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '24px',
                fontWeight: '700',
                color: colors.text,
                marginBottom: '4px'
              }
            }, count),
            
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: colors.text,
                textTransform: 'capitalize',
                fontWeight: '500'
              }
            }, status.replace('-', ' '))
          );
        })
      )
    )
  );
};

// Helper function for status colors (background and text)
const getStatusColors = (status) => {
  const colors = {
    'pending': { bg: '#fef3c7', text: '#d97706' },
    'in-progress': { bg: '#dbeafe', text: '#2563eb' },
    'resolved': { bg: '#d1fae5', text: '#10b981' },
    'closed': { bg: '#e5e7eb', text: '#6b7280' },
    'rejected': { bg: '#fee2e2', text: '#dc2626' }
  };
  return colors[status] || { bg: '#e5e7eb', text: '#6b7280' };
};

export default AdminDashboard;
