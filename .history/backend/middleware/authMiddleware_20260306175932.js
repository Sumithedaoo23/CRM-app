
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from token
//       req.user = await User.findById(decoded.id).select('-password');

//       if (!req.user) {
//         return res.status(401).json({
//           success: false,
//           error: 'User not found'
//         });
//       }

//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({
//         success: false,
//         error: 'Not authorized'
//       });
//     }
//   }

//   if (!token) {
//     res.status(401).json({
//       success: false,
//       error: 'Not authorized, no token'
//     });
//   }
// };

// const admin = (req, res, next) => {
//   if (req.user && (req.user.role === 'admin' || req.user.isAdmin)) {
//     next();
//   } else {
//     res.status(403).json({
//       success: false,
//       error: 'Not authorized as admin'
//     });
//   }
// };

// module.exports = { protect, admin };











const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token received:', token.substring(0, 20) + '...');
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded);
      
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not found'
        });
      }
      
      console.log('User authenticated:', req.user.email);
      next();
    } catch (error) {
      console.error('Auth error:', error.message);
      res.status(401).json({
        success: false,
        error: 'Not authorized, token failed'
      });
    }
  } else {
    console.log('No token provided');
    res.status(401).json({
      success: false,
      error: 'Not authorized, no token'
    });
  }
};

const admin = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.isAdmin)) {
    next();
  } else {
    res.status(403).json({
      success: false,
      error: 'Not authorized as admin'
    });
  }
};

module.exports = { protect, admin };