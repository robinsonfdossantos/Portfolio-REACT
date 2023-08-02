import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary py-3">
      <div className="container text-center">
        <div className="social-icons">
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
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
