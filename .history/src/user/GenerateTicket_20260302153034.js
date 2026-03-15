// import React from 'react';

// const GenerateTicket = () => {
//   return React.createElement('div', null,
//     // Ticket generation form
//   );
// };

// export default GenerateTicket;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'general'
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
    // Submit ticket logic here
    console.log('Ticket submitted:', formData);
    navigate('/user/tickets');
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
    }, 'Generate New Ticket'),

    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }
    },
      React.createElement('form', { onSubmit: handleSubmit },
        // Title Field
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
              color: '#4b5563',
              marginBottom: '6px'
            }
          }, 'Ticket Title *'),
          
          React.createElement('input', {
            type: 'text',
            name: 'title',
            value: formData.title,
            onChange: handleInputChange,
            placeholder: 'Enter a descriptive title',
            required: true,
            style: {
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'all 0.2s',
              outline: 'none'
            },
            onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
            onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
          })
        ),

        // Category and Priority Row
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          // Category
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563',
                marginBottom: '6px'
              }
            }, 'Category'),
            
            React.createElement('select', {
              name: 'category',
              value: formData.category,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: 'white',
                cursor: 'pointer',
                outline: 'none'
              }
            },
              React.createElement('option', { value: 'general' }, 'General Inquiry'),
              React.createElement('option', { value: 'technical' }, 'Technical Support'),
              React.createElement('option', { value: 'billing' }, 'Billing Issue'),
              React.createElement('option', { value: 'feature' }, 'Feature Request')
            )
          ),

          // Priority
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563',
                marginBottom: '6px'
              }
            }, 'Priority'),
            
            React.createElement('select', {
              name: 'priority',
              value: formData.priority,
              onChange: handleInputChange,
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: 'white',
                cursor: 'pointer',
                outline: 'none'
              }
            },
              React.createElement('option', { value: 'low' }, 'Low'),
              React.createElement('option', { value: 'medium' }, 'Medium'),
              React.createElement('option', { value: 'high' }, 'High'),
              React.createElement('option', { value: 'urgent' }, 'Urgent')
            )
          )
        ),

        // Description Field
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
          }, 'Description *'),
          
          React.createElement('textarea', {
            name: 'description',
            value: formData.description,
            onChange: handleInputChange,
            placeholder: 'Please provide detailed information about your issue...',
            required: true,
            rows: '6',
            style: {
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              transition: 'all 0.2s',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'inherit'
            },
            onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
            onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
          })
        ),

        // Action Buttons
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
          }, 'Cancel'),
          
          React.createElement('button', {
            type: 'submit',
            style: {
              padding: '12px 32px',
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
          }, 'Submit Ticket')
        )
      )
    )
  );
};

export default GenerateTicket;