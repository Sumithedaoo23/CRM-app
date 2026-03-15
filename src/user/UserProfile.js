import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || 'Regular',
    lastName: user?.name?.split(' ')[1] || 'User',
    email: user?.email || 'user@crm.com',
    phone: '+1 234 567 8900',
    company: 'User Company',
    joinDate: 'January 2024',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save to backend
    setMessage('Profile updated successfully!');
    setIsEditing(false);
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const getUserInitials = () => {
    return (formData.firstName?.charAt(0) || 'U') + (formData.lastName?.charAt(0) || 'U');
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'My Profile'),
      
      React.createElement('button', {
        onClick: () => setIsEditing(!isEditing),
        style: {
          padding: '10px 20px',
          backgroundColor: isEditing ? '#6b7280' : '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        },
        onMouseEnter: (e) => {
          if (isEditing) {
            e.currentTarget.style.backgroundColor = '#4b5563';
          } else {
            e.currentTarget.style.backgroundColor = '#059669';
          }
        },
        onMouseLeave: (e) => {
          if (isEditing) {
            e.currentTarget.style.backgroundColor = '#6b7280';
          } else {
            e.currentTarget.style.backgroundColor = '#10b981';
          }
        }
      }, isEditing ? 'Cancel' : 'Edit Profile')
    ),

    // Success Message
    message && React.createElement('div', {
      style: {
        backgroundColor: '#d1fae5',
        color: '#065f46',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '24px',
        fontSize: '14px'
      }
    }, message),

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
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#10b981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          fontWeight: '600',
          color: '#ffffff'
        }
      }, getUserInitials()),
      
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
        }, 'Regular User')
      )
    ),

    // Profile Form
    React.createElement('form', {
      onSubmit: handleSubmit
    },
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
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'First Name'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'firstName',
                value: formData.firstName,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
                required: true
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.firstName)
        ),

        // Last Name
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Last Name'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'lastName',
                value: formData.lastName,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
                required: true
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.lastName)
        ),

        // Email
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Email Address'),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              color: '#6b7280'
            }
          }, formData.email)
        ),

        // Phone
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Phone Number'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'tel',
                name: 'phone',
                value: formData.phone,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.phone)
        ),

        // Company
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Company'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'company',
                value: formData.company,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.company)
        ),

        // Member Since
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Member Since'),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              color: '#111827'
            }
          }, formData.joinDate)
        )
      ),

      // Submit Button (only show when editing)
      isEditing && React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '24px'
        }
      },
        React.createElement('button', {
          type: 'button',
          onClick: () => setIsEditing(false),
          style: {
            padding: '12px 24px',
            backgroundColor: '#ffffff',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Cancel'),
        
        React.createElement('button', {
          type: 'submit',
          style: {
            padding: '12px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
        }, 'Save Changes')
      )
    )
  );
};

export default UserProfile;