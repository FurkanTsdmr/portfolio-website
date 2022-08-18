import React from "react";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive && "aktif"}>
        AnaSayfa
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "red" : "transparent",
        })}
      >
        İletişim
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => ({ fontSize: isActive ? "33px" : "15px" })}
      >
        Blog
      </NavLink>
    </nav>
  );
}

export default Layout;
