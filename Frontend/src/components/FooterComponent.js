import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer__container">
        <a href="https://www.linkedin.com/company/mobiquity-inc-europe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__icon" icon={['fab', 'linkedin']}/></a>
        <a href="https://www.instagram.com/mobiquityeu/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__icon" icon={['fab', 'instagram']}/></a>
        <a href="https://www.facebook.com/Mobiquity/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__icon" icon={['fab', 'facebook']}/></a>
        <a href="https://twitter.com/mobiquityincEU" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__icon" icon={['fab', 'twitter']}/></a>
    </footer>
  )
}

export default Footer;
