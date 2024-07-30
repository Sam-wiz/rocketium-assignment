const dataService = require('../services/dataService');

const filterByName = (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res.status(400).json({ error: 'Name query parameter is required' });
    }
    const filteredData = dataService.filterData('name', name); // Corrected
    res.json(filteredData);
  } catch (error) {
    console.error('Error filtering by name:', error);
    res.status(500).json({ error: 'An error occurred while filtering by name' });
  }
};

const filterByLanguage = (req, res) => {
  try {
    const language = req.query.language;
    if (!language) {
      return res.status(400).json({ error: 'Language query parameter is required' });
    }
    const filteredData = dataService.filterData('language', language); // Corrected
    res.json(filteredData);
  } catch (error) {
    console.error('Error filtering by language:', error);
    res.status(500).json({ error: 'An error occurred while filtering by language' });
  }
};

const filterByVersionRange = (req, res) => {
  try {
    const { minVersion, maxVersion } = req.query;
    if (!minVersion || !maxVersion) {
      return res.status(400).json({ error: 'Both minVersion and maxVersion query parameters are required' });
    }
    const filteredData = dataService.filterByVersionRange(minVersion, maxVersion);
    res.json(filteredData);
  } catch (error) {
    console.error('Error filtering by version range:', error);
    res.status(500).json({ error: 'An error occurred while filtering by version range' });
  }
};

const combinedSortFilter = (req, res) => {
  try {
    const { sortField, sortOrder = 'asc', filterField, filterValue } = req.query;
    if (!sortField || !filterField || !filterValue) {
      return res.status(400).json({ error: 'sortField, filterField, and filterValue query parameters are required' });
    }
    const filteredSortedData = dataService.combinedSortFilter(sortField, sortOrder, filterField, filterValue);
    res.json(filteredSortedData);
  } catch (error) {
    console.error('Error in combined sort and filter:', error);
    res.status(500).json({ error: 'An error occurred during combined sorting and filtering' });
  }
};

module.exports = {
  filterByName,
  filterByVersionRange,
  combinedSortFilter,
  filterByLanguage
};
