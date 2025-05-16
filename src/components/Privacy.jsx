import React, { useEffect } from 'react';
import './Privacy.css';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <div className="privacy-image">
          <img
            src="./logo.png"
            alt="image"
          />
        </div>
        <div className="privacy-text">
          <h1 className="privacy-title">
          Privacy Policy – Yummiez
          </h1>
          <h2 className="privacy-title">
          1. Introduction
          </h2>
          <p className="privacy-paragraph">
          At Yummiez, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <h2 className="privacy-title">
          2. Information We Collect
          </h2>
          <p className="privacy-paragraph">
          Personal Details: Name, contact info, delivery address.

Payment Data: Payment method details for transactions.

Usage Data: App interactions, order history, preferences.

Location Data: For accurate order deliveries.
          </p>

          <h2 className="privacy-title">
          3. How We Use Your Data
     </h2>
          <p className="privacy-paragraph">
          Process food orders and payments.

Improve user experience and customer service.

Ensure secure transactions and prevent fraud.

Send promotional offers (if opted in).
          </p>
        </div>
      </div>
    </div>
  );
}
