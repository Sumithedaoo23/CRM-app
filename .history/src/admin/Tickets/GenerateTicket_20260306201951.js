// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';
// import { useAuth } from '../../context/AuthContext';

// const GenerateTicket = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();
  
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'general',
//     priority: 'medium'
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       await ticketService.createTicket(formData);
//       setSuccess('Ticket created successfully!');
//       setFormData({
//         title: '',
//         description: '',
//         category: 'general',
//         priority: 'medium'
//       });
      
//       // Redirect after 2 seconds
//       setTimeout(() => {
//         navigate('/user/tickets');
//       }, 2000);
//     } catch (err) {
//       setError(err.message || 'Failed to create ticket');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '600px',
//         margin: '0 auto'
//       }
//     },
//       // Header
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Generate New Ticket'),
        
//         React.createElement('button', {
//           onClick: () => navigate('/user/dashboard'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, '← Back to Dashboard')
//       ),

//       // Messages
//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px'
//         }
//       }, error),

//       success && React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px'
//         }
//       }, success),

//       // Form
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '32px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         // User Info (Read-only)
//         React.createElement('div', {
//           style: {
//             backgroundColor: '#f9fafb',
//             padding: '16px',
//             borderRadius: '8px',
//             marginBottom: '24px',
//             border: '1px solid #e5e7eb'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '16px'
//             }
//           },
//             React.createElement('div', null,
//               React.createElement('div', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#6b7280',
//                   marginBottom: '4px'
//                 }
//               }, 'Name'),
              
//               React.createElement('div', {
//                 style: {
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#111827'
//                 }
//               }, `${user?.firstName || ''} ${user?.lastName || ''}`)
//             ),
            
//             React.createElement('div', null,
//               React.createElement('div', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#6b7280',
//                   marginBottom: '4px'
//                 }
//               }, 'Email'),
              
//               React.createElement('div', {
//                 style: {
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#111827'
//                 }
//               }, user?.email || '')
//             )
//           )
//         ),

//         // Title
//         React.createElement('div', {
//           style: {
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Ticket Title *'),
          
//           React.createElement('input', {
//             type: 'text',
//             name: 'title',
//             value: formData.title,
//             onChange: handleChange,
//             placeholder: 'Brief summary of your issue',
//             required: true,
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),

//         // Description
//         React.createElement('div', {
//           style: {
//             marginBottom: '20px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Description *'),
          
//           React.createElement('textarea', {
//             name: 'description',
//             value: formData.description,
//             onChange: handleChange,
//             placeholder: 'Please provide detailed information about your issue...',
//             required: true,
//             rows: 6,
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               resize: 'vertical',
//               boxSizing: 'border-box'
//             }
//           })
//         ),

//         // Category and Priority
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Category'),
            
//             React.createElement('select', {
//               name: 'category',
//               value: formData.category,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 backgroundColor: 'white'
//               }
//             },
//               React.createElement('option', { value: 'general' }, 'General'),
//               React.createElement('option', { value: 'technical' }, 'Technical'),
//               React.createElement('option', { value: 'billing' }, 'Billing'),
//               React.createElement('option', { value: 'feature_request' }, 'Feature Request'),
//               React.createElement('option', { value: 'bug' }, 'Bug Report')
//             )
//           ),
          
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Priority'),
            
//             React.createElement('select', {
//               name: 'priority',
//               value: formData.priority,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 backgroundColor: 'white'
//               }
//             },
//               React.createElement('option', { value: 'low' }, 'Low'),
//               React.createElement('option', { value: 'medium' }, 'Medium'),
//               React.createElement('option', { value: 'high' }, 'High'),
//               React.createElement('option', { value: 'critical' }, 'Critical')
//             )
//           )
//         ),

//         // Submit Button
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => navigate('/user/dashboard'),
//             style: {
//               padding: '12px 24px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             type: 'submit',
//             disabled: loading,
//             style: {
//               padding: '12px 24px',
//               backgroundColor: '#10b981',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: loading ? 'not-allowed' : 'pointer',
//               opacity: loading ? 0.7 : 1
//             }
//           }, loading ? 'Creating...' : 'Create Ticket')
//         )
//       )
//     )
//   );
// };

// export default GenerateTicket;











import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const GenerateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    priority: 'medium'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Creating ticket:', formData);
      
      const response = await ticketService.createTicket(formData);
      
      console.log('Ticket created:', response);
      alert('✅ Ticket created successfully!');
      navigate('/user/ticket-status');
    } catch (error) {
      console.error('Failed:', error);
      setError(error.error || 'Failed to create ticket. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return React.createElement('div', { 
    style: { 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '20px'
    } 
  },
    React.createElement('h1', { 
      style: { 
        fontSize: '24px', 
        marginBottom: '24px',
        color: '#111827'
      } 
    }, 'Generate New Ticket'),
    
    error && React.createElement('div', {
      style: {
        backgroundColor: '#fee2e2',
        color: '#ef4444',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #fecaca'
      }
    }, error),
    
    React.createElement('form', { 
      onSubmit: handleSubmit, 
      style: { 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
      } 
    },
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { 
          style: { 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '500',
            color: '#374151'
          } 
        }, 'Title *'),
        React.createElement('input', {
          type: 'text',
          value: formData.title,
          onChange: (e) => setFormData({ ...formData, title: e.target.value }),
          style: { 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '4px',
            fontSize: '14px'
          },
          required: true,
          placeholder: 'Enter ticket title'
        })
      ),
      
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { 
          style: { 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '500',
            color: '#374151'
          } 
        }, 'Description *'),
        React.createElement('textarea', {
          value: formData.description,
          onChange: (e) => setFormData({ ...formData, description: e.target.value }),
          rows: 5,
          style: { 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'inherit'
          },
          required: true,
          placeholder: 'Describe your issue in detail'
        })
      ),
      
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { 
          style: { 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '500',
            color: '#374151'
          } 
        }, 'Priority'),
        React.createElement('select', {
          value: formData.priority,
          onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
          style: { 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '4px',
            fontSize: '14px'
          }
        },
          React.createElement('option', { value: 'low' }, 'Low'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'high' }, 'High'),
          React.createElement('option', { value: 'urgent' }, 'Urgent')
        )
      ),
      
      React.createElement('button', {
        type: 'submit',
        disabled: loading,
        style: {
          width: '100%',
          padding: '12px',
          backgroundColor: loading ? '#9ca3af' : '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }
      }, loading ? 'Creating...' : 'Create Ticket')
    )
  );
};

export default GenerateTicket;