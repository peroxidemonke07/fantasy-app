import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';

function Dashboard() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL === undefined ? 'http://localhost:5000' : 'http://localhost:80';

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/matches`); // Use the constant URL
        console.log('Fetched matches from backend:', response.data); // Log the fetched matches
        setMatches(response.data);
      } catch (error) {
        console.error('Failed to fetch matches:', error.response?.data || error.message);
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
