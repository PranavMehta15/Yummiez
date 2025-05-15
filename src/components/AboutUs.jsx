import React, { useEffect } from 'react';
import './AboutUs.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="./fulllogo.png"
            alt="Yummiez Logo"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">
            Delivering Happiness, One Meal at a Time
          </h2>
          <p className="about-paragraph">
            Yummiez is your trusted food delivery platform, bringing delicious meals from your favorite 
            restaurants straight to your doorstep. We are committed to connecting people with the food 
            they love, offering convenience, variety, and exceptional service.
          </p>
          <p className="about-paragraph">
            Whether you're craving a quick snack, a hearty meal, or a gourmet experience, Yummiez has 
            got you covered. Our platform partners with top restaurants to ensure you have access to 
            a wide range of cuisines and dishes. With Yummiez, satisfying your hunger has never been easier!
          </p>
          <p className="about-paragraph" style={{ fontWeight: 'bold', color: '#6D712E' }}>
            Developed by: Himanshu Singh, Kartikeya Jakkinapalli, Rupam Das, Pranav Mehta, Mohammad Uzair

          </p>
        </div>
      </div>
    </div>
  );
}