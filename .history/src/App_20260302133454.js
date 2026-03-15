
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';

// // Simple auth check
// const isAuthenticated = () => {
//   return localStorage.getItem('crm-user') !== null;
// };

// const ProtectedRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
      
//       <Route path="/" element={
//         <ProtectedRoute>
//           <Layout />
//         </ProtectedRoute>
//       }>
//         <Route index element={<Navigate to="/dashboard" />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="users" element={<Users />} />
//         <Route path="contacts" element={<Contacts />} />
//         <Route path="leads" element={<Leads />} />
//         <Route path="roles" element={<Roles />} />
//         <Route path="permissions" element={<Permissions />} />
//         <Route path="profile" element={<Profile />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;















import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminLayout from './components/Layout/AdminLayout';
import UserLayout from './user/UserLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Contacts from './components/Contacts/Contacts';
import Leads from './components/Leads/Leads';
import Roles from './components/Roles/Roles';
import Permissions from './components/';
import Profile from './components/Profile/Profile';

// Import User Components
import UserDashboard from './user/UserDashboard';
import UserProfile from './user/UserProfile';
import UserTickets from './user/UserTickets';
import GenerateTicket from './user/GenerateTicket';
import TicketStatus from './user/TicketStatus';

// Auth check functions
const isAuthenticated = () => {
  const user = localStorage.getItem('crm-user');
  console.log('isAuthenticated check - crm-user in localStorage:', user);
  return user !== null && user !== 'null' && user !== 'undefined';
};

const getUser = () => {
  try {
    const userStr = localStorage.getItem('crm-user');
    console.log('getUser - raw string:', userStr);
    if (!userStr || userStr === 'null' || userStr === 'undefined') {
      return {};
    }
    const user = JSON.parse(userStr);
    console.log('getUser - parsed:', user);
    return user;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return {};
  }
};

// const isAdmin = () => {
//   const user = getUser();
//   console.log('isAdmin check - user role:', user.role, 'isAdmin:', user.isAdmin);
//   return user.role === 'Administrator' || user.isAdmin === true;
// };

// const isUser = () => {
//   const user = getUser();
//   console.log('isUser check - user role:', user.role, 'isAdmin:', user.isAdmin);
//   return user.role === 'User' || user.isAdmin === false;
// };

// Keep the App.js from the previous response, but update the isAdmin and isUser functions:

const isAdmin = () => {
  const user = getUser();
  console.log('isAdmin check - user role:', user.role, 'isAdmin:', user.isAdmin);
  // FIXED: Check both role and isAdmin property
  return user.role === 'Administrator' || user.isAdmin === true;
};

const isUser = () => {
  const user = getUser();
  console.log('isUser check - user role:', user.role, 'isAdmin:', user.isAdmin);
  // FIXED: Check if not admin (user role OR isAdmin === false)
  return user.role === 'User' || user.isAdmin === false;
};

// Protected Routes with role checking
const AdminProtectedRoute = ({ children }) => {
  const authenticated = isAuthenticated();
  const admin = isAdmin();
  
  console.log('AdminProtectedRoute - authenticated:', authenticated, 'admin:', admin);
  
  if (!authenticated) {
    console.log('AdminProtectedRoute - redirecting to login');
    return React.createElement(Navigate, { to: '/login' });
  }
  if (!admin) {
    console.log('AdminProtectedRoute - not admin, redirecting to user dashboard');
    return React.createElement(Navigate, { to: '/user/dashboard' });
  }
  console.log('AdminProtectedRoute - access granted');
  return children;
};

const UserProtectedRoute = ({ children }) => {
  const authenticated = isAuthenticated();
  const user = isUser();
  
  console.log('UserProtectedRoute - authenticated:', authenticated, 'user:', user);
  
  if (!authenticated) {
    console.log('UserProtectedRoute - redirecting to login');
    return React.createElement(Navigate, { to: '/login' });
  }
  if (!user) {
    console.log('UserProtectedRoute - not user, redirecting to admin dashboard');
    return React.createElement(Navigate, { to: '/admin/dashboard' });
  }
  console.log('UserProtectedRoute - access granted');
  return children;
};

function App() {
  console.log('App rendering - checking authentication...');
  
  return React.createElement(Routes, null,
    React.createElement(Route, { 
      path: '/login', 
      element: React.createElement(Login) 
    }),
    
    // ADMIN ROUTES
    React.createElement(Route, { 
      path: '/admin', 
      element: React.createElement(AdminProtectedRoute, null,
        React.createElement(AdminLayout)
      ) 
    }, [
      React.createElement(Route, { 
        key: 'admin-index', 
        index: true, 
        element: React.createElement(Navigate, { to: '/admin/dashboard' }) 
      }),
      React.createElement(Route, { 
        key: 'dashboard', 
        path: 'dashboard', 
        element: React.createElement(Dashboard) 
      }),
      React.createElement(Route, { 
        key: 'users', 
        path: 'users', 
        element: React.createElement(Users) 
      }),
      React.createElement(Route, { 
        key: 'contacts', 
        path: 'contacts', 
        element: React.createElement(Contacts) 
      }),
      React.createElement(Route, { 
        key: 'leads', 
        path: 'leads', 
        element: React.createElement(Leads) 
      }),
      React.createElement(Route, { 
        key: 'roles', 
        path: 'roles', 
        element: React.createElement(Roles) 
      }),
      React.createElement(Route, { 
        key: 'permissions', 
        path: 'permissions', 
        element: React.createElement(Permissions) 
      }),
      React.createElement(Route, { 
        key: 'profile', 
        path: 'profile', 
        element: React.createElement(Profile) 
      })
    ]),
    
    // USER ROUTES
    React.createElement(Route, { 
      path: '/user', 
      element: React.createElement(UserProtectedRoute, null,
        React.createElement(UserLayout)
      ) 
    }, [
      React.createElement(Route, { 
        key: 'user-index', 
        index: true, 
        element: React.createElement(Navigate, { to: '/user/dashboard' }) 
      }),
      React.createElement(Route, { 
        key: 'user-dashboard', 
        path: 'dashboard', 
        element: React.createElement(UserDashboard) 
      }),
      React.createElement(Route, { 
        key: 'user-profile', 
        path: 'profile', 
        element: React.createElement(UserProfile) 
      }),
      React.createElement(Route, { 
        key: 'user-tickets', 
        path: 'tickets', 
        element: React.createElement(UserTickets) 
      }),
      React.createElement(Route, { 
        key: 'generate-ticket', 
        path: 'generate-ticket', 
        element: React.createElement(GenerateTicket) 
      }),
      React.createElement(Route, { 
        key: 'ticket-status', 
        path: 'ticket-status', 
        element: React.createElement(TicketStatus) 
      })
    ]),
    
    // REDIRECT ROOT BASED ON USER ROLE
    React.createElement(Route, { 
      path: '/', 
      element: (() => {
        const authenticated = isAuthenticated();
        console.log('Root route - authenticated:', authenticated);
        
        if (authenticated) {
          const admin = isAdmin();
          console.log('Root route - isAdmin:', admin);
          return React.createElement(Navigate, { 
            to: admin ? '/admin/dashboard' : '/user/dashboard' 
          });
        } else {
          console.log('Root route - not authenticated, redirecting to login');
          return React.createElement(Navigate, { to: '/login' });
        }
      })() 
    }),
    
    // CATCH ALL ROUTE
    React.createElement(Route, { 
      path: '*', 
      element: (() => {
        const authenticated = isAuthenticated();
        console.log('Catch-all route - authenticated:', authenticated);
        
        if (authenticated) {
          const admin = isAdmin();
          console.log('Catch-all route - isAdmin:', admin);
          return React.createElement(Navigate, { 
            to: admin ? '/admin/dashboard' : '/user/dashboard' 
          });
        } else {
          console.log('Catch-all route - not authenticated, redirecting to login');
          return React.createElement(Navigate, { to: '/login' });
        }
      })() 
    })
  );
}

export default App;