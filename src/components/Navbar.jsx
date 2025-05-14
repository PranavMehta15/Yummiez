// Navbar.jsx
import './Navbar.css';
import LoginPopup from './LoginPopup';
import SignUpPop from './SignUpPop';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Navbar() {
  const [popupType, setPopupType] = useState(null); // "login" or "signup"
  const navigate = useNavigate(); // Initialize useNavigate

  const openLogin = () => setPopupType("login");
  const openSignup = () => setPopupType("signup");
  const closePopup = () => setPopupType(null);

  return (
    <nav className="navbar">
      <div className="logo">YUMMIEZ</div>
      <div className="nav-buttons">
        <button
          className="partner-btn"
          onClick={() => navigate("/partner")} // Navigate to the partnership page
        >
          Yummiez Partner
        </button>
        <button className="login-btn" onClick={openLogin}>Login</button>
        <button className="signup-btn" onClick={openSignup}>Sign Up</button>

        {popupType === "login" && <LoginPopup onClose={closePopup} />}
        {popupType === "signup" && <SignUpPop onClose={closePopup} />}
      </div>
    </nav>
  );
}