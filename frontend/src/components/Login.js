import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL === undefined ? 'http://localhost:5000' : 'http://localhost:80';
  console.log("Backend URL:", BACKEND_URL); // Log the backend URL
  console.log("process.env.REACT_APP_BACKEND_URL:", process.env.REACT_APP_BACKEND_URL); // Log the backend URL

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/auth/login`, { username, password }); // Use the constant URL
      localStorage.setItem('userId', response.data.userId); // Save user ID in local storage
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={handleRegister} style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}>Register here</button></p>
    </div>
  );
}

export default Login;
