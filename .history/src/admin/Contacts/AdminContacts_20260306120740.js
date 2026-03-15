import React from 'react';

const AdminContacts = () => {
  const contacts = [
    { id: 1, name: 'YUVRAJ TOMAR', email: 'rajonweb03@gmail.com', phone: '+91 98765 43210', company: 'Tech Solutions', status: 'Active' },
    { id: 2, name: 'Rama', email: 'rama@gmail.com', phone: '+91 87654 32109', company: 'Design Studio', status: 'Active' },
    { id: 3, name: 'August Kekule', email: 'denny_yost@rogann.name', phone: '+1 234 567 8901', company: 'Research Labs', status: 'Inactive' },
    { id: 4, name: 'Paul Ehrlich', email: 'tony@prdnaska.org', phone: '+1 345 678 9012', company: 'Medical Institute', status: 'Active' },
    { id: 5, name: 'Marie Curie', email: 'marie@research.org', phone: '+33 1 23 45 67 89', company: 'Research Institute', status: 'Active' },
    { id: 6, name: 'Alan Turing', email: 'alan@computing.org', phone: '+44 20 1234 5678', company: 'Computing Labs', status: 'Inactive' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

  const getStatusColor = (status) => {
    return status === 'Active' ? '#10b981' : '#ef4444';
  };

  const getStatusBgColor = (status) => {
    return status === 'Active' ? '#d1fae5' : '#fee2e2';
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
      // Header with CRM title and user menu
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
            fontSize: 'clamp(24px, 5vw, 32px)',
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
          }, user?.name?.charAt(0) || 'A'),
          
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }
            }, user?.name || 'Admin User'),
            
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: '#6b7280'
              }
            }, user?.role || 'Administrator')
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

      // Navigation Tabs
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
        ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
          React.createElement('span', {
            key: item,
            style: {
              fontSize: '14px',
              color: item === 'Contacts' ? '#2563eb' : '#4b5563',
              fontWeight: item === 'Contacts' ? '600' : '400',
              cursor: 'pointer',
              padding: '4px 0',
              borderBottom: item === 'Contacts' ? '2px solid #2563eb' : 'none'
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
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, 'Contact Management'),
        
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
          }, '+ New Contact'),
          
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
              gap: '4px',
              transition: 'background-color 0.2s'
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
              cursor: 'pointer',
              transition: 'background-color 0.2s'
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
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Upload CSV')
        )
      ),

      // Table Container
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflowX: 'auto',
          width: '100%'
        }
      },
        React.createElement('table', {
          style: {
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '1000px'
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
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'NAME'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'EMAIL'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'PHONE'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'COMPANY'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'STATUS'),
              
              React.createElement('th', {
                style: {
                  textAlign: 'left',
                  padding: '12px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }
              }, 'ACTIONS')
            )
          ),
          
          React.createElement('tbody', null,
            contacts.map((contact) =>
              React.createElement('tr', {
                key: contact.id,
                style: {
                  borderBottom: '1px solid #f3f4f6',
                  transition: 'background-color 0.2s'
                },
                onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
                onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
              },
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827'
                  }
                }, contact.name),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#3b82f6'
                  }
                }, contact.email),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }
                }, contact.phone),
                
                React.createElement('td', {
                  style: {
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }
                }, contact.company),
                
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
                      backgroundColor: getStatusBgColor(contact.status),
                      color: getStatusColor(contact.status)
                    }
                  }, contact.status)
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
                        padding: '4px 12px',
                        backgroundColor: 'transparent',
                        color: '#3b82f6',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
                    }, 'Edit'),
                    
                    React.createElement('button', {
                      style: {
                        padding: '4px 12px',
                        backgroundColor: 'transparent',
                        color: '#ef4444',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      },
                      onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
                      onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
                    }, 'Delete')
                  )
                )
              )
            )
          )
        )
      ),

      // Footer with Pagination and Logout
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
        // Pagination
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '14px',
              color: '#6b7280'
            }
          }, 'Showing 1-6 of 6 contacts'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '4px',
              marginLeft: '16px'
            }
          },
            React.createElement('button', {
              style: {
                padding: '6px 12px',
                backgroundColor: 'white',
                color: '#4b5563',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                opacity: '0.5'
              },
              disabled: true
            }, 'Previous'),
            
            React.createElement('button', {
              style: {
                padding: '6px 12px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '1'),
            
            React.createElement('button', {
              style: {
                padding: '6px 12px',
                backgroundColor: 'white',
                color: '#4b5563',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                opacity: '0.5'
              },
              disabled: true
            }, 'Next')
          )
        ),

        // Logout Button
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '8px 24px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
        }, 'Logout')
      )
    ),

    // Dark Mode Toggle
    React.createElement('div', {
      style: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
      }
    },
      React.createElement('button', {
        style: {
          padding: '8px 16px',
          backgroundColor: '#1f2937',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }, '🌙 Dark Mode')
    )
  );
};

export default AdminContacts;








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