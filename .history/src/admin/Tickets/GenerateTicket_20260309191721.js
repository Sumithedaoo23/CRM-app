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
//       console.log('Creating ticket:', formData);
      
//       const response = await ticketService.createTicket(formData);
      
//       console.log('Ticket created:', response);
//       alert('✅ Ticket created successfully!');
//       navigate('/user/ticket-status');
//     } catch (error) {
//       console.error('Failed:', error);
//       setError(error.error || 'Failed to create ticket. Please try again.');
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
//           padding: '12px',
//           backgroundColor: loading ? '#9ca3af' : '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           fontSize: '16px',
//           cursor: loading ? 'not-allowed' : 'pointer'
//         }
//       }, loading ? 'Creating...' : 'Create Ticket')
//     )
//   );
// };

// export default GenerateTicket;















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import ticketService from '../services/ticketService';

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
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       console.log('Creating ticket:', formData);
//       console.log('Current user:', user);
      
//       const ticketData = {
//         ...formData,
//         userId: user?._id,
//         userName: user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'User'
//       };
      
//       const response = await ticketService.createTicket(ticketData);
      
//       console.log('Ticket created:', response);
//       alert('✅ Ticket created successfully!');
//       navigate('/user/ticket-status');
//     } catch (error) {
//       console.error('Failed:', error);
//       setError(error.error || 'Failed to create ticket. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     // Header
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         padding: '16px 24px',
//         borderBottom: '1px solid #e5e7eb',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }
//     },
//       React.createElement('h1', {
//         style: {
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#111827',
//           margin: 0
//         }
//       }, 'Generate New Ticket'),
      
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '12px'
//         }
//       },
//         React.createElement('button', {
//           onClick: () => handleNavigate('/user/dashboard'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#f3f4f6',
//             color: '#374151',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, 'Dashboard'),
        
//         React.createElement('button', {
//           onClick: () => handleNavigate('/user/messages'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#f3f4f6',
//             color: '#374151',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, 'Messages'),
        
//         React.createElement('button', {
//           onClick: () => handleNavigate('/user/profile'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: '#f3f4f6',
//             color: '#374151',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, 'Profile')
//       )
//     ),

//     // Navigation
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         padding: '12px 24px',
//         borderBottom: '1px solid #e5e7eb',
//         display: 'flex',
//         gap: '24px'
//       }
//     },
//       ['Dashboard', 'Generate Ticket', 'Ticket Status', 'Messages', 'Profile'].map((item) => {
//         const isActive = item === 'Generate Ticket';
//         return React.createElement('span', {
//           key: item,
//           onClick: () => {
//             if (item === 'Dashboard') handleNavigate('/user/dashboard');
//             else if (item === 'Generate Ticket') handleNavigate('/user/generate-ticket');
//             else if (item === 'Ticket Status') handleNavigate('/user/ticket-status');
//             else if (item === 'Messages') handleNavigate('/user/messages');
//             else if (item === 'Profile') handleNavigate('/user/profile');
//           },
//           style: {
//             fontSize: '14px',
//             color: isActive ? '#2563eb' : '#4b5563',
//             fontWeight: isActive ? '600' : '500',
//             cursor: 'pointer',
//             padding: '4px 0',
//             borderBottom: isActive ? '2px solid #2563eb' : 'none'
//           }
//         }, item);
//       })
//     ),

//     // Main Content
//     React.createElement('div', {
//       style: {
//         maxWidth: '800px',
//         margin: '24px auto',
//         padding: '0 24px'
//       }
//     },
//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#ef4444',
//           padding: '12px',
//           borderRadius: '6px',
//           marginBottom: '20px',
//           border: '1px solid #fecaca'
//         }
//       }, error),
      
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: {
//           backgroundColor: 'white',
//           padding: '32px',
//           borderRadius: '12px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         // Title
//         React.createElement('div', { style: { marginBottom: '20px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '600',
//               color: '#374151',
//               fontSize: '14px'
//             }
//           }, 'Title *'),
//           React.createElement('input', {
//             type: 'text',
//             value: formData.title,
//             onChange: (e) => setFormData({ ...formData, title: e.target.value }),
//             style: {
//               width: '100%',
//               padding: '12px 16px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.target.style.borderColor = '#3b82f6',
//             onBlur: (e) => e.target.style.borderColor = '#e5e7eb',
//             required: true,
//             placeholder: 'Enter ticket title'
//           })
//         ),
        
//         // Description
//         React.createElement('div', { style: { marginBottom: '20px' } },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '600',
//               color: '#374151',
//               fontSize: '14px'
//             }
//           }, 'Description *'),
//           React.createElement('textarea', {
//             value: formData.description,
//             onChange: (e) => setFormData({ ...formData, description: e.target.value }),
//             rows: 5,
//             style: {
//               width: '100%',
//               padding: '12px 16px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontFamily: 'inherit',
//               boxSizing: 'border-box',
//               resize: 'vertical',
//               transition: 'border-color 0.2s'
//             },
//             onFocus: (e) => e.target.style.borderColor = '#3b82f6',
//             onBlur: (e) => e.target.style.borderColor = '#e5e7eb',
//             required: true,
//             placeholder: 'Describe your issue in detail'
//           })
//         ),
        
//         // Category and Priority
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           // Category
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 marginBottom: '8px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 fontSize: '14px'
//               }
//             }, 'Category'),
//             React.createElement('select', {
//               value: formData.category,
//               onChange: (e) => setFormData({ ...formData, category: e.target.value }),
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 backgroundColor: 'white',
//                 cursor: 'pointer'
//               }
//             },
//               React.createElement('option', { value: 'general' }, 'General'),
//               React.createElement('option', { value: 'technical' }, 'Technical'),
//               React.createElement('option', { value: 'billing' }, 'Billing'),
//               React.createElement('option', { value: 'account' }, 'Account'),
//               React.createElement('option', { value: 'other' }, 'Other')
//             )
//           ),
          
//           // Priority
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 marginBottom: '8px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 fontSize: '14px'
//               }
//             }, 'Priority'),
//             React.createElement('select', {
//               value: formData.priority,
//               onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 backgroundColor: 'white',
//                 cursor: 'pointer'
//               }
//             },
//               React.createElement('option', { value: 'low' }, 'Low'),
//               React.createElement('option', { value: 'medium' }, 'Medium'),
//               React.createElement('option', { value: 'high' }, 'High'),
//               React.createElement('option', { value: 'urgent' }, 'Urgent')
//             )
//           )
//         ),
        
//         // Submit Button
//         React.createElement('button', {
//           type: 'submit',
//           disabled: loading,
//           style: {
//             width: '100%',
//             padding: '14px',
//             backgroundColor: loading ? '#9ca3af' : '#10b981',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => {
//             if (!loading) {
//               e.currentTarget.style.backgroundColor = '#059669';
//             }
//           },
//           onMouseLeave: (e) => {
//             if (!loading) {
//               e.currentTarget.style.backgroundColor = '#10b981';
//             }
//           }
//         }, loading ? 'Creating...' : 'Create Ticket')
//       )
//     )
//   );
// };

// export default GenerateTicket;
















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ticketService from '../services/ticketService';

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
  const [error, setError] = useState('');
  const [isApproved, setIsApproved] = useState(true);

  useEffect(() => {
    // Check if user is approved
    if (user) {
      setIsApproved(user.isApproved === true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isApproved) {
      setError('Your account is pending approval. Cannot create tickets.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Creating ticket:', formData);
      console.log('Current user:', user);
      
      const ticketData = {
        ...formData,
        userId: user?._id,
        userName: user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'User'
      };
      
      const response = await ticketService.createTicket(ticketData);
      
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

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // Header
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }
      },
        React.createElement('span', {
          style: {
            fontSize: '14px',
            color: '#6b7280'
          }
        }, user?.firstName || 'User'),
        
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, 'Logout')
      )
    ),

    // Navigation
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '12px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        gap: '24px'
      }
    },
      ['Dashboard', 'Generate Ticket', 'Ticket Status', 'Messages', 'Profile'].map((item) => {
        const isActive = item === 'Generate Ticket';
        return React.createElement('span', {
          key: item,
          onClick: () => {
            if (item === 'Dashboard') handleNavigate('/user/dashboard');
            else if (item === 'Generate Ticket') handleNavigate('/user/generate-ticket');
            else if (item === 'Ticket Status') handleNavigate('/user/ticket-status');
            else if (item === 'Messages') handleNavigate('/user/messages');
            else if (item === 'Profile') handleNavigate('/user/profile');
          },
          style: {
            fontSize: '14px',
            color: isActive ? '#2563eb' : '#4b5563',
            fontWeight: isActive ? '600' : '500',
            cursor: 'pointer',
            padding: '4px 0',
            borderBottom: isActive ? '2px solid #2563eb' : 'none'
          }
        }, item);
      })
    ),

    // Main Content
    React.createElement('div', {
      style: {
        maxWidth: '800px',
        margin: '24px auto',
        padding: '0 24px'
      }
    },
      // Approval warning
      !isApproved && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#b91c1c',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #fecaca',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: '500'
        }
      }, '⏳ Your account is pending approval. Cannot create tickets.'),

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
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        // Title
        React.createElement('div', { style: { marginBottom: '20px' } },
          React.createElement('label', {
            style: {
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
              fontSize: '14px'
            }
          }, 'Title *'),
          React.createElement('input', {
            type: 'text',
            value: formData.title,
            onChange: (e) => setFormData({ ...formData, title: e.target.value }),
            style: {
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
              backgroundColor: !isApproved ? '#f3f4f6' : 'white'
            },
            onFocus: (e) => {
              if (isApproved) e.target.style.borderColor = '#3b82f6';
            },
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb',
            required: true,
            disabled: !isApproved,
            placeholder: 'Enter ticket title'
          })
        ),
        
        // Description
        React.createElement('div', { style: { marginBottom: '20px' } },
          React.createElement('label', {
            style: {
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#374151',
              fontSize: '14px'
            }
          }, 'Description *'),
          React.createElement('textarea', {
            value: formData.description,
            onChange: (e) => setFormData({ ...formData, description: e.target.value }),
            rows: 5,
            style: {
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              resize: 'vertical',
              transition: 'border-color 0.2s',
              backgroundColor: !isApproved ? '#f3f4f6' : 'white'
            },
            onFocus: (e) => {
              if (isApproved) e.target.style.borderColor = '#3b82f6';
            },
            onBlur: (e) => e.target.style.borderColor = '#e5e7eb',
            required: true,
            disabled: !isApproved,
            placeholder: 'Describe your issue in detail'
          })
        ),
        
        // Category and Priority
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
                marginBottom: '8px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }
            }, 'Category'),
            React.createElement('select', {
              value: formData.category,
              onChange: (e) => setFormData({ ...formData, category: e.target.value }),
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: !isApproved ? '#f3f4f6' : 'white',
                cursor: isApproved ? 'pointer' : 'not-allowed',
                color: !isApproved ? '#9ca3af' : 'inherit'
              },
              disabled: !isApproved
            },
              React.createElement('option', { value: 'general' }, 'General'),
              React.createElement('option', { value: 'technical' }, 'Technical'),
              React.createElement('option', { value: 'billing' }, 'Billing'),
              React.createElement('option', { value: 'account' }, 'Account'),
              React.createElement('option', { value: 'other' }, 'Other')
            )
          ),
          
          // Priority
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }
            }, 'Priority'),
            React.createElement('select', {
              value: formData.priority,
              onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: !isApproved ? '#f3f4f6' : 'white',
                cursor: isApproved ? 'pointer' : 'not-allowed',
                color: !isApproved ? '#9ca3af' : 'inherit'
              },
              disabled: !isApproved
            },
              React.createElement('option', { value: 'low' }, 'Low'),
              React.createElement('option', { value: 'medium' }, 'Medium'),
              React.createElement('option', { value: 'high' }, 'High'),
              React.createElement('option', { value: 'urgent' }, 'Urgent')
            )
          )
        ),
        
        // Submit Button
        React.createElement('button', {
          type: 'submit',
          disabled: loading || !isApproved,
          style: {
            width: '100%',
            padding: '14px',
            backgroundColor: (loading || !isApproved) ? '#9ca3af' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: (loading || !isApproved) ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s'
          },
          onMouseEnter: (e) => {
            if (!loading && isApproved) {
              e.currentTarget.style.backgroundColor = '#059669';
            }
          },
          onMouseLeave: (e) => {
            if (!loading && isApproved) {
              e.currentTarget.style.backgroundColor = '#10b981';
            }
          }
        }, loading ? 'Creating...' : 'Create Ticket')
      )
    )
  );
};

export default GenerateTicket;