import React, { useEffect } from 'react';
import './Careers.css';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
          <img
            src="./fulllogo.png"
            alt="image"
          />
        </div>
        <div className="contact-text">
          <h2 className="contact-title">
           Hey There!!!
          </h2>
         
          <p className="contact-paragraph">
           We will be soon opening positions for you.
           
          </p>
          <p className="contact-paragraph">
          Please keep us in your touch :)
          </p>
        </div>
      </div>
    </div>
  );
}
