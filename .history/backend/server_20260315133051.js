
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/crm_db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//     console.log(`📊 Database: ${conn.connection.name}`);
    
//   } catch (error) {
//     console.error('❌ MongoDB Connection Error:', error.message);
//     process.exit(1);
//   }
// };

// connectDB();

// // Import Models
// const Ticket = require('./models/Ticket');
// const User = require('./models/User');

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:3001'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ============ ROUTE IMPORTS ============
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const messageRoutes = require('./routes/messageRoutes');
// const roleRoutes = require('./routes/roleRoutes');

// // ============ MOUNT ROUTES ============
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/roles', roleRoutes);

// // Helper function to clean phone numbers
// const cleanPhoneNumber = (phone) => {
//   if (!phone) return '';
//   // Remove all non-numeric characters
//   return phone.toString().replace(/\D/g, '');
// };

// // ============ USER ROUTES ============

// // Get all users with filters and pagination
// app.get('/api/users', async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;
//     const query = {};

//     if (role) {
//       query.role = role;
//     }

//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const skip = (parseInt(page) - 1) * parseInt(limit);
    
//     const users = await User.find(query)
//       .select('-password')
//       .skip(skip)
//       .limit(parseInt(limit))
//       .sort({ createdAt: -1 });

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / parseInt(limit))
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Create new user - AUTO APPROVE (FIXED)
// app.post('/api/users', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, company, address, isActive } = req.body;

//     // Check if user exists (case insensitive)
//     const existingUser = await User.findOne({ 
//       email: email.toLowerCase().trim() 
//     });
    
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User with this email already exists'
//       });
//     }

//     // Clean phone number - remove all non-numeric characters
//     const cleanedPhone = cleanPhoneNumber(phone);

//     // AUTO-APPROVE - set isApproved to true by default
//     const user = new User({
//       firstName,
//       lastName,
//       email: email.toLowerCase().trim(),
//       password: password || 'password123',
//       phone: cleanedPhone,
//       role: role || 'user',
//       company: company || '',
//       address: address || {},
//       isActive: isActive !== undefined ? isActive : true,
//       isApproved: true // AUTO-APPROVED - no pending approval needed
//     });

//     await user.save();

//     const userResponse = user.toObject();
//     delete userResponse.password;

//     res.status(201).json({
//       success: true,
//       data: userResponse
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get single user
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const user = await User.findById(req.params.id).select('-password');
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Update user - FIXED for admin profile
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const { firstName, lastName, email, phone, role, company, address, isActive, isApproved, password } = req.body;

//     if (email) {
//       const existingUser = await User.findOne({ 
//         email: email.toLowerCase().trim(), 
//         _id: { $ne: req.params.id } 
//       });
      
//       if (existingUser) {
//         return res.status(400).json({
//           success: false,
//           error: 'Email already in use by another user'
//         });
//       }
//     }

//     // Clean phone number if provided
//     const cleanedPhone = phone ? cleanPhoneNumber(phone) : undefined;

//     const updateData = {
//       firstName,
//       lastName,
//       email: email ? email.toLowerCase().trim() : undefined,
//       role,
//       company,
//       address,
//       isActive,
//       isApproved,
//       updatedAt: Date.now()
//     };

//     // Only add phone if it's provided
//     if (cleanedPhone !== undefined) {
//       updateData.phone = cleanedPhone;
//     }

//     // If password is provided and not empty, hash it
//     if (password && password.trim() !== '') {
//       const bcrypt = require('bcryptjs');
//       const salt = await bcrypt.genSalt(10);
//       updateData.password = await bcrypt.hash(password, salt);
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true, runValidators: true }
//     ).select('-password');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Delete user with confirmation
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const { confirmFullName } = req.body;
    
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
//     if (confirmFullName !== fullName) {
//       return res.status(400).json({
//         success: false,
//         error: 'Name confirmation does not match'
//       });
//     }

//     await user.deleteOne();

//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // ============ TICKET ROUTES ============

// // Get user tickets
// app.get('/api/tickets/user/:userId', async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get all tickets
// app.get('/api/tickets/all', async (req, res) => {
//   try {
//     const tickets = await Ticket.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get single ticket
// app.get('/api/tickets/:id', async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Create ticket
// app.post('/api/tickets', async (req, res) => {
//   try {
//     const { title, description, category, priority, userId, userName } = req.body;
    
//     if (!title || !description) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'Title and description are required' 
//       });
//     }
    
//     const ticketUserId = userId || 'user123';
//     const ticketUserName = userName || 'User';
    
//     const ticket = new Ticket({
//       title,
//       description,
//       category: category || 'general',
//       priority: priority || 'medium',
//       userId: ticketUserId,
//       userName: ticketUserName,
//       comments: []
//     });
    
//     const savedTicket = await ticket.save();
    
//     res.status(201).json({ 
//       success: true, 
//       data: savedTicket 
//     });
//   } catch (error) {
//     console.error('Error creating ticket:', error);
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // Update ticket
// app.put('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;
    
//     const ticket = await Ticket.findByIdAndUpdate(
//       id, 
//       updates, 
//       { new: true, runValidators: true }
//     );
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Delete ticket
// app.delete('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const ticket = await Ticket.findByIdAndDelete(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, message: 'Ticket deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Add comment to ticket
// app.post('/api/tickets/:id/comments', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { text, userType, userName } = req.body;
    
//     const ticket = await Ticket.findById(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     if (!ticket.comments) {
//       ticket.comments = [];
//     }
    
//     ticket.comments.push({
//       text,
//       userType: userType || 'User',
//       userName: userName || 'User',
//       createdAt: new Date()
//     });
    
//     await ticket.save();
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ============ DASHBOARD ROUTES ============

// // Get admin dashboard stats
// app.get('/api/dashboard/admin', async (req, res) => {
//   try {
//     const tickets = await Ticket.find();
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const totalTickets = tickets.length;
//     const resolvedCount = ticketStats.resolved + ticketStats.closed;
//     const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
//     const totalUsers = await User.countDocuments();
    
//     const recentTickets = await Ticket.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const recentUsers = await User.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('firstName lastName email createdAt');
    
//     const stats = {
//       counts: {
//         users: totalUsers,
//         contacts: totalUsers,
//         activeContacts: await User.countDocuments({ isActive: true }),
//         inactiveContacts: await User.countDocuments({ isActive: false }),
//         leads: 0,
//         tickets: totalTickets,
//         roles: 0,
//         permissions: 0
//       },
//       ticketStats: ticketStats,
//       successRate: successRate,
//       recentActivities: {
//         tickets: recentTickets,
//         users: recentUsers
//       }
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('Dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get user dashboard stats
// app.get('/api/dashboard/user/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
    
//     const tickets = await Ticket.find({ userId });
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const recentTickets = await Ticket.find({ userId })
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const stats = {
//       totalTickets: tickets.length,
//       ticketStats: ticketStats,
//       recentTickets: recentTickets
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('User dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Test route
// app.get('/api/test/db', async (req, res) => {
//   try {
//     const ticketCount = await Ticket.countDocuments();
//     const userCount = await User.countDocuments();
//     res.json({
//       success: true,
//       message: 'Database is connected',
//       stats: {
//         tickets: ticketCount,
//         users: userCount
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Root route
// app.get('/', (req, res) => {
//   res.json({ 
//     success: true,
//     message: 'CRM API is running',
//     endpoints: {
//       auth: '/api/auth/login',
//       users: '/api/users',
//       tickets: '/api/tickets/all',
//       dashboard: '/api/dashboard/admin',
//       test: '/api/test/db'
//     }
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     error: `Cannot ${req.method} ${req.originalUrl}`
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err.stack);
//   res.status(500).json({
//     success: false,
//     error: err.message || 'Internal Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log('\n' + '='.repeat(50));
//   console.log(`🚀 SERVER STARTED SUCCESSFULLY`);
//   console.log('='.repeat(50));
//   console.log(`📡 Port: ${PORT}`);
//   console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
//   console.log(`🕒 Time: ${new Date().toLocaleString()}`);
//   console.log('\n📝 Available Routes:');
//   console.log('   ┌─ Health Check');
//   console.log(`   │  ├─ GET  /`);
//   console.log(`   │  └─ GET  /api/test/db`);
//   console.log('   ├─ Auth Routes');
//   console.log(`   │  └─ POST /api/auth/login`);
//   console.log('   ├─ User Routes');
//   console.log(`   │  ├─ GET  /api/users`);
//   console.log(`   │  ├─ POST /api/users (AUTO-APPROVE)`);
//   console.log(`   │  ├─ GET  /api/users/:id`);
//   console.log(`   │  ├─ PUT  /api/users/:id`);
//   console.log(`   │  └─ DELETE /api/users/:id`);
//   console.log('   ├─ Ticket Routes');
//   console.log(`   │  ├─ GET  /api/tickets/all`);
//   console.log(`   │  ├─ GET  /api/tickets/user/:userId`);
//   console.log(`   │  ├─ GET  /api/tickets/:id`);
//   console.log(`   │  ├─ POST /api/tickets`);
//   console.log(`   │  ├─ PUT  /api/tickets/:id`);
//   console.log(`   │  ├─ DELETE /api/tickets/:id`);
//   console.log(`   │  └─ POST /api/tickets/:id/comments`);
//   console.log('   └─ Dashboard Routes');
//   console.log(`      ├─ GET  /api/dashboard/admin`);
//   console.log(`      └─ GET  /api/dashboard/user/:userId`);
//   console.log('='.repeat(50) + '\n');
// });













// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/crm_db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//     console.log(`📊 Database: ${conn.connection.name}`);
    
//   } catch (error) {
//     console.error('❌ MongoDB Connection Error:', error.message);
//     process.exit(1);
//   }
// };

// connectDB();

// // Import Models
// const Ticket = require('./models/Ticket');
// const User = require('./models/User');

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:3001'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ============ ROUTE IMPORTS ============
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const messageRoutes = require('./routes/messageRoutes');
// const roleRoutes = require('./routes/roleRoutes');

// // ============ MOUNT ROUTES ============
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/roles', roleRoutes);

// // Helper function to clean phone numbers
// const cleanPhoneNumber = (phone) => {
//   if (!phone) return '';
//   // Remove all non-numeric characters
//   return phone.toString().replace(/\D/g, '');
// };

// // ============ USER ROUTES ============

// // Get all users with filters and pagination
// app.get('/api/users', async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;
//     const query = {};

//     if (role) {
//       query.role = role;
//     }

//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const skip = (parseInt(page) - 1) * parseInt(limit);
    
//     const users = await User.find(query)
//       .select('-password')
//       .skip(skip)
//       .limit(parseInt(limit))
//       .sort({ createdAt: -1 });

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / parseInt(limit))
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Create new user - AUTO APPROVE (FIXED)
// app.post('/api/users', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, company, address, isActive } = req.body;

//     // Check if user exists (case insensitive)
//     const existingUser = await User.findOne({ 
//       email: email.toLowerCase().trim() 
//     });
    
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User with this email already exists'
//       });
//     }

//     // Clean phone number - remove all non-numeric characters
//     const cleanedPhone = cleanPhoneNumber(phone);

//     // AUTO-APPROVE - set isApproved to true by default
//     const user = new User({
//       firstName,
//       lastName,
//       email: email.toLowerCase().trim(),
//       password: password || 'password123',
//       phone: cleanedPhone,
//       role: role || 'user',
//       company: company || '',
//       address: address || {},
//       isActive: isActive !== undefined ? isActive : true,
//       isApproved: true // AUTO-APPROVED - no pending approval needed
//     });

//     await user.save();

//     const userResponse = user.toObject();
//     delete userResponse.password;

//     res.status(201).json({
//       success: true,
//       data: userResponse
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get single user
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const user = await User.findById(req.params.id).select('-password');
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Update user - FIXED for admin profile
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const { firstName, lastName, email, phone, role, company, address, isActive, isApproved, password } = req.body;

//     if (email) {
//       const existingUser = await User.findOne({ 
//         email: email.toLowerCase().trim(), 
//         _id: { $ne: req.params.id } 
//       });
      
//       if (existingUser) {
//         return res.status(400).json({
//           success: false,
//           error: 'Email already in use by another user'
//         });
//       }
//     }

//     // Clean phone number if provided
//     const cleanedPhone = phone ? cleanPhoneNumber(phone) : undefined;

//     const updateData = {
//       firstName,
//       lastName,
//       email: email ? email.toLowerCase().trim() : undefined,
//       role,
//       company,
//       address,
//       isActive,
//       isApproved,
//       updatedAt: Date.now()
//     };

//     // Only add phone if it's provided
//     if (cleanedPhone !== undefined) {
//       updateData.phone = cleanedPhone;
//     }

//     // If password is provided and not empty, hash it
//     if (password && password.trim() !== '') {
//       const bcrypt = require('bcryptjs');
//       const salt = await bcrypt.genSalt(10);
//       updateData.password = await bcrypt.hash(password, salt);
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true, runValidators: true }
//     ).select('-password');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Delete user with confirmation
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const { confirmFullName } = req.body;
    
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
//     if (confirmFullName !== fullName) {
//       return res.status(400).json({
//         success: false,
//         error: 'Name confirmation does not match'
//       });
//     }

//     await user.deleteOne();

//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // ============ TICKET ROUTES ============

// // Get user tickets
// app.get('/api/tickets/user/:userId', async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get all tickets
// app.get('/api/tickets/all', async (req, res) => {
//   try {
//     const tickets = await Ticket.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get single ticket
// app.get('/api/tickets/:id', async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Create ticket
// app.post('/api/tickets', async (req, res) => {
//   try {
//     const { title, description, category, priority, userId, userName } = req.body;
    
//     if (!title || !description) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'Title and description are required' 
//       });
//     }
    
//     const ticketUserId = userId || 'user123';
//     const ticketUserName = userName || 'User';
    
//     const ticket = new Ticket({
//       title,
//       description,
//       category: category || 'general',
//       priority: priority || 'medium',
//       userId: ticketUserId,
//       userName: ticketUserName,
//       comments: []
//     });
    
//     const savedTicket = await ticket.save();
    
//     res.status(201).json({ 
//       success: true, 
//       data: savedTicket 
//     });
//   } catch (error) {
//     console.error('Error creating ticket:', error);
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // Update ticket
// app.put('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;
    
//     const ticket = await Ticket.findByIdAndUpdate(
//       id, 
//       updates, 
//       { new: true, runValidators: true }
//     );
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Delete ticket
// app.delete('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const ticket = await Ticket.findByIdAndDelete(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, message: 'Ticket deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Add comment to ticket
// app.post('/api/tickets/:id/comments', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { text, userType, userName } = req.body;
    
//     const ticket = await Ticket.findById(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     if (!ticket.comments) {
//       ticket.comments = [];
//     }
    
//     ticket.comments.push({
//       text,
//       userType: userType || 'User',
//       userName: userName || 'User',
//       createdAt: new Date()
//     });
    
//     await ticket.save();
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ============ DASHBOARD ROUTES ============

// // Get admin dashboard stats
// app.get('/api/dashboard/admin', async (req, res) => {
//   try {
//     const tickets = await Ticket.find();
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const totalTickets = tickets.length;
//     const resolvedCount = ticketStats.resolved + ticketStats.closed;
//     const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
//     const totalUsers = await User.countDocuments();
    
//     const recentTickets = await Ticket.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const recentUsers = await User.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('firstName lastName email createdAt');
    
//     const stats = {
//       counts: {
//         users: totalUsers,
//         contacts: totalUsers,
//         activeContacts: await User.countDocuments({ isActive: true }),
//         inactiveContacts: await User.countDocuments({ isActive: false }),
//         leads: 0,
//         tickets: totalTickets,
//         roles: 0,
//         permissions: 0
//       },
//       ticketStats: ticketStats,
//       successRate: successRate,
//       recentActivities: {
//         tickets: recentTickets,
//         users: recentUsers
//       }
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('Dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get user dashboard stats
// app.get('/api/dashboard/user/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
    
//     const tickets = await Ticket.find({ userId });
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const recentTickets = await Ticket.find({ userId })
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const stats = {
//       totalTickets: tickets.length,
//       ticketStats: ticketStats,
//       recentTickets: recentTickets
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('User dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Test route
// app.get('/api/test/db', async (req, res) => {
//   try {
//     const ticketCount = await Ticket.countDocuments();
//     const userCount = await User.countDocuments();
//     res.json({
//       success: true,
//       message: 'Database is connected',
//       stats: {
//         tickets: ticketCount,
//         users: userCount
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Root route
// app.get('/', (req, res) => {
//   res.json({ 
//     success: true,
//     message: 'CRM API is running',
//     endpoints: {
//       auth: '/api/auth/login',
//       users: '/api/users',
//       tickets: '/api/tickets/all',
//       dashboard: '/api/dashboard/admin',
//       test: '/api/test/db'
//     }
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     error: `Cannot ${req.method} ${req.originalUrl}`
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err.stack);
//   res.status(500).json({
//     success: false,
//     error: err.message || 'Internal Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log('\n' + '='.repeat(50));
//   console.log(`🚀 SERVER STARTED SUCCESSFULLY`);
//   console.log('='.repeat(50));
//   console.log(`📡 Port: ${PORT}`);
//   console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
//   console.log(`🕒 Time: ${new Date().toLocaleString()}`);
//   console.log('\n📝 Available Routes:');
//   console.log('   ┌─ Health Check');
//   console.log(`   │  ├─ GET  /`);
//   console.log(`   │  └─ GET  /api/test/db`);
//   console.log('   ├─ Auth Routes');
//   console.log(`   │  └─ POST /api/auth/login`);
//   console.log('   ├─ User Routes');
//   console.log(`   │  ├─ GET  /api/users`);
//   console.log(`   │  ├─ POST /api/users (AUTO-APPROVE)`);
//   console.log(`   │  ├─ GET  /api/users/:id`);
//   console.log(`   │  ├─ PUT  /api/users/:id`);
//   console.log(`   │  └─ DELETE /api/users/:id`);
//   console.log('   ├─ Ticket Routes');
//   console.log(`   │  ├─ GET  /api/tickets/all`);
//   console.log(`   │  ├─ GET  /api/tickets/user/:userId`);
//   console.log(`   │  ├─ GET  /api/tickets/:id`);
//   console.log(`   │  ├─ POST /api/tickets`);
//   console.log(`   │  ├─ PUT  /api/tickets/:id`);
//   console.log(`   │  ├─ DELETE /api/tickets/:id`);
//   console.log(`   │  └─ POST /api/tickets/:id/comments`);
//   console.log('   └─ Dashboard Routes');
//   console.log(`      ├─ GET  /api/dashboard/admin`);
//   console.log(`      └─ GET  /api/dashboard/user/:userId`);
//   console.log('='.repeat(50) + '\n');
// });
















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/crm_db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//     console.log(`📊 Database: ${conn.connection.name}`);
    
//   } catch (error) {
//     console.error('❌ MongoDB Connection Error:', error.message);
//     process.exit(1);
//   }
// };

// connectDB();

// // Import Models
// const Ticket = require('./models/Ticket');
// const User = require('./models/User');

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:3001'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ============ ROUTE IMPORTS ============
// const ticketRoutes = require('./routes/ticketRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const messageRoutes = require('./routes/messageRoutes');
// const roleRoutes = require('./routes/roleRoutes');

// // ============ MOUNT ROUTES ============
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/roles', roleRoutes);

// // Helper function to clean phone numbers
// const cleanPhoneNumber = (phone) => {
//   if (!phone) return '';
//   // Remove all non-numeric characters
//   return phone.toString().replace(/\D/g, '');
// };

// // ============ USER ROUTES ============

// // Get all users with filters and pagination
// app.get('/api/users', async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;
//     const query = {};

//     if (role) {
//       query.role = role;
//     }

//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const skip = (parseInt(page) - 1) * parseInt(limit);
    
//     const users = await User.find(query)
//       .select('-password')
//       .skip(skip)
//       .limit(parseInt(limit))
//       .sort({ createdAt: -1 });

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / parseInt(limit))
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Create new user - AUTO APPROVE
// app.post('/api/users', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, company, address, isActive } = req.body;

//     // Check if user exists (case insensitive)
//     const existingUser = await User.findOne({ 
//       email: email.toLowerCase().trim() 
//     });
    
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User with this email already exists'
//       });
//     }

//     // Clean phone number - remove all non-numeric characters
//     const cleanedPhone = cleanPhoneNumber(phone);

//     // AUTO-APPROVE - set isApproved to true by default
//     const user = new User({
//       firstName,
//       lastName,
//       email: email.toLowerCase().trim(),
//       password: password || 'password123',
//       phone: cleanedPhone,
//       role: role || 'user',
//       company: company || '',
//       address: address || {},
//       isActive: isActive !== undefined ? isActive : true,
//       isApproved: true // AUTO-APPROVED - no pending approval needed
//     });

//     await user.save();

//     const userResponse = user.toObject();
//     delete userResponse.password;

//     res.status(201).json({
//       success: true,
//       data: userResponse
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Approve user endpoint
// app.put('/api/users/approve/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { 
//         isApproved: true,
//         updatedAt: Date.now()
//       },
//       { new: true }
//     ).select('-password');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user,
//       message: 'User approved successfully'
//     });
//   } catch (error) {
//     console.error('Error approving user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get single user
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const user = await User.findById(req.params.id).select('-password');
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Update user
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid user ID format'
//       });
//     }

//     const { firstName, lastName, email, phone, role, company, address, isActive, isApproved, password } = req.body;

//     if (email) {
//       const existingUser = await User.findOne({ 
//         email: email.toLowerCase().trim(), 
//         _id: { $ne: req.params.id } 
//       });
      
//       if (existingUser) {
//         return res.status(400).json({
//           success: false,
//           error: 'Email already in use by another user'
//         });
//       }
//     }

//     // Clean phone number if provided
//     const cleanedPhone = phone ? cleanPhoneNumber(phone) : undefined;

//     const updateData = {
//       firstName,
//       lastName,
//       email: email ? email.toLowerCase().trim() : undefined,
//       role,
//       company,
//       address,
//       isActive,
//       isApproved,
//       updatedAt: Date.now()
//     };

//     // Only add phone if it's provided
//     if (cleanedPhone !== undefined) {
//       updateData.phone = cleanedPhone;
//     }

//     // If password is provided and not empty, hash it
//     if (password && password.trim() !== '') {
//       const bcrypt = require('bcryptjs');
//       const salt = await bcrypt.genSalt(10);
//       updateData.password = await bcrypt.hash(password, salt);
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true, runValidators: true }
//     ).select('-password');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Delete user with confirmation
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const { confirmFullName } = req.body;
    
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
//     if (confirmFullName !== fullName) {
//       return res.status(400).json({
//         success: false,
//         error: 'Name confirmation does not match'
//       });
//     }

//     await user.deleteOne();

//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // ============ TICKET ROUTES ============

// // Get user tickets
// app.get('/api/tickets/user/:userId', async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get all tickets
// app.get('/api/tickets/all', async (req, res) => {
//   try {
//     const tickets = await Ticket.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: tickets });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get single ticket
// app.get('/api/tickets/:id', async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Create ticket
// app.post('/api/tickets', async (req, res) => {
//   try {
//     const { title, description, category, priority, userId, userName } = req.body;
    
//     if (!title || !description) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'Title and description are required' 
//       });
//     }
    
//     // Check if user is approved
//     if (userId) {
//       const user = await User.findById(userId);
//       if (user && !user.isApproved) {
//         return res.status(403).json({
//           success: false,
//           error: 'Your account is pending approval. Cannot create tickets.'
//         });
//       }
//     }
    
//     const ticketUserId = userId || 'user123';
//     const ticketUserName = userName || 'User';
    
//     const ticket = new Ticket({
//       title,
//       description,
//       category: category || 'general',
//       priority: priority || 'medium',
//       userId: ticketUserId,
//       userName: ticketUserName,
//       comments: []
//     });
    
//     const savedTicket = await ticket.save();
    
//     res.status(201).json({ 
//       success: true, 
//       data: savedTicket 
//     });
//   } catch (error) {
//     console.error('Error creating ticket:', error);
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // Update ticket
// app.put('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;
    
//     const ticket = await Ticket.findByIdAndUpdate(
//       id, 
//       updates, 
//       { new: true, runValidators: true }
//     );
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Delete ticket
// app.delete('/api/tickets/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const ticket = await Ticket.findByIdAndDelete(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     res.json({ success: true, message: 'Ticket deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Add comment to ticket
// app.post('/api/tickets/:id/comments', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { text, userType, userName } = req.body;
    
//     const ticket = await Ticket.findById(id);
    
//     if (!ticket) {
//       return res.status(404).json({ success: false, error: 'Ticket not found' });
//     }
    
//     if (!ticket.comments) {
//       ticket.comments = [];
//     }
    
//     ticket.comments.push({
//       text,
//       userType: userType || 'User',
//       userName: userName || 'User',
//       createdAt: new Date()
//     });
    
//     await ticket.save();
    
//     res.json({ success: true, data: ticket });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ============ DASHBOARD ROUTES ============

// // Get admin dashboard stats
// app.get('/api/dashboard/admin', async (req, res) => {
//   try {
//     const tickets = await Ticket.find();
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const totalTickets = tickets.length;
//     const resolvedCount = ticketStats.resolved + ticketStats.closed;
//     const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
//     const totalUsers = await User.countDocuments();
//     const pendingApprovals = await User.countDocuments({ isApproved: false });
    
//     const recentTickets = await Ticket.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const recentUsers = await User.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('firstName lastName email isApproved createdAt');
    
//     const pendingUsers = await User.find({ isApproved: false })
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('firstName lastName email createdAt');
    
//     const stats = {
//       counts: {
//         users: totalUsers,
//         contacts: totalUsers,
//         activeContacts: await User.countDocuments({ isActive: true }),
//         inactiveContacts: await User.countDocuments({ isActive: false }),
//         pendingApprovals: pendingApprovals,
//         leads: 0,
//         tickets: totalTickets,
//         roles: 0,
//         permissions: 0
//       },
//       ticketStats: ticketStats,
//       successRate: successRate,
//       recentActivities: {
//         tickets: recentTickets,
//         users: recentUsers,
//         pendingUsers: pendingUsers
//       }
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('Dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get user dashboard stats
// app.get('/api/dashboard/user/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
    
//     const tickets = await Ticket.find({ userId });
    
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     const recentTickets = await Ticket.find({ userId })
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const stats = {
//       totalTickets: tickets.length,
//       ticketStats: ticketStats,
//       recentTickets: recentTickets
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('User dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Test route
// app.get('/api/test/db', async (req, res) => {
//   try {
//     const ticketCount = await Ticket.countDocuments();
//     const userCount = await User.countDocuments();
//     res.json({
//       success: true,
//       message: 'Database is connected',
//       stats: {
//         tickets: ticketCount,
//         users: userCount
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Root route
// app.get('/', (req, res) => {
//   res.json({ 
//     success: true,
//     message: 'CRM API is running',
//     endpoints: {
//       auth: '/api/auth/login',
//       users: '/api/users',
//       tickets: '/api/tickets/all',
//       dashboard: '/api/dashboard/admin',
//       test: '/api/test/db',
//       approve: '/api/users/approve/:id'
//     }
//   });
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     error: `Cannot ${req.method} ${req.originalUrl}`
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err.stack);
//   res.status(500).json({
//     success: false,
//     error: err.message || 'Internal Server Error'
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log('\n' + '='.repeat(50));
//   console.log(`🚀 SERVER STARTED SUCCESSFULLY`);
//   console.log('='.repeat(50));
//   console.log(`📡 Port: ${PORT}`);
//   console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
//   console.log(`🕒 Time: ${new Date().toLocaleString()}`);
//   console.log('\n📝 Available Routes:');
//   console.log('   ┌─ Health Check');
//   console.log(`   │  ├─ GET  /`);
//   console.log(`   │  └─ GET  /api/test/db`);
//   console.log('   ├─ Auth Routes');
//   console.log(`   │  └─ POST /api/auth/login`);
//   console.log('   ├─ User Routes');
//   console.log(`   │  ├─ GET  /api/users`);
//   console.log(`   │  ├─ POST /api/users (AUTO-APPROVE)`);
//   console.log(`   │  ├─ GET  /api/users/:id`);
//   console.log(`   │  ├─ PUT  /api/users/:id`);
//   console.log(`   │  ├─ PUT  /api/users/approve/:id`);
//   console.log(`   │  └─ DELETE /api/users/:id`);
//   console.log('   ├─ Ticket Routes');
//   console.log(`   │  ├─ GET  /api/tickets/all`);
//   console.log(`   │  ├─ GET  /api/tickets/user/:userId`);
//   console.log(`   │  ├─ GET  /api/tickets/:id`);
//   console.log(`   │  ├─ POST /api/tickets`);
//   console.log(`   │  ├─ PUT  /api/tickets/:id`);
//   console.log(`   │  ├─ DELETE /api/tickets/:id`);
//   console.log(`   │  └─ POST /api/tickets/:id/comments`);
//   console.log('   └─ Dashboard Routes');
//   console.log(`      ├─ GET  /api/dashboard/admin`);
//   console.log(`      └─ GET  /api/dashboard/user/:userId`);
//   console.log('='.repeat(50) + '\n');
// });