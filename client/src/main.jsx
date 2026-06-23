/**
 * main.jsx — Application entry point.
 *
 * Mounts the React app into <div id="root"> from index.html.
 * Imports global styles (SCSS reset, variables, animations).
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global SCSS — reset + CSS custom properties + keyframe animations
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
