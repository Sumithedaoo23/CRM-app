import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      BrowserRouter,
      { 
        future: {
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }
      },
      React.createElement(
        AuthProvider,
        null,
        React.createElement(
          ThemeProvider,
          null,
          React.createElement(App)
        )
      )
    )
  )
);
