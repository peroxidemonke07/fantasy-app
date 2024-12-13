// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5008;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    try {
        const data = req.body;

        // Navigate to the 'match' object and get the 'players' list
        const match = data.match || {};
        const players = match.players || [];
        
        console.log(`players: ${JSON.stringify(players)}`);

        if (!Array.isArray(players)) {
            return res.status(400).json({ error: "'players' must be a list." });
        }

        // Return the first 11 players
        const first11 = players.slice(0, 11);
        return res.status(200).json({ selected_players: first11 });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

PORT = 5008
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
