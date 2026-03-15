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

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     console.log('Login attempt:', email);
    
//     // For demo purposes, accept any login with these emails
//     let user;
    
//     if (email === 'admin@crm.com') {
//       user = {
//         _id: 'admin123',
//         name: 'Admin User',
//         email: 'admin@crm.com',
//         role: 'admin',
//         isAdmin: true
//       };
//     } else {
//       user = {
//         _id: 'user123',
//         name: 'Regular User',
//         email: 'user@crm.com',
//         role: 'user',
//         isAdmin: false
//       };
//     }
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     res.json({
//       success: true,
//       data: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         token: token
//       }
//     });
    
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Register user (optional)
// // @route   POST /api/auth/register
// // @access  Public
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
    
//     // Create a mock user
//     const user = {
//       _id: 'new' + Date.now(),
//       name: name || 'New User',
//       email: email || 'new@example.com',
//       role: role || 'user',
//       isAdmin: role === 'admin'
//     };
    
//     const token = generateToken(user._id);
    
//     res.status(201).json({
//       success: true,
//       data: {
//         ...user,
//         token: token
//       }
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
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Generate JWT Token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
//     expiresIn: '30d'
//   });
// };

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     console.log('Login attempt:', email);
    
//     // Check if user exists in database
//     let user = await User.findOne({ email });
    
//     // If user doesn't exist, create one
//     if (!user) {
//       const isAdmin = email === 'admin@crm.com';
//       user = await User.create({
//         firstName: isAdmin ? 'Admin' : 'Regular',
//         lastName: isAdmin ? 'User' : 'User',
//         email: email,
//         role: isAdmin ? 'admin' : 'user',
//         isAdmin: isAdmin,
//         password: 'password123' // In production, hash this!
//       });
//       console.log('New user created:', user);
//     } else {
//       // Check password for existing users
//       const isMatch = await user.comparePassword(password);
//       if (!isMatch) {
//         return res.status(401).json({
//           success: false,
//           error: 'Invalid credentials'
//         });
//       }
//     }
    
//     // Generate token
//     const token = generateToken(user._id);
    
//     // Format user data to match frontend expectations
//     const userData = {
//       _id: user._id,
//       firstName: user.firstName || '',
//       lastName: user.lastName || '',
//       name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
//       email: user.email,
//       role: user.role,
//       isAdmin: user.isAdmin || user.role === 'admin',
//       profilePhoto: user.profilePhoto || '',
//       phone: user.phone || '',
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

// // @desc    Register user
// // @route   POST /api/auth/register
// // @access  Public
// router.post('/register', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, role } = req.body;
    
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User already exists'
//       });
//     }
    
//     // Create new user
//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       role: role || 'user',
//       isAdmin: role === 'admin'
//     });
    
//     const token = generateToken(user._id);
    
//     res.status(201).json({
//       success: true,
//       data: {
//         _id: user._id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         name: `${user.firstName} ${user.lastName}`,
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         token: token
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;