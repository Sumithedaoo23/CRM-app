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
    isActive: true,
    userHyperlink: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchUser();
    } else {
      generateDefaultCredentials();
    }
  }, [id]);

  const generateRandomPassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const generateDefaultCredentials = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    const defaultEmail = `user${randomNum}@crm.com`;
    const defaultPassword = generateRandomPassword();
    
    setFormData(prev => ({
      ...prev,
      email: defaultEmail,
      password: defaultPassword,
      userHyperlink: `https://crm.com/user/${randomNum}`
    }));
    setGeneratedPassword(defaultPassword);
  };

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
        isActive: user.isActive !== undefined ? user.isActive : true,
        userHyperlink: user.userHyperlink || `https://crm.com/user/${user._id?.slice(-6) || Math.random()}`
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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(formData.password).then(() => {
      setCopySuccess('✅ Password copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    }).catch(() => {
      setCopySuccess('❌ Failed to copy password');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleCopyHyperlink = () => {
    navigator.clipboard.writeText(formData.userHyperlink).then(() => {
      setCopySuccess('✅ Hyperlink copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    }).catch(() => {
      setCopySuccess('❌ Failed to copy hyperlink');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleRegeneratePassword = () => {
    const newPassword = generateRandomPassword();
    setFormData({
      ...formData,
      password: newPassword
    });
    setGeneratedPassword(newPassword);
    setCopySuccess('🔄 New password generated!');
    setTimeout(() => setCopySuccess(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      let response;
      if (isEditMode) {
        response = await userService.updateUser(id, formData);
        setSuccess('✅ User updated successfully!');
      } else {
        response = await userService.createUser(formData);
        setSuccess('✅ User created successfully!');
      }
      
      setSavedUser(response.data || formData);
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
        navigate('/admin/users');
      }, 5000);
    } catch (err) {
      setError(err.error || `Failed to ${isEditMode ? 'update' : 'create'} user`);
    } finally {
      setLoading(false);
    }
  };

  const handleHyperlinkClick = () => {
    window.open(formData.userHyperlink, '_blank');
  };

  if (loading && isEditMode) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading user data...');
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
        maxWidth: '700px',
        margin: '0 auto'
      }
    },
      // Header
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, isEditMode ? '✏️ Edit User' : '➕ Create New User'),
        
        React.createElement('button', {
          onClick: () => navigate('/admin/users'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back')
      ),

      // Success/Error Messages
      error ? React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '10px',
          borderRadius: '6px',
          marginBottom: '16px',
          fontSize: '14px'
        }
      }, error) : null,

      success ? React.createElement('div', {
        style: {
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '10px',
          borderRadius: '6px',
          marginBottom: '16px',
          fontSize: '14px',
          textAlign: 'center'
        }
      }, success) : null,

      // Main Form
      React.createElement('form', {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }
      },
        // Hyperlink Section (Top)
        React.createElement('div', {
          style: {
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }
          },
            React.createElement('label', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#0369a1',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '🔗 User Hyperlink'),
            
            React.createElement('button', {
              type: 'button',
              onClick: handleCopyHyperlink,
              style: {
                padding: '4px 12px',
                backgroundColor: '#0369a1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }
          },
            React.createElement('input', {
              type: 'url',
              name: 'userHyperlink',
              value: formData.userHyperlink,
              onChange: handleChange,
              placeholder: 'https://yourdomain.com/user/123',
              style: {
                flex: 1,
                padding: '10px',
                border: '1px solid #bae6fd',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'monospace'
              }
            }),
            
            React.createElement('button', {
              type: 'button',
              onClick: handleHyperlinkClick,
              style: {
                padding: '8px 12px',
                backgroundColor: 'white',
                color: '#0369a1',
                border: '1px solid #0369a1',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '🔗 Open')
          ),
          
          copySuccess ? React.createElement('p', {
            style: {
              marginTop: '8px',
              fontSize: '12px',
              color: copySuccess.includes('✅') ? '#10b981' : '#ef4444',
              textAlign: 'center'
            }
          }, copySuccess) : null
        ),

        // Password Section
        !isEditMode ? React.createElement('div', {
          style: {
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }
          },
            React.createElement('label', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '🔑 Generated Password'),
            
            React.createElement('button', {
              type: 'button',
              onClick: handleCopyPassword,
              style: {
                padding: '4px 12px',
                backgroundColor: '#166534',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy')
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }
          },
            React.createElement('div', {
              style: {
                flex: 1,
                position: 'relative'
              }
            },
              React.createElement('input', {
                type: showPassword ? 'text' : 'password',
                name: 'password',
                value: formData.password,
                onChange: handleChange,
                required: true,
                style: {
                  width: '100%',
                  padding: '10px',
                  paddingRight: '40px',
                  border: '1px solid #bbf7d0',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'monospace'
                }
              }),
              
              React.createElement('button', {
                type: 'button',
                onClick: () => setShowPassword(!showPassword),
                style: {
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#6b7280'
                }
              }, showPassword ? '👁️' : '👁️‍🗨️')
            ),
            
            React.createElement('button', {
              type: 'button',
              onClick: handleRegeneratePassword,
              style: {
                padding: '8px 12px',
                backgroundColor: 'white',
                color: '#166534',
                border: '1px solid #166534',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer'
              }
            }, '🔄 Regenerate')
          )
        ) : null,

        // Personal Information
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Personal Information'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
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
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
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
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Contact Information
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Contact Information'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Email *'),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '4px'
              }
            },
              React.createElement('input', {
                type: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleChange,
                required: true,
                style: {
                  flex: 1,
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }
              }),
              !isEditMode ? React.createElement('span', {
                style: {
                  padding: '8px 12px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#6b7280'
                }
              }, '@crm.com') : null
            )
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Phone Number'),
            
            React.createElement('input', {
              type: 'tel',
              name: 'phone',
              value: formData.phone,
              onChange: handleChange,
              placeholder: '+1 234 567 8900',
              style: {
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Role & Status
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Role & Status'),

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
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Role *'),
            
            React.createElement('select', {
              name: 'role',
              value: formData.role,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: 'user' }, '👤 User'),
              React.createElement('option', { value: 'admin' }, '👑 Admin')
            )
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '4px'
              }
            }, 'Status'),
            
            React.createElement('div', {
              style: {
                padding: '8px 0'
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
                  checked: formData.isActive,
                  onChange: (e) => setFormData({ ...formData, isActive: e.target.checked }),
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
                }, formData.isActive ? '✅ Active' : '❌ Inactive')
              )
            )
          )
        ),

        // Submit Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px'
          }
        },
          React.createElement('button', {
            type: 'button',
            onClick: () => navigate('/admin/users'),
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            type: 'submit',
            disabled: loading,
            style: {
              padding: '10px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }
          }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
        )
      )
    ),

    // Success Popup
    showPopup && savedUser ? React.createElement('div', {
      style: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        zIndex: 2000,
        animation: 'slideIn 0.3s ease'
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: '20px'
        }
      },
        React.createElement('div', {
          style: {
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            fontSize: '30px',
            color: 'white'
          }
        }, '✅'),
        
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px'
          }
        }, 'User Created Successfully!')
      ),

      // Hyperlink in popup
      React.createElement('div', {
        style: {
          padding: '12px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px',
          marginBottom: '16px',
          border: '1px solid #bae6fd'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '13px',
              fontWeight: '600',
              color: '#0369a1'
            }
          }, '🔗 User Hyperlink'),
          
          React.createElement('button', {
            onClick: () => {
              navigator.clipboard.writeText(savedUser.userHyperlink);
              alert('Hyperlink copied!');
            },
            style: {
              padding: '2px 8px',
              backgroundColor: '#0369a1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '11px',
              cursor: 'pointer'
            }
          }, 'Copy')
        ),
        
        React.createElement('div', {
          style: {
            padding: '8px',
            backgroundColor: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
            wordBreak: 'break-all'
          }
        }, savedUser.userHyperlink),
        
        React.createElement('button', {
          onClick: () => window.open(savedUser.userHyperlink, '_blank'),
          style: {
            marginTop: '8px',
            padding: '4px 12px',
            backgroundColor: 'white',
            color: '#0369a1',
            border: '1px solid #0369a1',
            borderRadius: '4px',
            fontSize: '11px',
            cursor: 'pointer',
            width: '100%'
          }
        }, '🔗 Open Link')
      ),

      // Password in popup (for new users)
      !isEditMode ? React.createElement('div', {
        style: {
          padding: '12px',
          backgroundColor: '#f0fdf4',
          borderRadius: '8px',
          marginBottom: '16px',
          border: '1px solid #bbf7d0'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '13px',
              fontWeight: '600',
              color: '#166534'
            }
          }, '🔑 Generated Password'),
          
          React.createElement('button', {
            onClick: () => {
              navigator.clipboard.writeText(savedUser.password);
              alert('Password copied!');
            },
            style: {
              padding: '2px 8px',
              backgroundColor: '#166534',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '11px',
              cursor: 'pointer'
            }
          }, 'Copy')
        ),
        
        React.createElement('div', {
          style: {
            padding: '8px',
            backgroundColor: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
            wordBreak: 'break-all'
          }
        }, savedUser.password),
        
        React.createElement('p', {
          style: {
            marginTop: '8px',
            fontSize: '11px',
            color: '#6b7280',
            fontStyle: 'italic'
          }
        }, 'Save this password. It won\'t be shown again.')
      ) : null,

      // User details in popup
      React.createElement('div', {
        style: {
          padding: '12px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '13px',
            marginBottom: '6px'
          }
        }, 
          React.createElement('strong', null, 'Name: '),
          `${savedUser.firstName || ''} ${savedUser.lastName || ''}`
        ),
        
        React.createElement('p', {
          style: {
            fontSize: '13px',
            marginBottom: '6px'
          }
        }, 
          React.createElement('strong', null, 'Email: '),
          savedUser.email
        ),
        
        React.createElement('p', {
          style: {
            fontSize: '13px'
          }
        }, 
          React.createElement('strong', null, 'Role: '),
          savedUser.role === 'admin' ? 'Admin' : 'User'
        )
      ),

      React.createElement('p', {
        style: {
          textAlign: 'center',
          fontSize: '12px',
          color: '#6b7280',
          marginTop: '16px'
        }
      }, 'Redirecting to users list...')
    ) : null
  );
};

export default UserForm;