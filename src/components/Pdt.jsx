import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsonData from '../data.json';

const Pdt = () => {
  const location = useLocation();
  const productId = location.pathname.split('/').pop();
  const product = jsonData.find(item => parseInt(item.id) === parseInt(productId));
  const [mainImageUrl, setMainImageUrl] = useState(null);
  const [hoverImageUrl, setHoverImageUrl] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousButtonHovered, setPreviousButtonHovered] = useState(false);
  const [nextButtonHovered, setNextButtonHovered] = useState(false);
  const [buyButtonHovered, setBuyButtonHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (product) {
      import(`../assets/jerseys_modified/${product.thumbnail_url}`).then(imageModule => {
        setMainImageUrl(imageModule.default);
      }).catch(error => {
        console.error('Error loading main image:', error);
      });

      import(`../assets/jerseys_modified/${product.hover_thumbnail_url}`).then(imageModule => {
        setHoverImageUrl(imageModule.default);
      }).catch(error => {
        console.error('Error loading hover image:', error);
      });
    }
  }, [product]);

  const images = [mainImageUrl, hoverImageUrl];

  const handleBuyClick = () => {
    window.location.href = product.url;
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const handlePreviousButtonHover = () => {
    setPreviousButtonHovered(true);
  };

  const handlePreviousButtonLeave = () => {
    setPreviousButtonHovered(false);
  };

  const handleNextButtonHover = () => {
    setNextButtonHovered(true);
  };

  const handleNextButtonLeave = () => {
    setNextButtonHovered(false);
  };

  const handleBuyButtonHover = () => {
    setBuyButtonHovered(true);
  };

  const handleBuyButtonLeave = () => {
    setBuyButtonHovered(false);
  };

  if (!product || !mainImageUrl || !hoverImageUrl) return <div>Loading...</div>;

  const { player_name, club_name, year, item, price } = product;

  return (
    <div style={styles.container}>
      <div style={{ 
        ...styles.productContainer, 
        flexDirection: isMobile ? 'column' : 'row'  // Conditionally set flex direction
      }}>
        <div style={{ 
          ...styles.imageContainer, 
          marginRight: isMobile ? '0' : '10px' // Conditionally set margin
        }}>
          <div style={{ position: 'relative' }}>
            <img src={images[currentImageIndex]} alt={player_name} style={styles.image} />
            <button 
              style={{ ...styles.previousButton, opacity: previousButtonHovered ? 0.7 : 1 }} 
              onClick={handlePreviousImage}
              onMouseEnter={handlePreviousButtonHover}
              onMouseLeave={handlePreviousButtonLeave}
            >
              &lt;
            </button>
            <button 
              style={{ ...styles.nextButton, opacity: nextButtonHovered ? 0.7 : 1 }} 
              onClick={handleNextImage}
              onMouseEnter={handleNextButtonHover}
              onMouseLeave={handleNextButtonLeave}
            >
              &gt;
            </button>
          </div>
        </div>
        <div style={styles.detailsContainer}>
          <p style={{marginTop:'0px'}}><strong>{player_name} {club_name} {year} {item}</strong></p> 
          <p>{price}</p>
          <p style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', color: '#000', textDecoration: 'none', marginTop: '0px', marginRight: '10px', fontSize: '12px' }}>
            Free Shipping
          </p>
          <p style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', color: '#000', textDecoration: 'none', marginTop: '0px', marginRight: '10px', fontSize: '12px' }}>
            Free Pickup: <a href="https://www.instagram.com/offside.ogs/" target="_blank" rel="noopener noreferrer">Check Availability</a>
          </p>            
          <div style={{ fontSize: '12px' }}>
            Free shipping on all orders. OffsideOgs Club Members: Free 7-day returns, Return policy exclusions apply. None club members: No returns unless under special circumstances. 
          </div>
          <p style={{ marginBottom: '5px' }}>Available Sizes (Select in checkout page):</p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'inline-block', marginRight: '5px', background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>S</li>
            <li style={{ display: 'inline-block', marginRight: '5px', background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>M</li>
            <li style={{ display: 'inline-block', marginRight: '5px', background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>L</li>
            <li style={{ display: 'inline-block', marginRight: '5px', background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>XL</li>
            <li style={{ display: 'inline-block', background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>XXL</li>
          </ul>
          <p>Size and Custom Name and Number: Select at checkout.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            style={{ 
              ...styles.buyButton, 
              opacity: buyButtonHovered ? 0.8 : 1
            }} 
            onClick={handleBuyClick} 
            onMouseEnter={handleBuyButtonHover} 
            onMouseLeave={handleBuyButtonLeave} 
          >
            Proceed to Checkout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

// Modify the styles object
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  productContainer: {
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    flexDirection: 'row', // Default flex direction
  },
  imageContainer: {
    flex: '1',
    marginRight: '10px', // Margin to the right for larger screens
    position: 'relative',
  },
  image: {
    width: '99%',
    height: 'auto',
    display: 'block',
    border: '1px solid #ddd',
  },
  previousButton: {
    position: 'absolute',
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.0)', // 70% visible white background
    border: 'none',
    fontSize: '20px',
    color: '#000', // Adjust the color as needed
    borderRadius: '50%', // Make the button circular
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'opacity 0.3s ease', // Added opacity transition
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '0px',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.0)', // 70% visible white background
    border: 'none',
    fontSize: '20px',
    color: '#000', // Adjust the color as needed
    cursor: 'pointer',
    borderRadius: '50%', // Make the button circular
    fontWeight: 'bold',
    transition: 'opacity 0.3s ease', // Added opacity transition
  },
  detailsContainer: {
    flex: '1',
    fontFamily: 'Futura, sans-serif', // Setting Futura as font family for details
    fontSize: '17px',
    fontWeight: 'normal', // Changing from 'normal' to a higher value for bolder font
  },  
  buyButton: {
    background: '#111',
    color: '#fff',
    border: 'none',
    padding: '15px 70px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'opacity 0.3s ease', // Added opacity transition
  },
  freeShippingContainer: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
    padding: '10px',
    borderRadius: '5px',
    display: 'none',
  },
  dropdownButton: {
    background: '#ddd',
    color: '#333',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  dropdownContentVisible: {
    display: 'block',
  },
  '@media (max-width: 600px)': {
    productContainer: {
      flexDirection: 'column', // Flex direction for smaller screens
    },
  },
};

export default Pdt;