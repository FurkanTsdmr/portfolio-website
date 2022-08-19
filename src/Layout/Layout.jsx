import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <nav className="comp">
      <Link to="/">AnaSayfa</Link>
      <Link to="/about">About</Link>
      <Link to="/ProductList">ProductList</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Layout;
