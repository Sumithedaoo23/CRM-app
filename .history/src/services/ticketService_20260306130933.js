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














import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with auth header
const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('crm-user'));
  const token = user?.token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const ticketService = {
  // Create a new ticket
  createTicket: async (ticketData) => {
    try {
      const response = await axios.post(
        `${API_URL}/tickets`,
        ticketData,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user's tickets
  getUserTickets: async () => {
    try {
      const response = await axios.get(
        `${API_URL}/tickets/user`,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single ticket
  getTicket: async (ticketId) => {
    try {
      const response = await axios.get(
        `${API_URL}/tickets/${ticketId}`,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Add comment to ticket
  addComment: async (ticketId, comment) => {
    try {
      const response = await axios.post(
        `${API_URL}/tickets/${ticketId}/comments`,
        { text: comment },
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default ticketService;