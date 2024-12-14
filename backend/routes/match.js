const express = require('express');
const Match = require('../models/Match');
const axios = require('axios');

const router = express.Router();

// Get Matches
router.get('/', async (req, res) => {
  const matches = await Match.find({});
  res.json(matches);
});

// Call Kedro API
router.post('/:matchId', async (req, res) => {
  const { matchId } = req.params;
  const match = await Match.findById(matchId);

  if (!match) {
    return res.status(404).json({ error: 'Match not found' });
  }

  try {
    // Get  the Kedro API URL from environment variables
    // const kedroApiUrl = 'http://localhost'; // Fallback to the default if the environment variable is not set
    const kedroApiUrl = process.env.KEDRO_API_URL || 'http://localhost:5008'; // Fallback to the default if the environment variable is not set
    console.log(`kedro API url: ${kedroApiUrl}`);
    
    const response = await axios.post(`${kedroApiUrl}/predict`, { match });
    console.log(response.data);
    
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Kedro API call failed' });
  }
});

module.exports = router;
