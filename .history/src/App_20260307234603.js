
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';

// // Admin Components
// import AdminLayout from './admin/Layout/AdminLayout';
// import AdminDashboard from './admin/Dashboard/AdminDashboard';
// import AdminUsers from './admin/Users/AdminUsers';
// import AdminProfile from './admin/AdminProfile';
// import AdminLeads from './admin/Leads/AdminLeads';
// import AdminRoles from './admin/Roles/AdminRoles';
// import AdminTickets from './admin/Tickets/AdminTickets';
// import AdminContacts from './admin/Contacts/AdminContacts';
// import AdminPermissions from './admin/Permissions/AdminPermissions';

// // Import User Form for create/edit
// import UserForm from './admin/Users/UserForm';

// // User Components
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/Profile/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/Tickets/GenerateTicket';
// import TicketStatus from './user/Tickets/TicketStatus';

// // Simple auth check
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'admin' || user?.isAdmin === true;
// };

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
//   const admin = isAdmin(user);

//   return React.createElement(Routes, null,
//     // Public Routes
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(LandingPage)
//     }),
    
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(Login)
//     }),
    
//     // ===== ADMIN ROUTES =====
//     React.createElement(Route, { 
//       path: '/admin', 
//       element: authenticated && admin 
//         ? React.createElement(AdminLayout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       // Dashboard
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(AdminDashboard) }),
      
//       // Profile
//       React.createElement(Route, { path: 'profile', element: React.createElement(AdminProfile) }),
      
//       // User Management Routes
//       React.createElement(Route, { path: 'users', element: React.createElement(AdminUsers) }),
//       React.createElement(Route, { path: 'users/new', element: React.createElement(UserForm) }),
//       React.createElement(Route, { path: 'users/:id', element: React.createElement(UserForm) }),
//       React.createElement(Route, { path: 'users/:id/edit', element: React.createElement(UserForm) }),
//       React.createElement(Route, { path: 'users/:id/view', element: React.createElement(AdminUsers) }), // This will open modal
      
//       // Other Admin Routes
//       React.createElement(Route, { path: 'contacts', element: React.createElement(AdminContacts) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(AdminLeads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(AdminRoles) }),
//       React.createElement(Route, { path: 'permissions', element: React.createElement(AdminPermissions) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(AdminTickets) })
//     ),
    
//     // ===== USER ROUTES =====
//     React.createElement(Route, { 
//       path: '/user', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(UserDashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(UserProfile) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(UserTickets) }),
//       React.createElement(Route, { path: 'generate-ticket', element: React.createElement(GenerateTicket) }),
//       React.createElement(Route, { path: 'ticket-status', element: React.createElement(TicketStatus) })
//     ),
    
//     // Catch all - redirect to home
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { to: '/', replace: true })
//     })
//   );
// }

// export default App;










import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

// Admin Components
import AdminLayout from './admin/Layout/AdminLayout';
import AdminDashboard from './admin/Dashboard/AdminDashboard';
import AdminUsers from './admin/Users/AdminUsers';
import AdminProfile from './admin/AdminProfile';
import AdminLeads from './admin/Leads/AdminLeads';
import AdminRoles from './admin/Roles/AdminRoles';
import AdminTickets from './admin/Tickets/AdminTickets';
import AdminContacts from './admin/Contacts/AdminContacts';
import AdminPermissions from './admin/Permissions/AdminPermissions';
import AdminMessages from './admin/Messages/AdminMessages';
import RoleForm from './admin/Roles/RoleForm';


// Import User Form for create/edit
import UserForm from './admin/Users/UserForm';

// User Components
import UserLayout from './user/UserLayout';
import UserDashboard from './user/UserDashboard';
import UserProfile from './user/Profile/UserProfile';
import UserTickets from './user/UserTickets';
import GenerateTicket from './user/Tickets/GenerateTicket';
import TicketStatus from './user/Tickets/TicketStatus';
import UserMessages from './user/UserMessages';

// Simple auth check
const isAuthenticated = (user) => {
  return user !== null && user !== undefined;
};

const isAdmin = (user) => {
  return user?.role === 'admin' || user?.isAdmin === true;
};

function App() {
  const { user } = useAuth();
  const authenticated = isAuthenticated(user);
  const admin = isAdmin(user);

  return React.createElement(Routes, null,
    // Public Routes
    React.createElement(Route, { 
      path: '/', 
      element: React.createElement(LandingPage)
    }),
    
    React.createElement(Route, { 
      path: '/login', 
      element: React.createElement(Login)
    }),
    
    // ===== ADMIN ROUTES =====
    React.createElement(Route, { 
      path: '/admin', 
      element: authenticated && admin 
        ? React.createElement(AdminLayout)
        : React.createElement(Navigate, { to: '/login', replace: true })
    },
      // Dashboard
      React.createElement(Route, { path: 'dashboard', element: React.createElement(AdminDashboard) }),
      
      // Profile
      React.createElement(Route, { path: 'profile', element: React.createElement(AdminProfile) }),
      
      // User Management Routes
      React.createElement(Route, { path: 'users', element: React.createElement(AdminUsers) }),
      React.createElement(Route, { path: 'users/new', element: React.createElement(UserForm) }),
      React.createElement(Route, { path: 'users/:id', element: React.createElement(UserForm) }),
      React.createElement(Route, { path: 'users/:id/edit', element: React.createElement(UserForm) }),
      React.createElement(Route, { path: 'users/:id/view', element: React.createElement(AdminUsers) }),
      
      // Messages Routes
      React.createElement(Route, { path: 'messages', element: React.createElement(AdminMessages) }),
      React.createElement(Route, { path: 'messages/:userId', element: React.createElement(AdminMessages) }),
      
      // Other Admin Routes
      React.createElement(Route, { path: 'contacts', element: React.createElement(AdminContacts) }),
      React.createElement(Route, { path: 'leads', element: React.createElement(AdminLeads) }),
      React.createElement(Route, { path: 'roles', element: React.createElement(AdminRoles) }),
      React.createElement(Route, { path: 'permissions', element: React.createElement(AdminPermissions) }),
      React.createElement(Route, { path: 'tickets', element: React.createElement(AdminTickets) }),
      React.createElement(Route, { path: 'roles/new', element: React.createElement(RoleForm) }),
      React.createElement(Route, { path: 'roles/:id', element: React.createElement(RoleForm) }),
    ),
    
    // ===== USER ROUTES =====
    React.createElement(Route, { 
      path: '/user', 
      element: authenticated && !admin
        ? React.createElement(UserLayout)
        : React.createElement(Navigate, { to: '/login', replace: true })
    },
      React.createElement(Route, { path: 'dashboard', element: React.createElement(UserDashboard) }),
      React.createElement(Route, { path: 'profile', element: React.createElement(UserProfile) }),
      React.createElement(Route, { path: 'tickets', element: React.createElement(UserTickets) }),
      React.createElement(Route, { path: 'generate-ticket', element: React.createElement(GenerateTicket) }),
      React.createElement(Route, { path: 'ticket-status', element: React.createElement(TicketStatus) }),
      // User Messages Routes
      React.createElement(Route, { path: 'messages', element: React.createElement(UserMessages) }),
      React.createElement(Route, { path: 'messages/:userId', element: React.createElement(UserMessages) })
    ),
    
    // Catch all - redirect to home
    React.createElement(Route, { 
      path: '*', 
      element: React.createElement(Navigate, { to: '/', replace: true })
    })
  );
}

export default App;