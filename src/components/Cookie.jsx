import React, { useEffect } from 'react';
import './Cookie.css';

export default function Cookie() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="cookie-container">
      <div className="cookie-content">
        <div className="cookie-image">
          <img
            src="./fulllogo.png"
            alt="image"
          />
        </div>
        <div className="cookie-text">
          <h1 className="cookie-title">
          Cookie Policy – Yummiez          </h1>
          <h2 className="cookie-title">
          1. Introduction
          </h2>
          <p className="cookie-paragraph">
          At Yummiez, we use cookies to improve user experience, track performance, and personalize services. This policy explains how we handle cookies.      </p>
          <h2 className="cookie-title">
          2. What Are Cookies?
          </h2>
          <p className="cookie-paragraph">
          Cookies are small text files stored on your device when you visit our website or use our app. They help us remember user preferences, login details, and analytics data.
          </p>

          <h2 className="cookie-title">
          3. Types of Cookies We Use
          </h2>
          <p className="cookie-paragraph">
          Essential Cookies: Required for core functionality, such as login and security.

Performance Cookies: Help improve website speed and user experience.

Analytics Cookies: Track visitor activity to optimize features.

Marketing Cookies: Personalize ads and promotions based on user preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
