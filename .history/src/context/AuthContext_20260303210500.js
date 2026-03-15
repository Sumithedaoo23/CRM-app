

// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check for stored user on mount
//     const storedUser = localStorage.getItem('crm-admin');
//     if (storedUser && storedUser !== 'null' && storedUser !== 'undefined') {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error('Error parsing stored user:', error);
//         localStorage.removeItem('crm-admin');
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('crm-admin', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('crm-admin');
//     sessionStorage.clear();
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     loading
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
//   );
// };











import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = authService.getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password, isAdmin = true) => {
    try {
      setError(null);
      const response = isAdmin 
        ? await authService.loginAdmin(email, password)
        : await authService.loginUser(email, password);
      
      setUser(response.user);
      return response;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    updateUser,
    isAuthenticated: authService.isAuthenticated(),
    isAdmin: authService.isAdmin()
  };

  return React.createElement(
    AuthContext.Provider,
    { value },
    children
  );
};