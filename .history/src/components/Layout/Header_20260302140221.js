// import React from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useTheme } from '../../context/ThemeContext';

// const Header = ({ onMenuClick }) => {
//   const { user, logout } = useAuth();
//   const { isDark, toggleTheme } = useTheme();

//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '12px 20px',
//     height: '64px',
//   };

//   const menuButtonStyle = {
//     padding: '8px',
//     borderRadius: '6px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     color: 'var(--text-primary)',
//   };

//   const themeButtonStyle = {
//     padding: '8px',
//     borderRadius: '6px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '18px',
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   };

//   const avatarStyle = {
//     width: '36px',
//     height: '36px',
//     backgroundColor: 'var(--primary-color)',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '500',
//   };

//   const logoutButtonStyle = {
//     padding: '6px 12px',
//     borderRadius: '6px',
//     backgroundColor: 'transparent',
//     border: '1px solid var(--border-color)',
//     color: 'var(--text-primary)',
//     cursor: 'pointer',
//     fontSize: '14px',
//   };

//   return (
//     <header className="header" style={headerStyle}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//         <button onClick={onMenuClick} style={menuButtonStyle} className="md:hidden">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
        
//         <h1 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }}>
//           CRM
//         </h1>
//       </div>

//       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//         <button onClick={toggleTheme} style={themeButtonStyle}>
//           {isDark ? '☀️' : '🌙'}
//         </button>

//         <div style={userInfoStyle}>
//           <div style={avatarStyle}>
//             {user?.name?.charAt(0) || 'U'}
//           </div>
//           <span style={{ color: 'var(--text-primary)', fontWeight: '500' }} className="hidden md:inline">
//             {user?.name}
//           </span>
//         </div>

//         <button onClick={logout} style={logoutButtonStyle}>
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;












import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '70px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 10
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const menuButtonStyle = {
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#4b5563',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px'
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  };

  const themeButtonStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#4b5563',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '4px 8px 4px 4px',
    borderRadius: '40px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    position: 'relative'
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
    fontSize: '16px'
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827'
  };

  const userRoleStyle = {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '2px'
  };

  const logoutButtonStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: '#ef4444',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  const handleLogout = () => {
    if (logout) {
      logout();
    }
  };

  const handleThemeClick = (e) => {
    e.stopPropagation();
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return React.createElement('header', {
    style: headerStyle
  },
    // Left Section
    React.createElement('div', { style: leftSectionStyle },
      React.createElement('button', {
        onClick: onMenuClick,
        style: menuButtonStyle,
        className: "md:hidden"
      },
        React.createElement('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2'
        },
          React.createElement('path', { d: 'M4 6h16M4 12h16M4 18h16' })
        )
      ),
      
      React.createElement('span', { style: logoStyle }, 'CRM')
    ),

    // Right Section
    React.createElement('div', { style: rightSectionStyle },
      React.createElement('button', {
        onClick: handleThemeClick,
        style: themeButtonStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      },
        isDark ? '☀️' : '🌙',
        React.createElement('span', null, isDark ? 'Light' : 'Dark')
      ),

      React.createElement('div', {
        style: userInfoStyle,
        onClick: () => setShowUserMenu(!showUserMenu),
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f9fafb'
      },
        React.createElement('div', { style: avatarStyle },
          user?.name?.charAt(0) || 'A'
        ),
        
        React.createElement('div', {
          style: { marginRight: '8px' }
        },
          React.createElement('div', { style: userNameStyle },
            user?.name || 'Admin User'
          ),
          React.createElement('div', { style: userRoleStyle },
            user?.role || 'Administrator'
          )
        )
      ),

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