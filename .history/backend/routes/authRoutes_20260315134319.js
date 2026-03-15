

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Generate JWT Token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
//     expiresIn: '30d'
//   });
// };

// // Clean phone number function
// const cleanPhoneNumber = (phone) => {
//   if (!phone) return '';
//   // Remove all non-numeric characters
//   return phone.toString().replace(/\D/g, '');
// };

// // @desc    Login user with email and phone (NO APPROVAL CHECK)
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, phone } = req.body;
    
//     console.log('Login attempt:', { email, phone });
    
//     if (!email || !phone) {
//       return res.status(400).json({
//         success: false,
//         error: 'Email and phone are required'
//       });
//     }
    
//     // Clean the phone number from request
//     const cleanedPhone = cleanPhoneNumber(phone);
    
//     // Find user by email (case insensitive)
//     const user = await User.findOne({ 
//       email: email.toLowerCase().trim()
//     });
    
//     console.log('User found:', user ? 'Yes' : 'No');
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials. User not found with this email.'
//       });
//     }
    
//     // Clean the phone number from database
//     const userPhone = cleanPhoneNumber(user.phone);
    
//     console.log('Phone comparison:', {
//       requestPhone: cleanedPhone,
//       dbPhone: userPhone,
//       match: cleanedPhone === userPhone
//     });
    
//     // Compare cleaned phone numbers
//     if (cleanedPhone !== userPhone) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials. Phone number does not match.'
//       });
//     }
    
//     // REMOVED: isApproved check - users can login without approval
//     // REMOVED: isActive check - optional, can be removed if needed
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     // Format user data
//     const userData = {
//       _id: user._id,
//       firstName: user.firstName || '',
//       lastName: user.lastName || '',
//       name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       isAdmin: user.role === 'admin',
//       profilePhoto: user.profilePhoto || '',
//       company: user.company || '',
//       token: token
//     };
    
//     res.json({
//       success: true,
//       data: userData
//     });
    
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Admin login
// // @route   POST /api/auth/admin-login
// // @access  Public
// router.post('/admin-login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     console.log('Admin login attempt:', email);
    
//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         error: 'Email and password are required'
//       });
//     }
    
//     // Find admin user
//     const user = await User.findOne({ 
//       email: email.toLowerCase().trim(),
//       role: 'admin'
//     });
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid admin credentials'
//       });
//     }
    
//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid admin credentials'
//       });
//     }
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     const userData = {
//       _id: user._id,
//       firstName: user.firstName || '',
//       lastName: user.lastName || '',
//       name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       isAdmin: true,
//       profilePhoto: user.profilePhoto || '',
//       company: user.company || '',
//       token: token
//     };
    
//     res.json({
//       success: true,
//       data: userData
//     });
    
//   } catch (error) {
//     console.error('Admin login error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;


















// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Generate JWT Token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
//     expiresIn: '30d'
//   });
// };

// // Clean phone number function
// const cleanPhoneNumber = (phone) => {
//   if (!phone) return '';
//   // Remove all non-numeric characters
//   return phone.toString().replace(/\D/g, '');
// };

// // @desc    Login user with email and phone (NO APPROVAL CHECK)
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, phone } = req.body;
    
//     console.log('Login attempt:', { email, phone });
    
//     if (!email || !phone) {
//       return res.status(400).json({
//         success: false,
//         error: 'Email and phone are required'
//       });
//     }
    
//     // Clean the phone number from request
//     const cleanedPhone = cleanPhoneNumber(phone);
    
//     // Find user by email (case insensitive)
//     const user = await User.findOne({ 
//       email: email.toLowerCase().trim()
//     });
    
//     console.log('User found:', user ? 'Yes' : 'No');
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials. User not found with this email.'
//       });
//     }
    
//     // Clean the phone number from database
//     const userPhone = cleanPhoneNumber(user.phone);
    
//     console.log('Phone comparison:', {
//       requestPhone: cleanedPhone,
//       dbPhone: userPhone,
//       match: cleanedPhone === userPhone
//     });
    
//     // Compare cleaned phone numbers
//     if (cleanedPhone !== userPhone) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials. Phone number does not match.'
//       });
//     }
    
//     // REMOVED: isApproved check - users can login without approval
//     // REMOVED: isActive check - optional, can be removed if needed
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     // Format user data
//     const userData = {
//       _id: user._id,
//       firstName: user.firstName || '',
//       lastName: user.lastName || '',
//       name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       isAdmin: user.role === 'admin',
//       profilePhoto: user.profilePhoto || '',
//       company: user.company || '',
//       token: token
//     };
    
//     res.json({
//       success: true,
//       data: userData
//     });
    
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Admin login
// // @route   POST /api/auth/admin-login
// // @access  Public
// router.post('/admin-login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     console.log('Admin login attempt:', email);
    
//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         error: 'Email and password are required'
//       });
//     }
    
//     // Find admin user
//     const user = await User.findOne({ 
//       email: email.toLowerCase().trim(),
//       role: 'admin'
//     });
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid admin credentials'
//       });
//     }
    
//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid admin credentials'
//       });
//     }
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     const userData = {
//       _id: user._id,
//       firstName: user.firstName || '',
//       lastName: user.lastName || '',
//       name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       isAdmin: true,
//       profilePhoto: user.profilePhoto || '',
//       company: user.company || '',
//       token: token
//     };
    
//     res.json({
//       success: true,
//       data: userData
//     });
    
//   } catch (error) {
//     console.error('Admin login error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
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

// Clean phone number function
const cleanPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-numeric characters
  return phone.toString().replace(/\D/g, '');
};

// @desc    Login user with email and phone
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, phone } = req.body;
    
    console.log('User login attempt:', { email, phone });
    
    if (!email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Email and phone are required'
      });
    }
    
    // Clean the phone number from request
    const cleanedPhone = cleanPhoneNumber(phone);
    
    // Find user by email (case insensitive)
    const user = await User.findOne({ 
      email: email.toLowerCase().trim()
    });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials. User not found with this email.'
      });
    }
    
    // Clean the phone number from database
    const userPhone = cleanPhoneNumber(user.phone);
    
    // Compare cleaned phone numbers
    if (cleanedPhone !== userPhone) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials. Phone number does not match.'
      });
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    // Format user data
    const userData = {
      _id: user._id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      email: user.email,
      phone: user.phone,
      role: user.role,
      isAdmin: user.role === 'admin',
      profilePhoto: user.profilePhoto || '',
      company: user.company || '',
      token: token
    };
    
    res.json({
      success: true,
      data: userData
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Admin login - FIXED to work with any user that has correct password
// @route   POST /api/auth/admin-login
// @access  Public
router.post('/admin-login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Admin login attempt:', email);
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }
    
    // Find user by email (any user, not just admin)
    const user = await User.findOne({ 
      email: email.toLowerCase().trim()
    });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid admin credentials'
      });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid admin credentials'
      });
    }
    
    // Update user role to admin if it's not already
    if (user.role !== 'admin') {
      user.role = 'admin';
      await user.save();
      console.log('User role updated to admin:', user.email);
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    const userData = {
      _id: user._id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      email: user.email,
      phone: user.phone,
      role: 'admin', // Force role to admin
      isAdmin: true,
      profilePhoto: user.profilePhoto || '',
      company: user.company || '',
      token: token
    };
    
    res.json({
      success: true,
      data: userData
    });
    
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;