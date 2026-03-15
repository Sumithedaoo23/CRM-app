
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
// import Layout from './components/Layout/Layout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';
// import Tickets from './components/Tickets/Tickets';

// // Import User Components
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

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
//   const admin = isAdmin(user);

//   return React.createElement(Routes, null,
//     // Login route
//     React.createElement(Route, { 
//       path: '/login', 
//       element: (() => {
//         if (authenticated) {
//           return React.createElement(Navigate, { 
//             to: admin ? '/dashboard' : '/user/dashboard', 
//             replace: true 
//           });
//         }
//         return React.createElement(Login);
//       })()
//     }),
    
//     // Admin Routes (using Layout)
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: authenticated && admin 
//         ? React.createElement(Layout, null, React.createElement(Dashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Profile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Users))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Contacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Leads))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Roles))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Permissions))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: authenticated && admin
//         ? React.createElement(Layout, null, React.createElement(Tickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // User Routes (using UserLayout)
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserDashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserProfile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/contacts', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserContacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserTickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserGenerateTicket))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: authenticated && !admin
//         ? React.createElement(UserLayout, null, React.createElement(UserTicketStatus))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // Root redirect
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/dashboard' : '/user/dashboard';
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

// // Import User Components
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

// const isAdmin = (user) => {
//   return user?.role === 'Administrator' || user?.isAdmin === true;
// };

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);
//   const admin = isAdmin(user);

//   console.log('Current user:', user);
//   console.log('Is admin:', admin);

//   return React.createElement(Routes, null,
//     // Login route
//     React.createElement(Route, { 
//       path: '/login', 
//       element: (() => {
//         if (authenticated) {
//           return React.createElement(Navigate, { 
//             to: admin ? '/dashboard' : '/user/dashboard', 
//             replace: true 
//           });
//         }
//         return React.createElement(Login);
//       })()
//     }),
    
//     // Admin Routes (using Layout) - MAIN ROUTES WITHOUT NESTING
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: (authenticated && admin) 
//         ? React.createElement(Layout, null, React.createElement(Dashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Profile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Users))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Contacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Leads))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Roles))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Permissions))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/tickets', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Tickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // User Routes (using UserLayout)
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserDashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserProfile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/contacts', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserContacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserTickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserGenerateTicket))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserTicketStatus))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // Root redirect
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/dashboard' : '/user/dashboard';
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

// function App() {
//   const { user } = useAuth();
//   const authenticated = isAuthenticated(user);

//   console.log('Current user:', user);

//   return React.createElement(Routes, null,
//     // Login route
//     React.createElement(Route, { 
//       path: '/login', 
//       element: (() => {
//         if (authenticated) {
//           return React.createElement(Navigate, { to: '/dashboard', replace: true });
//         }
//         return React.createElement(Login);
//       })()
//     }),
    
//     // Admin Dashboard - using nested routes like your working commented code
//     React.createElement(Route, { 
//       path: '/', 
//       element: authenticated 
//         ? React.createElement(Layout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(Dashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(Profile) }),
//       React.createElement(Route, { path: 'users', element: React.createElement(Users) }),
//       React.createElement(Route, { path: 'contacts', element: React.createElement(Contacts) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(Leads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(Roles) }),
//       React.createElement(Route, { path: 'permissions', element: React.createElement(Permissions) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(Tickets) })
//     ),
    
//     // Root redirect
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: authenticated ? '/dashboard' : '/login',
//         replace: true 
//       })
//     }),
    
//     // Catch all
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: authenticated ? '/dashboard' : '/login',
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
// import UserContacts from './user/UserContacts';
// import UserTickets from './user/UserTickets';
// import UserGenerateTicket from './user/UserGenerateTicket';
// import UserTicketStatus from './user/UserTicketStatus';

// // Auth check helper functions
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

//   console.log('Current user:', user);
//   console.log('Is admin:', admin);
//   console.log('Authenticated:', authenticated);

//   return React.createElement(Routes, null,
//     // Login route
//     React.createElement(Route, { 
//       path: '/login', 
//       element: (() => {
//         if (authenticated) {
//           // If already logged in, redirect to appropriate dashboard
//           return React.createElement(Navigate, { 
//             to: admin ? '/admin/dashboard' : '/user/dashboard', 
//             replace: true 
//           });
//         }
//         return React.createElement(Login);
//       })()
//     }),
    
//     // ===== ADMIN ROUTES (with /admin prefix) =====
//     React.createElement(Route, { 
//       path: '/admin', 
//       element: (authenticated && admin) 
//         ? React.createElement(Layout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(Dashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(Profile) }),
//       React.createElement(Route, { path: 'users', element: React.createElement(Users) }),
//       React.createElement(Route, { path: 'contacts', element: React.createElement(Contacts) }),
//       React.createElement(Route, { path: 'leads', element: React.createElement(Leads) }),
//       React.createElement(Route, { path: 'roles', element: React.createElement(Roles) }),
//       React.createElement(Route, { path: 'permissions', element: React.createElement(Permissions) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(Tickets) })
//     ),
    
//     // ===== USER ROUTES (with /user prefix) =====
//     React.createElement(Route, { 
//       path: '/user', 
//       element: (authenticated && !admin) 
//         ? React.createElement(UserLayout)
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     },
//       React.createElement(Route, { path: 'dashboard', element: React.createElement(UserDashboard) }),
//       React.createElement(Route, { path: 'profile', element: React.createElement(UserProfile) }),
//       React.createElement(Route, { path: 'contacts', element: React.createElement(UserContacts) }),
//       React.createElement(Route, { path: 'tickets', element: React.createElement(UserTickets) }),
//       React.createElement(Route, { path: 'generate-ticket', element: React.createElement(UserGenerateTicket) }),
//       React.createElement(Route, { path: 'ticket-status', element: React.createElement(UserTicketStatus) })
//     ),
    
//     // Root redirect - important for when user first visits the site
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/admin/dashboard' : '/user/dashboard';
//           }
//           return '/login';
//         })(),
//         replace: true 
//       })
//     }),
    
//     // Catch all - redirect to appropriate dashboard or login
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { 
//         to: (() => {
//           if (authenticated) {
//             return admin ? '/admin/dashboard' : '/user/dashboard';
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
// import LandingPage from './pages/LandingPage';

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
// import UserContacts from './user/UserContacts';
// import UserTickets from './user/UserTickets';
// import UserGenerateTicket from './user/UserGenerateTicket';
// import UserTicketStatus from './user/UserTicketStatus';

// // Auth check helper functions
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

//   console.log('Current user:', user);
//   console.log('Is admin:', admin);
//   console.log('Authenticated:', authenticated);

//   return React.createElement(Routes, null,
//     // Landing Page (public)
//     React.createElement(Route, { 
//       path: '/', 
//       element: React.createElement(LandingPage)
//     }),
    
//     // Login route
//     React.createElement(Route, { 
//       path: '/login', 
//       element: (() => {
//         if (authenticated) {
//           return React.createElement(Navigate, { 
//             to: admin ? '/admin/dashboard' : '/user/dashboard', 
//             replace: true 
//           });
//         }
//         return React.createElement(Login);
//       })()
//     }),
    
//     // ===== ADMIN ROUTES =====
//     React.createElement(Route, { 
//       path: '/admin/dashboard', 
//       element: (authenticated && admin) 
//         ? React.createElement(Layout, null, React.createElement(Dashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/profile', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Profile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/users', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Users))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/contacts', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Contacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/leads', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Leads))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/roles', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Roles))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/permissions', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Permissions))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/admin/tickets', 
//       element: (authenticated && admin)
//         ? React.createElement(Layout, null, React.createElement(Tickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // ===== USER ROUTES =====
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserDashboard))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserProfile))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/contacts', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserContacts))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserTickets))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserGenerateTicket))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: (authenticated && !admin)
//         ? React.createElement(UserLayout, null, React.createElement(UserTicketStatus))
//         : React.createElement(Navigate, { to: '/login', replace: true })
//     }),
    
//     // Catch all - redirect to landing page
//     React.createElement(Route, { 
//       path: '*', 
//       element: React.createElement(Navigate, { to: '/', replace: true })
//     })
//   );
// }

// export default App;













