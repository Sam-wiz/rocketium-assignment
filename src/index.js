const express = require('express');
const sortRoutes = require('./routes/sortRoutes');
const filterRoutes = require('./routes/filterRoutes');
const dataRoutes = require('./routes/dataRoutes'); 

const app = express();

app.use(express.json());

app.use('/data/sort', sortRoutes);
app.use('/data/filter', filterRoutes);
app.use('/data', dataRoutes); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const port = process.argv[2] || process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
