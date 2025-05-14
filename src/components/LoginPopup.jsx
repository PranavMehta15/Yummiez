import { useState } from "react";
import "./LoginPopup.css";
import logo from "../assets/fries_logo.png";
import ForgetPassword from "./ForgetPassword";
import database from "../database.json"; // Import the JSON file

export default function LoginPopup({ onClose }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate checking the database
        const user = database.users.find((user) => user.username === username);

        if (!user) {
            setError("Username or Password are incorrect.");
            return;
        }

        if (user.password !== password) {
            setError("Incorrect password.");
            return;
        }

        setSuccessMessage(`Logged in successfully as: ${username}`);
        setError("");

        setTimeout(() => {
            triggerClose();
        }, 1000); // Close the modal after 3 seconds
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
                                    <td><h2>Login</h2></td>
                                    <td><img src={logo} alt="Yummiez Logo" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="username">Username</label></td>
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
                                    <td><label htmlFor="password">Password</label></td>
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
                            <button type="button" onClick={triggerClose}>Close</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}