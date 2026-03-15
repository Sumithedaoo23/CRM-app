
const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// CREATE a new ticket
router.post('/', async (req, res) => {
  try {
    console.log('Received ticket data:', req.body);
    
    const { title, description, category, priority } = req.body;
    
    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and description are required' 
      });
    }
    
    // Create new ticket with simple userId
    const ticket = new Ticket({
      title,
      description,
      category: category || 'general',
      priority: priority || 'medium',
      userId: 'user123'  // Simple user ID
    });
    
    const savedTicket = await ticket.save();
    console.log('Ticket saved:', savedTicket);
    
    res.status(201).json({ 
      success: true, 
      data: savedTicket 
    });
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET all tickets for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json({ 
      success: true, 
      data: tickets 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET all tickets (for admin)
router.get('/all', async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json({ 
      success: true, 
      data: tickets 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET single ticket
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ 
        success: false, 
        error: 'Ticket not found' 
      });
    }
    res.json({ 
      success: true, 
      data: ticket 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// UPDATE ticket status
router.put('/:id', async (req, res) => {
  try {
    const { status, title, description } = req.body;
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({ 
        success: false, 
        error: 'Ticket not found' 
      });
    }
    
    if (status) ticket.status = status;
    if (title) ticket.title = title;
    if (description) ticket.description = description;
    
    const updatedTicket = await ticket.save();
    res.json({ 
      success: true, 
      data: updatedTicket 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// DELETE ticket
router.delete('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ 
        success: false, 
        error: 'Ticket not found' 
      });
    }
    
    await ticket.deleteOne();
    res.json({ 
      success: true, 
      message: 'Ticket deleted' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;