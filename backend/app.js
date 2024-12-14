const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/match');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/matches', matchRoutes);

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL || 'mongodb+srv://mayank:njr10psg@cluster0.vxdhx.mongodb.net/fantasy_app?retryWrites=true&w=majority&appName=Cluster0';
console.log(`mongoUrl : ${mongoUrl}`);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
