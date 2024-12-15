const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  players: { type: [String], required: true },
});

module.exports = mongoose.model('Match', matchSchema);
