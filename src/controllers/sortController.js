const dataService = require('../services/dataService');

const sortById = (req, res) => {
  try {
    const sortedData = dataService.sortData('id', req.query.order);
    res.json(sortedData);
  } catch (error) {
    console.error('Error sorting by ID:', error);
    res.status(500).json({ error: 'An error occurred while sorting by ID' });
  }
};

const sortByName = (req, res) => {
  try {
    const sortedData = dataService.sortData('name', req.query.order);
    res.json(sortedData);
  } catch (error) {
    console.error('Error sorting by name:', error);
    res.status(500).json({ error: 'An error occurred while sorting by name' });
  }
};

const sortByVersion = (req, res) => {
  try {
    const sortedData = dataService.sortData('version', req.query.order);
    res.json(sortedData);
  } catch (error) {
    console.error('Error sorting by version:', error);
    res.status(500).json({ error: 'An error occurred while sorting by version' });
  }
};

module.exports = {
  sortById,
  sortByName,
  sortByVersion
};
