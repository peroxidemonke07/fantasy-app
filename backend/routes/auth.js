const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();
const SALT_ROUNDS = 10;

// User Registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Save user to database
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed', details: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user in database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

module.exports = router;
