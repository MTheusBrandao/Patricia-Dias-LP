import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Desenvolvido por <a
          href="https://github.com/MTheusBrandao"
          target="_blank"
          rel="noopener noreferrer"
          className="developer"
        >Matheus Brandao</a></p>
    </footer>
  );
};

export default Footer;