import React from 'react';
import "./NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <h1 className="username"> Robinson Dos Santos </h1>
        <div className="navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#aboutme"
                onClick={() => handlePageChange('Aboutme')}
                className={`nav-link ${currentPage === 'Aboutme' ? 'active' : ''}`}
              >
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portifolio"
                onClick={() => handlePageChange('Portifolio')}
                className={`nav-link ${currentPage === 'Portifolio' ? 'active' : ''}`}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
