// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import { useTheme } from './context/ThemeContext';
// import Login from './pages/Login';
// import AdminLayout from './components/Layout/Layout';
// import UserLayout from './user/UserLayout';
// import Dashboard from './components/Dashboard/Dashboard';
// import Users from './components/Users/Users';
// import Contacts from './components/Contacts/Contacts';
// import Leads from './components/Leads/Leads';
// import Roles from './components/Roles/Roles';
// import Permissions from './components/Permissions/Permissions';
// import Profile from './components/Profile/Profile';

// // Import User Components
// import UserDashboard from './user/UserDashboard';
// import UserProfile from './user/UserProfile';
// import UserTickets from './user/UserTickets';
// import GenerateTicket from './user/GenerateTicket';
// // import TicketStatus from './user/TicketStatus';
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
  
//   // Return appropriate layout based on role
//   if (isAdmin(user)) {
//     return React.createElement(AdminLayout, null, children);
//   } else {
//     return React.createElement(UserLayout, null, children);
//   }
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
    
//     // Admin Routes
//     React.createElement(Route, { 
//       path: '/dashboard', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Dashboard)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'admin' },
//         React.createElement(Profile)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/users', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Users)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/contacts', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Contacts)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/leads', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Leads)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/roles', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Roles)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/permissions', 
//       element: React.createElement(ProtectedRoute, 
//         { requiredRole: 'admin' },
//         React.createElement(Permissions)
//       )
//     }),
    
//     // User Routes
//     React.createElement(Route, { 
//       path: '/user/dashboard', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserDashboard)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/profile', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserProfile)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/tickets', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(UserTickets)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/generate-ticket', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(GenerateTicket)
//       )
//     }),
    
//     React.createElement(Route, { 
//       path: '/user/ticket-status', 
//       element: React.createElement(ProtectedRoute,
//         { requiredRole: 'user' },
//         React.createElement(TicketStatus)
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
    
//     // Catch all
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







import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Test from './user/Test';

// Simple Home component
const Home = () => React.createElement('div', { style: { padding: '20px', backgroundColor: 'lightblue' } },
  React.createElement('h2', null, 'Home Page'),
  React.createElement('p', null, 'This is the home page')
);

// Simple About component
const About = () => React.createElement('div', { style: { padding: '20px', backgroundColor: 'lightgreen' } },
  React.createElement('h2', null, 'About Page'),
  React.createElement('p', null, 'This is the about page')
);

function App() {
  return React.createElement('div', null,
    React.createElement('nav', { style: { padding: '10px', backgroundColor: '#333', color: 'white' } },
      React.createElement(Link, { to: '/', style: { margin: '10px', color: 'white' } }, 'Home'),
      React.createElement(Link, { to: '/about', style: { margin: '10px', color: 'white' } }, 'About'),
      React.createElement(Link, { to: '/test', style: { margin: '10px', color: 'white' } }, 'Test')
    ),
    
    React.createElement('hr'),
    
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About) }),
      React.createElement(Route, { path: '/test', element: React.createElement(Test) })
    )
  );
}

export default App;