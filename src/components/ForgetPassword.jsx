import { useState } from "react";
import database from "../database.json"; // Import the JSON file

export default function ForgetPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate fetching user details from the database
    const user = database.users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (
      user &&
      user.securityAnswer.trim().toLowerCase() ===
        securityAnswer.trim().toLowerCase()
    ) {
      setShowPasswordFields(true);
      setError("");
    } else {
      setError("Invalid username, email, or security answer.");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be at least 10 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Simulate updating the user's password in the database
    const userIndex = database.users.findIndex(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    if (userIndex !== -1) {
      database.users[userIndex].password = newPassword;
      setSuccessMessage("Password updated successfully!");
      setError("");

      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setError("Error updating password.");
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      {!showPasswordFields && (
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Username</td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>What is the name of your first pet?</td>
              <td>
                <input
                  type="text"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="modal-buttons">
                  <button onClick={handleSubmit}>Submit</button>
                  <button onClick={onClose}>Close</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      {showPasswordFields && (
        <table>
          <tbody>
            <tr>
              <td>New Password</td>
              <td>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Confirm New Password</td>
              <td>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <div className="modal-buttons">
                  <button onClick={handlePasswordChange}>
                    Update Password
                  </button>
                  <button onClick={onClose}>Close</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
