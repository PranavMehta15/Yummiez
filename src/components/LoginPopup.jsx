import { useState } from "react";
import "./LoginPopup.css";
import logo from "../assets/fries_logo.png";
import ForgetPassword from "./ForgetPassword";

export default function LoginPopup({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the database.json file from localhost
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch user database.");
      }
      const users = await response.json();

      const user = users.find((user) => user.username === username);

      if (!user) {
        setError("Username or Password are incorrect.");
        console.log("Login failed: User not found.");
        return;
      }

      if (user.password !== password) {
        setError("Incorrect password.");
        console.log("Login failed: Incorrect password.");
        return;
      }

      setSuccessMessage(`Logged in successfully as: ${username}`);
      setError("");
      console.log(`Login successful for user: ${username}`);

      // Call the onLogin function passed from Navbar
      onLogin(username);

      setTimeout(() => {
        triggerClose();
      }, 3000); // Close the modal after 3 seconds
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className={`modal-overlay ${isClosing ? "closing" : ""}`}>
      <div className={`modal-content ${isClosing ? "closing" : ""}`}>
        {showForgotPassword ? (
          <ForgetPassword onClose={() => setShowForgotPassword(false)} />
        ) : (
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>Login</h2>
                  </td>
                  <td>
                    <img src={logo} alt="Yummiez Logo" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="username">Username</label>
                  </td>
                  <td>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password</label>
                  </td>
                  <td>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <a
                      href="#"
                      className="forgot-password"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowForgotPassword(true);
                      }}
                    >
                      Forgot Password?
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <div className="modal-buttons">
              <button type="submit">Login</button>
              <button type="button" onClick={triggerClose}>
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}