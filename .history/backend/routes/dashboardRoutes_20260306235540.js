
// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const controllers = require('../controllers/index');

// // Define routes
// router.get('/admin', protect, adminOnly, controllers.getAdminDashboardStats);
// router.get('/user', protect, controllers.getUserDashboardStats);

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const Ticket = require('../models/Ticket');
// const User = require('../models/User');

// // @desc    Get admin dashboard statistics
// // @route   GET /api/dashboard/admin
// // @access  Public (for now)
// router.get('/admin', async (req, res) => {
//   try {
//     // Get all tickets
//     const tickets = await Ticket.find();
    
//     // Calculate ticket statistics
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     // Calculate total tickets
//     const totalTickets = tickets.length;
    
//     // Calculate success rate (resolved + closed) / total * 100
//     const resolvedCount = ticketStats.resolved + ticketStats.closed;
//     const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
    
//     // Get total users
//     const totalUsers = await User.countDocuments();
    
//     // Get recent tickets (last 5)
//     const recentTickets = await Ticket.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     // Mock data for other stats (you can replace with real data later)
//     const stats = {
//       counts: {
//         users: totalUsers,
//         contacts: 0, // You can add Contact model later
//         leads: 0,     // You can add Lead model later
//         tickets: totalTickets,
//         roles: 0,     // You can add Role model later
//         permissions: 0 // You can add Permission model later
//       },
//       ticketStats: ticketStats,
//       successRate: successRate,
//       recentActivities: {
//         tickets: recentTickets,
//         leads: [] // You can add leads later
//       }
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('Dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get user dashboard statistics
// // @route   GET /api/dashboard/user/:userId
// // @access  Public (for now)
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
    
//     // Get user's tickets
//     const tickets = await Ticket.find({ userId });
    
//     // Calculate ticket statistics
//     const ticketStats = {
//       pending: tickets.filter(t => t.status === 'pending').length,
//       'in-progress': tickets.filter(t => t.status === 'in-progress').length,
//       resolved: tickets.filter(t => t.status === 'resolved').length,
//       closed: tickets.filter(t => t.status === 'closed').length,
//       rejected: tickets.filter(t => t.status === 'rejected').length
//     };
    
//     // Get recent tickets
//     const recentTickets = await Ticket.find({ userId })
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .select('ticketNumber title status createdAt');
    
//     const stats = {
//       totalTickets: tickets.length,
//       ticketStats: ticketStats,
//       recentTickets: recentTickets
//     };
    
//     res.json({
//       success: true,
//       data: stats
//     });
    
//   } catch (error) {
//     console.error('User dashboard error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;