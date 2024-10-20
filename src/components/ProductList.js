import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart, onViewProduct }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewProduct={onViewProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
