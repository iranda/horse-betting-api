const express = require('express');
const horsesController = require('../../../controllers/apis/horses');

const router = express.Router();

router.use('/horses', horsesController);

module.exports = router;
