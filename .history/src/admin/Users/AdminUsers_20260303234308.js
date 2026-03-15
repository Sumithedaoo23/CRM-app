
// import React from 'react';

// const Users = () => {
//   const users = [
//     { id: 1, name: 'Admin User', email: 'admin@crm.com', role: 'Administrator', status: 'Active' },
//     { id: 2, name: 'John Doe', email: 'john@crm.com', role: 'Manager', status: 'Active' },
//     { id: 3, name: 'Jane Smith', email: 'jane@crm.com', role: 'User', status: 'Inactive' },
//     { id: 4, name: 'Bob Wilson', email: 'bob@crm.com', role: 'User', status: 'Active' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '94px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     // Main Content Container
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       // Header with CRM title and user menu (matching other pages)
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: 'clamp(24px, 4vw, 32px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'CRM Dashboard'),
        
//         // User Menu
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '20px',
//             backgroundColor: '#ffffff',
//             padding: '8px 16px',
//             borderRadius: '40px',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '32px',
//               height: '32px',
//               borderRadius: '50%',
//               backgroundColor: '#3b82f6',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#ffffff'
//             }
//           }, 'AU'),
          
//           React.createElement('div', null,
//             React.createElement('div', {
//               style: {
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#111827'
//               }
//             }, 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }
//             }, 'Administrator')
//           ),
          
//           React.createElement('span', {
//             style: {
//               fontSize: '14px',
//               color: '#6b7280',
//               cursor: 'pointer'
//             }
//           }, '▼')
//         )
//       ),

//       // Navigation Tabs (matching other pages)
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '24px',
//           marginBottom: '24px',
//           paddingBottom: '8px',
//           borderBottom: '1px solid #e5e7eb',
//           flexWrap: 'wrap'
//         }
//       },
//         ['Dashboard', 'Profile', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions', 'Tickets'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             style: {
//               fontSize: '14px',
//               color: item === 'Users' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Users' ? '600' : '400',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Users' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Users Title and Actions
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: 'clamp(20px, 4vw, 24px)',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Users'),
        
//         // Action Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             flexWrap: 'wrap'
//           }
//         },
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//           }, '+ Add User'),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Filter', 
//             React.createElement('span', { style: { fontSize: '12px' } }, '▼')
//           ),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Download CSV'),
          
//           React.createElement('button', {
//             style: {
//               padding: '10px 20px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Upload CSV')
//         )
//       ),

//       // Users Table
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           overflowX: 'auto',
//           width: '100%'
//         }
//       },
//         React.createElement('table', {
//           style: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             minWidth: '800px'
//           }
//         },
//           React.createElement('thead', null,
//             React.createElement('tr', {
//               style: {
//                 borderBottom: '2px solid #e5e7eb'
//               }
//             },
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'NAME'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'EMAIL'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'ROLE'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'STATUS'),
              
//               React.createElement('th', {
//                 style: {
//                   textAlign: 'left',
//                   padding: '12px 8px',
//                   color: '#6b7280',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em'
//                 }
//               }, 'ACTIONS')
//             )
//           ),
          
//           React.createElement('tbody', null,
//             users.map((user) =>
//               React.createElement('tr', {
//                 key: user.id,
//                 style: {
//                   borderBottom: '1px solid #e5e7eb',
//                   transition: 'background-color 0.2s'
//                 },
//                 onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//                 onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//               },
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     fontWeight: '500',
//                     color: '#111827'
//                   }
//                 }, user.name),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     color: '#3b82f6'
//                   }
//                 }, user.email),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px',
//                     color: '#4b5563'
//                   }
//                 }, user.role),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px'
//                   }
//                 },
//                   React.createElement('span', {
//                     style: {
//                       padding: '4px 12px',
//                       borderRadius: '20px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       backgroundColor: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
//                       color: user.status === 'Active' ? '#10b981' : '#ef4444',
//                       display: 'inline-block'
//                     }
//                   }, user.status)
//                 ),
                
//                 React.createElement('td', {
//                   style: {
//                     padding: '16px 8px'
//                   }
//                 },
//                   React.createElement('div', {
//                     style: {
//                       display: 'flex',
//                       gap: '8px'
//                     }
//                   },
//                     React.createElement('button', {
//                       style: {
//                         padding: '6px 12px',
//                         backgroundColor: '#f3f4f6',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         cursor: 'pointer',
//                         color: '#4b5563',
//                         transition: 'all 0.2s'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//                     }, 'Edit'),
                    
//                     React.createElement('button', {
//                       style: {
//                         padding: '6px 12px',
//                         backgroundColor: '#fee2e2',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         cursor: 'pointer',
//                         color: '#ef4444',
//                         transition: 'all 0.2s'
//                       },
//                       onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#fecaca',
//                       onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#fee2e2'
//                     }, 'Delete')
//                   )
//                 )
//               )
//             )
//           )
//         )
//       ),

//       // Footer with Pagination
//       React.createElement('div', {
//         style: {
//           marginTop: '24px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '16px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             color: '#6b7280',
//             fontSize: '14px'
//           }
//         }, 'Showing 1-4 of 4 users'),
        
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '4px'
//           }
//         },
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer',
//               opacity: '0.5'
//             },
//             disabled: true
//           }, 'Previous'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer'
//             }
//           }, '1'),
          
//           React.createElement('button', {
//             style: {
//               padding: '8px 12px',
//               backgroundColor: 'white',
//               color: '#4b5563',
//               border: '1px solid #d1d5db',
//               borderRadius: '6px',
//               fontSize: '14px',
//               cursor: 'pointer',
//               opacity: '0.5'
//             },
//             disabled: true
//           }, 'Next')
//         )
//       ),

//       // Logout Button (bottom right)
//       React.createElement('div', {
//         style: {
//           marginTop: '24px',
//           display: 'flex',
//           justifyContent: 'flex-end'
//         }
//       },
//         React.createElement('button', {
//           onClick: handleLogout,
//           style: {
//             padding: '10px 24px',
//             backgroundColor: '#ef4444',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s'
//           },
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//         }, 'Logout')
//       )
//     )
//   );
// };

// export default Users;

















import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'user',
    company: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    isActive: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getUser(id);
      const user = response.data;
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
        phone: user.phone || '',
        role: user.role || 'user',
        company: user.company || '',
        address: user.address || {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        },
        isActive: user.isActive !== undefined ? user.isActive : true
      });
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load user');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isEditMode) {
        await userService.updateUser(id, formData);
        setSuccess('User updated successfully!');
      } else {
        await userService.createUser(formData);
        setSuccess('User created successfully!');
        setTimeout(() => {
          navigate('/admin/users');
        }, 2000);
      }
    } catch (err) {
      setError(err.message || `Failed to ${isEditMode ? 'update' : 'create'} user`);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditMode) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    }, 'Loading...');
  }

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '800px',
        margin: '0 auto'
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
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, isEditMode ? 'Edit User' : 'Add New User'),
        
        React.createElement('button', {
          onClick: () => navigate('/admin/users'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back to Users')
      ),

      // Messages
      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px'
        }
      }, error),

      success && React.createElement('div', {
        style: {
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px'
        }
      }, success),

      // Form
      React.createElement('form', {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        // Personal Information
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Personal Information'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'First Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'firstName',
              value: formData.firstName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Last Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'lastName',
              value: formData.lastName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Email *'),
            
            React.createElement('input', {
              type: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Phone Number'),
            
            React.createElement('input', {
              type: 'tel',
              name: 'phone',
              value: formData.phone,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        {!isEditMode && React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Password *'),
          
          React.createElement('input', {
            type: 'password',
            name: 'password',
            value: formData.password,
            onChange: handleChange,
            required: !isEditMode,
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        )},

        // Company & Role
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Company & Role'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Company'),
            
            React.createElement('input', {
              type: 'text',
              name: 'company',
              value: formData.company,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Role *'),
            
            React.createElement('select', {
              name: 'role',
              value: formData.role,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: 'user' }, 'User'),
              React.createElement('option', { value: 'admin' }, 'Admin')
            )
          )
        ),

        // Address
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Address'),

        React.createElement('div', {
          style: {
            marginBottom: '16px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Street Address'),
          
          React.createElement('input', {
            type: 'text',
            name: 'address.street',
            value={formData.address.street},
            onChange={handleChange},
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'City'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.city',
              value={formData.address.city},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'State'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.state',
              value={formData.address.state},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Zip Code'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.zipCode',
              value={formData.address.zipCode},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Country'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.country',
              value={formData.address.country},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Status
        React.createElement('div', {
          style: {
            marginBottom: '32px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }
          },
            React.createElement('input', {
              type: 'checkbox',
              name: 'isActive',
              checked={formData.isActive},
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })},
              style: {
                width: '16px',
                height: '16px',
                cursor: 'pointer'
              }
            }),
            
            React.createElement('span', {
              style: {
                fontSize: '14px',
                color: '#374151'
              }
            }, 'Active Account')
          )
        ),

        // Submit Button
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '24px'
          }
        },
          React.createElement('button', {
            type: 'button',
            onClick: () => navigate('/admin/users'),
            style: {
              padding: '12px 24px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            type: 'submit',
            disabled: loading,
            style: {
              padding: '12px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }
          }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
        )
      )
    )
  );
};

export default UserForm;