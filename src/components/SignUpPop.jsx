import { useState } from "react";
import "./LoginPopup.css";
import logo from "../assets/logo.png";
import database from "../database.json"; // Import the JSON file

export default function SignUpPop({ onClose }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [isClosing, setIsClosing] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
        return regex.test(password);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email (e.g., abcd@xyz.com).");
            return;
        }

        if (!validatePassword(password)) {
            setError("Password must be at least 10 characters and include uppercase, lowercase, number, and special character.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!securityAnswer.trim()) {
            setError("Please provide an answer to the security question.");
            return;
        }

        // Simulate adding the user to the database
        const newUser = { 
            id: Math.random().toString(36).substr(2, 4), // Generate a random ID
            username, 
            email, 
            password, 
            securityAnswer 
        };

        const userExists = database.users.some((user) => user.username === username || user.email === email);

        if (userExists) {
            setError("A user with this username or email already exists.");
            return;
        }

        database.users.push(newUser);
        setSuccessMessage(`Signed up successfully as: ${username}`);
        setError("");

        setTimeout(() => {
            triggerClose();
        }, 1000);
    };

    const triggerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 700);
    };

    return (
        <div className={`modal-overlay ${isClosing ? "closing" : ""}`}>
            <div className={`modal-content ${isClosing ? "closing" : ""}`}>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Sign Up</h2></td>
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
                                <td><label htmlFor="email">Email</label></td>
                                <td>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                <td><label htmlFor="confirmPassword">Confirm Password</label></td>
                                <td>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="securityAnswer">What is the name of your first pet?</label></td>
                                <td>
                                    <input
                                        id="securityAnswer"
                                        type="text"
                                        value={securityAnswer}
                                        onChange={(e) => setSecurityAnswer(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {error && <p className="error">{error}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                    <div className="modal-buttons">
                        <button type="submit">Sign Up</button>
                        <button type="button" onClick={triggerClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}