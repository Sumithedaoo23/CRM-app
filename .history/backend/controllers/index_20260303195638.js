// Export all controllers
module.exports = {
  // Auth Controllers
  registerAdmin: (req, res) => { res.json({ message: 'registerAdmin' }) },
  loginAdmin: (req, res) => { res.json({ message: 'loginAdmin' }) },
  loginUser: (req, res) => { res.json({ message: 'loginUser' }) },
  getMe: (req, res) => { res.json({ message: 'getMe', user: req.user }) },

  // User Controllers
  createUser: (req, res) => { res.json({ message: 'createUser' }) },
  getUsers: (req, res) => { res.json({ message: 'getUsers' }) },
  getUser: (req, res) => { res.json({ message: 'getUser', id: req.params.id }) },
  updateUser: (req, res) => { res.json({ message: 'updateUser', id: req.params.id }) },
  deleteUser: (req, res) => { res.json({ message: 'deleteUser', id: req.params.id }) },
  exportUsersPDF: (req, res) => { res.json({ message: 'exportUsersPDF' }) },
  exportUserPDF: (req, res) => { res.json({ message: 'exportUserPDF', id: req.params.id }) },
  addUserNote: (req, res) => { res.json({ message: 'addUserNote', id: req.params.id }) },

  // Ticket Controllers
  createTicket: (req, res) => { res.json({ message: 'createTicket' }) },
  getTickets: (req, res) => { res.json({ message: 'getTickets' }) },
  getUserTickets: (req, res) => { res.json({ message: 'getUserTickets' }) },
  getTicket: (req, res) => { res.json({ message: 'getTicket', id: req.params.id }) },
  updateTicketStatus: (req, res) => { res.json({ message: 'updateTicketStatus', id: req.params.id }) },
  assignTicket: (req, res) => { res.json({ message: 'assignTicket', id: req.params.id }) },
  addComment: (req, res) => { res.json({ message: 'addComment', id: req.params.id }) },
  deleteTicket: (req, res) => { res.json({ message: 'deleteTicket', id: req.params.id }) },

  // Dashboard Controllers
  getAdminDashboardStats: (req, res) => { res.json({ message: 'getAdminDashboardStats' }) },
  getUserDashboardStats: (req, res) => { res.json({ message: 'getUserDashboardStats' }) }
};