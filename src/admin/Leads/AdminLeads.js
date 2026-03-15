
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';

const AdminLeads = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    role: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });

  const adminUser = JSON.parse(localStorage.getItem('crm-user') || '{}');

  useEffect(() => {
    fetchUsers();
  }, [filters.page, filters.search, filters.role]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers(filters);
      setUsers(response.data || []);
      setPagination(response.pagination || { total: 0, pages: 0 });
      setError(null);
    } catch (err) {
      setError(err.error || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
  };

  const handleMessageUser = (user) => {
    // Navigate to messages with this user selected
    navigate(`/admin/messages/${user._id}`);
  };

  const handleViewProfile = (user) => {
    navigate(`/admin/users/${user._id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading && users.length === 0) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading leads...');
  }

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6',
      padding: '20px 24px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }
    },
      // Header with title and user menu
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'Leads Management'),
        
        // User Menu
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#ffffff',
              padding: '6px 16px 6px 12px',
              borderRadius: '40px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }
          },
            React.createElement('div', {
              style: {
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff'
              }
            }, adminUser?.name?.charAt(0) || 'A'),
            
            React.createElement('div', null,
              React.createElement('div', {
                style: {
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#111827'
                }
              }, adminUser?.name || 'Admin User'),
              
              React.createElement('div', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280'
                }
              }, adminUser?.role || 'Administrator')
            )
          ),
          
          React.createElement('button', {
            onClick: handleLogout,
            style: {
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
          }, 'Logout')
        )
      ),

      // Navigation Tabs
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          paddingBottom: '8px',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap',
          backgroundColor: '#ffffff',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }
      },
        ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions', 'Messages'].map((item) =>
          React.createElement('span', {
            key: item,
            onClick: () => {
              if (item === 'Dashboard') navigate('/admin/dashboard');
              else if (item === 'Users') navigate('/admin/users');
              else if (item === 'Contacts') navigate('/admin/contacts');
              else if (item === 'Tickets') navigate('/admin/tickets');
              else if (item === 'Profile') navigate('/admin/profile');
              else if (item === 'Messages') navigate('/admin/messages');
            },
            style: {
              fontSize: '14px',
              color: item === 'Leads' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Leads' ? '600' : '500',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Leads' ? '2px solid #2563eb' : 'none'
            }
          }, item)
        )
      ),

      // Search and Filter
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('form', {
          onSubmit: handleSearch,
          style: {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'flex-end'
          }
        },
          React.createElement('div', {
            style: {
              flex: '2',
              minWidth: '250px'
            }
          },
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Search'),
            
            React.createElement('input', {
              type: 'text',
              value: filters.search,
              onChange: (e) => setFilters({ ...filters, search: e.target.value }),
              placeholder: 'Search by name, email, phone...',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),
          
          React.createElement('div', {
            style: {
              flex: '1',
              minWidth: '150px'
            }
          },
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Role'),
            
            React.createElement('select', {
              value: filters.role,
              onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: '' }, 'All'),
              React.createElement('option', { value: 'admin' }, 'Admin'),
              React.createElement('option', { value: 'user' }, 'User')
            )
          ),
          
          React.createElement('button', {
            type: 'submit',
            style: {
              padding: '10px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              height: '42px'
            }
          }, 'Search')
        )
      ),

      // Error message
      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '20px'
        }
      }, error),

      // Table Container
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflowX: 'auto'
        }
      },
        users.length === 0
          ? React.createElement('p', {
              style: {
                textAlign: 'center',
                padding: '60px',
                color: '#6b7280'
              }
            }, 'No users found')
          : React.createElement('table', {
              style: {
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '1000px'
              }
            },
              React.createElement('thead', null,
                React.createElement('tr', {
                  style: {
                    borderBottom: '2px solid #e5e7eb',
                    backgroundColor: '#f9fafb'
                  }
                },
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Name'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Email'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Phone'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Role'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Status'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'Actions')
                )
              ),
              
              React.createElement('tbody', null,
                users.map((user) => {
                  const fullName = ((user.firstName || '') + ' ' + (user.lastName || '')).trim() || 'N/A';
                  
                  return React.createElement('tr', {
                    key: user._id,
                    style: {
                      borderBottom: '1px solid #f3f4f6'
                    }
                  },
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        fontWeight: '500'
                      }
                    }, fullName),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        color: '#3b82f6'
                      }
                    }, user.email || 'N/A'),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px'
                      }
                    }, user.phone || 'N/A'),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px'
                      }
                    },
                      React.createElement('span', {
                        style: {
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f3f4f6',
                          color: user.role === 'admin' ? '#3b82f6' : '#6b7280'
                        }
                      }, user.role === 'admin' ? 'Admin' : 'User')
                    ),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px'
                      }
                    },
                      React.createElement('span', {
                        style: {
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: user.isActive ? '#d1fae5' : '#fee2e2',
                          color: user.isActive ? '#10b981' : '#ef4444'
                        }
                      }, user.isActive ? 'Active' : 'Inactive')
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
                          onClick: () => handleMessageUser(user),
                          style: {
                            padding: '6px 12px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500',
                            cursor: 'pointer'
                          },
                          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
                          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
                        }, '💬 Message'),
                        
                        React.createElement('button', {
                          onClick: () => handleViewProfile(user),
                          style: {
                            padding: '6px 12px',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            cursor: 'pointer'
                          },
                          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
                          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
                        }, 'View Profile')
                      )
                    )
                  );
                })
              )
            )
      ),

      // Pagination
      pagination.pages > 1 && React.createElement('div', {
        style: {
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }
      },
        Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
          React.createElement('button', {
            key: page,
            onClick: () => setFilters({ ...filters, page }),
            style: {
              padding: '8px 14px',
              backgroundColor: page === filters.page ? '#3b82f6' : 'white',
              color: page === filters.page ? 'white' : '#4b5563',
              border: page === filters.page ? 'none' : '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, page)
        )
      )
    )
  );
};

export default AdminLeads;