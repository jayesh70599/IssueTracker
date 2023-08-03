const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/project', require('./createpost'));
router.use('/projectdetails', require('./projectdetails'));
router.use('/issue', require('./createissues'))


module.exports = router;