
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const ticketService = {
//   // Create a new ticket
//   createTicket: async (ticketData) => {
//     try {
//       const userStr = localStorage.getItem('crm-user');
//       let userId = 'user123';
//       let userName = 'User';
      
//       if (userStr) {
//         try {
//           const user = JSON.parse(userStr);
//           userId = user._id || user.id || 'user123';
//           userName = user.name || 'User';
//         } catch (e) {
//           console.error('Error parsing user:', e);
//         }
//       }
      
//       const dataToSend = {
//         ...ticketData,
//         userId: userId,
//         userName: userName
//       };
      
//       console.log('Sending to server:', dataToSend);
//       const response = await axios.post(`${API_URL}/tickets`, dataToSend);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to create ticket' };
//     }
//   },

//   // Get user tickets
//   getUserTickets: async () => {
//     try {
//       const userStr = localStorage.getItem('crm-user');
//       let userId = 'user123';
      
//       if (userStr) {
//         try {
//           const user = JSON.parse(userStr);
//           userId = user._id || user.id || 'user123';
//         } catch (e) {
//           console.error('Error parsing user:', e);
//         }
//       }
      
//       const response = await axios.get(`${API_URL}/tickets/user/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load tickets' };
//     }
//   },

//   // Get all tickets (admin)
//   getAllTickets: async () => {
//     try {
//       const response = await axios.get(`${API_URL}/tickets/all`);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load tickets' };
//     }
//   },

//   // Get single ticket
//   getTicket: async (ticketId) => {
//     try {
//       const response = await axios.get(`${API_URL}/tickets/${ticketId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load ticket' };
//     }
//   },

//   // Update ticket
//   updateTicket: async (ticketId, updateData) => {
//     try {
//       const response = await axios.put(`${API_URL}/tickets/${ticketId}`, updateData);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to update ticket' };
//     }
//   },

//   // Delete ticket
//   deleteTicket: async (ticketId) => {
//     try {
//       const response = await axios.delete(`${API_URL}/tickets/${ticketId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to delete ticket' };
//     }
//   },

//   // Add comment to ticket
//   addComment: async (ticketId, text, userType = 'User', userName = 'User') => {
//     try {
//       const response = await axios.post(`${API_URL}/tickets/${ticketId}/comments`, {
//         text,
//         userType,
//         userName
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error adding comment:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to add comment' };
//     }
//   }
// };

// export default ticketService;
















import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const ticketService = {
  // Create a new ticket
  createTicket: async (ticketData) => {
    try {
      const userStr = localStorage.getItem('crm-user');
      let userId = null;
      let userName = 'User';
      
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          userId = user._id || user.id;
          userName = user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';
        } catch (e) {
          console.error('Error parsing user:', e);
        }
      }
      
      if (!userId) {
        throw new Error('User not authenticated');
      }
      
      const dataToSend = {
        ...ticketData,
        userId: userId,
        userName: userName
      };
      
      const response = await axios.post(`${API_URL}/tickets`, dataToSend);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to create ticket' };
    }
  },

  // Get user's own tickets
  getUserTickets: async () => {
    try {
      const userStr = localStorage.getItem('crm-user');
      let userId = null;
      
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          userId = user._id || user.id;
        } catch (e) {
          console.error('Error parsing user:', e);
        }
      }
      
      if (!userId) {
        throw new Error('User not authenticated');
      }
      
      const response = await axios.get(`${API_URL}/tickets/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to load tickets' };
    }
  },

  // Get all tickets (admin only)
  getAllTickets: async () => {
    try {
      const response = await axios.get(`${API_URL}/tickets/all`);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to load tickets' };
    }
  },

  // Get single ticket
  getTicket: async (ticketId) => {
    try {
      const response = await axios.get(`${API_URL}/tickets/${ticketId}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to load ticket' };
    }
  },

  // Update ticket
  updateTicket: async (ticketId, updateData) => {
    try {
      const response = await axios.put(`${API_URL}/tickets/${ticketId}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to update ticket' };
    }
  },

  // Delete ticket
  deleteTicket: async (ticketId) => {
    try {
      const response = await axios.delete(`${API_URL}/tickets/${ticketId}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to delete ticket' };
    }
  },

  // Add comment to ticket
  addComment: async (ticketId, text, userType = 'User', userName = 'User') => {
    try {
      const userStr = localStorage.getItem('crm-user');
      let userId = null;
      
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          userId = user._id || user.id;
        } catch (e) {
          console.error('Error parsing user:', e);
        }
      }
      
      const response = await axios.post(`${API_URL}/tickets/${ticketId}/comments`, {
        text,
        userType,
        userName,
        userId
      });
      return response.data;
    } catch (error) {
      console.error('Error adding comment:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to add comment' };
    }
  }
};

export default ticketService;