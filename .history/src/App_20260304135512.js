
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';
// // import UserDashboard from './components/UserDashboard/UserDashboard';

// // Simple auth check
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// // Simple Protected Route
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
  
//   if (!isAuthenticated(user)) {
//     return React.createElement(Navigate, { to: '/login', replace: true });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(Login)
//     }),
    
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(ProtectedRoute, null,
//         React.createElement(Layout)
//       )
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(Dashboard) }),
//       // React.createElement(Route, { path: 'user-dashboard', element: React.createElement(UserDashboard) }),
//       React.createElement(Route, { path: 'users', element: React.createElement(Users) }),
//       React.createElement(Route, { path: 'contacts', element: React.createElement(Contacts) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(Leads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(Roles) }),
//       React.createElement(Route, { path: 'permissions', element: React.createElement(Permissions) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(Profile) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(Tickets) })
//     ),
    
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: isAuthenticated(user) ? '/dashboard' : '/login',
//         replace: true 
//       })
//     }),
    
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { to: '/login', replace: true })
//     })
//   );
// }

// export default App;


//dont touch  it it was workng code it was admin panel showing 













// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import LandingPage from './pages/LandingPage';

// // Admin Components (from admin folder)
// import AdminLayout from './admin/Layout/AdminLayout';
// import AdminDashboard from './admin/Dashboard/AdminDashboard';
// import AdminUsers from './admin/Users/AdminUsers';
// import AdminContacts from './admin/Contacts/AdminContacts';
// import AdminLeads from './admin/Leads/AdminLeads';
// import AdminRoles from './admin/Roles/AdminRoles';
// import AdminPermissions from './admin/Permissions/AdminPermissions';
// import AdminProfile from './admin/Profile/AdminProfile';
// import AdminTickets from './admin/Tickets/AdminTickets';

// // User Components (public)
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserContacts from './user/UserContacts';
// import UserTickets from './user/UserTickets';
// import UserGenerateTicket from './user/UserGenerateTicket';
// import UserTicketStatus from './user/UserTicketStatus';

// // Simple auth check
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// // Simple Protected Route
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
  
//   if (!isAuthenticated(user)) {
//     return React.createElement(Navigate, { to: '/login', replace: true });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     // Landing Page (Public)
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(LandingPage)
//     }),
    
//     // Login Page
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(Login)
//     }),
    
//     // ===== ADMIN ROUTES (Protected) =====
//     React.createElement(Route, { 
//       path: '/admin', 
//       element: React.createElement(ProtectedRoute, null,
//         React.createElement(AdminLayout)
//       )
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(AdminDashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(AdminProfile) }),
//       React.createElement(Route, { path: 'users', element: React.createElement(AdminUsers) }),
//       React.createElement(Route, { path: 'contacts', element: React.createElement(AdminContacts) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(AdminLeads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(AdminRoles) }),
//       React.createElement(Route, { path: 'permissions', element: React.createElement(AdminPermissions) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(AdminTickets) })
//     ),
    
//     // ===== USER ROUTES (Public) =====
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(UserLayout, null, React.createElement(UserDashboard))
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(UserLayout, null, React.createElement(UserProfile))
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/contacts', 
//       element: React.createElement(UserLayout, null, React.createElement(UserContacts))
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(UserLayout, null, React.createElement(UserTickets))
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(UserLayout, null, React.createElement(UserGenerateTicket))
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(UserLayout, null, React.createElement(UserTicketStatus))
//     }),
    
//     // Catch all - redirect to landing page
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { to: '/', replace: true })
//     })
//   );
// }

// export default App;











// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';

// // Admin Components
// import AdminLayout from './admin/Layout/AdminLayout';
// import AdminDashboard from './admin/Dashboard/AdminDashboard';
// import AdminUsers from './admin/Users/AdminUsers';
// import UserForm from './admin/Users/UserForm';
// import AdminTickets from './admin/Tickets/AdminTickets';
// import AdminProfile from './admin/Profile/AdminProfile';

// // User Components
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import GenerateTicket from './user/UserGenerateTicket';
// import TicketStatus from './user/UserTicketStatus';
// import UserProfile from './user/UserProfile';

// // Simple auth check
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'admin';
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
//       path: '/admin/dashboard', 
//       element: authenticated && admin 
//         ? React.createElement(AdminLayout, null, React.createElement(AdminDashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/users', 
//       element: authenticated && admin
//         ? React.createElement(AdminLayout, null, React.createElement(AdminUsers))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/users/new', 
//       element: authenticated && admin
//         ? React.createElement(AdminLayout, null, React.createElement(UserForm))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/users/:id', 
//       element: authenticated && admin
//         ? React.createElement(AdminLayout, null, React.createElement(UserForm))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/tickets', 
//       element: authenticated && admin
//         ? React.createElement(AdminLayout, null, React.createElement(AdminTickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/profile', 
//       element: authenticated && admin
//         ? React.createElement(AdminLayout, null, React.createElement(AdminProfile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // ===== USER ROUTES =====
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserDashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(GenerateTicket))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(TicketStatus))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserProfile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // Catch all
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

// User Components
import UserLayout from './user/UserLayout';
import UserDashboard from './user/UserDashboard';
import UserProfile from './user/profile/UserProfileUserProfile';
import UserTickets from './user/UserTickets';
import GenerateTicket from './user/Tickets/GenerateTicket';
import TicketStatus from './user/Tickets/TicketStatus';

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
      React.createElement(Route, { path: 'dashboard', element: React.createElement(AdminDashboard) }),
      React.createElement(Route, { path: 'profile', element: React.createElement(AdminProfile) }),
      React.createElement(Route, { path: 'users', element: React.createElement(AdminUsers) }),
      React.createElement(Route, { path: 'leads', element: React.createElement(AdminLeads) }),
      React.createElement(Route, { path: 'roles', element: React.createElement(AdminRoles) }),
      React.createElement(Route, { path: 'tickets', element: React.createElement(AdminTickets) })
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
      React.createElement(Route, { path: 'ticket-status', element: React.createElement(TicketStatus) })
    ),
    
    // Catch all
    React.createElement(Route, { 
      path: '*', 
      element: React.createElement(Navigate, { to: '/', replace: true })
    })
  );
}

export default App;