

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











// import React, { createContext, useState, useContext, useEffect } from 'react';
// import authService from '../services/authService';

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
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check for stored user on mount
//     const storedUser = authService.getStoredUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password, isAdmin = true) => {
//     try {
//       setError(null);
//       const response = isAdmin 
//         ? await authService.loginAdmin(email, password)
//         : await authService.loginUser(email, password);
      
//       setUser(response.user);
//       return response;
//     } catch (err) {
//       setError(err.message || 'Login failed');
//       throw err;
//     }
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const updateUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const value = {
//     user,
//     loading,
//     error,
//     login,
//     logout,
//     updateUser,
//     isAuthenticated: authService.isAuthenticated(),
//     isAdmin: authService.isAdmin()
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
//   );
// };







// import React, { createContext, useState, useContext, useEffect } from 'react';
// import authService from '../services/authService';

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
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check for stored user on mount
//     const storedUser = authService.getStoredUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password, isAdmin = true) => {
//     try {
//       setError(null);
//       const response = isAdmin 
//         ? await authService.loginAdmin(email, password)
//         : await authService.loginUser(email, password);
      
//       setUser(response.user);
//       return response;
//     } catch (err) {
//       setError(err.message || 'Login failed');
//       throw err;
//     }
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const updateUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const value = {
//     user,
//     loading,
//     error,
//     login,
//     logout,
//     updateUser,
//     isAuthenticated: authService.isAuthenticated(),
//     isAdmin: authService.isAdmin()
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
//   );
// };
















// import React, { createContext, useState, useContext, useEffect } from 'react';
// import authService from '../services/authService';

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
//     const storedUser = authService.getStoredUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password, isAdmin = true) => {
//     try {
//       const response = isAdmin 
//         ? await authService.loginAdmin(email, password)
//         : await authService.loginUser(email, password);
      
//       setUser(response.user);
//       return response;
//     } catch (err) {
//       throw err;
//     }
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     isAuthenticated: authService.isAuthenticated(),
//     isAdmin: authService.isAdmin()
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
//   );
// };









// import React, { createContext, useState, useContext, useEffect } from 'react';
// import authService from '../services/authService';

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
//     const storedUser = authService.getStoredUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password, isAdmin = true) => {
//     try {
//       const response = isAdmin 
//         ? await authService.loginAdmin(email, password)
//         : await authService.loginUser(email, password);
      
//       setUser(response.user);
//       return response;
//     } catch (err) {
//       throw err;
//     }
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     isAuthenticated: authService.isAuthenticated(),
//     isAdmin: authService.isAdmin()
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
//   );
// };











Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
content.js:156 [Intervention] Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: chrome-extension://hgipopnedpcknmapfakdedlnjjkmpnao/assets/fonts/NeueHaasDisplayMedium.ttf
content.js:156 [Intervention] Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: chrome-extension://hgipopnedpcknmapfakdedlnjjkmpnao/assets/fonts/NeueHaasDisplayRoman.ttf
content-script.js:22 Document already loaded, running initialization immediately
content-script.js:4 Attempting to initialize AdUnit
content-script.js:6 AdUnit initialized successfully
:5000/api/auth/login-admin:1  Failed to load resource: the server responded with a status of 500 (Internal Server Error)Understand this error
AuthContext.js:332 Uncaught (in promise) ObjectUnderstand this error
:5000/api/auth/login-admin:1  Failed to load resource: the server responded with a status of 500 (Internal Server Error)Understand this error
AuthContext.js:332 Uncaught (in promise) Object   

Uncaught runtime errors:
×
ERROR
[object Object]
    at handleError (http://localhost:3000/static/js/bundle.js:46258:58)
    at http://localhost:3000/static/js/bundle.js:46281:7 now admin dashboard are not show