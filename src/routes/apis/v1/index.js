const express = require('express');
const snacksController = require('../../../controllers/apis/snacks');

const router = express.Router();

router.use('/snacks', snacksController);

module.exports = router;
