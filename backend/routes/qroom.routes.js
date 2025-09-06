const express = require('express');
const router = express.Router();
const { createQroom, listQrooms} = require('../controllers/qroom.controller');
// const auth = require('../middleware/auth'); // adjust path as needed

router.post('/create', createQroom);
router.get("/list", listQrooms); 

module.exports = router;
