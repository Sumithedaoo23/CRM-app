// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');
// const { 
//   registerAdmin, 
//   loginAdmin, 
//   loginUser,
//   getMe 
// } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// // Validation rules
// const adminRegisterValidation = [
//   body('firstName').notEmpty().withMessage('First name is required'),
//   body('lastName').notEmpty().withMessage('Last name is required'),
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   body('phone').notEmpty().withMessage('Phone number is required')
// ];

// const adminLoginValidation = [
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').notEmpty().withMessage('Password is required')
// ];

// // Routes
// router.post('/register-admin', adminRegisterValidation, registerAdmin);
// router.post('/login-admin', adminLoginValidation, loginAdmin);
// router.post('/login-user', adminLoginValidation, loginUser);
// router.get('/me', protect, getMe);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');

// // Import controllers (we'll create these next)
// const {
//   registerAdmin,
//   loginAdmin,
//   loginUser,
//   getMe
// } = require('../controllers/authController');

// const { protect } = require('../middleware/authMiddleware');

// // Validation rules
// const adminRegisterValidation = [
//   body('firstName').notEmpty().withMessage('First name is required'),
//   body('lastName').notEmpty().withMessage('Last name is required'),
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   body('phone').notEmpty().withMessage('Phone number is required')
// ];

// const adminLoginValidation = [
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').notEmpty().withMessage('Password is required')
// ];

// // Routes
// router.post('/register-admin', adminRegisterValidation, registerAdmin);
// router.post('/login-admin', adminLoginValidation, loginAdmin);
// router.post('/login-user', adminLoginValidation, loginUser);
// router.get('/me', protect, getMe);

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');
// const { protect } = require('../middleware/authMiddleware');
// const controllers = require('../controllers/index');

// // Validation rules
// const adminRegisterValidation = [
//   body('firstName').notEmpty().withMessage('First name is required'),
//   body('lastName').notEmpty().withMessage('Last name is required'),
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   body('phone').notEmpty().withMessage('Phone number is required')
// ];

// const adminLoginValidation = [
//   body('email').isEmail().withMessage('Please enter a valid email'),
//   body('password').notEmpty().withMessage('Password is required')
// ];

// // Routes
// router.post('/register-admin', adminRegisterValidation, controllers.registerAdmin);
// router.post('/login-admin', adminLoginValidation, controllers.loginAdmin);
// router.post('/login-user', adminLoginValidation, controllers.loginUser);
// router.get('/me', protect, controllers.getMe);

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