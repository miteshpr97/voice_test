import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [busType, setBusType] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBusType = async () => {
      try {
        const response = await axios.get("https://rta-backend-1.onrender.com/api/busType/get");
        setBusType(response.data);
      } catch (error) {
        console.error('Error fetching bus types:', error);
        setError('Failed to load bus types.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusType();
  }, []);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("Please select a bus type before submitting.");
      return;
    }
    console.log('Selected option:', selectedOption);
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

  const radioGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const radioStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    fontWeight: '500',
    color: '#444',
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
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headingStyle}>Select a Bus Type</h2>

        {loading ? (
          <div style={{ textAlign: 'center', color: '#4a90e2', fontWeight: 'bold', margin: '2rem 0' }}>
            Loading...
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', margin: '2rem 0' }}>
            {error}
          </div>
        ) : (
          <div style={radioGroupStyle}>
            {busType && busType.map((item) => (
              <div key={item.BusTypeID} style={radioStyle}>
                <input
                  type="radio"
                  name="busType"
                  checked={selectedOption === item.BusType}
                  onChange={() => handleChange(item.BusType)}
                  id={item.BusTypeID}
                  style={{ transform: 'scale(1.2)' }}
                />
                <label htmlFor={item.BusTypeID}>{item.BusType}</label>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          id='submitBtn'
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
