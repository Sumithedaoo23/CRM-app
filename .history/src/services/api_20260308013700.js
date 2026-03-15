
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor to add token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor to handle errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
















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
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;







