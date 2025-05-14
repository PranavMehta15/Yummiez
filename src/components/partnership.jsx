import React, { useState } from "react";
import "./LoginPopup.css";

function Partner({ onClose }) {
    const [showRegisterPage, setShowRegisterPage] = useState(false);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>

                {/* Get Started Page */}
                {!showRegisterPage && (
                    <div className="get-started-form">
                        <div className="modal-header">
                            <h1>Partner with Yummiez</h1>
                            <p>Access</p>
                        </div>
                        <h2>Get Started</h2>
                        <p>Enter a mobile number or restaurant ID to continue</p>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter Restaurant ID / Mobile number"
                                required
                            />
                            <div className="button-container">
                            <button type="submit" className="continue-btn" style={{ marginTop: "2px" }}>Continue</button>
                            <button
                                type="button"
                                className="register-btn"
                                onClick={() => setShowRegisterPage(true)}
                                style={{ marginTop: "10px" }}
                            >
                                Register
                            </button>
                            </div>
                            
                        </form>
                        <p className="terms">
                            By logging in, I agree to Yummiez’s <a href="#">terms & conditions</a>
                        </p>
                    </div>
                )}

                {/* Register Page */}
                {showRegisterPage && <Register onBack={() => setShowRegisterPage(false)} />}
            </div>
        </div>
    );
}

function Register({ onBack }) {
    const [formData, setFormData] = useState({
        id: generateRestaurantId(),
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    function generateRestaurantId() {
        return `RID-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("User registered successfully!");
                setFormData({
                    id: generateRestaurantId(),
                    name: "",
                    address: "",
                    phone: "",
                    email: "",
                });
                onBack();
            } else {
                const errorData = await response.json();
                console.error("Error response from server:", errorData);
                alert("Failed to register user. Please try again.");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("An error occurred while registering. Please check the console for details.");
        }
    };

    return (
        <div className="restaurant-details-form">
            <h2>Register Your Restaurant</h2>
            <p>Enter the details of your restaurant to register</p>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="id">Restaurant ID</label></td>
                            <td>
                                <input
                                    id="id"
                                    name="id"
                                    type="text"
                                    value={formData.id}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">Restaurant Name</label></td>
                            <td>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Restaurant Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address">Restaurant Address</label></td>
                            <td>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter Restaurant Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone Number</label></td>
                            <td>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email Address</label></td>
                            <td>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-container">
                <button type="submit" className="register-btn">Register</button>
                <button
                    type="button"
                    className="continue-btn"
                    onClick={onBack}
                    style={{ marginTop: "10px" }}
                >
                    Back
                </button>
                </div>
                
            </form>
        </div>
    );
}

export default Partner;