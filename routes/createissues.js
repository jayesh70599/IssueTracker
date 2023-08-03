const express = require('express');
const router = express.Router();

const issuesControllers = require('../controllers/issues_controller.js');

router.get('/:id', issuesControllers.issue);
router.post('/:id', issuesControllers.create);


module.exports = router;