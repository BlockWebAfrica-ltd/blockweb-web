import React from "react";
import facebookIcon from "../assets/images/Facebook.svg";
import xIcon from "../assets/images/Xicon.svg";
import LinkedInIcon from "../assets/images/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="copyright">
          <p>Copyright © 2025 Blockweb Africa</p>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;