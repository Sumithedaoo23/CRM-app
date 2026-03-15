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










const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { protect } = require('../middleware/authMiddleware');
const controllers = require('../controllers/index');

// Validation rules
const adminRegisterValidation = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').notEmpty().withMessage('Phone number is required')
];

const adminLoginValidation = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

// Routes
router.post('/register-admin', adminRegisterValidation, controllers.registerAdmin);
router.post('/login-admin', adminLoginValidation, controllers.loginAdmin);
router.post('/login-user', adminLoginValidation, controllers.loginUser);
router.get('/me', protect, controllers.getMe);

module.exports = router;