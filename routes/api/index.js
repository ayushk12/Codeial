
// root index file for api 
const express = require('express');

const router = express.Router();

// for using v1 
router.use('/v1',require('./v1'));

module.exports = router;