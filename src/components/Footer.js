import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-primary py-0.5">
      <div className="container-footer text-center">
        <div className="social-icons">
          <a
            href="https://github.com/robinsonfdossantos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/robinson-fabiano-dos-santos-68980845/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/robinsonfsantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <p>&copy; 2023 Robinson's Website Development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
