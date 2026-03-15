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

















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Load env vars
// dotenv.config();

// // Connect to database
// connectDB();

// // Route imports
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const leadRoutes = require('./routes/leadRoutes');
// const roleRoutes = require('./routes/roleRoutes');
// const permissionRoutes = require('./routes/permissionRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const hyperlinkRoutes = require('./routes/hyperlinkRoutes');

// const app = express();

// // Body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Enable CORS
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// // Mount routes
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/roles', roleRoutes);
// app.use('/api/permissions', permissionRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/hyperlinks', hyperlinkRoutes);

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.json({ message: 'CRM API is running...' });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     error: 'Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`❌ Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });











// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Load env vars
// dotenv.config();

// // Connect to database
// connectDB();

// // Route imports
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// // Add other routes as needed...

// const app = express();

// // Body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Enable CORS
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// // Mount routes - FIXED: Make sure all these files exist
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// // Comment out routes that don't exist yet
// // app.use('/api/contacts', contactRoutes);
// // app.use('/api/leads', leadRoutes);
// // app.use('/api/roles', roleRoutes);
// // app.use('/api/permissions', permissionRoutes);
// // app.use('/api/admin', adminRoutes);
// // app.use('/api/dashboard', dashboardRoutes);
// // app.use('/api/hyperlinks', hyperlinkRoutes);

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.json({ message: 'CRM API is running...' });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     error: 'Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`❌ Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Load env vars
// dotenv.config();

// // Connect to database
// connectDB();

// // Route imports
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // Body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Enable CORS for both ports 3000 and 3001
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:3001'],
//   credentials: true
// }));

// // Mount routes
// app.use('/api/tickets', ticketRoutes);  // This should be present
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.json({ message: 'CRM API is running...' });
// });

// // Test route to verify API is working
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'API is working!' });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     error: 'Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📝 Available routes:`);
//   console.log(`   - GET /`);
//   console.log(`   - GET /api/test`);
//   console.log(`   - POST /api/auth/login`);
//   console.log(`   - POST /api/auth/register`);
//   console.log(`   - POST /api/tickets`);
//   console.log(`   - GET /api/tickets/user`);
//   console.log(`   - GET /api/tickets/admin`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`❌ Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });









const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import database connection
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Import routes that actually exist
const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Comment out routes that don't exist yet or are causing errors
// const contactRoutes = require('./routes/contactRoutes');
// const leadRoutes = require('./routes/leadRoutes');
// const roleRoutes = require('./routes/roleRoutes');
// const permissionRoutes = require('./routes/permissionRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const hyperlinkRoutes = require('./routes/hyperlinkRoutes');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration - Allow both ports 3000 and 3001
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ==================== ROUTES ====================

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API test route
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// User routes
app.use('/api/users', userRoutes);

// Ticket routes
app.use('/api/tickets', ticketRoutes);

// ==================== ERROR HANDLING ====================

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: messages
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: 'Duplicate field value entered'
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      error: 'Token expired'
    });
  }

  // Default error
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// ==================== SERVER START ====================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log(`🚀 SERVER STARTED SUCCESSFULLY`);
  console.log('='.repeat(50));
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🕒 Time: ${new Date().toLocaleString()}`);
  console.log('\n📝 Available Routes:');
  console.log('   ┌─ Health Check');
  console.log(`   │  ├─ GET  /health`);
  console.log(`   │  └─ GET  /api/test`);
  console.log('   ├─ Auth Routes');
  console.log(`   │  ├─ POST /api/auth/register`);
  console.log(`   │  ├─ POST /api/auth/login`);
  console.log(`   │  ├─ GET  /api/auth/me`);
  console.log(`   │  └─ POST /api/auth/logout`);
  console.log('   ├─ User Routes');
  console.log(`   │  ├─ GET  /api/users`);
  console.log(`   │  ├─ GET  /api/users/:id`);
  console.log(`   │  ├─ PUT  /api/users/:id`);
  console.log(`   │  ├─ DELETE /api/users/:id`);
  console.log(`   │  └─ GET  /api/users/profile/me`);
  console.log('   └─ Ticket Routes');
  console.log(`      ├─ POST /api/tickets`);
  console.log(`      ├─ GET  /api/tickets/user`);
  console.log(`      ├─ GET  /api/tickets/admin`);
  console.log(`      ├─ GET  /api/tickets/:id`);
  console.log(`      ├─ PUT  /api/tickets/:id`);
  console.log(`      ├─ DELETE /api/tickets/:id`);
  console.log(`      ├─ PUT  /api/tickets/:id/status`);
  console.log(`      ├─ PUT  /api/tickets/:id/assign`);
  console.log(`      └─ POST /api/tickets/:id/comments`);
  console.log('='.repeat(50) + '\n');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('❌ Unhandled Rejection:', err.message);
  console.log(err.stack);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('❌ Uncaught Exception:', err.message);
  console.log(err.stack);
  server.close(() => process.exit(1));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('💤 Process terminated!');
    mongoose.connection.close(false, () => {
      process.exit(0);
    });
  });
});

module.exports = { app, server };