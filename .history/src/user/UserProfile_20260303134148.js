import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || 'Regular',
    lastName: user?.name?.split(' ')[1] || 'User',
    phone: '+1 234 567 8900',
    email: user?.email || 'user@crm.com',
    joinDate: 'January 2024',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'My Profile'),

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
          backgroundColor: '#10b981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: '600',
          color: '#ffffff'
        }
      }, (formData.firstName?.charAt(0) || 'U') + (formData.lastName?.charAt(0) || 'U')),
      
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
        }, 'User')
      )
    ),

    React.createElement('form', {
      onSubmit: handleSubmit
    },
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }
      },
        React.createElement('div', null,
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'First Name'),
          React.createElement('input', {
            type: 'text',
            value: formData.firstName,
            onChange: (e) => setFormData({...formData, firstName: e.target.value}),
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px'
            }
          })
        ),
        
        React.createElement('div', null,
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'Last Name'),
          React.createElement('input', {
            type: 'text',
            value: formData.lastName,
            onChange: (e) => setFormData({...formData, lastName: e.target.value}),
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px'
            }
          })
        ),

        React.createElement('div', null,
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'Phone'),
          React.createElement('input', {
            type: 'text',
            value: formData.phone,
            onChange: (e) => setFormData({...formData, phone: e.target.value}),
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px'
            }
          })
        ),

        React.createElement('div', null,
          React.createElement('label', {
            style: { display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }
          }, 'Email'),
          React.createElement('input', {
            type: 'email',
            value: formData.email,
            readOnly: true,
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: '#f3f4f6'
            }
          })
        )
      ),

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
          cursor: 'pointer'
        }
      }, 'Update Profile')
    )
  );
};

export default UserProfile;