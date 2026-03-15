import React from 'react';
import { Outlet } from 'react-router-dom';

const SimpleLayout = () => {
  return React.createElement('div', { style: { display: 'flex' } },
    // Simple sidebar
    React.createElement('div', {
      style: {
        width: '200px',
        height: '100vh',
        backgroundColor: '#1a1f2e',
        color: 'white',
        padding: '20px'
      }
    },
      React.createElement('h3', null, 'SIDEBAR'),
      React.createElement('ul', { style: { listStyle: 'none', padding: 0 } },
        React.createElement('li', { style: { padding: '10px 0' } }, 'Dashboard'),
        React.createElement('li', { style: { padding: '10px 0' } }, 'Profile'),
        React.createElement('li', { style: { padding: '10px 0' } }, 'Tickets')
      )
    ),
    
    // Main content
    React.createElement('div', {
      style: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#f3f4f6'
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          padding: '15px',
          marginBottom: '20px',
          borderRadius: '5px'
        }
      },
        React.createElement('h2', null, 'HEADER'),
        React.createElement('p', null, 'Welcome to the app')
      ),
      
      React.createElement(Outlet)
    )
  );
};

export default SimpleLayout;