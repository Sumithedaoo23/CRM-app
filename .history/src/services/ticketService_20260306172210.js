
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