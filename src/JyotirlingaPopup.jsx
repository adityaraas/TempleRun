import React from 'react';
import './JyotirlingaPopup.css';

const JyotirlingaPopup = ({ data, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{data.name}</h2>
        <p>History: {data.history}</p>
        <p>How to Reach: {data.howToReach}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JyotirlingaPopup;
