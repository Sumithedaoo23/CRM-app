







import React, { useState } from 'react';

const Profile = () => {
  // Try to get user from localStorage, fallback to default
  const savedUser = JSON.parse(localStorage.getItem('crm-user') || '{}');
  
  const [formData, setFormData] = useState({
    firstName: savedUser?.name?.split(' ')[0] || 'Admin',
    lastName: savedUser?.name?.split(' ')[1] || 'User',
    phone: savedUser?.phone || '+1 234 567 8900',
    email: savedUser?.email || 'admin@crm.com',
    password: 'password',
    appRole: savedUser?.role || 'Administrator',
    company: savedUser?.company || 'CRM Solutions',
    joinDate: savedUser?.joinDate || 'January 2024',
    disabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const userToSave = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.appRole,
      phone: formData.phone,
      company: formData.company,
      joinDate: formData.joinDate
    };
    localStorage.setItem('crm-user', JSON.stringify(userToSave));
    alert('Profile updated successfully!');
  };

  const handleReset = () => {
    setFormData({
      firstName: 'Admin',
      lastName: 'User',
      phone: '+1 234 567 8900',
      email: 'admin@crm.com',
      password: 'password',
      appRole: 'Administrator',
      company: 'CRM Solutions',
      joinDate: 'January 2024',
      disabled: false,
    });
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '800px'
    }
  },
    // Header
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Edit Profile'),

    // Profile Avatar Section
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '1px solid #e5e7eb'
      }
    },
      React.createElement('div', {
        style: {
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: '600',
          color: '#ffffff'
        }
      }, (formData.firstName?.charAt(0) || 'A') + (formData.lastName?.charAt(0) || 'U')),
      
      React.createElement('div', null,
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px'
          }
        }, `${formData.firstName} ${formData.lastName}`),
        
        React.createElement('p', {
          style: {
            fontSize: '16px',
            color: '#6b7280'
          }
        }, formData.appRole)
      )
    ),

    // Form
    React.createElement('form', {
      onSubmit: handleSubmit
    },
      // Form Fields Grid
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '32px'
        }
      },
        // First Name
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'First Name'),
          
          React.createElement('input', {
            type: 'text',
            name: 'firstName',
            value: formData.firstName,
            onChange: handleChange,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Last Name
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Last Name'),
          
          React.createElement('input', {
            type: 'text',
            name: 'lastName',
            value: formData.lastName,
            onChange: handleChange,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Phone Number
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
            placeholder: 'Phone Number',
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Email
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'E-Mail'),
          
          React.createElement('input', {
            type: 'email',
            name: 'email',
            value: formData.email,
            onChange: handleChange,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Password
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Password'),
          
          React.createElement('input', {
            type: 'password',
            name: 'password',
            value: formData.password,
            onChange: handleChange,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Company
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
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // App Role
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'App Role'),
          
          React.createElement('input', {
            type: 'text',
            name: 'appRole',
            value: formData.appRole,
            readOnly: true,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              backgroundColor: '#f3f4f6',
              cursor: 'not-allowed'
            }
          })
        ),

        // Join Date
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Member Since'),
          
          React.createElement('input', {
            type: 'text',
            name: 'joinDate',
            value: formData.joinDate,
            onChange: handleChange,
            style: {
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }
          })
        ),

        // Disabled Checkbox
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gridColumn: 'span 2'
          }
        },
          React.createElement('input', {
            type: 'checkbox',
            name: 'disabled',
            checked: formData.disabled,
            onChange: handleChange,
            style: {
              marginRight: '8px',
              width: '16px',
              height: '16px',
              cursor: 'pointer'
            }
          }),
          
          React.createElement('label', {
            style: {
              fontSize: '14px',
              color: '#374151',
              cursor: 'pointer'
            }
          }, 'Disabled')
        )
      ),

      // Buttons
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '24px'
        }
      },
        React.createElement('button', {
          type: 'submit',
          style: {
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => e.target.style.backgroundColor = '#2563eb',
          onMouseLeave: (e) => e.target.style.backgroundColor = '#3b82f6'
        }, 'Submit'),
        
        React.createElement('button', {
          type: 'button',
          onClick: handleReset,
          style: {
            padding: '12px 24px',
            backgroundColor: '#ffffff',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => e.target.style.backgroundColor = '#f9fafb',
          onMouseLeave: (e) => e.target.style.backgroundColor = '#ffffff'
        }, 'Reset')
      )
    )
  );
};

export default Profile;