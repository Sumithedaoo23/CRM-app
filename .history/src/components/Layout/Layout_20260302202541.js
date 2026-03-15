// import React, { useState } from 'react';
// import { Outlet, NavLink } from 'react-router-dom';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const menuItems = [
//     { path: '/dashboard', label: 'Dashboard', icon: '📊' },
//     { path: '/users', label: 'Users', icon: '👥' },
//     { path: '/contacts', label: 'Contacts', icon: '📞' },
//     { path: '/leads', label: 'Leads', icon: '🎯' },
//     { path: '/roles', label: 'Roles', icon: '🛡️' },
//     { path: '/permissions', label: 'Permissions', icon: '🔐' },
//     { path: '/profile', label: 'Profile', icon: '👤' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar */}
//       <div style={{
//         width: '250px',
//         backgroundColor: 'white',
//         borderRight: '1px solid #e5e7eb',
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         zIndex: 50,
//         transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease',
//       }}>
//         <div style={{ padding: '20px', borderBottom: '1px solid #e5e7eb' }}>
//           <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
//             Navigation
//           </h2>
//         </div>
        
//         <nav style={{ padding: '16px 0' }}>
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               style={({ isActive }) => ({
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '12px 20px',
//                 color: isActive ? '#3b82f6' : '#374151',
//                 textDecoration: 'none',
//                 backgroundColor: isActive ? '#eff6ff' : 'transparent',
//                 borderRight: isActive ? '3px solid #3b82f6' : 'none',
//               })}
//               onClick={() => setSidebarOpen(false)}
//             >
//               <span style={{ marginRight: '12px' }}>{item.icon}</span>
//               <span>{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             zIndex: 40,
//           }}
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '0' }}>
//         {/* Header */}
//         <header style={{
//           height: '64px',
//           backgroundColor: 'white',
//           borderBottom: '1px solid #e5e7eb',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '0 20px',
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               style={{
//                 padding: '8px',
//                 backgroundColor: 'transparent',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
            
//             <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginLeft: '16px' }}>
//               CRM
//             </h1>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <div style={{
//                 width: '36px',
//                 height: '36px',
//                 backgroundColor: '#3b82f6',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontWeight: '500',
//               }}>
//                 {user?.name?.charAt(0) || 'A'}
//               </div>
//               <span style={{ color: '#374151', fontWeight: '500' }}>
//                 {user?.name || 'Admin User'}
//               </span>
//             </div>
            
//             <button
//               onClick={handleLogout}
//               className="btn-secondary"
//             >
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Main Content Area */}
//         <main style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
//           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;













// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar Component */}
//       <Sidebar 
//         isOpen={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//         user={user}
//         onLogout={handleLogout}
//       />

//       {/* Main Content */}
//       <div style={{ 
//         flex: 1, 
//         display: 'flex', 
//         flexDirection: 'column', 
//         marginLeft: sidebarOpen && window.innerWidth > 1024 ? '280px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: '100%'
//       }}>
//         {/* Header */}
//         <Header 
//           onMenuClick={() => setSidebarOpen(!sidebarOpen)}
//           user={user}
//           onLogout={handleLogout}
//           isDark={false}
//           onThemeToggle={() => {}}
//           isSidebarOpen={sidebarOpen}
//         />

//         {/* Main Content Area */}
//         <main style={{ 
//           flex: 1, 
//           overflowY: 'auto', 
//           padding: '24px',
//           backgroundColor: '#f3f4f6'
//         }}>
//           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;








// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('crm-user');
//     window.location.href = '/login';
//   };

//   const user = JSON.parse(localStorage.getItem('crm-user') || '{}');

//   return React.createElement('div', { 
//     style: { 
//       display: 'flex', 
//       height: '100vh',
//       backgroundColor: '#f3f4f6'
//     } 
//   },
//     // Sidebar Component
//     React.createElement(Sidebar, {
//       isOpen: sidebarOpen,
//       onClose: () => setSidebarOpen(false),
//       user: user,
//       onLogout: handleLogout
//     }),

//     // Main Content
//     React.createElement('div', { 
//       style: { 
//         flex: 1, 
//         display: 'flex', 
//         flexDirection: 'column',
//         marginLeft: sidebarOpen && window.innerWidth > 1024 ? '280px' : '0',
//         transition: 'margin-left 0.3s ease',
//         width: '100%'
//       } 
//     },
//       // Header
//       React.createElement(Header, {
//         onMenuClick: () => setSidebarOpen(!sidebarOpen),
//         user: user,
//         onLogout: handleLogout,
//         isDark: false,
//         onThemeToggle: () => {},
//         isSidebarOpen: sidebarOpen
//       }),

//       // Main Content Area
//       React.createElement('main', { 
//         style: { 
//           flex: 1, 
//           overflowY: 'auto', 
//           padding: '24px',
//           backgroundColor: '#f3f4f6'
//         } 
//       },
//         React.createElement('div', { 
//           style: { 
//             maxWidth: '1200px', 
//             margin: '0 auto' 
//           } 
//         },
//           React.createElement(Outlet)
//         )
//       )
//     )
//   );
// };

// export default Layout;










import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('crm-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing user', e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('crm-user');
    window.location.href = '/login';
  };

  const toggleSidebar = () => {
    console.log('Toggling sidebar from', sidebarOpen, 'to', !sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const isDesktop = window.innerWidth > 1024;

  return React.createElement('div', { 
    style: { 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    } 
  },
    // Sidebar Component
    React.createElement(Sidebar, {
      isOpen: sidebarOpen,
      onClose: closeSidebar,
      user: user,
      onLogout: handleLogout
    }),

    // Main Content
    React.createElement('div', { 
      style: { 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: isDesktop && sidebarOpen ? '280px' : '0',
        transition: 'margin-left 0.3s ease',
        width: '100%'
      } 
    },
      // Header
      React.createElement(Header, {
        onMenuClick: toggleSidebar,
        user: user,
        onLogout: handleLogout,
        isDark: false,
        onThemeToggle: () => {},
        isSidebarOpen: sidebarOpen
      }),

      // Main Content Area
      React.createElement('main', { 
        style: { 
          flex: 1, 
          overflowY: 'auto', 
          padding: '24px',
          backgroundColor: '#f3f4f6'
        } 
      },
        React.createElement('div', { 
          style: { 
            maxWidth: '1200px', 
            margin: '0 auto' 
          } 
        },
          React.createElement(Outlet)
        )
      )
    )
  );
};

export default Layout;