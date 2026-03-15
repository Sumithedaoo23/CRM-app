import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserGenerateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ticket created successfully!');
    navigate('/user/tickets');
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Generate New Ticket'),

    React.createElement('form', {
      onSubmit: handleSubmit
    },
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
            color: '#374151',
            marginBottom: '6px'
          }
        }, 'Title'),
        
        React.createElement('input', {
          type: 'text',
          value: formData.title,
          onChange: (e) => setFormData({...formData, title: e.target.value}),
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px'
          },
          required: true
        })
      ),

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
            color: '#374151',
            marginBottom: '6px'
          }
        }, 'Description'),
        
        React.createElement('textarea', {
          value: formData.description,
          onChange: (e) => setFormData({...formData, description: e.target.value}),
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            minHeight: '120px'
          },
          required: true
        })
      ),

      React.createElement('div', {
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
        }, 'Priority'),
        
        React.createElement('select', {
          value: formData.priority,
          onChange: (e) => setFormData({...formData, priority: e.target.value}),
          style: {
            width: '100%',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px'
          }
        },
          React.createElement('option', { value: 'high' }, 'High'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'low' }, 'Low')
        )
      ),

      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end'
        }
      },
        React.createElement('button', {
          type: 'button',
          onClick: () => navigate('/user/tickets'),
          style: {
            padding: '12px 24px',
            backgroundColor: '#ffffff',
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
          style: {
            padding: '12px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }
        }, 'Create Ticket')
      )
    )
  );
};

export default UserGenerateTicket;