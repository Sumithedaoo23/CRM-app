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
const contactRoutes = require('./routes/contactRoutes');
const messageRoutes = require('./routes/messageRoutes');

// ============ MOUNT ROUTES ============
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/contacts', contactRoutes);

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
        firstName: isAdmin ? 'Admin' : 'Regular',
        lastName: isAdmin ? 'User' : 'User',
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
    
    // Format user data to match frontend expectations
    const userData = {
      _id: user._id,
      firstName: user.firstName || (user.name ? user.name.split(' ')[0] : 'User'),
      lastName: user.lastName || (user.name ? user.name.split(' ')[1] || '' : ''),
      name: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      token: token
    };
    
    res.json({
      success: true,
      data: userData
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ USER ROUTES (Direct - for backward compatibility) ============

// Get all users with filters and pagination
app.get('/api/users', async (req, res) => {
  try {
    const { role, search, page = 1, limit = 10 } = req.query;
    const query = {};

    // Filter by role
    if (role) {
      query.role = role;
    }

    // Search by name, email, or phone
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const users = await User.find(query)
      .select('-password')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: users,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Create new user
app.post('/api/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role, company, address, isActive } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      name: `${firstName || ''} ${lastName || ''}`.trim(),
      email,
      password: password || 'password123',
      phone: phone || '',
      role: role || 'user',
      company: company || '',
      address: address || {},
      isActive: isActive !== undefined ? isActive : true
    });

    await user.save();

    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      data: userResponse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, role, company, address, isActive } = req.body;

    // Check if email is taken by another user
    if (email) {
      const existingUser = await User.findOne({ 
        email, 
        _id: { $ne: req.params.id } 
      });
      
      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: 'Email already in use by another user'
        });
      }
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        name: `${firstName || ''} ${lastName || ''}`.trim(),
        email,
        phone,
        role,
        company,
        address,
        isActive,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete user with confirmation
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { confirmFullName } = req.body;
    
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Verify full name for confirmation
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    if (confirmFullName !== fullName) {
      return res.status(400).json({
        success: false,
        error: 'Name confirmation does not match'
      });
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Export all users to PDF
app.get('/api/users/export/pdf', async (req, res) => {
  try {
    const { role, search } = req.query;
    const query = {};

    // Apply same filters as list
    if (role) {
      query.role = role;
    }
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query).select('-password').sort({ createdAt: -1 });

    // Create PDF
    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({ margin: 30, size: 'A4' });
    
    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=users.pdf');
    
    doc.pipe(res);

    // Add title
    doc.fontSize(20).text('User List', { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
    doc.moveDown();

    // Table headers
    const tableTop = 150;
    const col1 = 50;
    const col2 = 200;
    const col3 = 350;
    const col4 = 450;

    doc.fontSize(10).font('Helvetica-Bold');
    doc.text('Name', col1, tableTop);
    doc.text('Email', col2, tableTop);
    doc.text('Phone', col3, tableTop);
    doc.text('Role', col4, tableTop);

    // Draw line
    doc.moveTo(30, tableTop + 20)
       .lineTo(565, tableTop + 20)
       .stroke();

    // Add users
    let y = tableTop + 30;
    doc.font('Helvetica');

    users.forEach((user, i) => {
      if (y > 750) {
        doc.addPage();
        y = 50;
      }

      const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A';
      
      doc.text(fullName, col1, y);
      doc.text(user.email || 'N/A', col2, y);
      doc.text(user.phone || 'N/A', col3, y);
      doc.text(user.role || 'user', col4, y);
      
      y += 20;
    });

    // Add summary
    doc.moveDown();
    doc.fontSize(12).text(`Total Users: ${users.length}`, { align: 'right' });

    doc.end();

  } catch (error) {
    console.error('PDF export error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Export single user to PDF
app.get('/api/users/:id/export/pdf', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Create PDF
    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=user-${user.firstName || 'user'}-${user.lastName || 'profile'}.pdf`);
    
    doc.pipe(res);

    // Add content
    doc.fontSize(25).text('User Details', { align: 'center' });
    doc.moveDown();
    
    doc.fontSize(12);
    doc.text(`Name: ${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A');
    doc.text(`Email: ${user.email || 'N/A'}`);
    doc.text(`Phone: ${user.phone || 'N/A'}`);
    doc.text(`Role: ${user.role || 'user'}`);
    doc.text(`Company: ${user.company || 'N/A'}`);
    doc.text(`Status: ${user.isActive ? 'Active' : 'Inactive'}`);
    doc.text(`Created: ${new Date(user.createdAt).toLocaleDateString()}`);
    
    if (user.address && Object.keys(user.address).length > 0) {
      doc.moveDown();
      doc.text('Address:');
      doc.text(`  ${user.address.street || ''}`);
      doc.text(`  ${user.address.city || ''} ${user.address.state || ''} ${user.address.zipCode || ''}`);
      doc.text(`  ${user.address.country || ''}`);
    }

    doc.end();

  } catch (error) {
    console.error('PDF export error:', error);
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

// ============ DASHBOARD ROUTES ============

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
      users: '/api/users',
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
  console.log('   ├─ User Routes');
  console.log(`   │  ├─ GET  /api/users`);
  console.log(`   │  ├─ POST /api/users`);
  console.log(`   │  ├─ GET  /api/users/:id`);
  console.log(`   │  ├─ PUT  /api/users/:id`);
  console.log(`   │  ├─ DELETE /api/users/:id`);
  console.log(`   │  ├─ GET  /api/users/export/pdf`);
  console.log(`   │  └─ GET  /api/users/:id/export/pdf`);
  console.log('   ├');
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