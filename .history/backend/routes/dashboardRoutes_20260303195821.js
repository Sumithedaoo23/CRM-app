// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   getAdminDashboardStats,
//   getUserDashboardStats
// } = require('../controllers/dashboardController');

// // Define routes
// router.get('/admin', protect, adminOnly, getAdminDashboardStats);
// router.get('/user', protect, getUserDashboardStats);

// module.exports = router;









const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const controllers = require('../controllers/index');

// Define routes
router.get('/admin', protect, adminOnly, controllers.getAdminDashboardStats);
router.get('/user', protect, controllers.getUserDashboardStats);

module.exports = router;