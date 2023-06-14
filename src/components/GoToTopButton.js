import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=''>
    <Button
      variant="primary"
      className={`float-right p-3 m-4 go-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={handleGoToTop}
    >
     <i className="ai-arrow-up text-success"></i>
    </Button>
    </div>
  );
};

export default GoToTopButton;
