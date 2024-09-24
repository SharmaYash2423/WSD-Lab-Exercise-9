import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleNavigate = () => {
    navigate('/imagefetcher'); // Navigate to the ImageFetcher page
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h2>Submitted Data</h2>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Password:</strong> {password}</p>

          <button 
            onClick={handleNavigate} 
            style={{
              marginTop: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}
          >
            Go to ImageFetcher
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;