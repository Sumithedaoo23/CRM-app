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