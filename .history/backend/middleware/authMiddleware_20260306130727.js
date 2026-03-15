// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');
// const User = require('../models/User');

// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Check if it's admin or user
//       if (decoded.role === 'admin') {
//         req.user = await Admin.findById(decoded.id).select('-password');
//         req.userType = 'admin';
//       } else {
//         req.user = await User.findById(decoded.id).select('-password');
//         req.userType = 'user';
//       }

//       if (!req.user) {
//         return res.status(401).json({
//           success: false,
//           message: 'User not found'
//         });
//       }

//       next();
//     } catch (error) {
//       console.error(error);
//       return res.status(401).json({
//         success: false,
//         message: 'Not authorized, token failed'
//       });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: 'Not authorized, no token'
//     });
//   }
// };

// const adminOnly = (req, res, next) => {
//   if (req.userType !== 'admin') {
//     return res.status(403).json({
//       success: false,
//       message: 'Access denied. Admin only.'
//     });
//   }
//   next();
// };

// module.exports = { protect, adminOnly };








// const jwt = require('jsonwebtoken');

// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // For now, just set a mock user
//       req.user = { id: decoded.id, _id: decoded.id };
//       req.userType = decoded.role || 'user';

//       next();
//     } catch (error) {
//       console.error(error);
//       return res.status(401).json({
//         success: false,
//         message: 'Not authorized, token failed'
//       });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: 'Not authorized, no token'
//     });
//   }
// };

// const adminOnly = (req, res, next) => {
//   if (req.userType !== 'admin') {
//     return res.status(403).json({
//       success: false,
//       message: 'Access denied. Admin only.'
//     });
//   }
//   next();
// };

// module.exports = { protect, adminOnly };







// const jwt = require('jsonwebtoken');

// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
      
//       // For development, if no JWT_SECRET, create a mock user
//       if (!process.env.JWT_SECRET) {
//         req.user = { id: '123', _id: '123' };
//         req.userType = 'admin';
//         return next();
//       }

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = { id: decoded.id, _id: decoded.id };
//       req.userType = decoded.role || 'user';

//       next();
//     } catch (error) {
//       console.error(error);
//       return res.status(401).json({
//         success: false,
//         message: 'Not authorized, token failed'
//       });
//     }
//   } else {
//     // For development, allow requests without token
//     if (process.env.NODE_ENV === 'development') {
//       req.user = { id: '123', _id: '123' };
//       req.userType = 'admin';
//       return next();
//     }

//     return res.status(401).json({
//       success: false,
//       message: 'Not authorized, no token'
//     });
//   }
// };

// const adminOnly = (req, res, next) => {
//   if (req.userType !== 'admin') {
//     return res.status(403).json({
//       success: false,
//       message: 'Access denied. Admin only.'
//     });
//   }
//   next();
// };

// module.exports = { protect, adminOnly };








