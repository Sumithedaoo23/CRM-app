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