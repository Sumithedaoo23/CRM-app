// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createUser,
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
//   exportUsersPDF,
//   exportUserPDF,
//   addUserNote
// } = require('../controllers/userController');

// // All user routes are admin only
// router.use(protect, adminOnly);

// router.route('/')
//   .post(createUser)
//   .get(getUsers);

// router.get('/export/pdf', exportUsersPDF);
// router.get('/:id/export/pdf', exportUserPDF);
// router.post('/:id/notes', addUserNote);

// router.route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createUser,
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
//   exportUsersPDF,
//   exportUserPDF,
//   addUserNote
// } = require('../controllers/userController');

// // Apply middleware to all routes
// router.use(protect, adminOnly);

// // Define routes
// router.route('/')
//   .post(createUser)
//   .get(getUsers);

// router.get('/export/pdf', exportUsersPDF);
// router.get('/:id/export/pdf', exportUserPDF);
// router.post('/:id/notes', addUserNote);

// router.route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

// module.exports = router;













// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const controllers = require('../controllers/index');

// // Apply middleware to all routes
// router.use(protect, adminOnly);

// // Define routes
// router.route('/')
//   .post(controllers.createUser)
//   .get(controllers.getUsers);

// router.get('/export/pdf', controllers.exportUsersPDF);
// router.get('/:id/export/pdf', controllers.exportUserPDF);
// router.post('/:id/notes', controllers.addUserNote);

// router.route('/:id')
//   .get(controllers.getUser)
//   .put(controllers.updateUser)
//   .delete(controllers.deleteUser);

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