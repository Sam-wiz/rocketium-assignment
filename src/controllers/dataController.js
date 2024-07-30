const dataService = require('../services/dataService');

const getAllData = (req, res) => {
  console.log("Fetching all data");
  const data = dataService.getData();
  res.json(data);
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  console.log(`Fetching user by ID: ${userId}`);
  const user = dataService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  getAllData,
  getUserById,
};