const router = require('express').Router();
const User = require('./users');
const Thought = require('./thoughts')


router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
