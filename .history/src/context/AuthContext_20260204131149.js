
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('crm-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    if (email && password) {
      const userData = {
        id: 1,
        email: email,
        name: 'Admin User',
        role: 'Administrator'
      };
      setUser(userData);
      localStorage.setItem('crm-user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crm-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};