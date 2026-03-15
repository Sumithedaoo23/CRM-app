

// import React, { useState } from 'react';

// const Header = ({ onMenuClick, user, onLogout, isDark, onThemeToggle }) => {
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: 'white',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10
//   };

//   const leftSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px'
//   };

//   const menuButtonStyle = {
//     padding: '8px',
//     borderRadius: '8px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
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
//     gap: '24px'
//   };

//   const themeButtonStyle = {
//     padding: '8px 12px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '16px',
//     color: '#4b5563',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '4px 8px 4px 4px',
//     borderRadius: '40px',
//     backgroundColor: '#f9fafb',
//     cursor: 'pointer',
//     position: 'relative'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#3b82f6',
//     borderRadius: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#111827'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#6b7280',
//     marginTop: '2px'
//   };

//   const logoutButtonStyle = {
//     padding: '8px 16px',
//     borderRadius: '8px',
//     backgroundColor: '#ef4444',
//     border: 'none',
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500'
//   };

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   const handleThemeClick = (e) => {
//     e.stopPropagation();
//     if (onThemeToggle) {
//       onThemeToggle();
//     }
//   };

//   return React.createElement('header', {
//     style: headerStyle
//   },
//     // Left Section
//     React.createElement('div', { style: leftSectionStyle },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: menuButtonStyle,
//         className: "md:hidden"
//       },
//         React.createElement('svg', {
//           width: '24',
//           height: '24',
//           viewBox: '0 0 24 24',
//           fill: 'none',
//           stroke: 'currentColor',
//           strokeWidth: '2'
//         },
//           React.createElement('path', { d: 'M4 6h16M4 12h16M4 18h16' })
//         )
//       ),
      
//       React.createElement('span', { style: logoStyle }, 'CRM')
//     ),

//     // Right Section
//     React.createElement('div', { style: rightSectionStyle },
//       React.createElement('button', {
//         onClick: handleThemeClick,
//         style: themeButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       },
//         isDark ? '☀️' : '🌙',
//         React.createElement('span', null, isDark ? 'Light' : 'Dark')
//       ),

//       React.createElement('div', {
//         style: userInfoStyle,
//         onClick: () => setShowUserMenu(!showUserMenu),
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f9fafb'
//       },
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'A'
//         ),
        
//         React.createElement('div', {
//           style: { marginRight: '8px' }
//         },
//           React.createElement('div', { style: userNameStyle },
//             user?.name || 'Admin User'
//           ),
//           React.createElement('div', { style: userRoleStyle },
//             user?.role || 'Administrator'
//           )
//         )
//       ),

//       React.createElement('button', {
//         onClick: handleLogout,
//         style: logoutButtonStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//       }, 'Logout')
//     )
//   );
// };

// export default Header;

















import React from 'react';

const Header = ({ onMenuClick, user, onLogout, isDark, onThemeToggle }) => {
  const headerStyle = {
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
    zIndex: 40,
    width: '100%'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const menuButtonStyle = {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    color: '#4b5563',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'all 0.2s',
    width: '44px',
    height: '44px'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: '4px 0'
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const themeButtonStyle = {
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
    gap: '8px',
    transition: 'all 0.2s'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '6px 6px 6px 16px',
    borderRadius: '40px',
    backgroundColor: '#f3f4f6',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#3b82f6',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
  };

  const userDetailsStyle = {
    marginRight: '8px'
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827',
    lineHeight: '1.4'
  };

  const userRoleStyle = {
    fontSize: '12px',
    color: '#6b7280'
  };

  const logoutButtonStyle = {
    padding: '10px 20px',
    borderRadius: '40px',
    backgroundColor: '#ef4444',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)'
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleThemeClick = (e) => {
    e.stopPropagation();
    if (onThemeToggle) {
      onThemeToggle();
    }
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    if (onLogout) {
      onLogout();
    }
  };

  return React.createElement('header', {
    style: headerStyle
  },
    // Left Section with Menu Button and Logo
    React.createElement('div', { style: leftSectionStyle },
      React.createElement('button', {
        onClick: handleMenuClick,
        style: menuButtonStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      }, '☰'),
      
      React.createElement('span', { style: logoStyle }, 'CRM')
    ),

    // Right Section with Theme Toggle, User Info, and Logout
    React.createElement('div', { style: rightSectionStyle },
      // Theme Toggle Button
      React.createElement('button', {
        onClick: handleThemeClick,
        style: themeButtonStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      },
        isDark ? '☀️' : '🌙',
        React.createElement('span', null, isDark ? 'Light' : 'Dark')
      ),

      // User Info
      React.createElement('div', {
        style: userInfoStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      },
        React.createElement('div', { style: userDetailsStyle },
          React.createElement('div', { style: userNameStyle },
            user?.name || 'Admin User'
          ),
          React.createElement('div', { style: userRoleStyle },
            user?.role || 'Administrator'
          )
        ),
        
        React.createElement('div', { style: avatarStyle },
          user?.name?.charAt(0) || 'A'
        )
      ),

      // Logout Button
      React.createElement('button', {
        onClick: handleLogout,
        style: logoutButtonStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
      }, 'Logout')
    )
  );
};

export default Header;