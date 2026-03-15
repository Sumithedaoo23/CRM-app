// const Ticket = require('../models/Ticket');
// const User = require('../models/User');

// // @desc    Create new ticket
// // @route   POST /api/tickets
// // @access  Private/User
// const createTicket = async (req, res) => {
//   try {
//     const { title, description, category, priority } = req.body;

//     // Get user details
//     const user = await User.findById(req.user._id);

//     const ticket = await Ticket.create({
//       title,
//       description,
//       category,
//       priority,
//       createdBy: req.user._id,
//       createdByDetails: {
//         name: user.fullName,
//         email: user.email,
//         phone: user.phone
//       },
//       status: 'pending'
//     });

//     res.status(201).json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Get all tickets (admin)
// // @route   GET /api/tickets
// // @access  Private/Admin
// const getTickets = async (req, res) => {
//   try {
//     const { status, priority, page = 1, limit = 10 } = req.query;

//     const query = {};
//     if (status) query.status = status;
//     if (priority) query.priority = priority;

//     const tickets = await Ticket.find(query)
//       .populate('createdBy', 'firstName lastName email phone')
//       .populate('assignedTo', 'firstName lastName')
//       .sort('-createdAt')
//       .limit(limit * 1)
//       .skip((page - 1) * limit);

//     const total = await Ticket.countDocuments(query);

//     res.json({
//       success: true,
//       data: tickets,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / limit)
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Get user tickets
// // @route   GET /api/tickets/my-tickets
// // @access  Private/User
// const getUserTickets = async (req, res) => {
//   try {
//     const tickets = await Ticket.find({ createdBy: req.user._id })
//       .sort('-createdAt');

//     res.json({
//       success: true,
//       data: tickets
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Get single ticket
// // @route   GET /api/tickets/:id
// // @access  Private
// const getTicket = async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id)
//       .populate('createdBy', 'firstName lastName email phone')
//       .populate('assignedTo', 'firstName lastName')
//       .populate('comments.user');

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         message: 'Ticket not found'
//       });
//     }

//     // Check if user owns the ticket (for users)
//     if (req.userType === 'user' && ticket.createdBy.toString() !== req.user._id.toString()) {
//       return res.status(403).json({
//         success: false,
//         message: 'Not authorized to view this ticket'
//       });
//     }

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Update ticket status (admin)
// // @route   PUT /api/tickets/:id/status
// // @access  Private/Admin
// const updateTicketStatus = async (req, res) => {
//   try {
//     const { status, resolution } = req.body;

//     const ticket = await Ticket.findById(req.params.id);

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         message: 'Ticket not found'
//       });
//     }

//     ticket.status = status;
//     ticket.history.push({
//       action: `Status changed to ${status}`,
//       user: req.user._id,
//       userType: 'admin'
//     });

//     if (status === 'resolved') {
//       ticket.resolvedAt = Date.now();
//       ticket.resolution = resolution;
//     }

//     if (status === 'closed') {
//       ticket.closedAt = Date.now();
//     }

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Assign ticket to admin
// // @route   PUT /api/tickets/:id/assign
// // @access  Private/Admin
// const assignTicket = async (req, res) => {
//   try {
//     const { adminId } = req.body;

//     const ticket = await Ticket.findById(req.params.id);

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         message: 'Ticket not found'
//       });
//     }

//     ticket.assignedTo = adminId;
//     ticket.history.push({
//       action: `Assigned to admin`,
//       user: req.user._id,
//       userType: 'admin'
//     });

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Add comment to ticket
// // @route   POST /api/tickets/:id/comments
// // @access  Private
// const addComment = async (req, res) => {
//   try {
//     const { content } = req.body;

//     const ticket = await Ticket.findById(req.params.id);

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         message: 'Ticket not found'
//       });
//     }

//     ticket.comments.push({
//       user: req.user._id,
//       userType: req.userType === 'admin' ? 'Admin' : 'User',
//       content
//     });

//     ticket.history.push({
//       action: `Comment added`,
//       user: req.user._id,
//       userType: req.userType
//     });

//     await ticket.save();

//     res.json({
//       success: true,
//       data: ticket
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Delete ticket (admin)
// // @route   DELETE /api/tickets/:id
// // @access  Private/Admin
// const deleteTicket = async (req, res) => {
//   try {
//     const ticket = await Ticket.findById(req.params.id);

//     if (!ticket) {
//       return res.status(404).json({
//         success: false,
//         message: 'Ticket not found'
//       });
//     }

//     // Require confirmation with ticket number
//     const { confirmTicketNumber } = req.body;
    
//     if (confirmTicketNumber !== ticket.ticketNumber) {
//       return res.status(400).json({
//         success: false,
//         message: 'Ticket number confirmation does not match'
//       });
//     }

//     await ticket.deleteOne();

//     res.json({
//       success: true,
//       message: 'Ticket deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// module.exports = {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// };














// // @desc    Create new ticket
// const createTicket = async (req, res) => {
//   try {
//     res.json({ message: 'Create ticket endpoint' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get all tickets (admin)
// const getTickets = async (req, res) => {
//   try {
//     res.json({ message: 'Get tickets endpoint' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get user tickets
// const getUserTickets = async (req, res) => {
//   try {
//     res.json({ message: 'Get user tickets endpoint' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get single ticket
// const getTicket = async (req, res) => {
//   try {
//     res.json({ message: 'Get ticket endpoint', id: req.params.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Update ticket status
// const updateTicketStatus = async (req, res) => {
//   try {
//     res.json({ message: 'Update ticket status endpoint', id: req.params.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Assign ticket
// const assignTicket = async (req, res) => {
//   try {
//     res.json({ message: 'Assign ticket endpoint', id: req.params.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Add comment
// const addComment = async (req, res) => {
//   try {
//     res.json({ message: 'Add comment endpoint', id: req.params.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Delete ticket
// const deleteTicket = async (req, res) => {
//   try {
//     res.json({ message: 'Delete ticket endpoint', id: req.params.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// };