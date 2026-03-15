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