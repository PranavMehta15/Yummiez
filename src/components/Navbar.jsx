import './Navbar.css';
import LoginPopup from './LoginPopup';
import SignUpPop from './SignUpPop';
import { useState, useEffect } from 'react';
import Partner from './partnership';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [popupType, setPopupType] = useState(null); // "login", "signup", or "partner"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check login state and username from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");
    setIsLoggedIn(loggedIn);
    setUsername(storedUsername || "");
  }, []);

  const openPartner = () => setPopupType("partner");
  const openLogin = () => setPopupType("login");
  const openSignup = () => setPopupType("signup");
  const closePopup = () => setPopupType(null);

  const handleLogin = (username) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    setUsername(username);
    closePopup();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link to={"/"}>YUMMIEZ</Link></div>
      <div className="nav-buttons">
        {!isLoggedIn ? (
          <>
            <button className="partner-btn" onClick={openPartner}>Yummiez Partner</button>
            <button className="login-btn" onClick={openLogin}>Login</button>
            <button className="signup-btn" onClick={openSignup}>Sign Up</button>
          </>
        ) : (
          <>
            <span className="username-display">Welcome, {username}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
        {isLoggedIn && (
        <Link to="/orderSummary">
          <button className="cart-btn">Cart</button> 
        </Link>
      )}
      </div>

      {/* Conditional Popups */}
      {popupType === "login" && <LoginPopup onClose={closePopup} onLogin={handleLogin} />}
      {popupType === "signup" && <SignUpPop onClose={closePopup} />}
      {popupType === "partner" && <Partner onClose={closePopup} />}
    </nav>
  );
}
