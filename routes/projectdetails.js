const express = require('express');
const router = express.Router();

const detailsControllers = require('../controllers/details_controller.js');

router.get('/:id', detailsControllers.details);

module.exports = router;