// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const AdminProfile = () => {
//   const { user } = useAuth();

//   return React.createElement('div', null,
//     React.createElement('h1', {
//       style: {
//         fontSize: '24px',
//         fontWeight: '700',
//         color: '#111827',
//         marginBottom: '24px'
//       }
//     }, 'Admin Profile'),
    
//     React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         padding: '24px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           alignItems: 'center',
//           gap: '20px',
//           marginBottom: '20px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             backgroundColor: '#667eea',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '32px',
//             fontWeight: 'bold'
//           }
//         }, user?.name?.charAt(0) || 'A'),
        
//         React.createElement('div', null,
//           React.createElement('h2', { style: { margin: '0 0 5px 0' } }, user?.name || 'Admin User'),
//           React.createElement('p', { style: { color: '#6b7280', margin: 0 } }, user?.role || 'Administrator')
//         )
//       ),
      
//       React.createElement('div', { style: { marginTop: '20px' } },
//         React.createElement('p', { style: { margin: '5px 0' } },
//           React.createElement('strong', null, 'Email: '), user?.email || 'admin@crm.com'
//         )
//       )
//     )
//   );
// };

// export default AdminProfile;

















