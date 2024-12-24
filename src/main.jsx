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

// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import the new ReactDOM.createRoot
// import App from './App'; // Ensure your main component path is correct
// import './index.css'; // Optional: Include your global CSS if applicable


// // Find the root element in your HTML (index.html)
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the App component
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Import the main App component
// import './index.css'; // Tailwind or custom CSS

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import App from './App'; // Import the main App component
import './index.css'; // Tailwind or custom CSS

// Create root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' is the div with id 'root' in your index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
