const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const courseRoutes = require('./courses');

const router = express.Router();

// API Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);

// API Info
router.get('/', (req, res) => {
  res.json({
    name: 'LMS Portal API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      courses: '/api/courses'
    }
  });
});

module.exports = router;
