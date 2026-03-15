
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