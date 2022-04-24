import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar/NavBar.css";

const NavBar = () => {
  return (
    <header aria-label="Navigation Bar">
      <h1>Shopping Cart</h1>
      <Link to="/">Home</Link>
      <Link to="catalog">Catalog</Link>
      <Link to="cart">Cart</Link>
    </header>
  );
};

export default NavBar;
