const express = require('express');
const filterController = require('../controllers/filterController');

const router = express.Router();

router.get('/name', filterController.filterByName);
router.get('/language', filterController.filterByLanguage)
router.get('/version-range', filterController.filterByVersionRange);
router.get('/combined', filterController.combinedSortFilter);

module.exports = router;
