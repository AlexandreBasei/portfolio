import React from 'react';
import './css/Footer.css';
import cv from './images/pdf/CV Alexandre Basei.pdf';

function Footer() {
  return (
    <footer>
      <a href={cv} target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
      <p>alexandreacevedobasei@gmail.com</p>
      <p>06 46 88 46 88</p>
      <p>© 2024 Alexandre Basei. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;