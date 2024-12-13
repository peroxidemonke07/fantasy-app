import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'; // Define the backend URL as a constant
  // console.log("Backend URL:", BACKEND_URL); // Log the backend URL

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/auth/register`, { username, password }); // Use the constant URL
      navigate('/'); // Redirect to login page on successful registration
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <button
          onClick={handleLoginRedirect}
          style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}
        >
          Login here
        </button>
      </p>
    </div>
  );
}

export default Register;
