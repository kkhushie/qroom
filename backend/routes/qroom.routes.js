const express = require('express');
const router = express.Router();
const { createQroom } = require('../controllers/qroom.controller');
// const auth = require('../middleware/auth'); // adjust path as needed

router.post('/create', createQroom);

module.exports = router;
