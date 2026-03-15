// const express = require('express');
// const router = express.Router();

// // Test route
// router.get('/', (req, res) => {
//   res.json({ message: 'API is working!' });
// });

// module.exports = router;





const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

module.exports = router;