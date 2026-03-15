

// user/UserLayout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/user/profile', label: 'Profile', icon: '👤' },
    { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
    { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
    { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
  ];

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6'
    }
  },
    // Header
    React.createElement('header', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 1000,
        boxSizing: 'border-box'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }
      },
        React.createElement('button', {
          onClick: () => setIsSidebarOpen(!isSidebarOpen),
          style: {
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, isSidebarOpen ? '✕' : '☰'),
        
        React.createElement('span', {
          style: {
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827'
          }
        }, 'User Portal')
      ),

      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '6px 6px 6px 16px',
            borderRadius: '40px',
            backgroundColor: '#f3f4f6'
          }
        },
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#111827'
              }
            }, user?.name || 'User'),
            
            React.createElement('div', {
              style: {
                fontSize: '12px',
                color: '#6b7280'
              }
            }, user?.role || 'User')
          ),
          
          React.createElement('div', {
            style: {
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '16px'
            }
          }, user?.name?.charAt(0) || 'U')
        )
      )
    ),

    // Sidebar
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: '70px',
        left: 0,
        width: '280px',
        height: 'calc(100vh - 70px)',
        backgroundColor: '#1e1e2f',
        background: 'linear-gradient(180deg, #1e1e2f 0%, #2d2d44 100%)',
        color: '#ffffff',
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 900,
        overflowY: 'auto'
      }
    },
      React.createElement('nav', {
        style: {
          padding: '20px 12px'
        }
      },
        menuItems.map((item) =>
          React.createElement('div', {
            key: item.path,
            onClick: () => {
              navigate(item.path);
              setIsSidebarOpen(false);
            },
            style: {
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              marginBottom: '4px',
              color: window.location.pathname === item.path ? '#ffffff' : '#a0a0c0',
              backgroundColor: window.location.pathname === item.path ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              borderRadius: '8px',
              borderLeft: window.location.pathname === item.path ? '3px solid #10b981' : '3px solid transparent'
            }
          },
            React.createElement('span', {
              style: {
                marginRight: '12px',
                fontSize: '18px'
              }
            }, item.icon),
            item.label
          )
        )
      ),

      React.createElement('div', {
        style: {
          padding: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          boxSizing: 'border-box'
        }
      },
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '12px',
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            gap: '8px'
          }
        },
          React.createElement('span', null, '🚪'),
          'Logout'
        )
      )
    ),

    // Main Content
    React.createElement('main', {
      style: {
        marginLeft: isSidebarOpen ? '280px' : '0',
        padding: '94px 24px 24px 24px',
        transition: 'margin-left 0.3s ease-in-out',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }
    }, children)
  );
};

export default UserLayout;