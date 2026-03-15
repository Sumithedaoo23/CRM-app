
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const generateToken = require('../utils/generateToken');
// const { protect } = require('../middleware/authMiddleware');

// // @desc    Register a new user
// // @route   POST /api/auth/register
// // @access  Public
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({
//         success: false,
//         error: 'User already exists'
//       });
//     }

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password,
//       role: role || 'user',
//       isAdmin: role === 'admin'
//     });

//     res.status(201).json({
//       success: true,
//       data: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         token: generateToken(user._id)
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password, isAdmin } = req.body;

//     // Check for user
//     const user = await User.findOne({ email }).select('+password');

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials'
//       });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials'
//       });
//     }

//     // Check admin status if admin login
//     if (isAdmin && !user.isAdmin) {
//       return res.status(403).json({
//         success: false,
//         error: 'Not authorized as admin'
//       });
//     }

//     // Update last login
//     user.lastLogin = Date.now();
//     await user.save();

//     res.json({
//       success: true,
//       data: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         token: generateToken(user._id)
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get current user
// // @route   GET /api/auth/me
// // @access  Private
// router.get('/me', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Logout user
// // @route   POST /api/auth/logout
// // @access  Private
// router.post('/logout', protect, (req, res) => {
//   res.json({
//     success: true,
//     message: 'Logged out successfully'
//   });
// });

// module.exports = router;














const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt:', email);
    
    // For demo purposes, accept any login with these emails
    let user;
    
    if (email === 'admin@crm.com') {
      user = {
        _id: 'admin123',
        name: 'Admin User',
        email: 'admin@crm.com',
        role: 'admin',
        isAdmin: true
      };
    } else {
      user = {
        _id: 'user123',
        name: 'Regular User',
        email: 'user@crm.com',
        role: 'user',
        isAdmin: false
      };
    }
    
    // Generate token
    const token = generateToken(user._id);
    
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

// @desc    Register user (optional)
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Create a mock user
    const user = {
      _id: 'new' + Date.now(),
      name: name || 'New User',
      email: email || 'new@example.com',
      role: role || 'user',
      isAdmin: role === 'admin'
    };
    
    const token = generateToken(user._id);
    
    res.status(201).json({
      success: true,
      data: {
        ...user,
        token: token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;