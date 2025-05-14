// Navbar.jsx
import './Navbar.css';
import LoginPopup from './LoginPopup';
import SignUpPop from './SignUpPop';
import { useState } from 'react';

export default function Navbar() {
  const [popupType, setPopupType] = useState(null); // "login" or "signup"

  const openLogin = () => setPopupType("login");
  const openSignup = () => setPopupType("signup");
  const closePopup = () => setPopupType(null);
//Hello i am himanshu Singh
//Kartik 
  return (
    <nav className="navbar">
      <div className="logo">YUMMIEZ</div>
      <div className="nav-buttons">
        <button className="partner-btn">Yummiez Partner</button>
        <button className="login-btn" onClick={openLogin}>Login</button>
        <button className="signup-btn" onClick={openSignup}>Sign Up</button>

        {popupType === "login" && <LoginPopup onClose={closePopup} />}
        {popupType === "signup" && <SignUpPop onClose={closePopup} />}
      </div>
    </nav>
  );
}