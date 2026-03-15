
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




