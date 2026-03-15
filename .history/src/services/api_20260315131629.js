
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Add token to requests if it exists
// api.interceptors.request.use(
//   (config) => {
//     const userStr = localStorage.getItem('crm-user');
//     if (userStr) {
//       try {
//         const user = JSON.parse(userStr);
//         if (user.token) {
//           config.headers.Authorization = `Bearer ${user.token}`;
//         }
//       } catch (e) {
//         console.error('Error parsing user:', e);
//       }
//     }
    
//     // Log request for debugging
//     console.log('API Request:', {
//       method: config.method,
//       url: config.url,
//       data: config.data instanceof FormData ? 'FormData' : config.data,
//       headers: config.headers
//     });
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for debugging
// api.interceptors.response.use(
//   (response) => {
//     console.log('API Response:', {
//       status: response.status,
//       data: response.data
//     });
//     return response;
//   },
//   (error) => {
//     console.error('API Error:', {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status
//     });
//     return Promise.reject(error);
//   }
// );

// export default api;