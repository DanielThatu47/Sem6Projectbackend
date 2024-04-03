const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./middleware');

// Protected route that requires authentication
router.get('/protected', authenticateToken, (req, res) => {
  // This route is protected and can only be accessed with a valid JWT token
  res.send('Authenticated!');
});

module.exports = router;