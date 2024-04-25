// Email.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Email = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const barStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '40px',
    background: 'rgba(0, 0, 0, ' + (isHovered ? 0.8 : 1) + ')',
    color: 'white',
    textAlign: 'center',
    lineHeight: '40px',
    fontSize: '16px',
    zIndex: 99999,
    transition: 'background 0.3s ease-in-out',
  };

  return (
    <>
      {isVisible && (
        <div
          style={barStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {windowWidth >= 600 ? (
            <a href="https://instagram.com/offside.ogs" style={{ textDecoration: 'none', color: 'white' }}>
              BULK ORDERS AVAILABLE: CONTACT US ON INSTAGRAM FOR DISCOUNT CODES ✉ 
            </a>
          ) : (
            <Link to="/newsletter" style={{ textDecoration: 'none', color: 'white' }}>
              BULK ORDERS AVAILABLE
            </Link>
          )}
          <span style={{ position: 'absolute', top: 0, right: 0, padding: '0px', cursor: 'pointer', paddingRight: '20px' }} onClick={handleClose}>
            X
          </span>
        </div>
      )}
    </>
  );
};

export default Email;
