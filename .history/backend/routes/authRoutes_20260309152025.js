
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
    
//     // For demo purposes, accept admin@crm.com and user@crm.com without password check
//     if (email === 'admin@crm.com' || email === 'user@crm.com') {
//       const isAdmin = email === 'admin@crm.com';
      
//       // Check if user exists in database
//       let user = await User.findOne({ email });
      
//       // If user doesn't exist, create one
//       if (!user) {
//         user = await User.create({
//           firstName: isAdmin ? 'Admin' : 'Regular',
//           lastName: isAdmin ? 'User' : 'User',
//           email: email,
//           role: isAdmin ? 'admin' : 'user',
//           isAdmin: isAdmin,
//           password: 'password123'
//         });
//         console.log('New user created:', user);
//       }
      
//       // Generate token
//       const token = generateToken(user._id);
      
//       // Format user data
//       const userData = {
//         _id: user._id,
//         firstName: user.firstName || (isAdmin ? 'Admin' : 'Regular'),
//         lastName: user.lastName || (isAdmin ? 'User' : 'User'),
//         name: `${user.firstName || (isAdmin ? 'Admin' : 'Regular')} ${user.lastName || (isAdmin ? 'User' : 'User')}`.trim(),
//         email: user.email,
//         role: user.role,
//         isAdmin: user.isAdmin || isAdmin,
//         profilePhoto: user.profilePhoto || '',
//         phone: user.phone || '',
//         company: user.company || '',
//         token: token
//       };
      
//       return res.json({
//         success: true,
//         data: userData
//       });
//     }
    
//     // For other emails, check if user exists and verify password
//     const user = await User.findOne({ email });
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials'
//       });
//     }
    
//     const isMatch = await user.comparePassword(password);
    
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials'
//       });
//     }
    
//     const token = generateToken(user._id);
    
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

// // @desc    Login user with email and phone
// // @route   POST /api/auth/login
// // @access  Public
// router.post('/login', async (req, res) => {
//   try {
//     const { email, phone } = req.body;
    
//     console.log('Login attempt:', { email, phone });
    
//     // Check if user exists with this email AND phone
//     const user = await User.findOne({ 
//       email: email.toLowerCase().trim(),
//       phone: phone
//     });
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid credentials. User not found with this email and phone combination.'
//       });
//     }
    
//     // Check if user is approved
//     if (!user.isApproved) {
//       return res.status(401).json({
//         success: false,
//         error: 'Your account is pending approval. Please contact admin.'
//       });
//     }
    
//     // Check if user is active
//     if (!user.isActive) {
//       return res.status(401).json({
//         success: false,
//         error: 'Your account is inactive. Please contact admin.'
//       });
//     }
    
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
//       isApproved: user.isApproved,
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

// // @desc    Admin login (separate route for admin)
// // @route   POST /api/auth/admin-login
// // @access  Public
// router.post('/admin-login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     console.log('Admin login attempt:', email);
    
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
















