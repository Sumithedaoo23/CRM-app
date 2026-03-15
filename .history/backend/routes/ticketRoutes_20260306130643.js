// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// } = require('../controllers/ticketController');

// // User routes
// router.post('/', protect, createTicket);
// router.get('/my-tickets', protect, getUserTickets);
// router.get('/:id', protect, getTicket);
// router.post('/:id/comments', protect, addComment);

// // Admin routes
// router.get('/', protect, adminOnly, getTickets);
// router.put('/:id/status', protect, adminOnly, updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, assignTicket);
// router.delete('/:id', protect, adminOnly, deleteTicket);

// module.exports = router;













// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const {
//   createTicket,
//   getTickets,
//   getUserTickets,
//   getTicket,
//   updateTicketStatus,
//   assignTicket,
//   addComment,
//   deleteTicket
// } = require('../controllers/ticketController');

// // User routes
// router.post('/', protect, createTicket);
// router.get('/my-tickets', protect, getUserTickets);
// router.get('/:id', protect, getTicket);
// router.post('/:id/comments', protect, addComment);

// // Admin routes
// router.get('/', protect, adminOnly, getTickets);
// router.put('/:id/status', protect, adminOnly, updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, assignTicket);
// router.delete('/:id', protect, adminOnly, deleteTicket);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const { protect, adminOnly } = require('../middleware/authMiddleware');
// const controllers = require('../controllers/index');

// // User routes
// router.post('/', protect, controllers.createTicket);
// router.get('/my-tickets', protect, controllers.getUserTickets);
// router.get('/:id', protect, controllers.getTicket);
// router.post('/:id/comments', protect, controllers.addComment);

// // Admin routes
// router.get('/', protect, adminOnly, controllers.getTickets);
// router.put('/:id/status', protect, adminOnly, controllers.updateTicketStatus);
// router.put('/:id/assign', protect, adminOnly, controllers.assignTicket);
// router.delete('/:id', protect, adminOnly, controllers.deleteTicket);

// module.exports = router;















