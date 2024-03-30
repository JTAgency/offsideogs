import React from 'react';
import ProductCard from './ProductCard';

function ProductWall({ products }) { // Receive products as props
  return (
    <div className="product-wall" style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '900px',
      margin: '80px auto 0',
      marginBottom: '80px',
      marginTop: '10px',
      '@media (maxWidth: 600px)': {
        margin: '10px auto 0',  // Adjust the margin for smaller screens
      }
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductWall;
