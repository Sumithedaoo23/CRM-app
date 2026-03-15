
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ticketService from '../services/ticketService';
import messageService from '../services/messageService';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const [stats, setStats] = useState({
    totalTickets: 0,
    pendingTickets: 0,
    resolvedTickets: 0,
    unreadMessages: 0
  });
  
  const [recentTickets, setRecentTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user?._id) {
      navigate('/login');
      return;
    }
    loadDashboardData();
  }, [user]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load user tickets
      const ticketsResponse = await ticketService.getUserTickets(user._id);
      const tickets = ticketsResponse.data || [];
      
      // Calculate stats
      const totalTickets = tickets.length;
      const pendingTickets = tickets.filter(t => t.status === 'pending' || t.status === 'open').length;
      const resolvedTickets = tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length;
      
      // Get recent tickets (last 5)
      const recent = tickets.slice(0, 5);
      
      // Get unread messages count
      let unreadMessages = 0;
      try {
        const messagesResponse = await messageService.getUnreadCount();
        unreadMessages = messagesResponse.data?.count || 0;
      } catch (err) {
        console.error('Failed to load messages count:', err);
      }
      
      setStats({
        totalTickets,
        pendingTickets,
        resolvedTickets,
        unreadMessages
      });
      
      setRecentTickets(recent);
      setError('');
      
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (logout) {
      logout();
    }
    navigate('/login');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const getInitials = () => {
    if (!user) return 'U';
    const first = user.firstName?.[0] || '';
    const last = user.lastName?.[0] || '';
    return (first + last).toUpperCase() || 'U';
  };

  const getFullName = () => {
    if (!user) return 'User';
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    return `${firstName} ${lastName}`.trim() || user.name || 'User';
  };

  if (loading) {
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

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // Header
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'User Dashboard'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }
        },
          React.createElement('div', {
            style: {
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '16px'
            }
          }, getInitials()),
          
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontWeight: '600',
                color: '#111827'
              }
            }, getFullName()),
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: '#6b7280'
              }
            }, user?.email || 'No email')
          )
        ),
        
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, 'Logout')
      )
    ),

    // Navigation Tabs
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '12px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        gap: '24px'
      }
    },
      ['Dashboard', 'Generate Ticket', 'Ticket Status', 'Messages', 'Profile'].map((item) => {
        const path = item.toLowerCase().replace(' ', '');
        return React.createElement('span', {
          key: item,
          onClick: () => {
            if (item === 'Dashboard') handleNavigate('/user/dashboard');
            else if (item === 'Generate Ticket') handleNavigate('/user/generate-ticket');
            else if (item === 'Ticket Status') handleNavigate('/user/ticket-status');
            else if (item === 'Messages') handleNavigate('/user/messages');
            else if (item === 'Profile') handleNavigate('/user/profile');
          },
          style: {
            fontSize: '14px',
            color: item === 'Dashboard' ? '#2563eb' : '#4b5563',
            fontWeight: item === 'Dashboard' ? '600' : '500',
            cursor: 'pointer',
            padding: '4px 0',
            borderBottom: item === 'Dashboard' ? '2px solid #2563eb' : 'none'
          }
        }, item);
      })
    ),

    // Error message
    error && React.createElement('div', {
      style: {
        margin: '20px 24px 0',
        padding: '12px',
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        borderRadius: '6px',
        border: '1px solid #fecaca'
      }
    }, error),

    // Stats Cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        padding: '24px',
        margin: '0 auto'
      }
    },
      // Total Tickets Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Total Tickets'),
        React.createElement('div', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827'
          }
        }, stats.totalTickets)
      ),

      // Pending Tickets Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Pending Tickets'),
        React.createElement('div', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#f59e0b'
          }
        }, stats.pendingTickets)
      ),

      // Resolved Tickets Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Resolved Tickets'),
        React.createElement('div', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#10b981'
          }
        }, stats.resolvedTickets)
      ),

      // Unread Messages Card
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        },
        onClick: () => handleNavigate('/user/messages')
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }
        }, 
          'Unread Messages',
          stats.unreadMessages > 0 && React.createElement('span', {
            style: {
              backgroundColor: '#ef4444',
              color: 'white',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '11px',
              fontWeight: '600'
            }
          }, stats.unreadMessages)
        ),
        React.createElement('div', {
          style: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#3b82f6'
          }
        }, stats.unreadMessages)
      )
    ),

    // Recent Tickets Section
    React.createElement('div', {
      style: {
        margin: '24px',
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
          marginBottom: '20px'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            margin: 0
          }
        }, 'Recent Tickets'),
        
        React.createElement('button', {
          onClick: () => handleNavigate('/user/ticket-status'),
          style: {
            padding: '8px 16px',
            backgroundColor: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, 'View All')
      ),

      recentTickets.length === 0 ?
        React.createElement('p', {
          style: {
            textAlign: 'center',
            color: '#9ca3af',
            padding: '40px',
            fontSize: '14px'
          }
        }, 'No tickets yet. Create your first ticket!') :
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }
      },
        recentTickets.map((ticket) => {
          // Safely access ticket properties
          const ticketNumber = ticket?.ticketNumber || 'N/A';
          const title = ticket?.title || 'Untitled';
          const status = ticket?.status || 'pending';
          const createdAt = ticket?.createdAt ? new Date(ticket.createdAt).toLocaleDateString() : 'N/A';
          
          // Status color mapping
          const statusColors = {
            pending: { bg: '#fef3c7', color: '#d97706' },
            open: { bg: '#dbeafe', color: '#3b82f6' },
            'in-progress': { bg: '#dbeafe', color: '#3b82f6' },
            resolved: { bg: '#d1fae5', color: '#10b981' },
            closed: { bg: '#e5e7eb', color: '#6b7280' },
            rejected: { bg: '#fee2e2', color: '#ef4444' }
          };
          
          const statusStyle = statusColors[status] || { bg: '#f3f4f6', color: '#6b7280' };
          
          return React.createElement('div', {
            key: ticket?._id || Math.random(),
            style: {
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onClick: () => handleNavigate(`/user/ticket-status?id=${ticket?._id}`),
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          },
            React.createElement('div', {
              style: {
                flex: 1
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '4px'
                }
              },
                React.createElement('span', {
                  style: {
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#3b82f6'
                  }
                }, ticketNumber),
                
                React.createElement('span', {
                  style: {
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500',
                    backgroundColor: statusStyle.bg,
                    color: statusStyle.color
                  }
                }, status.charAt(0).toUpperCase() + status.slice(1))
              ),
              
              React.createElement('div', {
                style: {
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#111827',
                  marginBottom: '4px'
                }
              }, title),
              
              React.createElement('div', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280'
                }
              }, `Created: ${createdAt}`)
            ),
            
            React.createElement('span', {
              style: {
                fontSize: '20px',
                color: '#9ca3af'
              }
            }, '→')
          );
        })
      )
    ),

    // Quick Actions
    React.createElement('div', {
      style: {
        margin: '24px',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '20px'
        }
      }, 'Quick Actions'),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }
      },
        React.createElement('button', {
          onClick: () => handleNavigate('/user/generate-ticket'),
          style: {
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#e5e7eb';
            e.currentTarget.style.borderColor = '#3b82f6';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }
        },
          React.createElement('span', { style: { fontSize: '24px' } }, '🎫'),
          'Generate New Ticket'
        ),
        
        React.createElement('button', {
          onClick: () => handleNavigate('/user/ticket-status'),
          style: {
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#e5e7eb';
            e.currentTarget.style.borderColor = '#3b82f6';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }
        },
          React.createElement('span', { style: { fontSize: '24px' } }, '📊'),
          'View Ticket Status'
        ),
        
        React.createElement('button', {
          onClick: () => handleNavigate('/user/messages'),
          style: {
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            position: 'relative'
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#e5e7eb';
            e.currentTarget.style.borderColor = '#3b82f6';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }
        },
          React.createElement('span', { style: { fontSize: '24px' } }, '💬'),
          'Messages',
          stats.unreadMessages > 0 && React.createElement('span', {
            style: {
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: '#ef4444',
              color: 'white',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '11px',
              fontWeight: '600'
            }
          }, stats.unreadMessages)
        ),
        
        React.createElement('button', {
          onClick: () => handleNavigate('/user/profile'),
          style: {
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#e5e7eb';
            e.currentTarget.style.borderColor = '#3b82f6';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }
        },
          React.createElement('span', { style: { fontSize: '24px' } }, '👤'),
          'View Profile'
        )
      )
    )
  );
};

export default UserDashboard;