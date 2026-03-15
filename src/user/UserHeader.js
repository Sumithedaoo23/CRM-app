import React from 'react';

const UserHeader = ({ onMenuClick, user, isSidebarOpen }) => {
  return React.createElement('header', {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: isSidebarOpen ? '280px' : '0',
      height: '70px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 30,
      transition: 'left 0.3s ease-in-out',
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
        onClick: onMenuClick,
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
          fontSize: '20px',
          fontWeight: '600',
          color: '#10b981'
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
  );
};

export default UserHeader;