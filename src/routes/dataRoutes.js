const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/', dataController.getAllData);
router.get('/id/:id', dataController.getUserById); 
router.get('/search', dataController.searchUsersByBio);
module.exports = router;


// Can add other data routes like getting details of specific id,etc..