

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

// ============ AUTH ROUTES ============
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

// ============ TICKET ROUTES ============

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
      test: '/api/test/db'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Test database at: http://localhost:${PORT}/api/test/db`);
});