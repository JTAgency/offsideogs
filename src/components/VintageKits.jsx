import React from 'react';
import ProductCard from './ProductCard';

function VintageKits({ products }) {
  // Filter products based on the "drake" tag
  const filteredProducts = products.filter(product => product.tags.includes('vintage'));
  console.log(filteredProducts);

  return (
    <div className="product-wall" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', margin: '80px auto 0', marginBottom: '80px', marginTop: '10px' }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default VintageKits;