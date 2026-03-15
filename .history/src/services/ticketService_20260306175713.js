
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // Create axios instance with auth header
// const getAuthHeader = () => {
//   const user = JSON.parse(localStorage.getItem('crm-user'));
//   const token = user?.token;
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// const ticketService = {
//   // Create a new ticket
//   createTicket: async (ticketData) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets`,
//         ticketData,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get user's tickets
//   getUserTickets: async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/user`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get single ticket
//   getTicket: async (ticketId) => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/${ticketId}`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Add comment to ticket
//   addComment: async (ticketId, comment) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets/${ticketId}/comments`,
//         { text: comment },
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   }
// };

// export default ticketService;













// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // Create axios instance with auth header
// const getAuthHeader = () => {
//   const userStr = localStorage.getItem('crm-user');
//   if (!userStr) return {};
  
//   try {
//     const user = JSON.parse(userStr);
//     const token = user?.token || user?.data?.token;
//     return token ? { Authorization: `Bearer ${token}` } : {};
//   } catch (error) {
//     console.error('Error parsing user:', error);
//     return {};
//   }
// };

// const ticketService = {
//   // Create a new ticket
//   createTicket: async (ticketData) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets`,
//         ticketData,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Create ticket error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to create ticket' };
//     }
//   },

//   // Get user's tickets
//   getUserTickets: async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/user`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Get tickets error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load tickets' };
//     }
//   },

//   // Get single ticket
//   getTicket: async (ticketId) => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/${ticketId}`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Get ticket error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load ticket' };
//     }
//   },

//   // Update ticket
//   updateTicket: async (ticketId, updateData) => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/tickets/${ticketId}`,
//         updateData,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Update ticket error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to update ticket' };
//     }
//   },

//   // Delete ticket
//   deleteTicket: async (ticketId) => {
//     try {
//       const response = await axios.delete(
//         `${API_URL}/tickets/${ticketId}`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Delete ticket error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to delete ticket' };
//     }
//   },

//   // Add comment to ticket
//   addComment: async (ticketId, comment) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets/${ticketId}/comments`,
//         { text: comment },
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Add comment error:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to add comment' };
//     }
//   }
// };

// export default ticketService;








import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with auth header
const getAuthHeader = () => {
  const userStr = localStorage.getItem('crm-user');
  console.log('Raw user string:', userStr);
  
  if (!userStr || userStr === 'null' || userStr === 'undefined') {
    console.log('No valid user found in localStorage');
    return {};
  }
  
  try {
    const userData = JSON.parse(userStr);
    console.log('Parsed user data:', userData);
    
    // Check different possible token locations
    let token = null;
    
    if (userData.token) {
      token = userData.token;
    } else if (userData.data?.token) {
      token = userData.data.token;
    } else if (userData.accessToken) {
      token = userData.accessToken;
    }
    
    if (token) {
      console.log('Token found, length:', token.length);
      return { Authorization: `Bearer ${token}` };
    } else {
      console.log('No token found in user data');
      return {};
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
    return {};
  }
};

const ticketService = {
  // Create a new ticket
  createTicket: async (ticketData) => {
    try {
      console.log('Creating ticket with data:', ticketData);
      
      const headers = getAuthHeader();
      console.log('Request headers:', headers);
      
      if (!headers.Authorization) {
        throw new Error('No authentication token found. Please login again.');
      }
      
      const response = await axios.post(
        `${API_URL}/tickets`,
        ticketData,
        { headers }
      );
      
      console.log('Create ticket response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Create ticket error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.config?.headers
      });
      
      // Throw a more detailed error
      if (error.response?.status === 401) {
        throw { error: 'Authentication failed. Please login again.' };
      }
      
      throw error.response?.data || { error: 'Failed to create ticket' };
    }
  },

  // Get user's tickets
  getUserTickets: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(
        `${API_URL}/tickets/user`,
        { headers }
      );
      return response.data;
    } catch (error) {
      console.error('Get tickets error:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to load tickets' };
    }
  }
};

export default ticketService;