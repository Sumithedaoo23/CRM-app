
// const express = require('express');
// const router = express.Router();
// const Ticket = require('../models/Ticket');
// const { protect, admin } = require('../middleware/authMiddleware');

// // @desc    Create new ticket
// // @route   POST /api/tickets
// // @access  Private
// router.post('/', protect, async (req, res) => {
//   try {
//     const { title, description, category, priority } = req.body;

//     const ticket = await Ticket.create({
//       title,
//       description,
//       category,
//       priority,
//       createdBy: req.user.id
//     });

//     res.status(201).json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get user tickets
// // @route   GET /api/tickets/user
// // @access  Private
// router.get('/user', protect, async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ createdBy: req.user.id })
//       .sort('-createdAt');
    
//     res.json({
//       success: true,
//       count: tickets.length,
//       data: tickets
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get all tickets (admin)
// // @route   GET /api/tickets/admin
// // @access  Private/Admin
// router.get('/admin', protect, admin, async (req, res) => {
//   try {
//     const tickets = await Ticket.find()
//       .populate('createdBy', 'name email')
//       .populate('assignedTo', 'name email')
//       .sort('-createdAt');
    
//     res.json({
//       success: true,
//       count: tickets.length,
//       data: tickets
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get single ticket
// // @route   GET /api/tickets/:id
// // @access  Private
// router.get('/:id', protect, async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id)
//       .populate('createdBy', 'name email')
//       .populate('assignedTo', 'name email')
//       .populate('comments.user', 'name email');

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     // Check authorization
//     if (ticket.createdBy._id.toString() !== req.user.id && !req.user.isAdmin) {
//       return res.status(403).json({
//         success: false,
//         error: 'Not authorized'
//       });
//     }

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Update ticket status
// // @route   PUT /api/tickets/:id/status
// // @access  Private/Admin
// router.put('/:id/status', protect, admin, async (req, res) => {
//   try {
//     const { status } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.status = status;
    
//     if (status === 'resolved') {
//       ticket.resolvedAt = Date.now();
//     } else if (status === 'closed') {
//       ticket.closedAt = Date.now();
//     }

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Assign ticket
// // @route   PUT /api/tickets/:id/assign
// // @access  Private/Admin
// router.put('/:id/assign', protect, admin, async (req, res) => {
//   try {
//     const { adminId } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.assignedTo = adminId;
//     ticket.status = 'in-progress';
//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Add comment
// // @route   POST /api/tickets/:id/comments
// // @access  Private
// router.post('/:id/comments', protect, async (req, res) => {
//   try {
//     const { text } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.comments.push({
//       user: req.user.id,
//       text
//     });

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const Ticket = require('../models/Ticket');
// const { protect, admin } = require('../middleware/authMiddleware');

// // @desc    Create new ticket
// // @route   POST /api/tickets
// // @access  Private
// router.post('/', protect, async (req, res) => {
//   try {
//     const { title, description, category, priority } = req.body;

//     const ticket = await Ticket.create({
//       title,
//       description,
//       category,
//       priority,
//       createdBy: req.user.id
//     });

//     res.status(201).json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get user tickets
// // @route   GET /api/tickets/user
// // @access  Private
// router.get('/user', protect, async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ createdBy: req.user.id })
//       .sort('-createdAt');
    
//     res.json({
//       success: true,
//       count: tickets.length,
//       data: tickets
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get all tickets (admin)
// // @route   GET /api/tickets/admin
// // @access  Private/Admin
// router.get('/admin', protect, admin, async (req, res) => {
//   try {
//     const tickets = await Ticket.find()
//       .populate('createdBy', 'name email')
//       .populate('assignedTo', 'name email')
//       .sort('-createdAt');
    
//     res.json({
//       success: true,
//       count: tickets.length,
//       data: tickets
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get single ticket
// // @route   GET /api/tickets/:id
// // @access  Private
// router.get('/:id', protect, async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id)
//       .populate('createdBy', 'name email')
//       .populate('assignedTo', 'name email')
//       .populate('comments.user', 'name email');

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     // Check authorization
//     if (ticket.createdBy._id.toString() !== req.user.id && !req.user.isAdmin) {
//       return res.status(403).json({
//         success: false,
//         error: 'Not authorized'
//       });
//     }

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Update ticket
// // @route   PUT /api/tickets/:id
// // @access  Private
// router.put('/:id', protect, async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     // Check if user owns the ticket or is admin
//     if (ticket.createdBy.toString() !== req.user.id && !req.user.isAdmin) {
//       return res.status(403).json({
//         success: false,
//         error: 'Not authorized to update this ticket'
//       });
//     }

//     const { title, description, category, priority, status } = req.body;
    
//     if (title) ticket.title = title;
//     if (description) ticket.description = description;
//     if (category) ticket.category = category;
//     if (priority) ticket.priority = priority;
//     if (status) ticket.status = status;

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Delete ticket
// // @route   DELETE /api/tickets/:id
// // @access  Private
// router.delete('/:id', protect, async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     // Check if user owns the ticket or is admin
//     if (ticket.createdBy.toString() !== req.user.id && !req.user.isAdmin) {
//       return res.status(403).json({
//         success: false,
//         error: 'Not authorized to delete this ticket'
//       });
//     }

//     await ticket.deleteOne();

//     res.json({
//       success: true,
//       message: 'Ticket deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Update ticket status
// // @route   PUT /api/tickets/:id/status
// // @access  Private/Admin
// router.put('/:id/status', protect, admin, async (req, res) => {
//   try {
//     const { status } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.status = status;
    
//     if (status === 'resolved') {
//       ticket.resolvedAt = Date.now();
//     } else if (status === 'closed') {
//       ticket.closedAt = Date.now();
//     }

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Assign ticket
// // @route   PUT /api/tickets/:id/assign
// // @access  Private/Admin
// router.put('/:id/assign', protect, admin, async (req, res) => {
//   try {
//     const { adminId } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.assignedTo = adminId;
//     ticket.status = 'in-progress';
//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Add comment
// // @route   POST /api/tickets/:id/comments
// // @access  Private
// router.post('/:id/comments', protect, async (req, res) => {
//   try {
//     const { text } = req.body;
    
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         error: 'Ticket not found'
//       });
//     }

//     ticket.comments.push({
//       user: req.user.id,
//       text
//     });

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;








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