import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const UserSidebar = ({ isOpen, onClose, user, onLogout }) => {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/user/profile', label: 'Profile', icon: '👤' },
    { path: '/user/tickets', label: 'My Tickets', icon: '🎫' },
    { path: '/user/generate-ticket', label: 'Generate Ticket', icon: '➕' },
    { path: '/user/ticket-status', label: 'Ticket Status', icon: '📋' },
  ];

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login', { replace: true });
    if (onClose) onClose();
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  const getUserInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'U';
  };

  const isDesktop = window.innerWidth > 1024;

  return React.createElement(React.Fragment, null,
    // Overlay for mobile
    !isDesktop && isOpen && React.createElement('div', {
      onClick: onClose,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 40
      }
    }),

    // Sidebar
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '280px',
        height: '100vh',
        backgroundColor: '#1e1e2f',
        background: 'linear-gradient(180deg, #1e1e2f 0%, #2d2d44 100%)',
        color: '#ffffff',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.2)',
        overflowY: 'auto'
      }
    },
      // Header with user info
      React.createElement('div', {
        style: {
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }
        },
          React.createElement('div', {
            style: {
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: '600',
              color: '#ffffff'
            }
          }, getUserInitials()),
          
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '2px'
              }
            }, user?.name || 'User'),
            
            React.createElement('div', {
              style: {
                fontSize: '13px',
                color: '#a0a0c0'
              }
            }, 'Regular User')
          )
        ),

        // Close button for mobile
        !isDesktop && React.createElement('button', {
          onClick: handleCloseClick,
          style: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#ffffff',
            fontSize: '18px',
            cursor: 'pointer',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, '✕')
      ),

      // Navigation menu
      React.createElement('nav', {
        style: {
          flex: 1,
          padding: '20px 12px'
        }
      },
        menuItems.map((item) =>
          React.createElement(NavLink, {
            key: item.path,
            to: item.path,
            style: ({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              marginBottom: '4px',
              color: isActive ? '#ffffff' : '#a0a0c0',
              backgroundColor: isActive ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              textDecoration: 'none',
              fontSize: '14px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent'
            }),
            onClick: () => {
              if (window.innerWidth <= 1024 && onClose) {
                onClose();
              }
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

      // Logout button
      React.createElement('div', {
        style: {
          padding: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
            transition: 'all 0.2s',
            gap: '8px'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
        },
          React.createElement('span', null, '🚪'),
          'Logout'
        )
      )
    )
  );
};

export default UserSidebar;