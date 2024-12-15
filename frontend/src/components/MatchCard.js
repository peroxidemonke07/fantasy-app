import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MatchCard({ match }) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL === undefined ? 'http://localhost:5000' : 'http://localhost:80';

  const navigate = useNavigate();

  const handlePrediction = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/matches/${match._id}`); // Use the constant URL
      const selectedPlayers = response.data.selected_players;

      // Redirect to the PredictionPage with prediction data
      navigate('/prediction', { state: { prediction: selectedPlayers } });
    } catch (error) {
      console.error('Failed to fetch prediction:', error.response?.data || error.message);
    }
  };

  return (
    <div className="match-card">
      <h3>{match.team1Name} vs {match.team2Name}</h3>
      <p>Venue: {match.venue}</p>
      <p>Date: {new Date(match.date).toLocaleDateString()}</p>
      <button onClick={handlePrediction}>Get Prediction</button>
    </div>
  );
}

export default MatchCard;
