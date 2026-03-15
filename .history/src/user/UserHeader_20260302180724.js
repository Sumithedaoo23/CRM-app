
// import React from 'react';

// const UserHeader = ({ onMenuClick, user, onLogout, isDark, onThemeToggle, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 30,
//     width: '100%'
//   };

//   const leftSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px'
//   };

//   const menuButtonStyle = {
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '20px',
//     transition: 'all 0.2s',
//     width: '44px',
//     height: '44px'
//   };

//   const logoStyle = {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#111827',
//     letterSpacing: '-0.5px'
//   };

//   const rightSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px'
//   };

//   const themeButtonStyle = {
//     padding: '10px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '15px',
//     fontWeight: '500',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     transition: 'all 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#10b981',
//     borderRadius: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   const userDetailsStyle = {
//     marginRight: '8px'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#111827',
//     lineHeight: '1.4'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#6b7280'
//   };

//   const logoutButtonStyle = {
//     padding: '10px 20px',
//     borderRadius: '40px',
//     backgroundColor: '#ef4444',
//     border: 'none',
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s'
//   };

//   return React.createElement('header', { style: headerStyle },
//     React.createElement('div', { style: leftSectionStyle },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: menuButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: logoStyle }, 'CRM')
//     ),

//     React.createElement('div', { style: rightSectionStyle },
//       React.createElement('button', {
//         onClick: onThemeToggle,
//         style: themeButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       },
//         isDark ? '☀️' : '🌙',
//         React.createElement('span', null, isDark ? 'Light' : 'Dark')
//       ),

//       React.createElement('div', { style: userInfoStyle },
//         React.createElement('div', { style: userDetailsStyle },
//           React.createElement('div', { style: userNameStyle },
//             user?.name || 'Regular User'
//           ),
//           React.createElement('div', { style: userRoleStyle },
//             'Regular User'
//           )
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'U'
//         )
//       ),

//       React.createElement('button', {
//         onClick: onLogout,
//         style: logoutButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//       }, 'Logout')
//     )
//   );
// };

// export default UserHeader;











// import React from 'react';

// const UserHeader = ({ onMenuClick, user, onLogout, isDark, onThemeToggle, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 30,
//     width: '100%'
//   };

//   const leftSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px'
//   };

//   const menuButtonStyle = {
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '20px',
//     transition: 'all 0.2s',
//     width: '44px',
//     height: '44px'
//   };

//   const logoStyle = {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#111827',
//     letterSpacing: '-0.5px'
//   };

//   const rightSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px'
//   };

//   const themeButtonStyle = {
//     padding: '10px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '15px',
//     fontWeight: '500',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     transition: 'all 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#10b981',
//     borderRadius: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   const userDetailsStyle = {
//     marginRight: '8px'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#111827',
//     lineHeight: '1.4'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#6b7280'
//   };

//   const logoutButtonStyle = {
//     padding: '10px 20px',
//     borderRadius: '40px',
//     backgroundColor: '#ef4444',
//     border: 'none',
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s'
//   };

//   const handleMenuClick = (e) => {
//     e.stopPropagation();
//     console.log('Menu button clicked');
//     if (onMenuClick) {
//       onMenuClick();
//     }
//   };

//   const handleThemeClick = (e) => {
//     e.stopPropagation();
//     if (onThemeToggle) {
//       onThemeToggle();
//     }
//   };

//   const handleLogoutClick = (e) => {
//     e.stopPropagation();
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   return React.createElement('header', { style: headerStyle },
//     // Left Section
//     React.createElement('div', { style: leftSectionStyle },
//       React.createElement('button', {
//         onClick: handleMenuClick,
//         style: menuButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: logoStyle }, 'CRM')
//     ),

//     // Right Section
//     React.createElement('div', { style: rightSectionStyle },
//       // Theme Toggle
//       React.createElement('button', {
//         onClick: handleThemeClick,
//         style: themeButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       },
//         isDark ? '☀️' : '🌙',
//         React.createElement('span', null, isDark ? 'Light' : 'Dark')
//       ),

//       // User Info
//       React.createElement('div', { style: userInfoStyle },
//         React.createElement('div', { style: userDetailsStyle },
//           React.createElement('div', { style: userNameStyle },
//             user?.name || 'Regular User'
//           ),
//           React.createElement('div', { style: userRoleStyle },
//             'Regular User'
//           )
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'R'
//         )
//       ),

//       // Logout Button
//       React.createElement('button', {
//         onClick: handleLogoutClick,
//         style: logoutButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//       }, 'Logout')
//     )
//   );
// };

// export default UserHeader;











// import React from 'react';

// const UserHeader = ({ onMenuClick, user, onLogout, isDark, onThemeToggle, isSidebarOpen }) => {
//   return React.createElement('div', {
//     style: {
//       height: '70px',
//       backgroundColor: 'white',
//       borderBottom: '1px solid #e5e7eb',
//       padding: '0 24px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between'
//     }
//   },
//     React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: {
//           padding: '10px',
//           borderRadius: '8px',
//           backgroundColor: '#f3f4f6',
//           border: 'none',
//           cursor: 'pointer',
//           fontSize: '20px',
//           width: '44px',
//           height: '44px'
//         }
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: { fontSize: '24px', fontWeight: '700' } }, 'CRM')
//     ),

//     React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px' } },
//       React.createElement('button', {
//         onClick: onThemeToggle,
//         style: {
//           padding: '10px 16px',
//           borderRadius: '40px',
//           backgroundColor: '#f3f4f6',
//           border: 'none',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px'
//         }
//       },
//         isDark ? '☀️' : '🌙',
//         React.createElement('span', null, isDark ? 'Light' : 'Dark')
//       ),

//       React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
//         React.createElement('div', { style: { textAlign: 'right' } },
//           React.createElement('div', { style: { fontSize: '14px', fontWeight: '600' } }, user?.name || 'Regular User'),
//           React.createElement('div', { style: { fontSize: '12px', color: '#6b7280' } }, 'Regular User')
//         ),
        
//         React.createElement('div', {
//           style: {
//             width: '40px',
//             height: '40px',
//             backgroundColor: '#10b981',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             fontWeight: '600'
//           }
//         }, user?.name?.charAt(0) || 'R')
//       ),

//       React.createElement('button', {
//         onClick: onLogout,
//         style: {
//           padding: '10px 20px',
//           borderRadius: '40px',
//           backgroundColor: '#ef4444',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//           fontSize: '14px',
//           fontWeight: '500'
//         }
//       }, 'Logout')
//     )
//   );
// };

// export default UserHeader;








import React from 'react';

const UserHeader = ({ onMenuClick, user, onLogout, isDark, onThemeToggle, isSidebarOpen }) => {
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      height: '70px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 30,
      width: '100%'
    }
  },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
      React.createElement('button', {
        onClick: onMenuClick,
        style: {
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#f3f4f6',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      }, isSidebarOpen ? '✕' : '☰'),
      
      React.createElement('span', { style: { fontSize: '24px', fontWeight: '700', color: '#111827' } }, 'CRM')
    ),

    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px' } },
      React.createElement('button', {
        onClick: onThemeToggle,
        style: {
          padding: '10px 16px',
          borderRadius: '40px',
          backgroundColor: '#f3f4f6',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          fontWeight: '500',
          color: '#4b5563',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      },
        isDark ? '☀️' : '🌙',
        React.createElement('span', null, isDark ? 'Light' : 'Dark')
      ),

      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        React.createElement('div', { style: { textAlign: 'right' } },
          React.createElement('div', { style: { fontSize: '14px', fontWeight: '600', color: '#111827' } },
            user?.name || 'Regular User'
          ),
          React.createElement('div', { style: { fontSize: '12px', color: '#6b7280' } },
            'Regular User'
          )
        ),
        
        React.createElement('div', {
          style: {
            width: '40px',
            height: '40px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '16px'
          }
        }, user?.name?.charAt(0) || 'R')
      ),

      React.createElement('button', {
        onClick: onLogout,
        style: {
          padding: '10px 20px',
          borderRadius: '40px',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.2s'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
      }, 'Logout')
    )
  );
};

export default UserHeader;