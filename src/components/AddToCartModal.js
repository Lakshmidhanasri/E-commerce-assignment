// src/components/AddToCartModal.js
import React from "react";
import "./AddToCartModal.css";

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Are you sure you want to add this product to the cart?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
