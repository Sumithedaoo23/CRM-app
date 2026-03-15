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
import AdminTickets from './admin/Tickets/AdminTicket';

// User Components
import UserLayout from './user/UserLayout';
import UserDashboard from './user/UserDashboard';
import UserProfile from './user/UserProfile';
import UserTickets from './user/UserTickets';
import GenerateTicket from './user/GenerateTicket';
import TicketStatus from './user/TicketStatus';

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