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
const { protect, admin } = require('../middleware/authMiddleware');
const generateToken = require('../utils/generateToken');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
router.get('/:id', protect, admin, async (req, res) => {
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

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const { name, email, role, isAdmin, phone, company } = req.body;
    
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.isAdmin = isAdmin !== undefined ? isAdmin : user.isAdmin;
    user.phone = phone || user.phone;
    user.company = company || user.company;

    const updatedUser = await user.save();
    
    res.json({
      success: true,
      data: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        isAdmin: updatedUser.isAdmin,
        phone: updatedUser.phone,
        company: updatedUser.company
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    await user.deleteOne();
    
    res.json({
      success: true,
      message: 'User removed'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile/me
// @access  Private
router.get('/profile/me', protect, async (req, res) => {
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

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const { name, email, phone, company } = req.body;
    
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.company = company || user.company;

    const updatedUser = await user.save();
    
    res.json({
      success: true,
      data: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        isAdmin: updatedUser.isAdmin,
        phone: updatedUser.phone,
        company: updatedUser.company
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