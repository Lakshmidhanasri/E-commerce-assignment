import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
      />
      <div className="icon-container ">
        <i className="bi bi-person-circle" title="Profile"></i>
        <i className="bi bi-cart" title="Cart"></i>
      </div>
    </header>
  );
};

export default Header;
