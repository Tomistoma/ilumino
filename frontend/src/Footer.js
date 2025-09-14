// Footer.js
import React from 'react';
import './Styles/Footer.css';
import { Instagram } from '@mui/icons-material';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Ilumino</h3>
          <p>Rozjasněte každý okamžik.</p>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <p><a href="mailto:info@ilumino.cz">info@ilumino.cz</a></p>
          <p>+420 736 134 563</p>
        </div>

        <div className="footer-section">
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-link"
            >
              <Instagram  style={{marginTop: '25px'}} fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Ilumino – Tomáš Svoboda</p>
     
        <p>Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
};

export default Footer;
