const express = require('express');
const router = express.Router();
const { getFonts } = require('../controllers/fontsController');

router.get('/', getFonts);

module.exports = router;
