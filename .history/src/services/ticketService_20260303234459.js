// import api from './api';

// const ticketService = {
//   // Create new ticket (user)
//   createTicket: async (ticketData) => {
//     try {
//       const response = await api.post('/tickets', ticketData);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get all tickets (admin)
//   getTickets: async (filters = {}) => {
//     try {
//       const params = new URLSearchParams();
//       if (filters.status) params.append('status', filters.status);
//       if (filters.priority) params.append('priority', filters.priority);
//       if (filters.page) params.append('page', filters.page);
      
//       const response = await api.get(`/tickets?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get user tickets
//   getUserTickets: async () => {
//     try {
//       const response = await api.get('/tickets/my-tickets');
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get single ticket
//   getTicket: async (id) => {
//     try {
//       const response = await api.get(`/tickets/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Update ticket status (admin)
//   updateTicketStatus: async (id, status, resolution) => {
//     try {
//       const response = await api.put(`/tickets/${id}/status`, { status, resolution });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Assign ticket to admin
//   assignTicket: async (id, adminId) => {
//     try {
//       const response = await api.put(`/tickets/${id}/assign`, { adminId });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Add comment to ticket
//   addComment: async (id, content) => {
//     try {
//       const response = await api.post(`/tickets/${id}/comments`, { content });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Delete ticket (admin)
//   deleteTicket: async (id, confirmTicketNumber) => {
//     try {
//       const response = await api.delete(`/tickets/${id}`, {
//         data: { confirmTicketNumber }
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   }
// };

// export default ticketService;










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