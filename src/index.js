import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import Home from './pages/Home';
import Choose from './pages/Choose';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '@material/web/all.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/pages/Home">Home</Link>
          </li>
          <li>
            <Link to="/pages/Choose">Choose</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Choose" element={<Choose />} />
      </Routes>
    </Router> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
