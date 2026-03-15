// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');

// // Load env vars
// dotenv.config();

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const leadRoutes = require('./routes/leadRoutes');
// const roleRoutes = require('./routes/roleRoutes');
// const permissionRoutes = require('./routes/permissionRoutes');
// const ticketRoutes = require('./routes/ticketRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const hyperlinkRoutes = require('./routes/hyperlinkRoutes');

// // Connect to database
// const connectDB = require('./config/db');
// connectDB();

// const app = express();

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use('/api', limiter);

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/admins', adminRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/roles', roleRoutes);
// app.use('/api/permissions', permissionRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/hyperlinks', hyperlinkRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Server Error',
//     error: process.env.NODE_ENV === 'development' ? err : {}
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });












// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');

// // Load env vars
// dotenv.config();

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const ticketRoutes = require('./routes/ticketRoutes');
// const dashboardRoutes = require('./dashboardRoutes');
// const testRoutes = require('./routes/testRoutes'); // Add test route

// // Note: Comment out routes that don't exist yet
// // const adminRoutes = require('./routes/adminRoutes');
// // const contactRoutes = require('./routes/contactRoutes');
// // const leadRoutes = require('./routes/leadRoutes');
// // const roleRoutes = require('./routes/roleRoutes');
// // const permissionRoutes = require('./routes/permissionRoutes');
// // const hyperlinkRoutes = require('./routes/hyperlinkRoutes');

// // Connect to database
// const connectDB = require('./config/db');
// connectDB();

// const app = express();

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use('/api', limiter);

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/test', testRoutes); // Add test route

// // Comment out routes that don't exist yet
// // app.use('/api/admins', adminRoutes);
// // app.use('/api/contacts', contactRoutes);
// // app.use('/api/leads', leadRoutes);
// // app.use('/api/roles', roleRoutes);
// // app.use('/api/permissions', permissionRoutes);
// // app.use('/api/hyperlinks', hyperlinkRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Server Error',
//     error: process.env.NODE_ENV === 'development' ? err : {}
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });













// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');

// // Load env vars
// dotenv.config();

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const ticketRoutes = require('./routes/ticketRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const testRoutes = require('./routes/testRoutes');

// // Connect to database
// const connectDB = require('./config/db');
// connectDB();

// const app = express();

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use('/api', limiter);

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/test', testRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Server Error',
//     error: process.env.NODE_ENV === 'development' ? err : {}
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Test the API at: http://localhost:${PORT}/api/test`);
// });


















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');

// // Load env vars
// dotenv.config();

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/crm_solar_system', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// };
// connectDB();

// // Import Models
// const Admin = require('./models/Admin');
// const User = require('./models/User');

// // Test Route
// app.get('/api/test', (req, res) => {
//   res.json({ 
//     success: true, 
//     message: 'API is working!',
//     timestamp: new Date().toISOString()
//   });
// });

// // Admin Login Route
// app.post('/api/auth/login-admin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log('Login attempt:', email, password);

//     // Check if admin exists
//     let admin = await Admin.findOne({ email });
    
//     // If no admin exists, create default admin
//     if (!admin) {
//       console.log('No admin found, creating default admin');
//       admin = await Admin.create({
//         firstName: 'Admin',
//         lastName: 'User',
//         email: 'admin@crm.com',
//         password: 'admin123',
//         phone: '+1234567890',
//         role: 'super-admin'
//       });
//       console.log('Default admin created');
//     }

//     // Check password (simple comparison for demo)
//     if (password === 'admin123') {
//       const token = 'dummy-token-' + Date.now();
      
//       res.json({
//         success: true,
//         token,
//         user: {
//           id: admin._id,
//           firstName: admin.firstName,
//           lastName: admin.lastName,
//           email: admin.email,
//           role: 'admin',
//           phone: admin.phone
//         }
//       });
//     } else {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// // User Login Route
// app.post('/api/auth/login-user', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // For demo, accept any credentials with @user.com
//     if (email.includes('@') && password) {
//       res.json({
//         success: true,
//         token: 'user-token-' + Date.now(),
//         user: {
//           id: 'user-' + Date.now(),
//           firstName: email.split('@')[0],
//           lastName: 'User',
//           email: email,
//           role: 'user'
//         }
//       });
//     } else {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// // Dashboard Routes
// app.get('/api/dashboard/admin', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: {
//         counts: {
//           users: 1254,
//           contacts: 856,
//           leads: 367,
//           tickets: 89,
//           roles: 5,
//           permissions: 12
//         },
//         ticketStats: {
//           pending: 24,
//           'in-progress': 15,
//           resolved: 42,
//           closed: 8,
//           rejected: 0
//         },
//         successRate: 78,
//         recentActivities: {
//           tickets: [],
//           leads: []
//         }
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.get('/api/dashboard/user', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: {
//         totalTickets: 5,
//         ticketStats: {
//           pending: 2,
//           'in-progress': 1,
//           resolved: 2,
//           closed: 0,
//           rejected: 0
//         },
//         recentTickets: []
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // User Routes
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = [
//       {
//         _id: '1',
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         phone: '+1234567890',
//         role: 'user',
//         isActive: true,
//         company: 'Tech Corp'
//       },
//       {
//         _id: '2',
//         firstName: 'Jane',
//         lastName: 'Smith',
//         email: 'jane@example.com',
//         phone: '+0987654321',
//         role: 'admin',
//         isActive: true,
//         company: 'Design Studio'
//       }
//     ];
    
//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total: 2,
//         page: 1,
//         pages: 1
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.post('/api/users', async (req, res) => {
//   try {
//     const newUser = {
//       _id: Date.now().toString(),
//       ...req.body,
//       isActive: true
//     };
//     res.status(201).json({
//       success: true,
//       data: newUser
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.put('/api/users/:id', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: { _id: req.params.id, ...req.body }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Ticket Routes
// app.get('/api/tickets', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: [],
//       pagination: {
//         total: 0,
//         page: 1,
//         pages: 1
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.post('/api/tickets', async (req, res) => {
//   try {
//     const newTicket = {
//       _id: Date.now().toString(),
//       ticketNumber: 'TICK-' + Date.now(),
//       ...req.body,
//       status: 'pending',
//       createdAt: new Date()
//     };
//     res.status(201).json({
//       success: true,
//       data: newTicket
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.get('/api/tickets/my-tickets', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: []
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Test API: http://localhost:${PORT}/api/test`);
// });












// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');

// // Load env vars
// dotenv.config();

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/crm_solar_system', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// };
// connectDB();

// // Import Models
// const Admin = require('./models/Admin');
// const User = require('./models/User');

// // Test Route
// app.get('/api/test', (req, res) => {
//   res.json({ 
//     success: true, 
//     message: 'API is working!',
//     timestamp: new Date().toISOString()
//   });
// });

// // Admin Login Route
// app.post('/api/auth/login-admin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log('Login attempt:', email, password);

//     // Check if admin exists
//     let admin = await Admin.findOne({ email });
    
//     // If no admin exists, create default admin
//     if (!admin) {
//       console.log('No admin found, creating default admin');
//       admin = await Admin.create({
//         firstName: 'Admin',
//         lastName: 'User',
//         email: 'admin@crm.com',
//         password: 'admin123',
//         phone: '+1234567890',
//         role: 'super-admin'
//       });
//       console.log('Default admin created');
//     }

//     // Check password (simple comparison for demo)
//     if (password === 'admin123') {
//       const token = 'dummy-token-' + Date.now();
      
//       res.json({
//         success: true,
//         token,
//         user: {
//           id: admin._id,
//           firstName: admin.firstName,
//           lastName: admin.lastName,
//           email: admin.email,
//           role: 'admin',
//           phone: admin.phone
//         }
//       });
//     } else {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// // User Login Route
// app.post('/api/auth/login-user', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // For demo, accept any credentials with @user.com
//     if (email.includes('@') && password) {
//       res.json({
//         success: true,
//         token: 'user-token-' + Date.now(),
//         user: {
//           id: 'user-' + Date.now(),
//           firstName: email.split('@')[0],
//           lastName: 'User',
//           email: email,
//           role: 'user'
//         }
//       });
//     } else {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// // Dashboard Routes
// app.get('/api/dashboard/admin', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: {
//         counts: {
//           users: 1254,
//           contacts: 856,
//           leads: 367,
//           tickets: 89,
//           roles: 5,
//           permissions: 12
//         },
//         ticketStats: {
//           pending: 24,
//           'in-progress': 15,
//           resolved: 42,
//           closed: 8,
//           rejected: 0
//         },
//         successRate: 78,
//         recentActivities: {
//           tickets: [],
//           leads: []
//         }
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.get('/api/dashboard/user', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: {
//         totalTickets: 5,
//         ticketStats: {
//           pending: 2,
//           'in-progress': 1,
//           resolved: 2,
//           closed: 0,
//           rejected: 0
//         },
//         recentTickets: []
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // User Routes
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = [
//       {
//         _id: '1',
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         phone: '+1234567890',
//         role: 'user',
//         isActive: true,
//         company: 'Tech Corp'
//       },
//       {
//         _id: '2',
//         firstName: 'Jane',
//         lastName: 'Smith',
//         email: 'jane@example.com',
//         phone: '+0987654321',
//         role: 'admin',
//         isActive: true,
//         company: 'Design Studio'
//       }
//     ];
    
//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total: 2,
//         page: 1,
//         pages: 1
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.post('/api/users', async (req, res) => {
//   try {
//     const newUser = {
//       _id: Date.now().toString(),
//       ...req.body,
//       isActive: true
//     };
//     res.status(201).json({
//       success: true,
//       data: newUser
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.put('/api/users/:id', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: { _id: req.params.id, ...req.body }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Ticket Routes
// app.get('/api/tickets', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: [],
//       pagination: {
//         total: 0,
//         page: 1,
//         pages: 1
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.post('/api/tickets', async (req, res) => {
//   try {
//     const newTicket = {
//       _id: Date.now().toString(),
//       ticketNumber: 'TICK-' + Date.now(),
//       ...req.body,
//       status: 'pending',
//       createdAt: new Date()
//     };
//     res.status(201).json({
//       success: true,
//       data: newTicket
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// app.get('/api/tickets/my-tickets', async (req, res) => {
//   try {
//     res.json({
//       success: true,
//       data: []
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Test API: http://localhost:${PORT}/api/test`);
// });

















