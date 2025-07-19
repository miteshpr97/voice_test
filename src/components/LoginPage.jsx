import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('demo');
  const [password, setPassword] = useState('demo');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'demo' && password === 'demo') {
      setLoginSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000); // Navigate after 1s delay
    } else {
      alert('Invalid email or password');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #74ebd5, #9face6)',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    background: '#fff',
    padding: '3rem 2.5rem',
    borderRadius: '12px',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '400px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4a90e2',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={headingStyle}>Welcome Back</h2>

        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          id='loginBtn'
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
        >
          Login
        </button>

        {loginSuccess && (
          <p style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>
            Login successful! Redirecting...
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
