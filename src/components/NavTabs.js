import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Robinson
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
