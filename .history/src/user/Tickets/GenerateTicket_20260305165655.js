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










import React from 'react';

const GenerateTicket = () => {
  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('h1', { style: { fontSize: '24px', fontWeight: '700', color: '#111827' } }, 'Generate Ticket'),
    React.createElement('p', { style: { color: '#6b7280', marginTop: '16px' } }, 'Ticket generation form coming soon...')
  );
};

export default GenerateTicket;