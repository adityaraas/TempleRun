// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [jyotirlingas, setJyotirlingas] = useState([]);
  const [selectedJyotirlinga, setSelectedJyotirlinga] = useState(null);

  useEffect(() => {
    fetch('/temple2.json')
      .then(response => response.json())
      .then(data => setJyotirlingas(data.jyoti))
      .catch(error => console.error('Error fetching Jyotirlingas:', error));
}, []);

  const handleJyotirlingaClick = (jyotirlinga) => {
    setSelectedJyotirlinga(jyotirlinga);
  };

  const handleClosePopup = () => {
    setSelectedJyotirlinga(null);
  };

  return (
    <div className="app">
      <h1>12 Jyotirlingas</h1>
      <div className="jyotirlinga-list">
        {jyotirlingas.map((jyotirlinga, index) => (
          <div
            key={index}
            className="jyotirlinga"
            onClick={() => handleJyotirlingaClick(jyotirlinga)}
          >
            {jyotirlinga.name}
          </div>
        ))}
      </div>

      {selectedJyotirlinga && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedJyotirlinga.name}</h2>
            <p>History: {selectedJyotirlinga.history}</p>
            <p>How to Reach: {selectedJyotirlinga.howToReach}</p>
            <button onClick={handleClosePopup}>Back To Home</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
