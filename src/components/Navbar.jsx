import './Navbar.css';
import LoginPopup from './LoginPopup';
import SignUpPop from './SignUpPop';
import { useState } from 'react';
import Partner from './partnership';
 
export default function Navbar() {
  const [popupType, setPopupType] = useState(null); // "login", "signup", or "partner"
  const openPartner = () => setPopupType("partner");
  const openLogin = () => setPopupType("login");
  const openSignup = () => setPopupType("signup");
  const closePopup = () => setPopupType(null);
 
  return (
    <nav className="navbar">
      <div className="logo">YUMMIEZ</div>
      <div className="nav-buttons">
        <button className="partner-btn" onClick={openPartner}>Yummiez Partner</button>
        <button className="login-btn" onClick={openLogin}>Login</button>
        <button className="signup-btn" onClick={openSignup}>Sign Up</button>
      </div>
 
      {/* Conditional Popups */}
      {popupType === "login" && <LoginPopup onClose={closePopup} />}
      {popupType === "signup" && <SignUpPop onClose={closePopup} />}
      {popupType === "partner" && <Partner onClose={closePopup} />}
    </nav>
  );
}