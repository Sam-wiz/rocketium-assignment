const fs = require('fs');
const path = require('path');

let data = [];

const loadData = () => {
  try {
    const filePath = path.join(__dirname, '../../data/dummyData.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(fileData);
    console.log('Data loaded successfully.');
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

const getData = () => {
  return data;
};

const getUserById = (id) => {
  return data.find(user => user.id === id);
};


const sortData = (field, order = 'asc') => {
  return [...data].sort((a, b) => {
    if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};


const filterData = (field, value) => {
  console.log('Filtering data for field:', field, 'with value:', value);

  return data.filter(item => 
    item[field] && 
    item[field].toString().toLowerCase().includes(value.toLowerCase())
  );
};


const filterByVersionRange = (minVersion, maxVersion) => {
  return data.filter(item => {
    const version = parseFloat(item.version);
    return version >= parseFloat(minVersion) && version <= parseFloat(maxVersion);
  });
};

const combinedSortFilter = (sortField, sortOrder, filterField, filterValue) => {
  let filteredData = data;
  
  if (filterField && filterValue) {
    filteredData = filteredData.filter(item => item[filterField] && item[filterField].toString().toLowerCase().includes(filterValue.toLowerCase()));
  }

  return filteredData.sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
};

const searchByBio = (searchTerm) => {
  const terms = searchTerm.toLowerCase().split(/\s+/);
  return data.filter(item => 
    terms.some(term => item.bio.toLowerCase().includes(term))
  );
};

loadData();

module.exports = {
  getData,
  filterByVersionRange,
  combinedSortFilter,
  sortData,
  filterData,
  getUserById,
  searchByBio
};
