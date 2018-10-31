import React from 'react';
import '../CSS/Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <a href="https://www.linkedin.com/company/mobiquity-inc-europe" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><i className="fab fa-linkedin"></i></span></a>
        <a href="https://www.instagram.com/mobiquityeu/?hl=en" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><i className="fab fa-instagram"></i></span></a>
        <a href="https://www.facebook.com/Mobiquity/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><i className="fab fa-facebook"></i></span></a>
        <a href="https://twitter.com/mobiquityincEU" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><i className="fab fa-twitter"></i></span></a>
      </div>
    </div>
  )
}

export default Footer;
