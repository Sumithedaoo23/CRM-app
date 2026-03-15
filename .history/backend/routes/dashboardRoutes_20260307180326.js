// const express = require('express');
// const router = express.Router();
// const Ticket = require('../models/Ticket');
// const User = require('../models/User');

// // @desc    Get admin dashboard statistics
// // @route   GET /api/dashboard/admin
// // @access  Public (for now)
// router.get('/admin', async (req, res) => {
//   try {
//     console.log('Fetching admin dashboard stats...');
    
//     // Get all tickets
//     const tickets = await Ticket.find();
//     console.log(`Found ${tickets.length} tickets`);
    
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
    
//     const stats = {
//       counts: {
//         users: totalUsers,
//         contacts: 0,
//         leads: 0,
//         tickets: totalTickets,
//         roles: 0,
//         permissions: 0
//       },
//       ticketStats: ticketStats,
//       successRate: successRate,
//       recentActivities: {
//         tickets: recentTickets,
//         leads: []
//       }
//     };
    
//     console.log('Sending dashboard stats:', stats);
    
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
//     console.log(`Fetching user dashboard stats for user: ${userId}`);
    
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













const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const User = require('../models/User');
const Contact = require('../models/Contact'); // Import Contact model

// @desc    Get admin dashboard statistics
// @route   GET /api/dashboard/admin
// @access  Public (for now)
router.get('/admin', async (req, res) => {
  try {
    console.log('Fetching admin dashboard stats...');
    
    // Get all tickets
    const tickets = await Ticket.find();
    console.log(`Found ${tickets.length} tickets`);
    
    // Get all users
    const users = await User.find();
    const totalUsers = users.length;
    
    // Get all contacts from Contact model
    const contacts = await Contact.find();
    const totalContacts = contacts.length;
    const activeContacts = contacts.filter(c => c.status === 'Active').length;
    const inactiveContacts = contacts.filter(c => c.status === 'Inactive').length;
    
    // Calculate ticket statistics
    const ticketStats = {
      pending: tickets.filter(t => t.status === 'pending').length,
      'in-progress': tickets.filter(t => t.status === 'in-progress').length,
      resolved: tickets.filter(t => t.status === 'resolved').length,
      closed: tickets.filter(t => t.status === 'closed').length,
      rejected: tickets.filter(t => t.status === 'rejected').length
    };
    
    // Calculate total tickets
    const totalTickets = tickets.length;
    
    // Calculate success rate (resolved + closed) / total * 100
    const resolvedCount = ticketStats.resolved + ticketStats.closed;
    const successRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
    
    // Get recent tickets (last 5)
    const recentTickets = await Ticket.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('ticketNumber title status createdAt');
    
    // Get recent contacts (last 5)
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email status');
    
    const stats = {
      counts: {
        users: totalUsers,
        contacts: totalContacts,
        activeContacts: activeContacts,
        inactiveContacts: inactiveContacts,
        leads: 0,
        tickets: totalTickets,
        roles: 0,
        permissions: 0
      },
      ticketStats: ticketStats,
      successRate: successRate,
      recentActivities: {
        tickets: recentTickets,
        contacts: recentContacts,
        leads: []
      }
    };
    
    console.log('Sending dashboard stats:', stats);
    
    res.json({
      success: true,
      data: stats
    });
    
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get user dashboard statistics
// @route   GET /api/dashboard/user/:userId
// @access  Public (for now)
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(`Fetching user dashboard stats for user: ${userId}`);
    
    // Get user's tickets
    const tickets = await Ticket.find({ userId });
    
    // Calculate ticket statistics
    const ticketStats = {
      pending: tickets.filter(t => t.status === 'pending').length,
      'in-progress': tickets.filter(t => t.status === 'in-progress').length,
      resolved: tickets.filter(t => t.status === 'resolved').length,
      closed: tickets.filter(t => t.status === 'closed').length,
      rejected: tickets.filter(t => t.status === 'rejected').length
    };
    
    // Get recent tickets
    const recentTickets = await Ticket.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('ticketNumber title status createdAt');
    
    const stats = {
      totalTickets: tickets.length,
      ticketStats: ticketStats,
      recentTickets: recentTickets
    };
    
    res.json({
      success: true,
      data: stats
    });
    
  } catch (error) {
    console.error('User dashboard error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;

