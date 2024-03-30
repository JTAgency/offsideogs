import React from 'react';

const ProductCard = ({ product }) => {
  const { player_name, club_name, year, item, price, url, thumbnail_url, hover_thumbnail_url } = product;

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

  const display_name = player_name + " " + club_name + " " + year + " " + item;

  return (
    <a href={url} rel="noopener noreferrer" style={styles.cardLink}>
      <div
        style={{
          ...styles.card,
          maxWidth: isHovered ? '250px' : '240px', // Adjusting maxWidth on hover
          boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none', // Adding box shadow on hover
        }}
        onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when mouse leaves
      >
        <img src={imageSrc} alt={"Soccer Jersey"} style={styles.image} />
        <div style={styles.cardContent}>
          <h3 style={styles.title}>{display_name}</h3>
          <p style={styles.price}>{price + " USD"}</p>
        </div>
      </div>
    </a>
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
    position: 'relative', // Position relative for absolute positioning of image
    transition: 'max-width 0.3s ease, box-shadow 0.3s ease', // Adding transition for smoother effect
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
