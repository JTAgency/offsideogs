import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProductCard = ({ product }) => {
  const { player_name, club_name, year, item, price, thumbnail_url, hover_thumbnail_url, id } = product;

  const [imageSrc, setImageSrc] = React.useState(thumbnail_url); // Initialize with thumbnail_url
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      import(`../assets/jerseys_modified/${isHovered ? hover_thumbnail_url : thumbnail_url}`)
        .then(image => {
          setImageSrc(image.default);
        })
        .catch(error => {
          console.error('Error loading image:', error);
        });
    }

    return () => {
      isMounted = false;
    };
  }, [thumbnail_url, hover_thumbnail_url, isHovered]);

  const displayName = player_name + " " + club_name + " " + year + " " + item;

  return (
    <Link to={`/product/${id}`} style={styles.cardLink}>
      <div
        style={{
          ...styles.card,
          maxWidth: isHovered ? '250px' : '240px',
          boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt={"Soccer Jersey"} style={styles.image} />
        <div style={styles.cardContent}>
          <h3 style={styles.title}>{displayName}</h3>
          <p style={styles.price}>{price + " USD"}</p>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: 'Open Sans, sans-serif'
  },
  card: {
    margin: '25px',
    maxWidth: '240px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    position: 'relative',
    transition: 'max-width 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0 0 0 0',
  },
  cardContent: {
    padding: '2px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.0rem',
    margin: '0 0 3px',
  },
  summary: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '8px',
  },
  price: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 0 12px',
  },
};

export default ProductCard;
