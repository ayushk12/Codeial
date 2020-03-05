//  index file for V1
const express = require('express');

const router = express.Router();

router.use('/posts',require('./posts'));

router.use('/users',require('./users'));

module.exports = router;