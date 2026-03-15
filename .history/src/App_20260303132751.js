
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
// import UserDashboard from './components/UserDashboard/UserDashboard';

// Simple auth check
const isAuthenticated = (user) => {
  return user !== null && user !== undefined;
};

// Simple Protected Route
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!isAuthenticated(user)) {
    return React.createElement(Navigate, { to: '/login', replace: true });
  }
  
  return children;
};

function App() {
  const { user } = useAuth();

  return React.createElement(Routes, null,
    React.createElement(Route, { 
      path: '/login', 
      element: React.createElement(Login)
    }),
    
    React.createElement(Route, { 
      path: '/', 
      element: React.createElement(ProtectedRoute, null,
        React.createElement(Layout)
      )
    },
      React.createElement(Route, { path: 'dashboard', element: React.createElement(Dashboard) }),
      // React.createElement(Route, { path: 'user-dashboard', element: React.createElement(UserDashboard) }),
      React.createElement(Route, { path: 'users', element: React.createElement(Users) }),
      React.createElement(Route, { path: 'contacts', element: React.createElement(Contacts) }),
      React.createElement(Route, { path: 'leads', element: React.createElement(Leads) }),
      React.createElement(Route, { path: 'roles', element: React.createElement(Roles) }),
      React.createElement(Route, { path: 'permissions', element: React.createElement(Permissions) }),
      React.createElement(Route, { path: 'profile', element: React.createElement(Profile) }),
      React.createElement(Route, { path: 'tickets', element: React.createElement(Tickets) })
    ),
    
    React.createElement(Route, { 
      path: '/', 
      element: React.createElement(Navigate, { 
        to: isAuthenticated(user) ? '/dashboard' : '/login',
        replace: true 
      })
    }),
    
    React.createElement(Route, { 
      path: '*', 
      element: React.createElement(Navigate, { to: '/login', replace: true })
    })
  );
}

export default App;


//dont touch  it it was workng code it was admin panel showing 







// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import UserLayout from './user/UserLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // Import User Components
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// // Auth check helper functions
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children, requiredRole = null }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (!authenticated) {
//     return React.createElement(Navigate, { 
//       to: '/login', 
//       replace: true
//     });
//   }

//   if (requiredRole === 'admin' && !isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/user/dashboard', 
//       replace: true 
//     });
//   }

//   if (requiredRole === 'user' && isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// // Public Route wrapper
// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (authenticated) {
//     return React.createElement(Navigate, { 
//       to: isAdmin(user) ? '/dashboard' : '/user/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     // Public routes
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(PublicRoute, null,
//         React.createElement(Login)
//       )
//     }),
    
//     // Admin Routes (using Layout)
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null, 
//           React.createElement(Dashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Profile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Users)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Contacts)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Leads)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Roles)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Permissions)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Tickets)
//         )
//       )
//     }),
    
//     // User Routes (using UserLayout)
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserDashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserProfile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserTickets)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(GenerateTicket)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(TicketStatus)
//         )
//       )
//     }),
    
//     // Redirect root
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all - redirect to appropriate dashboard
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     })
//   );
// }

// export default App;














// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import UserLayout from './user/UserLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // Import User Components
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// // Auth check helper functions
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children, requiredRole = null }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (!authenticated) {
//     return React.createElement(Navigate, { 
//       to: '/login', 
//       replace: true
//     });
//   }

//   if (requiredRole === 'admin' && !isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/user/dashboard', 
//       replace: true 
//     });
//   }

//   if (requiredRole === 'user' && isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// // Public Route wrapper
// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (authenticated) {
//     return React.createElement(Navigate, { 
//       to: isAdmin(user) ? '/dashboard' : '/user/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     // Public routes
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(PublicRoute, null,
//         React.createElement(Login)
//       )
//     }),
    
//     // Admin Routes - Using Layout as wrapper
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null, 
//           React.createElement(Dashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Profile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Users)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Contacts)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Leads)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Roles)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Permissions)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Tickets)
//         )
//       )
//     }),
    
//     // User Routes - Using UserLayout as wrapper
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserDashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserProfile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserTickets)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(GenerateTicket)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(TicketStatus)
//         )
//       )
//     }),
    
//     // Redirect root based on auth status
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all - redirect to appropriate dashboard
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     })
//   );
// }

// export default App;















// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import UserLayout from './user/UserLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // Import User Components
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// // Auth check helper functions
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children, requiredRole = null }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (!authenticated) {
//     return React.createElement(Navigate, { 
//       to: '/login', 
//       replace: true
//     });
//   }

//   if (requiredRole === 'admin' && !isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/user/dashboard', 
//       replace: true 
//     });
//   }

//   if (requiredRole === 'user' && isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// // Public Route wrapper
// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (authenticated) {
//     return React.createElement(Navigate, { 
//       to: isAdmin(user) ? '/dashboard' : '/user/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     // Public routes
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(PublicRoute, null,
//         React.createElement(Login)
//       )
//     }),
    
//     // Admin Routes - Using Layout as wrapper
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null, 
//           React.createElement(Dashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Profile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Users)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Contacts)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Leads)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Roles)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Permissions)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Tickets)
//         )
//       )
//     }),
    
//     // User Routes - Using UserLayout as wrapper
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserDashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserProfile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserTickets)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(GenerateTicket)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(TicketStatus)
//         )
//       )
//     }),
    
//     // Redirect root based on auth status
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all - redirect to appropriate dashboard
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     })
//   );
// }

// export default App;














// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Layout from './components/Layout/Layout';
// import UserLayout from './user/UserLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // Import User Components
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// // Auth check helper functions
// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children, requiredRole = null }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (!authenticated) {
//     return React.createElement(Navigate, { 
//       to: '/login', 
//       replace: true
//     });
//   }

//   if (requiredRole === 'admin' && !isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/user/dashboard', 
//       replace: true 
//     });
//   }

//   if (requiredRole === 'user' && isAdmin(user)) {
//     return React.createElement(Navigate, { 
//       to: '/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// // Public Route wrapper
// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
  
//   if (authenticated) {
//     return React.createElement(Navigate, { 
//       to: isAdmin(user) ? '/dashboard' : '/user/dashboard', 
//       replace: true 
//     });
//   }
  
//   return children;
// };

// function App() {
//   const { user } = useAuth();

//   return React.createElement(Routes, null,
//     // Public routes
//     React.createElement(Route, { 
//       path: '/login', 
//       element: React.createElement(PublicRoute, null,
//         React.createElement(Login)
//       )
//     }),
    
//     // Admin Routes - Using Layout as wrapper
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null, 
//           React.createElement(Dashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Profile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Users)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Contacts)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Leads)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Roles)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Permissions)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Layout, null,
//           React.createElement(Tickets)
//         )
//       )
//     }),
    
//     // User Routes - Using UserLayout as wrapper
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserDashboard)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserProfile)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(UserTickets)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(GenerateTicket)
//         )
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserLayout, null,
//           React.createElement(TicketStatus)
//         )
//       )
//     }),
    
//     // Redirect root based on auth status
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all - redirect to appropriate dashboard
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (isAuthenticated(user)) {
//             return isAdmin(user) ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     })
//   );
// }

// export default App;











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

// //admin login











// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';

// // Admin Components
// import Layout from './components/Layout/Layout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // User Components
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// const isAuthenticated = (user) => {
//   return user !== null && user !== undefined;
// };

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
//   const admin = isAdmin(user);

//   return (
//     <Routes>

//       {/* LOGIN */}
//       <Route
//         path="/login"
//         element={
//           authenticated
//             ? admin
//               ? <Navigate to="/dashboard" replace />
//               : <Navigate to="/user-dashboard" replace />
//             : <Login />
//         }
//       />

//       {/* ================= ADMIN ROUTES ================= */}
//       <Route
//         path="/dashboard"
//         element={
//           authenticated && admin
//             ? <Layout><Dashboard /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/profile"
//         element={
//           authenticated && admin
//             ? <Layout><Profile /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/users"
//         element={
//           authenticated && admin
//             ? <Layout><Users /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/contacts"
//         element={
//           authenticated && admin
//             ? <Layout><Contacts /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/leads"
//         element={
//           authenticated && admin
//             ? <Layout><Leads /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/roles"
//         element={
//           authenticated && admin
//             ? <Layout><Roles /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/permissions"
//         element={
//           authenticated && admin
//             ? <Layout><Permissions /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/tickets"
//         element={
//           authenticated && admin
//             ? <Layout><Tickets /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       {/* ================= USER ROUTES ================= */}
//       <Route
//         path="/user-dashboard"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserDashboard /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/profile"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserProfile /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/tickets"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserTickets /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/generate-ticket"
//         element={
//           authenticated && !admin
//             ? <UserLayout><GenerateTicket /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/ticket-status"
//         element={
//           authenticated && !admin
//             ? <UserLayout><TicketStatus /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       {/* ROOT REDIRECT */}
//       <Route
//         path="/"
//         element={
//           authenticated
//             ? admin
//               ? <Navigate to="/dashboard" replace />
//               : <Navigate to="/user-dashboard" replace />
//             : <Navigate to="/login" replace />
//         }
//       />

//       {/* CATCH ALL */}
//       <Route
//         path="*"
//         element={
//           authenticated
//             ? admin
//               ? <Navigate to="/dashboard" replace />
//               : <Navigate to="/user-dashboard" replace />
//             : <Navigate to="/login" replace />
//         }
//       />

//     </Routes>
//   );
// }

// export default App;











// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Login from './pages/Login';

// // Admin
// import Layout from './components/Layout/Layout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // User
// import UserLayout from './user/UserLayout';
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// import TicketStatus from './user/TicketStatus';

// function App() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const authenticated = !!user;
//   const admin = user?.role === 'Administrator';

//   return (
//     <Routes>

//       {/* LOGIN */}
//       <Route
//         path="/login"
//         element={
//           authenticated
//             ? admin
//               ? <Navigate to="/dashboard" replace />
//               : <Navigate to="/user-dashboard" replace />
//             : <Login />
//         }
//       />

//       {/* ADMIN ROUTES */}
//       <Route
//         path="/dashboard"
//         element={
//           authenticated && admin
//             ? <Layout><Dashboard /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/profile"
//         element={
//           authenticated && admin
//             ? <Layout><Profile /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/users"
//         element={
//           authenticated && admin
//             ? <Layout><Users /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/contacts"
//         element={
//           authenticated && admin
//             ? <Layout><Contacts /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/leads"
//         element={
//           authenticated && admin
//             ? <Layout><Leads /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/roles"
//         element={
//           authenticated && admin
//             ? <Layout><Roles /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/permissions"
//         element={
//           authenticated && admin
//             ? <Layout><Permissions /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/tickets"
//         element={
//           authenticated && admin
//             ? <Layout><Tickets /></Layout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       {/* USER ROUTES */}
//       <Route
//         path="/user-dashboard"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserDashboard /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/profile"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserProfile /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/tickets"
//         element={
//           authenticated && !admin
//             ? <UserLayout><UserTickets /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/generate-ticket"
//         element={
//           authenticated && !admin
//             ? <UserLayout><GenerateTicket /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="/user/ticket-status"
//         element={
//           authenticated && !admin
//             ? <UserLayout><TicketStatus /></UserLayout>
//             : <Navigate to="/login" replace />
//         }
//       />

//       {/* ROOT */}
//       <Route
//         path="/"
//         element={
//           authenticated
//             ? admin
//               ? <Navigate to="/dashboard" replace />
//               : <Navigate to="/user-dashboard" replace />
//             : <Navigate to="/login" replace />
//         }
//       />

//       <Route
//         path="*"
//         element={<Navigate to="/" replace />}
//       />

//     </Routes>
//   );
// }

// export default App;