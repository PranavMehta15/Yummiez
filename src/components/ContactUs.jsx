import React, { useEffect } from 'react';
import './ContactUs.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
          <img
            src="./logo.png"
            alt="image"
          />
        </div>
        <div className="contact-text">
          <h2 className="contact-title">
            Want to contact us?
            We are available at
          </h2>
          <div className="footer-social">
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
          <p className="contact-paragraph">
           Always Feel Free to Reach Out to Us :)
           
          </p>
          <p className="contact-paragraph">
          Your Feedback is Our Life Saviour
          </p>
        </div>
      </div>
    </div>
  );
}
