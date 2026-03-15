
import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Admin User', email: 'admin@crm.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@crm.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Jane Smith', email: 'jane@crm.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Bob Wilson', email: 'bob@crm.com', role: 'User', status: 'Active' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6',
      padding: '94px 24px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Main Content Container
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }
    },
      // Header with CRM title and user menu (matching other pages)
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'CRM Dashboard'),
        
        // User Menu
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#ffffff',
            padding: '8px 16px',
            borderRadius: '40px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('div', {
            style: {
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
              color: '#ffffff'
            }
          }, 'AU'),
          
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }
            }, 'Admin User'),
            
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: '#6b7280'
              }
            }, 'Administrator')
          ),
          
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280',
              cursor: 'pointer'
            }
          }, '▼')
        )
      ),

      // Navigation Tabs (matching other pages)
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '24px',
          marginBottom: '24px',
          paddingBottom: '8px',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap'
        }
      },
        ['Dashboard', 'Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions', 'Tickets'].map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Users' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Users' ? '600' : '400',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Users' ? '2px solid #2563eb' : 'none'
            }
          }, item)
        )
      ),

      // Users Title and Actions
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'Users'),
        
        // Action Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }
        },
          React.createElement('button', {
            style: {
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
          }, '+ Add User'),
          
          React.createElement('button', {
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Filter', 
            React.createElement('span', { style: { fontSize: '12px' } }, '▼')
          ),
          
          React.createElement('button', {
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Download CSV'),
          
          React.createElement('button', {
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Upload CSV')
        )
      ),

      // Users Table
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflowX: 'auto',
          width: '100%'
        }
      },
        React.createElement('table', {
          style: {
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '800px'
          }
        },
          React.createElement('thead', null,
            React.createElement('tr', {
              style: {
                borderBottom: '2px solid #e5e7eb'
              }
            },
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  color: '#6b7280',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'NAME'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  color: '#6b7280',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'EMAIL'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  color: '#6b7280',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'ROLE'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  color: '#6b7280',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'STATUS'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  color: '#6b7280',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'ACTIONS')
            )
          ),
          
          React.createElement('tbody', null,
            users.map((user) =>
              React.createElement('tr', {
                key: user.id,
                style: {
                  borderBottom: '1px solid #e5e7eb',
                  transition: 'background-color 0.2s'
                },
                onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
                onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
              },
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontWeight: '500',
                    color: '#111827'
                  }
                }, user.name),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    color: '#3b82f6'
                  }
                }, user.email),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    color: '#4b5563'
                  }
                }, user.role),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px'
                  }
                },
                  React.createElement('span', {
                    style: {
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
                      color: user.status === 'Active' ? '#10b981' : '#ef4444',
                      display: 'inline-block'
                    }
                  }, user.status)
                ),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px'
                  }
                },
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      gap: '8px'
                    }
                  },
                    React.createElement('button', {
                      style: {
                        padding: '6px 12px',
                        backgroundColor: '#f3f4f6',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        color: '#4b5563',
                        transition: 'all 0.2s'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
                    }, 'Edit'),
                    
                    React.createElement('button', {
                      style: {
                        padding: '6px 12px',
                        backgroundColor: '#fee2e2',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        color: '#ef4444',
                        transition: 'all 0.2s'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#fecaca',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#fee2e2'
                    }, 'Delete')
                  )
                )
              )
            )
          )
        )
      ),

      // Footer with Pagination
      React.createElement('div', {
        style: {
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('div', {
          style: {
            color: '#6b7280',
            fontSize: '14px'
          }
        }, 'Showing 1-4 of 4 users'),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '4px'
          }
        },
          React.createElement('button', {
            style: {
              padding: '8px 12px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: '0.5'
            },
            disabled: true
          }, 'Previous'),
          
          React.createElement('button', {
            style: {
              padding: '8px 12px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, '1'),
          
          React.createElement('button', {
            style: {
              padding: '8px 12px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: '0.5'
            },
            disabled: true
          }, 'Next')
        )
      ),

      // Logout Button (bottom right)
      React.createElement('div', {
        style: {
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'flex-end'
        }
      },
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '10px 24px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
        }, 'Logout')
      )
    )
  );
};

export default Users;