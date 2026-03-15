// import React from 'react';

// const UserProfile = () => {
//   return React.createElement('div', null,
//     // User profile content
//   );
// };

// export default UserProfile;








import React, { useState } from 'react';
import { useAuth } from './././';

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || 'Not provided',
    company: user?.company || 'Not provided'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile logic here
    setIsEditing(false);
  };

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Profile'),

    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }
    },
      // Profile Header
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
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: '600',
            color: '#ffffff'
          }
        }, user?.name?.charAt(0) || 'U'),
        
        React.createElement('div', null,
          React.createElement('h2', {
            style: {
              fontSize: '24px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '4px'
            }
          }, user?.name || 'Regular User'),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#6b7280'
            }
          }, user?.role || 'Regular User')
        )
      ),

      // Profile Form
      React.createElement('form', { onSubmit: handleSubmit },
        // Name Field
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Full Name'),
          
          isEditing ?
            React.createElement('input', {
              type: 'text',
              name: 'name',
              value: formData.name,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.2s',
                outline: 'none'
              },
              onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
              onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
            }) :
            React.createElement('p', {
              style: {
                fontSize: '16px',
                color: '#111827',
                padding: '12px 0'
              }
            }, formData.name)
        ),

        // Email Field
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Email Address'),
          
          isEditing ?
            React.createElement('input', {
              type: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.2s',
                outline: 'none'
              },
              onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
              onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
            }) :
            React.createElement('p', {
              style: {
                fontSize: '16px',
                color: '#111827',
                padding: '12px 0'
              }
            }, formData.email)
        ),

        // Phone Field
        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Phone Number'),
          
          isEditing ?
            React.createElement('input', {
              type: 'tel',
              name: 'phone',
              value: formData.phone === 'Not provided' ? '' : formData.phone,
              onChange: handleInputChange,
              placeholder: 'Enter phone number',
              style: {
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.2s',
                outline: 'none'
              },
              onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
              onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
            }) :
            React.createElement('p', {
              style: {
                fontSize: '16px',
                color: '#111827',
                padding: '12px 0'
              }
            }, formData.phone)
        ),

        // Company Field
        React.createElement('div', {
          style: {
            marginBottom: '32px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Company'),
          
          isEditing ?
            React.createElement('input', {
              type: 'text',
              name: 'company',
              value: formData.company === 'Not provided' ? '' : formData.company,
              onChange: handleInputChange,
              placeholder: 'Enter company name',
              style: {
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.2s',
                outline: 'none'
              },
              onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
              onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
            }) :
            React.createElement('p', {
              style: {
                fontSize: '16px',
                color: '#111827',
                padding: '12px 0'
              }
            }, formData.company)
        ),

        // Action Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px'
          }
        },
          isEditing ?
            React.createElement(React.Fragment, null,
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
                  transition: 'all 0.2s'
                },
                onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
                onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
              }, 'Save Changes'),
              
              React.createElement('button', {
                type: 'button',
                onClick: () => setIsEditing(false),
                style: {
                  padding: '12px 24px',
                  backgroundColor: 'white',
                  color: '#4b5563',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                },
                onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
                onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
              }, 'Cancel')
            ) :
            React.createElement('button', {
              type: 'button',
              onClick: () => setIsEditing(true),
              style: {
                padding: '12px 24px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              },
              onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
              onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
            }, 'Edit Profile')
        )
      )
    )
  );
};

export default UserProfile;