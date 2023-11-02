import React from "react";
import "./Footer.css";
import { facebookLogo, twitterLogo, instagramLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">SZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} />
              </a>
              <a href="#">
                <img src={twitterLogo} />
              </a>
              <a href="#">
                <img src={instagramLogo} />
              </a>
            </div>
            <div className="copy-right">
              This website is designed by Mraiyuu Ⓒ 2023
            </div>
            </div>
            <div className="links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="links">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="#">munenedenis618@gmail.com</a>
                </li>
                <li>
                  <a href="#">+254715316525</a>
                </li>
              </ul>
            </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
