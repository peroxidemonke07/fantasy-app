import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PredictionPage() {
  const location = useLocation();
  const { prediction } = location.state || { prediction: [] };

  return (
    <div>
      <h2>Match Prediction</h2>
      {prediction.length > 0 ? (
        <ul>
          {prediction.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      ) : (
        <p>No prediction data available.</p>
      )}
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default PredictionPage;
