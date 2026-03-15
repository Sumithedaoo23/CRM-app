// import React, { useState } from 'react';

// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');
//   const [formData, setFormData] = useState({
//     firstName: user?.name?.split(' ')[0] || 'Admin',
//     lastName: user?.name?.split(' ')[1] || 'User',
//     phone: '',
//     email: user?.email || 'admin@flatlogic.com',
//     password: 'password',
//     appRole: 'Administrator',
//     disabled: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
//           Edit Profile
//         </h1>
//       </div>

//       <div className="card">
//         <form onSubmit={handleSubmit}>
//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: '1fr', 
//             gap: '24px',
//             marginBottom: '24px' 
//           }}>
//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="form-input"
//                 placeholder="Phone Number"
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 E-Mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
//                 App Role
//               </label>
//               <input
//                 type="text"
//                 value={formData.appRole}
//                 readOnly
//                 className="form-input"
//                 style={{ backgroundColor: '#f3f4f6' }}
//               />
//             </div>

//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <input
//                 type="checkbox"
//                 name="disabled"
//                 checked={formData.disabled}
//                 onChange={handleChange}
//                 style={{ marginRight: '8px' }}
//               />
//               <label style={{ fontSize: '14px', color: '#374151' }}>
//                 Disabled
//               </label>
//             </div>
//           </div>

//           <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
//             <button type="submit" className="btn-primary">
//               Submit
//             </button>
//             <button type="button" className="btn-secondary">
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;















import React from 'react';

const Profile = () => {
  const user = {
    name: 'Admin User',
    email: 'admin@crm.com',
    role: 'Administrator',
    phone: '+1 234 567 8900',
    company: 'CRM Solutions',
    joinDate: 'January 2024'
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '800px'
    }
  },
    React.createElement('h1', {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }
    }, 'Profile'),

    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '1px solid #e5e7eb'
      }
    },
      React.createElement('div', {
        style: {
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: '600',
          color: '#ffffff'
        }
      }, user.name.charAt(0)),
      
      React.createElement('div', null,
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px'
          }
        }, user.name),
        
        React.createElement('p', {
          style: {
            fontSize: '16px',
            color: '#6b7280'
          }
        }, user.role)
      )
    ),

    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px'
      }
    },
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: '14px', color: '#6b7280', marginBottom: '4px' } }, 'Email'),
        React.createElement('p', { style: { fontSize: '16px', fontWeight: '500', color: '#111827' } }, user.email)
      ),
      
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: '14px', color: '#6b7280', marginBottom: '4px' } }, 'Phone'),
        React.createElement('p', { style: { fontSize: '16px', fontWeight: '500', color: '#111827' } }, user.phone)
      ),
      
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: '14px', color: '#6b7280', marginBottom: '4px' } }, 'Company'),
        React.createElement('p', { style: { fontSize: '16px', fontWeight: '500', color: '#111827' } }, user.company)
      ),
      
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: '14px', color: '#6b7280', marginBottom: '4px' } }, 'Member Since'),
        React.createElement('p', { style: { fontSize: '16px', fontWeight: '500', color: '#111827' } }, user.joinDate)
      )
    ),

    React.createElement('button', {
      style: {
        marginTop: '32px',
        padding: '12px 24px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer'
      }
    }, 'Edit Profile')
  );
};

export default Profile;