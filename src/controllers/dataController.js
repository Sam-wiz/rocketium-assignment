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

const searchUsersByBio = (req, res) => {
  const searchTerm = req.query.term;
  if (!searchTerm) {
    return res.status(400).json({ message: 'Search term is required' });
  }
  console.log(`Searching users by bio term: ${searchTerm}`);
  const results = dataService.searchByBio(searchTerm);
  
  if (results.length === 0) {
    res.json({ message: "No users found matching the search term" });
  } else {
    res.json(results);
  }
};

module.exports = {
  getAllData,
  getUserById,
  searchUsersByBio
};