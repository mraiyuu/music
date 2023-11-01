import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Sound<span className="red">Dzign</span>
      </a>

      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Course details</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testionies</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
