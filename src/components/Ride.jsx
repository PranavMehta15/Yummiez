import React, { useEffect } from 'react';
import './Ride.css';

export default function Ride() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="ride-container">
      <div className="ride-content">
        <div className="ride-image">
          <img
            src="./fulllogo.png"
            alt="image"
          />
        </div>
        <div className="ride-text">
          <h2 className="ride-title">
            Be a part of Yummiez and Ride with us to serve the Cravings
          </h2>
         
          <p className="ride-paragraph">
           
           
          </p>
          <p className="ride-paragraph">
          Drop us your details below and we will reach out to you shortly.
          </p>
          
          <div className="google-form-container">
           
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfA0NCunVRepk4LYt1k5TbHMlJfoEsuYUyQ19aKaWlDfzaOog/viewform?embedded=true" width="640" height="512" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
