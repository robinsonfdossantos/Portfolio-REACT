import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portifolio from './pages/Portifolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portifolio') {
      return <Portifolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <div className="flex-grow-1">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer className="fixed-bottom" />
    </div>
  );
}
