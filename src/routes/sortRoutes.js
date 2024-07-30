const express = require('express');
const sortController = require('../controllers/sortController');

const router = express.Router();

router.get('/id', sortController.sortById);
router.get('/name', sortController.sortByName);
router.get('/version', sortController.sortByVersion);

module.exports = router;
