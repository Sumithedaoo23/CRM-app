// // Header.js - Fixed
// import React from 'react';

// const Header = ({ onMenuClick, user, onLogout, isDark, onThemeToggle, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000,
//     width: '100%',
//     boxSizing: 'border-box'
//   };

//   const leftSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//     flexShrink: 0
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
//     height: '44px',
//     flexShrink: 0
//   };

//   const logoStyle = {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#111827',
//     letterSpacing: '-0.5px',
//     whiteSpace: 'nowrap'
//   };

//   const rightSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     flexShrink: 0,
//     marginLeft: 'auto'
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
//     transition: 'all 0.2s',
//     whiteSpace: 'nowrap'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     whiteSpace: 'nowrap'
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
//     fontSize: '16px',
//     flexShrink: 0
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
//     transition: 'all 0.2s',
//     whiteSpace: 'nowrap'
//   };

//   const handleMenuClick = (e) => {
//     e.stopPropagation();
//     console.log('Menu button clicked', isSidebarOpen);
//     if (onMenuClick) {
//       onMenuClick();
//     }
//   };

//   const handleThemeClick = (e) => {
//     e.stopPropagation();
//     console.log('Theme button clicked');
//     if (onThemeToggle) {
//       onThemeToggle();
//     }
//   };

//   const handleLogoutClick = (e) => {
//     e.stopPropagation();
//     console.log('Logout button clicked');
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   return React.createElement('header', {
//     style: headerStyle
//   },
//     // Left Section with Menu Button and Logo
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
//       // Theme Toggle Button
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
//       React.createElement('div', {
//         style: userInfoStyle,
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//       },
//         React.createElement('div', { style: userDetailsStyle },
//           React.createElement('div', { style: userNameStyle },
//             user?.name || 'Admin User'
//           ),
//           React.createElement('div', { style: userRoleStyle },
//             user?.role || 'Administrator'
//           )
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'A'
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

// export default Header;
















import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Contacts from './components/Contacts/Contacts';
import Leads from './components/Leads/Leads';
import Roles from './components/Roles/Roles';
import Permissions from './components/Permissions/Permissions';
import Profile from './components/Profile/Profile';
import Tickets from './components/Tickets/Tickets';

// Import User Components
import UserLayout from './user/UserLayout';
import UserDashboard from './user/UserDashboard';
import UserProfile from './user/UserProfile';
import UserContacts from './user/UserContacts';
import UserTickets from './user/UserTickets';
import UserGenerateTicket from './user/UserGenerateTicket';
import UserTicketStatus from './user/UserTicketStatus';

// Simple auth check
const isAuthenticated = (user) => {
  return user !== null && user !== undefined;
};

const isAdmin = (user) => {
  return user?.role === 'Administrator' || user?.isAdmin === true;
};

function App() {
  const { user } = useAuth();
  const authenticated = isAuthenticated(user);
  const admin = isAdmin(user);

  console.log('Current user:', user);
  console.log('Is admin:', admin);

  return React.createElement(Routes, null,
    // Login route
    React.createElement(Route, { 
      path: '/login', 
      element: (() => {
        if (authenticated) {
          return React.createElement(Navigate, { 
            to: admin ? '/dashboard' : '/user/dashboard', 
            replace: true 
          });
        }
        return React.createElement(Login);
      })()
    }),
    
    // Admin Routes (using Layout) - MAIN ROUTES WITHOUT NESTING
    React.createElement(Route, { 
      path: '/dashboard', 
      element: (authenticated && admin) 
        ? React.createElement(Layout, null, React.createElement(Dashboard))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/profile', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Profile))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/users', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Users))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/contacts', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Contacts))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/leads', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Leads))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/roles', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Roles))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/permissions', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Permissions))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/tickets', 
      element: (authenticated && admin)
        ? React.createElement(Layout, null, React.createElement(Tickets))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    // User Routes (using UserLayout)
    React.createElement(Route, { 
      path: '/user/dashboard', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserDashboard))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/user/profile', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserProfile))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/user/contacts', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserContacts))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/user/tickets', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserTickets))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/user/generate-ticket', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserGenerateTicket))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    React.createElement(Route, { 
      path: '/user/ticket-status', 
      element: (authenticated && !admin)
        ? React.createElement(UserLayout, null, React.createElement(UserTicketStatus))
        : React.createElement(Navigate, { to: '/login', replace: true })
    }),
    
    // Root redirect
    React.createElement(Route, { 
      path: '/', 
      element: React.createElement(Navigate, { 
        to: (() => {
          if (authenticated) {
            return admin ? '/dashboard' : '/user/dashboard';
          }
          return '/login';
        })(),
        replace: true 
      })
    }),
    
    // Catch all
    React.createElement(Route, { 
      path: '*', 
      element: React.createElement(Navigate, { 
        to: (() => {
          if (authenticated) {
            return admin ? '/dashboard' : '/user/dashboard';
          }
          return '/login';
        })(),
        replace: true 
      })
    })
  );
}

export default App;