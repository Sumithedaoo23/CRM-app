
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem('crm-user');
//     return saved ? JSON.parse(saved) : null;
//   });

//   const login = (email, password) => {
//     if (email && password) {
//       const userData = {
//         id: 1,
//         email: email,
//         name: 'Admin User',
//         role: 'Administrator'
//       };
//       setUser(userData);
//       localStorage.setItem('crm-user', JSON.stringify(userData));
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('crm-user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };











import React, { createContext, useState, useContext, useEffect } from 'react';

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

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('crm-user');
    if (storedUser && storedUser !== 'null' && storedUser !== 'undefined') {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('crm-user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('crm-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crm-user');
    sessionStorage.clear();
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return React.createElement(
    AuthContext.Provider,
    { value },
    children
  );
};