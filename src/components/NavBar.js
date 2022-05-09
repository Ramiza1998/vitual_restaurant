import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
