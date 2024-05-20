import React, { useState, useEffect } from 'react';
import instagramLogo from '../assets/insta.png';
import Hamburger from 'hamburger-react';
import mainLogo from '../assets/logo_trans3.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [mobileNavOpacity, setMobileNavOpacity] = useState(0);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const mobileNavElement = document.querySelector('.mobile-nav');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setMobileNavOpacity(1);

      // Check if mobileNavElement exists before accessing its style
      if (mobileNavElement) {
        mobileNavElement.style.zIndex = 9999;
      }
    } else {
      document.body.style.overflow = 'auto';
      setMobileNavOpacity(0);

      // Check if mobileNavElement exists before accessing its style
      if (mobileNavElement) {
        const handleTransitionEnd = () => {
          mobileNavElement.style.zIndex = -1;
        };

        mobileNavElement.addEventListener('transitionend', handleTransitionEnd, { once: true });
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navbarStyles = {
    maxWidth: '900px',
    margin: '30px auto 0',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between'
  };

  // const pattrnsStyles = {
  //   textAlign: 'center',
  //   flexGrow: 1,
  //   fontSize: smallScreen ? '2.2em' : '2.9em',
  //   letterSpacing: smallScreen ? '15px' : '20px',
  //   fontFamily: 'Inter',
  //   marginBottom: '30px',
  //   marginRight: smallScreen ? '-15px' : '-20px',
  // };

  const mainLogoStyles = {
    height: '60px',
    // flexGrow: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '30px',
    marginTop: '30px',
  };


  const instagramStyles = {
    width: '60px',
    marginRight: smallScreen ? '15px' : '30px',  
  };

  const hamburgerStyles = {
    marginLeft: smallScreen ? '15px' : '30px',  
  };

  return (
    <div>
      {/* Original Navbar */}
      <div className="navbar" style={navbarStyles}>
        <div style={hamburgerStyles}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={60}/>
        </div>
        {/* <p style={pattrnsStyles}>PATTRNS</p> */}
        <a href="https://www.offsideogs.com//">
          <img src={mainLogo} alt="Main Logo" style={mainLogoStyles} /> {/* Use the main logo here */}
        </a>
        <a href="https://www.instagram.com/offside.ogs/" className="instagram-link">
          <img className="instagram-logo" src={instagramLogo} alt="Instagram" style={instagramStyles} />
        </a>
      </div>

      {/* Fullscreen overlay when isOpen is true */}
      {isOpen && (
        <div className="fullscreen-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#fff',
          opacity: mobileNavOpacity,
          zIndex: 9998, // Set a z-index lower than the mobile-nav
          transition: 'opacity 0.8s ease',
        }}>
          <div className="navbar" style={navbarStyles}>
            <div style={hamburgerStyles}>
              <Hamburger toggled={isOpen} toggle={setOpen} size={60}/>
            </div>
            {/* <p style={pattrnsStyles}>PATTRNS</p> */}
              <a href="https://www.offsideogs.com//">
                <img src={mainLogo} alt="Main Logo" style={mainLogoStyles} /> {/* Use the main logo here */}
              </a>
              <a href="https://www.instagram.com/offside.ogs/" className="instagram-link">
              <img className="instagram-logo" src={instagramLogo} alt="Instagram" style={instagramStyles} />
            </a>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="mobile-nav" style={{
          position: 'fixed',
          width: '100%',
          background: '#fff', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingBottom: '1000px',
          opacity: mobileNavOpacity,
          zIndex: 9999, // Set a higher z-index
          transition: 'opacity 0.8s ease'
        }}>
          <Link to="/" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333', fontFamily: 'Inter' }}>Home</Link>
          <Link to="/vintageKits" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333', fontFamily: 'Inter' }}>Vintage Kits</Link>
          <Link to="/newKits" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>New Kits</Link>
          <Link to="/nationalTeams" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>National Teams</Link>
          <Link to="/premierLeague" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>Premier league</Link>
          <Link to="/laLiga" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>La Liga</Link>
          <Link to="/serieA" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>Serie A</Link>
          <Link to="/bundesliga" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>Bundesliga</Link>
          <Link to="/ligue1" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>Ligue 1</Link>
          <Link to="/mls" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>MLS</Link>
          <Link to="/nba" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>NBA</Link>
          <Link to="/other" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>Other Clubs</Link>
          <Link to="/faq" onClick={() => setOpen(false)} style={{ marginBottom: '8px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>FAQ</Link>
          {/* <Link to="/about" onClick={() => setOpen(false)} style={{ marginBottom: '20px', fontSize: '1.5em', textDecoration: 'none', color: '#333',  fontFamily: 'Inter' }}>About</Link> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
