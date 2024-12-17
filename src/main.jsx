// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// src/main.jsx (or src/index.js)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new ReactDOM.createRoot
import App from './App'; // Ensure your main component path is correct
import './index.css'; // Optional: Include your global CSS if applicable


// Find the root element in your HTML (index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
