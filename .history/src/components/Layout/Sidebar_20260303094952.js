
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, user, onLogout }) => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAdmin = user?.role === 'Administrator' || user?.isAdmin;
  
  // Define menu items based on user role
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  // Tickets for both admin and users
  menuItems.push(
    { path: '/tickets', label: 'Tickets', icon: '🎫' }
  );

  // Admin-only items
  if (isAdmin) {
    menuItems.push(
      { path: '/users', label: 'Users', icon: '👥' },
      { path: '/contacts', label: 'Contacts', icon: '📞' },
      { path: '/leads', label: 'Leads', icon: '🎯' },
      { path: '/roles', label: 'Roles', icon: '🛡️' },
      { path: '/permissions', label: 'Permissions', icon: '🔐' }
    );
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login', { replace: true });
    if (onClose) onClose();
  };

  const handleOverlayClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 1024 && onClose) {
      onClose();
    }
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'A';
  };

  return React.createElement(React.Fragment, null,
    !isDesktop && isOpen && React.createElement('div', {
      onClick: handleOverlayClick,
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
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            }, user?.name || 'Admin User'),
            
            React.createElement('div', {
              style: {
                fontSize: '13px',
                color: '#a0a0c0'
              }
            }, user?.role || 'Administrator')
          )
        ),

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
              backgroundColor: isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
              textDecoration: 'none',
              fontSize: '14px',
              borderRadius: '8px',
              borderLeft: isActive ? '3px solid #667eea' : '3px solid transparent'
            }),
            onClick: handleNavLinkClick
          },
            React.createElement('span', {
              style: {
                marginRight: '12px',
                fontSize: '18px'
              }
            }, item.icon),
            item.label,
            item.path === '/tickets' && React.createElement('span', {
              style: {
                marginLeft: 'auto',
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '600'
              }
            }, '3')
          )
        )
      ),

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
            gap: '8px'
          }
        },
          React.createElement('span', null, '🚪'),
          'Logout'
        )
      )
    )
  );
};

export default Sidebar;