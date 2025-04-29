// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Chaileela Café</h3>
          <p>Serving warmth, one cup at a time.</p>
        </div>

        <ul className="footer-links">
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/roi-calculator">ROI Calculator</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chaileela Café. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
