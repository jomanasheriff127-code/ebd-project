
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check required by the project
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Rentique backend running on port ${PORT}`);
});
