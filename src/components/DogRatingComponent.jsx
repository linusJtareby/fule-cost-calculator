import React from 'react';
import './DogRatingScale.css'; // Import the CSS file

const DogRatingScale = ({ rating }) => {
    const labels = ['1', '2', '3', '4', '5'];

    return (
      <div className="rating-scale">
        <div className="scale-line"></div>
        {labels.map((label, index) => (
          <div key={index} className="scale-label" style={{ left: `${index * (100 / 4.1)}%` }}>{label}</div>
        ))}
        <div className="indicator" style={{ left: `${(rating - 1) * (100 / 4)}%` }}></div>
      </div>
    );
};

export default DogRatingScale;