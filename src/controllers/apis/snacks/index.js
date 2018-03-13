const express = require('express');
const snackService = require('../../../services/snacks');

const router = express.Router();

router.get('/', snackService.get);

module.exports = router;
