import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {currentYear} All Rights Reserved,Kel Devs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
