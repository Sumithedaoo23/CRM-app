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















// const express = require('express');
// const router = express.Router();
// const {
//   createTicket,
//   getUserTickets,
//   getAllTickets,
//   getTicket,
//   updateTicketStatus,
//   addComment,
//   assignTicket
// } = require('../controllers/ticketController');
// const { protect, admin } = require('../middleware/authMiddleware');

// // User routes
// router.post('/', protect, createTicket);
// router.get('/user', protect, getUserTickets);

// // Admin routes
// router.get('/admin', protect, admin, getAllTickets);
// router.get('/:id', protect, getTicket);
// router.put('/:id/status', protect, admin, updateTicketStatus);
// router.put('/:id/assign', protect, admin, assignTicket);
// router.post('/:id/comments', protect, addComment);

// module.exports = router;







const express = require('express');
const router = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { protect } = require('../middleware/authMiddleware');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user',
      isAdmin: role === 'admin'
    });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check admin status if admin login
    if (isAdmin && !user.isAdmin) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized as admin'
      });
    }

    // Update last login
    user.lastLogin = Date.now();
    await user.save();

    res.json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
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

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
router.post('/logout', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

module.exports = router;