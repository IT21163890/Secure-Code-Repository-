const express = require('express');
const { getCode, addCode } = require('../controllers/codeController');

const router = express.Router();

router.get('/', getCode);
router.post('/', addCode);

module.exports = router;
