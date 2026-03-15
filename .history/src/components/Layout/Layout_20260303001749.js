
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
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
    React.createElement(Sidebar, {
      isOpen: sidebarOpen,
      onClose: closeSidebar,
      user: user,
      onLogout: handleLogout
    }),

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
      React.createElement(Header, {
        onMenuClick: toggleSidebar,
        user: user,
        onLogout: handleLogout,
        isDark: false,
        onThemeToggle: () => {},
        isSidebarOpen: sidebarOpen
      }),

      React.createElement('main', { 
        style: { 
          flex: 1, 
          overflowY: 'auto', 
          padding: '24px',
          backgroundColor: '#f3f4f6'
        } 
      },
        React.createElement(Outlet)
      )
    )
  );
};

export default Layout;