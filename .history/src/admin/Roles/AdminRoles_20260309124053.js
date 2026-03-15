
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roleService from '../../services/roleService';

const AdminRoles = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    fetchRoles();
  }, [filters.page, filters.search]);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const response = await roleService.getRoles(filters);
      setRoles(response.data || []);
      setPagination(response.pagination || { total: 0, pages: 0 });
      setError(null);
    } catch (err) {
      setError(err.error || 'Failed to load roles');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
  };

  const handleDeleteClick = (role) => {
    setSelectedRole(role);
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedRole) return;

    try {
      await roleService.deleteRole(selectedRole._id);
      setShowDeleteModal(false);
      fetchRoles();
    } catch (err) {
      setDeleteError(err.error || 'Failed to delete role');
    }
  };

  const handleAddRole = () => {
    navigate('/admin/roles/new');
  };

  const handleEditRole = (id) => {
    navigate(`/admin/roles/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  if (loading && roles.length === 0) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading roles...');
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
        }, 'Role Management'),
        
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
              color: item === 'Roles' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Roles' ? '600' : '500',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Roles' ? '2px solid #2563eb' : 'none'
            }
          }, item)
        )
      ),

      // Title and Actions Row
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
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            margin: 0
          }
        }, 'Roles'),
        
        // Action Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }
        },
          React.createElement('button', {
            onClick: handleAddRole,
            style: {
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
          }, '+ New Role'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Filter', 
            React.createElement('span', { style: { fontSize: '12px' } }, '▼')
          ),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Download CSV'),
          
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Upload CSV')
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
            }, 'Search Roles'),
            
            React.createElement('input', {
              type: 'text',
              value: filters.search,
              onChange: (e) => setFilters({ ...filters, search: e.target.value }),
              placeholder: 'Search by role name...',
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
        roles.length === 0
          ? React.createElement('p', {
              style: {
                textAlign: 'center',
                padding: '60px',
                color: '#6b7280'
              }
            }, 'No roles found')
          : React.createElement('table', {
              style: {
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '800px'
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
                  }, 'NAME'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'PERMISSIONS'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'USERS'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'CREATED'),
                  
                  React.createElement('th', {
                    style: {
                      textAlign: 'left',
                      padding: '12px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }
                  }, 'ACTIONS')
                )
              ),
              
              React.createElement('tbody', null,
                roles.map((role) =>
                  React.createElement('tr', {
                    key: role._id,
                    style: {
                      borderBottom: '1px solid #f3f4f6'
                    }
                  },
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        fontWeight: '500',
                        color: '#111827'
                      }
                    }, role.name),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        color: '#6b7280'
                      }
                    }, role.permissions && role.permissions.length > 0 
                      ? role.permissions.map(p => p.actions.join(', ')).join(' | ') 
                      : 'No permissions'),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        fontWeight: '500',
                        color: '#3b82f6'
                      }
                    }, role.userCount || 0),
                    
                    React.createElement('td', {
                      style: {
                        padding: '16px 8px',
                        color: '#6b7280'
                      }
                    }, formatDate(role.createdAt)),
                    
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
                          onClick: () => handleEditRole(role._id),
                          style: {
                            padding: '6px 12px',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500',
                            cursor: 'pointer'
                          },
                          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
                          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
                        }, 'Edit'),
                        
                        React.createElement('button', {
                          onClick: () => handleDeleteClick(role),
                          disabled: role.isSystem,
                          style: {
                            padding: '6px 12px',
                            backgroundColor: role.isSystem ? '#9ca3af' : '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500',
                            cursor: role.isSystem ? 'not-allowed' : 'pointer'
                          },
                          onMouseEnter: (e) => {
                            if (!role.isSystem) {
                              e.currentTarget.style.backgroundColor = '#dc2626';
                            }
                          },
                          onMouseLeave: (e) => {
                            if (!role.isSystem) {
                              e.currentTarget.style.backgroundColor = '#ef4444';
                            }
                          }
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
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        // Pagination info
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, `Showing 1-${roles.length} of ${pagination.total} roles`),
        
        // Pagination buttons
        pagination.pages > 1 && React.createElement('div', {
          style: {
            display: 'flex',
            gap: '6px'
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
    ),

    // Delete Confirmation Modal
    showDeleteModal && selectedRole && React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '400px',
          width: '90%'
        }
      },
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '12px'
          }
        }, 'Delete Role'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '20px'
          }
        }, `Are you sure you want to delete the role "${selectedRole.name}"? This action cannot be undone.`),
        
        deleteError && React.createElement('p', {
          style: {
            color: '#ef4444',
            fontSize: '13px',
            marginBottom: '16px'
          }
        }, deleteError),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }
        },
          React.createElement('button', {
            onClick: () => setShowDeleteModal(false),
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            onClick: handleDeleteConfirm,
            style: {
              padding: '10px 20px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Delete')
        )
      )
    )
  );
};

export default AdminRoles;