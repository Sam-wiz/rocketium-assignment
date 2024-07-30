const fs = require('fs');
const fetchData = require('./fetchData');
const path = require('path');
const FLAG_FILE = path.join(__dirname, '../data/.data_initialized');
const DATA_DIR = path.join(__dirname, '../data');

const isDataInitialized = () => {
  return fs.existsSync(FLAG_FILE);
};

const markDataAsInitialized = () => {
  fs.writeFileSync(FLAG_FILE, 'Initialized the data (added this flag as a reference and to avoid multiple initializations)');
};

const initialize = async () => {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
      console.log('Data directory created.');
    }

    if (!isDataInitialized()) {
      console.log('Initializing data for the first time...');
      await fetchData(); // Ensure fetchData is functioning correctly
      markDataAsInitialized();
      console.log('Data initialization completed.');
    } else {
      console.log('Data has already been initialized. Skipping initialization.');
    }
  } catch (error) {
    console.error('Error during initialization:', error);
  }
};

initialize();
