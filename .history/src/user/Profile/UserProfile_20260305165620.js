// import React from 'react';
// import { useAuth } from '../../context/AuthContext';

// const UserProfile = () => {
//   const { user } = useAuth();

//   return React.createElement('div', null,
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'My Profile'),
//     React.createElement('div', { style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
//       React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' } },
//         React.createElement('div', {
//           style: {
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             backgroundColor: '#10b981',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '32px',
//             fontWeight: 'bold'
//           }
//         }, user?.name?.charAt(0) || 'U'),
//         React.createElement('div', null,
//           React.createElement('h2', { style: { margin: '0 0 5px 0' } }, user?.name || 'User'),
//           React.createElement('p', { style: { color: '#6b7280', margin: 0 } }, user?.role || 'User')
//         )
//       ),
//       React.createElement('div', { style: { display: 'grid', gap: '15px' } },
//         React.createElement('div', null,
//           React.createElement('label', { style: { fontWeight: '500', display: 'block', marginBottom: '5px' } }, 'Email'),
//           React.createElement('p', { style: { margin: 0, color: '#10b981' } }, user?.email || 'user@example.com')
//         )
//       )
//     )
//   );
// };

// export default UserProfile;