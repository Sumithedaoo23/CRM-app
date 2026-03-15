// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// } = require('../controllers/ticketController');

// // User routes
// router.post('/', protect, createTicket);
// router.get('/my-tickets', protect, getUserTickets);
// router.get('/:id', protect, getTicket);
// router.post('/:id/comments', protect, addComment);

// // Admin routes
// router.get('/', protect, adminOnly, getTickets);
// router.put('/:id/status', protect, adminOnly, updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, assignTicket);
// router.delete('/:id', protect, adminOnly, deleteTicket);

// module.exports = router;













// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// } = require('../controllers/ticketController');

// // User routes
// router.post('/', protect, createTicket);
// router.get('/my-tickets', protect, getUserTickets);
// router.get('/:id', protect, getTicket);
// router.post('/:id/comments', protect, addComment);

// // Admin routes
// router.get('/', protect, adminOnly, getTickets);
// router.put('/:id/status', protect, adminOnly, updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, assignTicket);
// router.delete('/:id', protect, adminOnly, deleteTicket);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const controllers = require('../controllers/index');

// // User routes
// router.post('/', protect, controllers.createTicket);
// router.get('/my-tickets', protect, controllers.getUserTickets);
// router.get('/:id', protect, controllers.getTicket);
// router.post('/:id/comments', protect, controllers.addComment);

// // Admin routes
// router.get('/', protect, adminOnly, controllers.getTickets);
// router.put('/:id/status', protect, adminOnly, controllers.updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, controllers.assignTicket);
// router.delete('/:id', protect, adminOnly, controllers.deleteTicket);

// module.exports = router;















const Ticket = require('../models/Ticket');
const User = require('../models/User');

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;
    
    const ticket = await Ticket.create({
      title,
      description,
      category,
      priority,
      createdBy: req.user.id
    });

    // Emit socket event for real-time update (optional)
    const io = req.app.get('io');
    if (io) {
      io.emit('new_ticket', ticket);
    }

    res.status(201).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get user tickets
// @route   GET /api/tickets/user
// @access  Private
const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ createdBy: req.user.id })
      .sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get all tickets (admin)
// @route   GET /api/tickets
// @access  Private/Admin
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('createdBy', 'name email')
      .populate('assignedTo', 'name email')
      .sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single ticket
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('assignedTo', 'name email')
      .populate('comments.user', 'name email');
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    // Check if user owns ticket or is admin
    if (ticket.createdBy._id.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to view this ticket'
      });
    }

    res.status(200).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update ticket status (admin)
// @route   PUT /api/tickets/:id/status
// @access  Private/Admin
const updateTicketStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.status = status;
    
    if (status === 'resolved') {
      ticket.resolvedAt = Date.now();
    } else if (status === 'closed') {
      ticket.closedAt = Date.now();
    }

    await ticket.save();

    res.status(200).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Add comment to ticket
// @route   POST /api/tickets/:id/comments
// @access  Private
const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.comments.push({
      user: req.user.id,
      text
    });

    await ticket.save();

    res.status(200).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Assign ticket to admin
// @route   PUT /api/tickets/:id/assign
// @access  Private/Admin
const assignTicket = async (req, res) => {
  try {
    const { adminId } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.assignedTo = adminId;
    ticket.status = 'in-progress';
    await ticket.save();

    res.status(200).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createTicket,
  getUserTickets,
  getAllTickets,
  getTicket,
  updateTicketStatus,
  addComment,
  assignTicket
};