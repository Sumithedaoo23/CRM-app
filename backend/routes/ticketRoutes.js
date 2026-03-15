
// const express = require('express');
// const router = express.Router();
// const Ticket = require('../models/Ticket');

// // CREATE a new ticket
// router.post('/', async (req, res) => {
//   try {
//     console.log('Received ticket data:', req.body);
    
//     const { title, description, category, priority } = req.body;
    
//     // Validate required fields
//     if (!title || !description) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'Title and description are required' 
//       });
//     }
    
//     // Create new ticket with simple userId
//     const ticket = new Ticket({
//       title,
//       description,
//       category: category || 'general',
//       priority: priority || 'medium',
//       userId: 'user123'  // Simple user ID
//     });
    
//     const savedTicket = await ticket.save();
//     console.log('Ticket saved:', savedTicket);
    
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

// // GET all tickets for a user
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json({ 
//       success: true, 
//       data: tickets 
//     });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // GET all tickets (for admin)
// router.get('/all', async (req, res) => {
//   try {
//     const tickets = await Ticket.find().sort({ createdAt: -1 });
//     res.json({ 
//       success: true, 
//       data: tickets 
//     });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // GET single ticket
// router.get('/:id', async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) {
//       return res.status(404).json({ 
//         success: false, 
//         error: 'Ticket not found' 
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

// // UPDATE ticket status
// router.put('/:id', async (req, res) => {
//   try {
//     const { status, title, description } = req.body;
//     const ticket = await Ticket.findById(req.params.id);
    
//     if (!ticket) {
//       return res.status(404).json({ 
//         success: false, 
//         error: 'Ticket not found' 
//       });
//     }
    
//     if (status) ticket.status = status;
//     if (title) ticket.title = title;
//     if (description) ticket.description = description;
    
//     const updatedTicket = await ticket.save();
//     res.json({ 
//       success: true, 
//       data: updatedTicket 
//     });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       error: error.message 
//     });
//   }
// });

// // DELETE ticket
// router.delete('/:id', async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);
//     if (!ticket) {
//       return res.status(404).json({ 
//         success: false, 
//         error: 'Ticket not found' 
//       });
//     }
    
//     await ticket.deleteOne();
//     res.json({ 
//       success: true, 
//       message: 'Ticket deleted' 
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
const User = require('../models/User');

// CREATE a new ticket
router.post('/', async (req, res) => {
  try {
    const { title, description, category, priority, userId, userName } = req.body;
    
    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and description are required' 
      });
    }
    
    // Check if user exists and is approved
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    if (user.role === 'user' && !user.isApproved) {
      return res.status(403).json({
        success: false,
        error: 'Your account is pending approval. Cannot create tickets.'
      });
    }
    
    // Create new ticket
    const ticket = new Ticket({
      title,
      description,
      category: category || 'general',
      priority: priority || 'medium',
      userId: userId,
      userName: userName || `${user.firstName} ${user.lastName}`,
      comments: []
    });
    
    const savedTicket = await ticket.save();
    
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

// GET all tickets for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const tickets = await Ticket.find({ userId }).sort({ createdAt: -1 });
    
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
    const tickets = await Ticket.find()
      .populate('userId', 'firstName lastName email phone isApproved')
      .sort({ createdAt: -1 });
      
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

// GET single ticket (with permission check)
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('userId', 'firstName lastName email phone');
      
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

// UPDATE ticket
router.put('/:id', async (req, res) => {
  try {
    const { status, title, description, assignedTo, comments } = req.body;
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
    if (assignedTo) ticket.assignedTo = assignedTo;
    if (comments) ticket.comments = comments;
    
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

// DELETE ticket (with permission check)
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

// Add comment to ticket
router.post('/:id/comments', async (req, res) => {
  try {
    const { text, userType, userName, userId } = req.body;
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({ 
        success: false, 
        error: 'Ticket not found' 
      });
    }
    
    if (!ticket.comments) {
      ticket.comments = [];
    }
    
    ticket.comments.push({
      text,
      userType: userType || 'User',
      userName: userName || 'User',
      userId: userId,
      createdAt: new Date()
    });
    
    await ticket.save();
    
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

module.exports = router;