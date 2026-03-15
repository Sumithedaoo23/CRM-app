const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock database
let tickets = [
  {
    _id: '1',
    title: 'Sample Ticket',
    description: 'This is a sample ticket',
    category: 'general',
    priority: 'medium',
    status: 'pending',
    userId: 'user123',
    createdAt: new Date()
  }
];

// Mock users
const users = {
  'user@crm.com': {
    _id: 'user123',
    name: 'Regular User',
    email: 'user@crm.com',
    role: 'user',
    isAdmin: false
  },
  'admin@crm.com': {
    _id: 'admin123',
    name: 'Admin User',
    email: 'admin@crm.com',
    role: 'admin',
    isAdmin: true
  }
};

// Mock token (simple)
const generateToken = (userId) => `simple-token-${userId}`;

// ============ AUTH ROUTES ============
app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  console.log('Login attempt:', email);
  
  const user = users[email];
  
  if (!user) {
    return res.status(401).json({ 
      success: false, 
      error: 'User not found' 
    });
  }
  
  const token = generateToken(user._id);
  
  res.json({
    success: true,
    data: {
      ...user,
      token: token
    }
  });
});

// ============ TICKET ROUTES ============
// Get user tickets
app.get('/api/tickets/user/:userId', (req, res) => {
  const userTickets = tickets.filter(t => t.userId === req.params.userId);
  res.json({ success: true, data: userTickets });
});

// Get all tickets
app.get('/api/tickets/all', (req, res) => {
  res.json({ success: true, data: tickets });
});

// Create ticket
app.post('/api/tickets', (req, res) => {
  const { title, description, category, priority } = req.body;
  
  const newTicket = {
    _id: Date.now().toString(),
    title,
    description,
    category: category || 'general',
    priority: priority || 'medium',
    status: 'pending',
    userId: 'user123', // Default user
    createdAt: new Date()
  };
  
  tickets.push(newTicket);
  console.log('Ticket created:', newTicket);
  
  res.status(201).json({ success: true, data: newTicket });
});

// Update ticket
app.put('/api/tickets/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  const ticketIndex = tickets.findIndex(t => t._id === id);
  
  if (ticketIndex === -1) {
    return res.status(404).json({ success: false, error: 'Ticket not found' });
  }
  
  tickets[ticketIndex] = { ...tickets[ticketIndex], ...updates };
  res.json({ success: true, data: tickets[ticketIndex] });
});

// Delete ticket
app.delete('/api/tickets/:id', (req, res) => {
  const { id } = req.params;
  tickets = tickets.filter(t => t._id !== id);
  res.json({ success: true, message: 'Ticket deleted' });
});

// Get single ticket
app.get('/api/tickets/:id', (req, res) => {
  const ticket = tickets.find(t => t._id === req.params.id);
  if (!ticket) {
    return res.status(404).json({ success: false, error: 'Ticket not found' });
  }
  res.json({ success: true, data: ticket });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Simple server running on port ${PORT}`);
  console.log(`📝 Test login with:`);
  console.log(`   - User: user@crm.com`);
  console.log(`   - Admin: admin@crm.com`);
});