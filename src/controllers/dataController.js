const dataService = require('../services/dataService');

const getAllData = (req, res) => {
  const data = dataService.getData();
  res.json(data);
};

module.exports = {
  getAllData,
};
