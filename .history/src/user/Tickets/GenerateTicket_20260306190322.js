// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const GenerateTicket = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'general',
//     priority: 'medium'
//   });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await ticketService.createTicket(formData);
//       alert('Ticket created successfully!');
//       navigate('/user/ticket-status');
//     } catch (error) {
//       alert('Failed to create ticket');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return React.createElement('div', { style: { maxWidth: '600px', margin: '0 auto' } },
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'Generate New Ticket'),
//     React.createElement('form', { onSubmit: handleSubmit, style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Title *'),
//         React.createElement('input', {
//           type: 'text',
//           value: formData.title,
//           onChange: (e) => setFormData({ ...formData, title: e.target.value }),
//           style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' },
//           required: true
//         })
//       ),
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Description *'),
//         React.createElement('textarea', {
//           value: formData.description,
//           onChange: (e) => setFormData({ ...formData, description: e.target.value }),
//           rows: 5,
//           style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' },
//           required: true
//         })
//       ),
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Priority'),
//         React.createElement('select', {
//           value: formData.priority,
//           onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
//           style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' }
//         },
//           React.createElement('option', { value: 'low' }, 'Low'),
//           React.createElement('option', { value: 'medium' }, 'Medium'),
//           React.createElement('option', { value: 'high' }, 'High')
//         )
//       ),
//       React.createElement('button', {
//         type: 'submit',
//         disabled: loading,
//         style: {
//           padding: '12px 24px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: loading ? 'not-allowed' : 'pointer',
//           opacity: loading ? 0.7 : 1
//         }
//       }, loading ? 'Creating...' : 'Create Ticket')
//     )
//   );
// };

// export default GenerateTicket;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const GenerateTicket = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'general',
//     priority: 'medium'
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       console.log('Submitting ticket:', formData);
//       const response = await ticketService.createTicket(formData);
//       console.log('Ticket created:', response);
      
//       alert('Ticket created successfully!');
//       navigate('/user/ticket-status');
//     } catch (error) {
//       console.error('Failed to create ticket:', error);
//       setError(error.error || 'Failed to create ticket. Please try again.');
//       alert('Failed to create ticket: ' + (error.error || 'Unknown error'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return React.createElement('div', { 
//     style: { 
//       maxWidth: '600px', 
//       margin: '0 auto',
//       padding: '20px'
//     } 
//   },
//     React.createElement('h1', { 
//       style: { 
//         fontSize: '24px', 
//         marginBottom: '24px',
//         color: '#111827'
//       } 
//     }, 'Generate New Ticket'),
    
//     error && React.createElement('div', {
//       style: {
//         backgroundColor: '#fee2e2',
//         color: '#ef4444',
//         padding: '12px',
//         borderRadius: '6px',
//         marginBottom: '20px',
//         border: '1px solid #fecaca'
//       }
//     }, error),
    
//     React.createElement('form', { 
//       onSubmit: handleSubmit, 
//       style: { 
//         backgroundColor: 'white', 
//         padding: '24px', 
//         borderRadius: '8px', 
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
//       } 
//     },
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Title *'),
//         React.createElement('input', {
//           type: 'text',
//           value: formData.title,
//           onChange: (e) => setFormData({ ...formData, title: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           },
//           required: true,
//           placeholder: 'Enter ticket title'
//         })
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Description *'),
//         React.createElement('textarea', {
//           value: formData.description,
//           onChange: (e) => setFormData({ ...formData, description: e.target.value }),
//           rows: 5,
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px',
//             fontFamily: 'inherit'
//           },
//           required: true,
//           placeholder: 'Describe your issue in detail'
//         })
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Category'),
//         React.createElement('select', {
//           value: formData.category,
//           onChange: (e) => setFormData({ ...formData, category: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           }
//         },
//           React.createElement('option', { value: 'general' }, 'General'),
//           React.createElement('option', { value: 'technical' }, 'Technical'),
//           React.createElement('option', { value: 'billing' }, 'Billing'),
//           React.createElement('option', { value: 'feature' }, 'Feature Request')
//         )
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Priority'),
//         React.createElement('select', {
//           value: formData.priority,
//           onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           }
//         },
//           React.createElement('option', { value: 'low' }, 'Low'),
//           React.createElement('option', { value: 'medium' }, 'Medium'),
//           React.createElement('option', { value: 'high' }, 'High'),
//           React.createElement('option', { value: 'urgent' }, 'Urgent')
//         )
//       ),
      
//       React.createElement('button', {
//         type: 'submit',
//         disabled: loading,
//         style: {
//           width: '100%',
//           padding: '12px 24px',
//           backgroundColor: loading ? '#9ca3af' : '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '16px',
//           fontWeight: '500',
//           cursor: loading ? 'not-allowed' : 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => !loading && (e.currentTarget.style.backgroundColor = '#059669'),
//         onMouseLeave: (e) => !loading && (e.currentTarget.style.backgroundColor = '#10b981')
//       }, loading ? 'Creating...' : 'Create Ticket')
//     )
//   );
// };

// export default GenerateTicket;










// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../../services/ticketService';

// const GenerateTicket = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'general',
//     priority: 'medium'
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Check if user is logged in on component mount
//   useEffect(() => {
//     const user = localStorage.getItem('crm-user');
//     if (!user || user === 'null') {
//       alert('Please login first');
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       console.log('Submitting ticket:', formData);
      
//       // Validate form data
//       if (!formData.title.trim()) {
//         throw new Error('Title is required');
//       }
//       if (!formData.description.trim()) {
//         throw new Error('Description is required');
//       }
      
//       const response = await ticketService.createTicket(formData);
//       console.log('Ticket created successfully:', response);
      
//       alert('Ticket created successfully!');
//       navigate('/user/ticket-status');
//     } catch (error) {
//       console.error('Failed to create ticket:', error);
      
//       let errorMessage = 'Failed to create ticket';
      
//       if (error.error) {
//         errorMessage = error.error;
//       } else if (error.message) {
//         errorMessage = error.message;
//       }
      
//       setError(errorMessage);
      
//       // If auth error, redirect to login
//       if (errorMessage.includes('Authentication') || errorMessage.includes('login')) {
//         setTimeout(() => {
//           localStorage.clear();
//           navigate('/login');
//         }, 2000);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return React.createElement('div', { 
//     style: { 
//       maxWidth: '600px', 
//       margin: '0 auto',
//       padding: '20px'
//     } 
//   },
//     React.createElement('h1', { 
//       style: { 
//         fontSize: '24px', 
//         marginBottom: '24px',
//         color: '#111827'
//       } 
//     }, 'Generate New Ticket'),
    
//     error && React.createElement('div', {
//       style: {
//         backgroundColor: '#fee2e2',
//         color: '#ef4444',
//         padding: '12px',
//         borderRadius: '6px',
//         marginBottom: '20px',
//         border: '1px solid #fecaca'
//       }
//     }, error),
    
//     React.createElement('form', { 
//       onSubmit: handleSubmit, 
//       style: { 
//         backgroundColor: 'white', 
//         padding: '24px', 
//         borderRadius: '8px', 
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
//       } 
//     },
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Title *'),
//         React.createElement('input', {
//           type: 'text',
//           value: formData.title,
//           onChange: (e) => setFormData({ ...formData, title: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           },
//           required: true,
//           placeholder: 'Enter ticket title'
//         })
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Description *'),
//         React.createElement('textarea', {
//           value: formData.description,
//           onChange: (e) => setFormData({ ...formData, description: e.target.value }),
//           rows: 5,
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px',
//             fontFamily: 'inherit'
//           },
//           required: true,
//           placeholder: 'Describe your issue in detail'
//         })
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Category'),
//         React.createElement('select', {
//           value: formData.category,
//           onChange: (e) => setFormData({ ...formData, category: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           }
//         },
//           React.createElement('option', { value: 'general' }, 'General'),
//           React.createElement('option', { value: 'technical' }, 'Technical'),
//           React.createElement('option', { value: 'billing' }, 'Billing'),
//           React.createElement('option', { value: 'feature' }, 'Feature Request')
//         )
//       ),
      
//       React.createElement('div', { style: { marginBottom: '16px' } },
//         React.createElement('label', { 
//           style: { 
//             display: 'block', 
//             marginBottom: '8px', 
//             fontWeight: '500',
//             color: '#374151'
//           } 
//         }, 'Priority'),
//         React.createElement('select', {
//           value: formData.priority,
//           onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
//           style: { 
//             width: '100%', 
//             padding: '10px', 
//             border: '1px solid #e5e7eb', 
//             borderRadius: '4px',
//             fontSize: '14px'
//           }
//         },
//           React.createElement('option', { value: 'low' }, 'Low'),
//           React.createElement('option', { value: 'medium' }, 'Medium'),
//           React.createElement('option', { value: 'high' }, 'High'),
//           React.createElement('option', { value: 'urgent' }, 'Urgent')
//         )
//       ),
      
//       React.createElement('button', {
//         type: 'submit',
//         disabled: loading,
//         style: {
//           width: '100%',
//           padding: '12px 24px',
//           backgroundColor: loading ? '#9ca3af' : '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '6px',
//           fontSize: '16px',
//           fontWeight: '500',
//           cursor: loading ? 'not-allowed' : 'pointer',
//           transition: 'background-color 0.2s'
//         }
//       }, loading ? 'Creating...' : 'Create Ticket')
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
      alert('Ticket created successfully!');
      navigate('/user/ticket-status');
    } catch (error) {
      console.error('Failed:', error);
      setError(error.error || 'Failed to create ticket');
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
        marginBottom: '20px'
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
            fontWeight: '500' 
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
            borderRadius: '4px'
          },
          required: true
        })
      ),
      
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { 
          style: { 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '500' 
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
            borderRadius: '4px'
          },
          required: true
        })
      ),
      
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { 
          style: { 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '500' 
          } 
        }, 'Priority'),
        React.createElement('select', {
          value: formData.priority,
          onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
          style: { 
            width: '100%', 
            padding: '10px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '4px'
          }
        },
          React.createElement('option', { value: 'low' }, 'Low'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'high' }, 'High')
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