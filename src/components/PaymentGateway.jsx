import { useState } from "react";
import "./PaymentGateway.css";
import { useNavigate } from "react-router-dom";

export default function PaymentGateway() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false); // State to track success message

  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      cardNumber.length !== 16 ||
      !/^\d{16}$/.test(cardNumber) ||
      !/^\d{2}\/\d{2}$/.test(expiryDate) ||
      cvvNumber.length !== 3 ||
      !/^\d{3}$/.test(cvvNumber)
    ) {
      alert("Please enter valid payment details.");
      return;
    }

    // Simulate payment processing
    setIsSuccess(true); // Show success message
    setTimeout(() => {
      navigate("/"); // Redirect to the home page after 2 seconds
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="pay-overlay">
      <div className="pay-content">
        <button className="exit-btn" onClick={handleClose} aria-label="Close Payment Gateway">
          &times;
        </button>
        {isSuccess ? (
          <div className="success-message">
            <h2>Order Successful</h2>
            <p><img src="R.png"></img></p>
          </div>
        ) : (
          <>
            <h2>Payment Gateway</h2>
            <p>Securely enter your payment details below:</p>
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardHolderName">Card Holder Name</label>
                <input
                  type="text"
                  id="cardHolderName"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  placeholder="Enter cardholder's name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvvNumber">CVV</label>
                  <input
                    type="text"
                    id="cvvNumber"
                    value={cvvNumber}
                    onChange={(e) => setCvvNumber(e.target.value)}
                    placeholder="123"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cardPassword">Password</label>
                <input
                  type="password"
                  id="cardPassword"
                  value={cardPassword}
                  onChange={(e) => setCardPassword(e.target.value)}
                  required
                />
              </div>
              <div className="pay-buttons">
                <button type="submit" className="pay-btn">
                  Pay Now
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}