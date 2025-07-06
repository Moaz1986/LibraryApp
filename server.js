const mongoose = require('mongoose');

// Use the EXACT password from Atlas (URL-encode special characters)
const DB_URI = 'mongodb+srv://xyryllem:xyryllem@libraryapp.swxpjwu.mongodb.net/library_db?retryWrites=true&w=majority';
// Connect to MongoDB
mongoose.connect(DB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Connection error:', err));

// Import models (to ensure they're registered)
require('./models/Book');
require('./models/User');

// Basic server setup (optional)
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});