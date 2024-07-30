const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/', dataController.getAllData);

module.exports = router;

// Can add other data routes like getting details of specific id,etc..