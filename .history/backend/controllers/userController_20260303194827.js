// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const { generatePDF } = require('../utils/generatePDF');

// // @desc    Create new user
// // @route   POST /api/users
// // @access  Private/Admin
// const createUser = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, address, role, company } = req.body;

//     // Check if user exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({
//         success: false,
//         message: 'User already exists'
//       });
//     }

//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       phone,
//       address,
//       role: role || 'user',
//       company,
//       createdBy: req.user._id
//     });

//     res.status(201).json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Private/Admin
// const getUsers = async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;

//     const query = {};
//     if (role) query.role = role;
//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const users = await User.find(query)
//       .select('-password')
//       .sort('-createdAt')
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .populate('createdBy', 'firstName lastName email');

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: users,
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

// // @desc    Get single user
// // @route   GET /api/users/:id
// // @access  Private/Admin
// const getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//       .select('-password')
//       .populate('createdBy', 'firstName lastName email')
//       .populate('hyperlinks');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, address, role, company, isActive } = req.body;

//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Update fields
//     if (firstName) user.firstName = firstName;
//     if (lastName) user.lastName = lastName;
//     if (phone) user.phone = phone;
//     if (address) user.address = address;
//     if (role) user.role = role;
//     if (company) user.company = company;
//     if (isActive !== undefined) user.isActive = isActive;

//     await user.save();

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Delete user (with confirmation)
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deleteUser = async (req, res) => {
//   try {
//     const { confirmFullName } = req.body;

//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Require full name confirmation for safety
//     if (confirmFullName !== user.fullName) {
//       return res.status(400).json({
//         success: false,
//         message: 'Full name confirmation does not match'
//       });
//     }

//     await user.deleteOne();

//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Export users to PDF
// // @route   GET /api/users/export/pdf
// // @access  Private/Admin
// const exportUsersPDF = async (req, res) => {
//   try {
//     const { role, search } = req.query;

//     const query = {};
//     if (role) query.role = role;
//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const users = await User.find(query)
//       .select('-password')
//       .sort('-createdAt');

//     // Generate PDF
//     const pdfBuffer = await generatePDF('users', users);

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'attachment; filename=users.pdf');
//     res.send(pdfBuffer);
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Export single user to PDF
// // @route   GET /api/users/:id/export/pdf
// // @access  Private/Admin
// const exportUserPDF = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//       .select('-password')
//       .populate('createdBy', 'firstName lastName email')
//       .populate('hyperlinks');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Generate PDF
//     const pdfBuffer = await generatePDF('user', user);

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=user-${user.fullName}.pdf`);
//     res.send(pdfBuffer);
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Add note to user
// // @route   POST /api/users/:id/notes
// // @access  Private/Admin
// const addUserNote = async (req, res) => {
//   try {
//     const { content } = req.body;

//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     user.notes.push({
//       content,
//       createdBy: req.user._id
//     });

//     await user.save();

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// module.exports = {
//   createUser,
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
//   exportUsersPDF,
//   exportUserPDF,
//   addUserNote
// };















// @desc    Create new ticket
const createTicket = async (req, res) => {
  try {
    res.json({ message: 'Create ticket endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all tickets (admin)
const getTickets = async (req, res) => {
  try {
    res.json({ message: 'Get tickets endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user tickets
const getUserTickets = async (req, res) => {
  try {
    res.json({ message: 'Get user tickets endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single ticket
const getTicket = async (req, res) => {
  try {
    res.json({ message: 'Get ticket endpoint', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update ticket status
const updateTicketStatus = async (req, res) => {
  try {
    res.json({ message: 'Update ticket status endpoint', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Assign ticket
const assignTicket = async (req, res) => {
  try {
    res.json({ message: 'Assign ticket endpoint', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add comment
const addComment = async (req, res) => {
  try {
    res.json({ message: 'Add comment endpoint', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete ticket
const deleteTicket = async (req, res) => {
  try {
    res.json({ message: 'Delete ticket endpoint', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getUserTickets,
  getTicket,
  updateTicketStatus,
  assignTicket,
  addComment,
  deleteTicket
};