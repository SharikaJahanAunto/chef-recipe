import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <img src="https://th.bing.com/th/id/OIP.yYBFzWZ0R970KK2bJhwO9AHaEi?w=279&h=180&c=7&r=0&o=5&pid=1.7" alt="Page not found" className="error-image" />
      <p className="error-description">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="error-link">Go back to homepage</Link>
    </div>
  );
};

export default Error;
