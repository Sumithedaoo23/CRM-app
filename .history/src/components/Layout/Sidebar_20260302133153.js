// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({ isOpen, onClose }) => {
//   const menuItems = [
//     { path: '/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/users', label: 'Users', icon: '👥' },
//     { path: '/contacts', label: 'Contacts', icon: '📞' },
//     { path: '/leads', label: 'Leads', icon: '🎯' },
//     { path: '/roles', label: 'Roles', icon: '🛡️' },
//     { path: '/permissions', label: 'Permissions', icon: '🔐' },
//     { path: '/profile', label: 'Profile', icon: '👤' },
//   ];

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={onClose}
//         />
//       )}
      
//       <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <h2 className="sidebar-title">Navigation</h2>
//           <button
//             onClick={onClose}
//             className="sidebar-close"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <nav className="sidebar-nav">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) => 
//                 `nav-item ${isActive ? 'active' : ''}`
//               }
//               onClick={onClose}
//             >
//               <span className="nav-icon">{item.icon}</span>
//               <span className="nav-label">{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
      
//       <style jsx>{`
//         .sidebar-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: rgba(0, 0, 0, 0.5);
//           z-index: 40;
//         }
        
//         .sidebar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           bottom: 0;
//           width: var(--sidebar-width);
//           background-color: var(--bg-primary);
//           box-shadow: var(--shadow-lg);
//           z-index: 50;
//           transform: translateX(-100%);
//           transition: transform 0.3s ease;
//         }
        
//         .sidebar.open {
//           transform: translateX(0);
//         }
        
//         .sidebar-header {
//           padding: 16px;
//           border-bottom: 1px solid var(--border-color);
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
        
//         .sidebar-title {
//           font-size: 18px;
//           font-weight: 600;
//           color: var(--text-primary);
//         }
        
//         .sidebar-close {
//           padding: 4px;
//           background: none;
//           border: none;
//           color: var(--text-secondary);
//           cursor: pointer;
//           border-radius: 4px;
//         }
        
//         .sidebar-close:hover {
//           background-color: var(--bg-tertiary);
//         }
        
//         .sidebar-nav {
//           padding: 16px 0;
//         }
        
//         .nav-item {
//           display: flex;
//           align-items: center;
//           padding: 12px 16px;
//           color: var(--text-primary);
//           text-decoration: none;
//           transition: background-color 0.2s;
//         }
        
//         .nav-item:hover {
//           background-color: var(--bg-tertiary);
//         }
        
//         .nav-item.active {
//           background-color: rgba(59, 130, 246, 0.1);
//           border-right: 3px solid var(--primary-color);
//           color: var(--primary-color);
//         }
        
//         .nav-icon {
//           margin-right: 12px;
//           font-size: 18px;
//         }
        
//         .nav-label {
//           font-size: 14px;
//           font-weight: 500;
//         }
        
//         @media (min-width: 768px) {
//           .sidebar {
//             position: static;
//             transform: translateX(0);
//           }
          
//           .sidebar-overlay {
//             display: none;
//           }
          
//           .sidebar-close {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Sidebar;












import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  console.log('Sidebar rendered - isOpen:', isOpen, 'User:', user);

  // FIXED: Use admin paths for admin users, user paths for regular users
  const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  const basePath = isAdmin ? '/admin' : '/user';
  
  const menuItems = [
    { path: `${basePath}/dashboard`, label: 'Dashboard', icon: '📊' },
    { path: `${basePath}/profile`, label: 'Profile', icon: '👤' },
  ];

  // Add admin-only menu items
  if (isAdmin) {
    menuItems.push(
      { path: '/admin/users', label: 'Users', icon: '👥' },
      { path: '/admin/contacts', label: 'Contacts', icon: '📞' },
      { path: '/admin/leads', label: 'Leads', icon: '🎯' },
      { path: '/admin/roles', label: 'Roles', icon: '🛡️' },
      { path: '/admin/permissions', label: 'Permissions', icon: '🔐' }
    );
  } else {
    // User-only menu items
    menuItems.push(
      { path: '/user/tickets', label: 'Tickets', icon: '🎫' },
      { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
      { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' }
    );
  }

  const handleLogout = () => {
    console.log('Sidebar logout clicked');
    
    if (logout && typeof logout === 'function') {
      logout();
    } else {
      localStorage.removeItem('crm-user');
      sessionStorage.clear();
    }
    
    if (onClose) onClose();
    navigate('/login', { replace: true });
    
    setTimeout(() => {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }, 100);
  };

  return React.createElement('div', null,
    // Overlay
    isOpen && React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      onClick: onClose
    }),
    
    // Sidebar - FIXED: Full screen height and proper positioning
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh', // Full viewport height
        width: '16rem', // Fixed width
        zIndex: 30,
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 300ms ease-in-out',
        display: 'flex',
        flexDirection: 'column'
      }
    },
      // Sidebar header with user info
      React.createElement('div', {
        style: {
          padding: '1rem',
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          flexShrink: 0 // Prevent header from shrinking
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }
        },
          React.createElement('div', {
            style: {
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: '#3b82f6',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              marginRight: '0.75rem'
            }
          }, user?.name?.charAt(0) || 'U'),
          
          React.createElement('div', null,
            React.createElement('p', {
              style: {
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#1f2937',
                margin: 0
              }
            }, user?.name || 'User'),
            React.createElement('p', {
              style: {
                fontSize: '0.75rem',
                color: '#6b7280',
                margin: '0.25rem 0 0 0'
              }
            }, user?.role || 'Role')
          )
        ),
        
        React.createElement('button', {
          onClick: onClose,
          style: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem',
            borderRadius: '0.375rem',
            color: '#4b5563',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }
        },
          React.createElement('svg', {
            style: { width: '1.5rem', height: '1.5rem' },
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24'
          },
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M6 18L18 6M6 6l12 12'
            })
          )
        )
      ),

      // Navigation menu - FIXED: Made scrollable with flex: 1
      React.createElement('nav', {
        style: {
          flex: 1,
          overflowY: 'auto',
          padding: '0.5rem 0'
        }
      },
        menuItems.map((item) => 
          React.createElement(NavLink, {
            key: item.path,
            to: item.path,
            style: ({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              margin: '0.25rem 0.5rem',
              color: '#374151',
              backgroundColor: isActive ? '#eff6ff' : 'transparent',
              borderLeft: isActive ? '3px solid #3b82f6' : 'none',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }),
            onClick: onClose
          },
            React.createElement('span', {
              style: { 
                marginRight: '0.75rem',
                fontSize: '1.125rem'
              }
            }, item.icon),
            React.createElement('span', {
              style: {
                fontSize: '0.875rem',
                fontWeight: 500
              }
            }, item.label)
          )
        )
      ),

      // Logout button - FIXED: Stick to bottom
      React.createElement('div', {
        style: {
          padding: '1rem',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#ffffff',
          flexShrink: 0 // Prevent footer from shrinking
        }
      },
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#ffffff',
            backgroundColor: '#ef4444',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }
        },
          React.createElement('span', { style: { marginRight: '0.5rem' } }, '🚪'),
          'Logout'
        )
      )
    )
  );
};

// Add responsive CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) {
      /* Show sidebar on desktop */
      [style*="transform: translateX(-100%)"] {
        transform: translateX(0) !important;
        position: relative !important;
        height: 100% !important;
      }
      
      /* Hide overlay on desktop */
      div[style*="background-color: rgba(0, 0, 0, 0.5)"] {
        display: none !important;
      }
      
      /* Hide close button on desktop */
      button[style*="position: absolute"] {
        display: none !important;
      }
    }
    
    /* Hover effects */
    a:hover {
      background-color: #f3f4f6 !important;
    }
    
    button:hover {
      opacity: 0.9;
    }
    
    /* Custom scrollbar for sidebar */
    nav[style*="overflow-y: auto"]::-webkit-scrollbar {
      width: 4px;
    }
    
    nav[style*="overflow-y: auto"]::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    nav[style*="overflow-y: auto"]::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 2px;
    }
    
    nav[style*="overflow-y: auto"]::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;
  document.head.appendChild(style);
}

export default Sidebar;