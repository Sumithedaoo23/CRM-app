
// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const UserDashboard = () => {
//   const { user } = useAuth();

//   return React.createElement('div', {
//     style: {
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       padding: '32px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     }
//   },
//     React.createElement('h1', {
//       style: {
//         fontSize: '28px',
//         fontWeight: '700',
//         color: '#111827',
//         marginBottom: '16px'
//       }
//     }, 'User Dashboard'),
    
//     React.createElement('p', {
//       style: {
//         fontSize: '18px',
//         color: '#4b5563',
//         marginBottom: '32px'
//       }
//     }, `Welcome back, ${user?.name || 'User'}!`),
    
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '20px'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '24px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { 
//           style: { 
//             fontSize: '16px', 
//             fontWeight: '600', 
//             color: '#6b7280',
//             marginBottom: '8px'
//           } 
//         }, 'Total Tickets'),
        
//         React.createElement('p', { 
//           style: { 
//             fontSize: '36px', 
//             fontWeight: '700', 
//             color: '#10b981',
//             margin: 0
//           } 
//         }, '12')
//       ),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '24px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { 
//           style: { 
//             fontSize: '16px', 
//             fontWeight: '600', 
//             color: '#6b7280',
//             marginBottom: '8px'
//           } 
//         }, 'Open Tickets'),
        
//         React.createElement('p', { 
//           style: { 
//             fontSize: '36px', 
//             fontWeight: '700', 
//             color: '#f59e0b',
//             margin: 0
//           } 
//         }, '5')
//       ),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '24px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { 
//           style: { 
//             fontSize: '16px', 
//             fontWeight: '600', 
//             color: '#6b7280',
//             marginBottom: '8px'
//           } 
//         }, 'Resolved'),
        
//         React.createElement('p', { 
//           style: { 
//             fontSize: '36px', 
//             fontWeight: '700', 
//             color: '#3b82f6',
//             margin: 0
//           } 
//         }, '7')
//       ),
      
//       React.createElement('div', {
//         style: {
//           backgroundColor: '#f9fafb',
//           padding: '24px',
//           borderRadius: '8px',
//           border: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h3', { 
//           style: { 
//             fontSize: '16px', 
//             fontWeight: '600', 
//             color: '#6b7280',
//             marginBottom: '8px'
//           } 
//         }, 'Contacts'),
        
//         React.createElement('p', { 
//           style: { 
//             fontSize: '36px', 
//             fontWeight: '700', 
//             color: '#8b5cf6',
//             margin: 0
//           } 
//         }, '24')
//       )
//     )
//   );
// };

// export default UserDashboard;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';
import { useAuth } from '../../context/AuthContext';

const GenerateTicket = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    priority: 'medium'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      await ticketService.createTicket(formData);
      setSuccess('Ticket created successfully!');
      setFormData({
        title: '',
        description: '',
        category: 'general',
        priority: 'medium'
      });
      
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/user/tickets');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to create ticket');
    } finally {
      setLoading(false);
    }
  };

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
        maxWidth: '600px',
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
        }, 'Generate New Ticket'),
        
        React.createElement('button', {
          onClick: () => navigate('/user/dashboard'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back to Dashboard')
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
        // User Info (Read-only)
        React.createElement('div', {
          style: {
            backgroundColor: '#f9fafb',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            border: '1px solid #e5e7eb'
          }
        },
          React.createElement('div', {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }
          },
            React.createElement('div', null,
              React.createElement('div', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px'
                }
              }, 'Name'),
              
              React.createElement('div', {
                style: {
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#111827'
                }
              }, `${user?.firstName || ''} ${user?.lastName || ''}`)
            ),
            
            React.createElement('div', null,
              React.createElement('div', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px'
                }
              }, 'Email'),
              
              React.createElement('div', {
                style: {
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#111827'
                }
              }, user?.email || '')
            )
          )
        ),

        // Title
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
          }, 'Ticket Title *'),
          
          React.createElement('input', {
            type: 'text',
            name: 'title',
            value: formData.title,
            onChange: handleChange,
            placeholder: 'Brief summary of your issue',
            required: true,
            style: {
              width: '100%',
              padding: '12px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        // Description
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
          }, 'Description *'),
          
          React.createElement('textarea', {
            name: 'description',
            value: formData.description,
            onChange: handleChange,
            placeholder: 'Please provide detailed information about your issue...',
            required: true,
            rows: 6,
            style: {
              width: '100%',
              padding: '12px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }
          })
        ),

        // Category and Priority
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
            }, 'Category'),
            
            React.createElement('select', {
              name: 'category',
              value: formData.category,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: 'general' }, 'General'),
              React.createElement('option', { value: 'technical' }, 'Technical'),
              React.createElement('option', { value: 'billing' }, 'Billing'),
              React.createElement('option', { value: 'feature_request' }, 'Feature Request'),
              React.createElement('option', { value: 'bug' }, 'Bug Report')
            )
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
            }, 'Priority'),
            
            React.createElement('select', {
              name: 'priority',
              value: formData.priority,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: 'low' }, 'Low'),
              React.createElement('option', { value: 'medium' }, 'Medium'),
              React.createElement('option', { value: 'high' }, 'High'),
              React.createElement('option', { value: 'critical' }, 'Critical')
            )
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
            onClick: () => navigate('/user/dashboard'),
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
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }
          }, loading ? 'Creating...' : 'Create Ticket')
        )
      )
    )
  );
};

export default GenerateTicket;