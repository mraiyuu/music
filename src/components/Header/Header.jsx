import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="cta">
        <p className="course-name">Sound Design Masterclass</p>
        <h1>Learn the art of sound design</h1>
        <a href="#" className="demo-btn">Demo lesson</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
