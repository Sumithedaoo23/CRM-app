
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

//   // Login function
//   const login = (userData) => {
//     console.log('Logging in with:', userData);
//     setUser(userData);
//     localStorage.setItem('crm-user', JSON.stringify(userData));
//   };

//   // Logout function
//   const logout = () => {
//     console.log('Logging out');
//     setUser(null);
//     localStorage.removeItem('crm-user');
//   };

//   // Update user function - for profile updates
//   const updateUser = (updatedUserData) => {
//     setUser(prevUser => {
//       const newUser = {
//         ...prevUser,
//         ...updatedUserData,
//         name: updatedUserData.firstName && updatedUserData.lastName 
//           ? `${updatedUserData.firstName} ${updatedUserData.lastName}`
//           : updatedUserData.name || prevUser?.name,
//         profilePhoto: updatedUserData.profilePhoto || prevUser?.profilePhoto || ''
//       };
      
//       localStorage.setItem('crm-user', JSON.stringify(newUser));
//       return newUser;
//     });
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     updateUser,
//     loading
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value },
//     children
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
    const storedToken = localStorage.getItem('token');
    
    console.log('AuthProvider - Checking storage:', { 
      hasStoredUser: !!storedUser, 
      hasStoredToken: !!storedToken 
    });
    
    if (storedUser && storedUser !== 'null' && storedUser !== 'undefined') {
      try {
        const parsedUser = JSON.parse(storedUser);
        
        // Ensure token is also stored separately
        if (parsedUser.token && !storedToken) {
          localStorage.setItem('token', parsedUser.token);
          console.log('Token restored from user object');
        }
        
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('crm-user');
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    console.log('Logging in with:', userData);
    
    // Ensure user has _id
    if (!userData._id && userData.id) {
      userData._id = userData.id;
    }
    
    setUser(userData);
    localStorage.setItem('crm-user', JSON.stringify(userData));
    
    // Also store token separately if present
    if (userData.token) {
      localStorage.setItem('token', userData.token);
      console.log('Token stored in localStorage');
    }
  };

  // Logout function
  const logout = () => {
    console.log('Logging out');
    setUser(null);
    localStorage.removeItem('crm-user');
    localStorage.removeItem('token');
  };

  // Update user function - for profile updates
  const updateUser = (updatedUserData) => {
    setUser(prevUser => {
      const newUser = {
        ...prevUser,
        ...updatedUserData,
        name: updatedUserData.firstName && updatedUserData.lastName 
          ? `${updatedUserData.firstName} ${updatedUserData.lastName}`
          : updatedUserData.name || prevUser?.name,
        profilePhoto: updatedUserData.profilePhoto || prevUser?.profilePhoto || ''
      };
      
      localStorage.setItem('crm-user', JSON.stringify(newUser));
      
      // Update token if it changed
      if (updatedUserData.token) {
        localStorage.setItem('token', updatedUserData.token);
      }
      
      return newUser;
    });
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading
  };

  return React.createElement(
    AuthContext.Provider,
    { value },
    children
  );
};