import React from 'react';
import instagramLogo from '../assets/insta.png';
// import youtubeLogo from '../assets/yt.png';
// import xLogo from '../assets/x.png';
import mainLogo from '../assets/logo_trans3.png';

const Footer = () => {
    const year = new Date().getFullYear();

    const mainLogoStyles = {
        height: '45px',
        margin: '0 10px'
    };

    return (
        <footer style={{ fontFamily: 'Avenir Next', backgroundColor: '#f4f4f4', textAlign: 'center', padding: '10px' }}>
            <div>
                {/* <p style={{ margin: '10px', fontWeight: 'bold', fontSize: '20px' }}>Follow Socials</p> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                    <a href="https://www.offsideogs.com//">
                        <img src={mainLogo} alt="Main Logo" style={mainLogoStyles} /> {/* Use the main logo here */}
                    </a>
                    <a href="https://www.instagram.com/offside.ogs/">
                        <img src={instagramLogo} alt="Instagram" style={{ width: '40px', margin: '0 10px' }} />
                    </a>
                    {/* <a href="https://www.youtube.com/@itstexaco">
                        <img src={youtubeLogo} alt="YouTube" style={{ width: '40px', margin: '0 20px' }} />
                    </a>
                    <a href="https://twitter.com/?lang=en">
                        <img src={xLogo} alt="X" style={{ width: '40px', margin: '0 20px' }} />
                    </a> */}
                </div>
            </div>
            <div>
                {`Copyright © `}
                <a href="https://offsideogs.com" style={{ color: '#333', textDecoration: 'none' }}>
                    OFFSIDE OGS
                </a>
                {` ${year}`}
                <br />
                {/* Developed by {' '}
                <a href="https://jartechagency.com" style={{ color: '#333', textDecoration: 'none' }}>
                    JarTech
                </a> */}
            </div>
        </footer>
    );
};

export default Footer;
