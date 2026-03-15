
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
//     const storedUser = localStorage.getItem('crm-user');
//     if (storedUser && storedUser !== 'null' && storedUser !== 'undefined') {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error('Error parsing stored user:', error);
//         localStorage.removeItem('crm-user');
//       }
//     }
//     setLoading(false);
//   }, []);

//   // Mock login function - no API calls
//   const login = (userData) => {
//     console.log('Logging in with:', userData);
//     setUser(userData);
//     localStorage.setItem('crm-user', JSON.stringify(userData));
//   };

//   // Mock logout function
//   const logout = () => {
//     console.log('Logging out');
//     setUser(null);
//     localStorage.removeItem('crm-user');
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









