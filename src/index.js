// index.js is the entry point into React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(some element - the main App component, where you wanna put this content)
ReactDOM.render(
  // React.StrictMode activates additional checks and warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>

, document.getElementById('root'));
