const fs = require('fs');
const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
    fs.writeFileSync('./data/dummyData.json', JSON.stringify(response.data, null, 2));
    console.log('Data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

module.exports = fetchData;
