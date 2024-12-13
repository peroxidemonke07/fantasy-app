import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';

function Dashboard() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'; // Define the backend URL as a constant
  // console.log("Backend URL:", BACKEND_URL); // Log the backend URL

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/matches`); // Use the constant URL
        setMatches(response.data);
      } catch (error) {
        console.error('Failed to fetch matches:', error.response.data);
      }
    };
    fetchMatches();
  }, [BACKEND_URL]);

  return (
    <div>
      <h2>Matches</h2>
      <div className="matches-container">
        {matches.map((match) => (
          <MatchCard key={match._id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
