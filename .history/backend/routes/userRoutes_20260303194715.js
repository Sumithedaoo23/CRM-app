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









const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  exportUsersPDF,
  exportUserPDF,
  addUserNote
} = require('../controllers/userController');

// Apply middleware to all routes
router.use(protect, adminOnly);

// Define routes
router.route('/')
  .post(createUser)
  .get(getUsers);

router.get('/export/pdf', exportUsersPDF);
router.get('/:id/export/pdf', exportUserPDF);
router.post('/:id/notes', addUserNote);

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;