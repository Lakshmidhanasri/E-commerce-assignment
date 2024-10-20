import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddToCartModal from "./components/AddToCartModal";
import ThankYouPage from "./components/ThankYouPage";
import productsData from "./data/products";
import "./App.css";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewProductName, setViewProductName] = useState("");
  const navigate = useNavigate(); // Get navigate function

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  const handleConfirmAddToCart = () => {
    console.log("Product added to cart:", selectedProduct);
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductList
                products={productsData}
                onAddToCart={handleAddToCart}
                onViewProduct={(name) => {
                  setViewProductName(name);
                  navigate("/thank-you"); // Now navigate is defined
                }}
              />
              {selectedProduct && (
                <AddToCartModal
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                  onConfirm={handleConfirmAddToCart}
                />
              )}
            </>
          }
        />
        <Route
          path="/thank-you"
          element={<ThankYouPage productName={viewProductName} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
