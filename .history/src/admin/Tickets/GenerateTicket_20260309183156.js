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