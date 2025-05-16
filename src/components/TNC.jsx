import React, { useEffect } from 'react';
import './TNC.css';

export default function TNC() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="tnc-container">
      <div className="tnc-content">
        <div className="tnc-image">
          <img
            src="./logo.png"
            alt="image"
          />
        </div>
        <div className="tnc-text">
          <h1 className="tnc-title">
          Terms & Conditions – Yummiez
          </h1>
          <h2 className="tnc-title">
          1. Introduction
          </h2>
          <p className="tnc-paragraph">
          Welcome to Yummiez! By using our food delivery app,
           you agree to the following Terms & Conditions.
            If you do not agree, please refrain from using our services.
          </p>
          <h2 className="tnc-title">
          2. Account Registration
          </h2>
          <p className="tnc-paragraph">
          Users must provide accurate details when creating an account.

You must be 18 years or older to place orders.

Users are responsible for maintaining the confidentiality of login credentials.
          </p>

          <h2 className="tnc-title">
          3. Ordering & Payment          </h2>
          <p className="tnc-paragraph">
          Orders are confirmed upon successful payment.

We accept Cash/UPI/Credit Cards, Debit Cards for transactions.

Prices and availability are subject to change.
          </p>
        </div>
      </div>
    </div>
  );
}
