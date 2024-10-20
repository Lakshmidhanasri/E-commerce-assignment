import React from "react";

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-buttons">
        <button onClick={() => onViewProduct(product.name)}>
          View Product
        </button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
