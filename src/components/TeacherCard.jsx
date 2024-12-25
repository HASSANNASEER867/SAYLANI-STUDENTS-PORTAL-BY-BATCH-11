
// Card.jsx
import React from 'react';

const Card = ({ title, value, color, icon }) => {
  return (
    <div className={`${color} text-white p-6 rounded-lg shadow-md flex items-center`}>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <span className="material-icons text-4xl">{icon}</span>
    </div>
  );
};

export default Card;