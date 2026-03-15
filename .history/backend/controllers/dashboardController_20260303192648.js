const User = require('../models/User');
const Contact = require('../models/Contact');
const Lead = require('../models/Lead');
const Ticket = require('../models/Ticket');
const Role = require('../models/Role');
const Permission = require('../models/Permission');

// @desc    Get admin dashboard stats
// @route   GET /api/dashboard/admin
// @access  Private/Admin
const getAdminDashboardStats = async (req, res) => {
  try {
    // Get counts
    const [
      totalUsers,
      totalContacts,
      totalLeads,
      totalTickets,
      totalRoles,
      totalPermissions,
      ticketStats,
      recentActivities
    ] = await Promise.all([
      User.countDocuments(),
      Contact.countDocuments(),
      Lead.countDocuments(),
      Ticket.countDocuments(),
      Role.countDocuments(),
      Permission.countDocuments(),
      Ticket.aggregate([
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 }
          }
        }
      ]),
      // Get recent activities (last 10 tickets and leads)
      Promise.all([
        Ticket.find()
          .sort('-createdAt')
          .limit(5)
          .populate('createdBy', 'firstName lastName email')
          .lean(),
        Lead.find()
          .sort('-createdAt')
          .limit(5)
          .populate('createdBy', 'firstName lastName')
          .lean()
      ])
    ]);

    // Format ticket stats
    const ticketStatusCounts = {
      pending: 0,
      'in-progress': 0,
      resolved: 0,
      closed: 0,
      rejected: 0
    };

    ticketStats.forEach(stat => {
      ticketStatusCounts[stat._id] = stat.count;
    });

    // Calculate success rate
    const totalResolved = ticketStatusCounts.resolved + ticketStatusCounts.closed;
    const successRate = totalTickets > 0 
      ? Math.round((totalResolved / totalTickets) * 100) 
      : 0;

    // Monthly data for charts
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyData = await Promise.all([
      User.aggregate([
        {
          $match: {
            createdAt: { $gte: sixMonthsAgo }
          }
        },
        {
          $group: {
            _id: { $month: '$createdAt' },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id': 1 } }
      ]),
      Ticket.aggregate([
        {
          $match: {
            createdAt: { $gte: sixMonthsAgo }
          }
        },
        {
          $group: {
            _id: { $month: '$createdAt' },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id': 1 } }
      ])
    ]);

    res.json({
      success: true,
      data: {
        counts: {
          users: totalUsers,
          contacts: totalContacts,
          leads: totalLeads,
          tickets: totalTickets,
          roles: totalRoles,
          permissions: totalPermissions
        },
        ticketStats: ticketStatusCounts,
        successRate,
        monthlyData: {
          users: monthlyData[0],
          tickets: monthlyData[1]
        },
        recentActivities: {
          tickets: recentActivities[0],
          leads: recentActivities[1]
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get user dashboard stats
// @route   GET /api/dashboard/user
// @access  Private/User
const getUserDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const [totalTickets, ticketStats, recentTickets] = await Promise.all([
      Ticket.countDocuments({ createdBy: userId }),
      Ticket.aggregate([
        {
          $match: { createdBy: userId }
        },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 }
          }
        }
      ]),
      Ticket.find({ createdBy: userId })
        .sort('-createdAt')
        .limit(5)
        .lean()
    ]);

    // Format ticket stats
    const ticketStatusCounts = {
      pending: 0,
      'in-progress': 0,
      resolved: 0,
      closed: 0,
      rejected: 0
    };

    ticketStats.forEach(stat => {
      ticketStatusCounts[stat._id] = stat.count;
    });

    res.json({
      success: true,
      data: {
        totalTickets,
        ticketStats: ticketStatusCounts,
        recentTickets
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAdminDashboardStats,
  getUserDashboardStats
};