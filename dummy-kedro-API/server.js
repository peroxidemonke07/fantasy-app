const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./logger'); // Import the custom logger

const app = express();
const port = 5008;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Function to select random elements from an array
function getRandomPlayers(players, count) {
    const shuffled = [...players].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Return the first `count` elements
}

app.post('/predict', (req, res) => {
    try {
        const data = req.body;

        // Navigate to the 'match' object and get the 'players' list
        const match = data.match || {};
        const players = match.players || [];

        // Log match ID at info level with timestamp
        if (match.match_id) {
            logger.info(`Processing match with ID: ${match.match_id}`, { match_id: match.match_id });
        } else {
            logger.info('No match_id provided in the request.');
        }
        
        // console.log(`players: ${JSON.stringify(players)}`);

        if (!Array.isArray(players)) {
            return res.status(400).json({ error: "'players' must be a list." });
        }

        if (players.length < 11) {
            return res.status(400).json({ error: "Insufficient number of players. At least 11 players are required." });
        }

        // Select 11 random players
        const random11 = getRandomPlayers(players, 11);
        return res.status(200).json({ selected_players: random11 });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});