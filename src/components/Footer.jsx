import React, { useState } from "react";
import "./Footer.css";
import LoginPopup from "./LoginPopup"; // Import LoginPopup
import SignUpPopup from "./SignUpPop"; // Import SignUpPopup
import logo from "../assets/logo.png"; // Replace with your logo path

const Footer = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLogin = (e) => {
    e.preventDefault();
    setIsLoginOpen(true);
    
  };

  const closeLogin = () => setIsLoginOpen(false);

  const openSignUp = (e) => {
    e.preventDefault();
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => setIsSignUpOpen(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Yummiez Logo" />
          <p>© {new Date().getFullYear()} Yummiez Limited</p>
        </div>

        {/* Links Section */}
        <div className="footer-links-container">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/pro">Yummiez Pro</a></li> {/* Added Yummiez Pro */}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="/help">Help & Support</a></li>
              <li><a href="/partner">Yummiez Partner</a></li>
              <li><a href="/ride">Ride With Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Account</h4>
            <ul>
              <li><a href="#" onClick={openLogin}>Login</a></li>
              <li><a href="#" onClick={openSignUp}>Sign Up</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Social Links</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Login Popup */}
      {isLoginOpen && <LoginPopup onClose={closeLogin} />}

      {/* Sign Up Popup */}
      {isSignUpOpen && <SignUpPopup onClose={closeSignUp} />}
    </footer>
  );
};

export default Footer;
