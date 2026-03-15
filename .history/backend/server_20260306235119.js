

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

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
    
//     // Drop the problematic index if it exists
//     try {
//       await conn.connection.db.collection('tickets').dropIndex('ticketNumber_1');
//       console.log('✅ Dropped ticketNumber index');
//     } catch (err) {
//       console.log('ℹ️ No ticketNumber index to drop');
//     }
    
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

// // ============ AUTH ROUTES ============
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log('Login attempt:', email);
    
//     // Check if user exists in database
//     let user = await User.findOne({ email });
    
//     // If user doesn't exist, create one
//     if (!user) {
//       const isAdmin = email === 'admin@crm.com';
//       user = await User.create({
//         name: isAdmin ? 'Admin User' : 'Regular User',
//         email: email,
//         role: isAdmin ? 'admin' : 'user',
//         isAdmin: isAdmin,
//         password: 'password123' // In production, hash this!
//       });
//       console.log('New user created:', user);
//     }
    
//     // Generate simple token
//     const token = `simple-token-${user._id}`;
    
//     res.json({
//       success: true,
//       data: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         token: token
//       }
//     });
    
//   } catch (error) {
//     console.error('Login error:', error);
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
    
//     // Validate required fields
//     if (!title || !description) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'Title and description are required' 
//       });
//     }
    
//     // Use default userId if not provided
//     const ticketUserId = userId || 'user123';
//     const ticketUserName = userName || 'User';
    
//     console.log('Creating ticket with data:', { title, description, category, priority, ticketUserId });
    
//     // Create new ticket
//     const ticket = new Ticket({
//       title,
//       description,
//       category: category || 'general',
//       priority: priority || 'medium',
//       userId: ticketUserId,
//       userName: ticketUserName,
//       comments: []
//     });
    
//     // Save to database
//     const savedTicket = await ticket.save();
//     console.log('✅ Ticket saved successfully:', savedTicket.ticketNumber || savedTicket._id);
    
//     res.status(201).json({ 
//       success: true, 
//       data: savedTicket 
//     });
//   } catch (error) {
//     console.error('❌ Error creating ticket:', error);
    
//     // Handle duplicate key error specifically
//     if (error.code === 11000) {
//       // Retry with a different ticket number
//       try {
//         const { title, description, category, priority, userId, userName } = req.body;
//         const ticket = new Ticket({
//           title,
//           description,
//           category: category || 'general',
//           priority: priority || 'medium',
//           userId: userId || 'user123',
//           userName: userName || 'User',
//           ticketNumber: `TICKET-${Date.now()}-${Math.random().toString(36).substr(2, 8)}`
//         });
//         const savedTicket = await ticket.save();
//         return res.status(201).json({ success: true, data: savedTicket });
//       } catch (retryError) {
//         return res.status(500).json({ 
//           success: false, 
//           error: 'Failed to create ticket after retry' 
//         });
//       }
//     }
    
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
    
//     // Initialize comments array if it doesn't exist
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

// // Test route to check database connection
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
//       tickets: '/api/tickets/all',
//       test: '/api/test/db'
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📝 Test database at: http://localhost:${PORT}/api/test/db`);
// });












const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/crm_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Drop the problematic index if it exists
    try {
      await conn.connection.db.collection('tickets').dropIndex('ticketNumber_1');
      console.log('✅ Dropped ticketNumber index');
    } catch (err) {
      console.log('ℹ️ No ticketNumber index to drop');
    }
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

connectDB();

// Import Models
const Ticket = require('./models/Ticket');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============ ROUTE IMPORTS ============
const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// ============ MOUNT ROUTES ============
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// ============ AUTH ROUTES (Direct) ============
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email } = req.body;
    console.log('Login attempt:', email);
    
    // Check if user exists in database
    let user = await User.findOne({ email });
    
    // If user doesn't exist, create one
    if (!user) {
      const isAdmin = email === 'admin@crm.com';
      user = await User.create({
        name: isAdmin ? 'Admin User' : 'Regular User',
        email: email,
        role: isAdmin ? 'admin' : 'user',
        isAdmin: isAdmin,
        password: 'password123' // In production, hash this!
      });
      console.log('New user created:', user);
    }
    
    // Generate simple token
    const token = `simple-token-${user._id}`;
    
    res.json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin,
        token: token
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ TICKET ROUTES (Direct - Keep for backward compatibility) ============

// Get user tickets
app.get('/api/tickets/user/:userId', async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all tickets
app.get('/api/tickets/all', async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single ticket
app.get('/api/tickets/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }
    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create ticket
app.post('/api/tickets', async (req, res) => {
  try {
    const { title, description, category, priority, userId, userName } = req.body;
    
    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and description are required' 
      });
    }
    
    // Use default userId if not provided
    const ticketUserId = userId || 'user123';
    const ticketUserName = userName || 'User';
    
    console.log('Creating ticket with data:', { title, description, category, priority, ticketUserId });
    
    // Create new ticket
    const ticket = new Ticket({
      title,
      description,
      category: category || 'general',
      priority: priority || 'medium',
      userId: ticketUserId,
      userName: ticketUserName,
      comments: []
    });
    
    // Save to database
    const savedTicket = await ticket.save();
    console.log('✅ Ticket saved successfully:', savedTicket.ticketNumber || savedTicket._id);
    
    res.status(201).json({ 
      success: true, 
      data: savedTicket 
    });
  } catch (error) {
    console.error('❌ Error creating ticket:', error);
    
    // Handle duplicate key error specifically
    if (error.code === 11000) {
      // Retry with a different ticket number
      try {
        const { title, description, category, priority, userId, userName } = req.body;
        const ticket = new Ticket({
          title,
          description,
          category: category || 'general',
          priority: priority || 'medium',
          userId: userId || 'user123',
          userName: userName || 'User',
          ticketNumber: `TICKET-${Date.now()}-${Math.random().toString(36).substr(2, 8)}`
        });
        const savedTicket = await ticket.save();
        return res.status(201).json({ success: true, data: savedTicket });
      } catch (retryError) {
        return res.status(500).json({ 
          success: false, 
          error: 'Failed to create ticket after retry' 
        });
      }
    }
    
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Update ticket
app.put('/api/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const ticket = await Ticket.findByIdAndUpdate(
      id, 
      updates, 
      { new: true, runValidators: true }
    );
    
    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }
    
    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete ticket
app.delete('/api/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndDelete(id);
    
    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }
    
    res.json({ success: true, message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add comment to ticket
app.post('/api/tickets/:id/comments', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, userType, userName } = req.body;
    
    const ticket = await Ticket.findById(id);
    
    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }
    
    // Initialize comments array if it doesn't exist
    if (!ticket.comments) {
      ticket.comments = [];
    }
    
    ticket.comments.push({
      text,
      userType: userType || 'User',
      userName: userName || 'User',
      createdAt: new Date()
    });
    
    await ticket.save();
    
    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ============ DASHBOARD ROUTES (Direct - for testing) ============

// Get admin dashboard stats
app.get('/api/dashboard/admin', async (req, res) => {
  try {
    // Get all tickets
    const tickets = await Ticket.find();
    
    // Calculate ticket statistics
    const ticketStats = {
      pending: tickets.filter(t => t.status === 'pending').length,
      'in-progress': tickets.filter(t => t.status === 'in-progress').length,
      resolved: tickets.filter(t => t.status === 'resolved').length,
      closed: tickets.filter(t => t.status === 'closed').length,
      rejected: tickets.filter(t => t.status === 'rejected').length
    };
    
    // Calculate total tickets
    const totalTickets = tickets.length;
    
    // Calculate success rate (resolved + closed) / total * 100
    const resolvedCount = ticketStats.resolved + ticketStats.closed;
    const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
    
    // Get total users
    const totalUsers = await User.countDocuments();
    
    // Get recent tickets (last 5)
    const recentTickets = await Ticket.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('ticketNumber title status createdAt');
    
    // Mock data for other stats (you can add real data later)
    const stats = {
      counts: {
        users: totalUsers,
        contacts: 0,
        leads: 0,
        tickets: totalTickets,
        roles: 0,
        permissions: 0
      },
      ticketStats: ticketStats,
      successRate: successRate,
      recentActivities: {
        tickets: recentTickets,
        leads: []
      }
    };
    
    res.json({
      success: true,
      data: stats
    });
    
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get user dashboard stats
app.get('/api/dashboard/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Get user's tickets
    const tickets = await Ticket.find({ userId });
    
    // Calculate ticket statistics
    const ticketStats = {
      pending: tickets.filter(t => t.status === 'pending').length,
      'in-progress': tickets.filter(t => t.status === 'in-progress').length,
      resolved: tickets.filter(t => t.status === 'resolved').length,
      closed: tickets.filter(t => t.status === 'closed').length,
      rejected: tickets.filter(t => t.status === 'rejected').length
    };
    
    // Get recent tickets
    const recentTickets = await Ticket.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('ticketNumber title status createdAt');
    
    const stats = {
      totalTickets: tickets.length,
      ticketStats: ticketStats,
      recentTickets: recentTickets
    };
    
    res.json({
      success: true,
      data: stats
    });
    
  } catch (error) {
    console.error('User dashboard error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ TEST ROUTES ============

// Test route to check database connection
app.get('/api/test/db', async (req, res) => {
  try {
    const ticketCount = await Ticket.countDocuments();
    const userCount = await User.countDocuments();
    res.json({
      success: true,
      message: 'Database is connected',
      stats: {
        tickets: ticketCount,
        users: userCount
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'CRM API is running',
    endpoints: {
      auth: '/api/auth/login',
      tickets: '/api/tickets/all',
      dashboard: '/api/dashboard/admin',
      test: '/api/test/db'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log(`🚀 SERVER STARTED SUCCESSFULLY`);
  console.log('='.repeat(50));
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🕒 Time: ${new Date().toLocaleString()}`);
  console.log('\n📝 Available Routes:');
  console.log('   ┌─ Health Check');
  console.log(`   │  ├─ GET  /`);
  console.log(`   │  └─ GET  /api/test/db`);
  console.log('   ├─ Auth Routes');
  console.log(`   │  └─ POST /api/auth/login`);
  console.log('   ├─ Ticket Routes');
  console.log(`   │  ├─ GET  /api/tickets/all`);
  console.log(`   │  ├─ GET  /api/tickets/user/:userId`);
  console.log(`   │  ├─ GET  /api/tickets/:id`);
  console.log(`   │  ├─ POST /api/tickets`);
  console.log(`   │  ├─ PUT  /api/tickets/:id`);
  console.log(`   │  ├─ DELETE /api/tickets/:id`);
  console.log(`   │  └─ POST /api/tickets/:id/comments`);
  console.log('   └─ Dashboard Routes');
  console.log(`      ├─ GET  /api/dashboard/admin`);
  console.log(`      └─ GET  /api/dashboard/user/:userId`);
  console.log('='.repeat(50) + '\n');
});