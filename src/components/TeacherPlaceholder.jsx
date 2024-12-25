import React from 'react';

const ChartPlaceholder = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <p>Chart goes here</p>
      </div>
    </div>
  );
};

export default ChartPlaceholder;
