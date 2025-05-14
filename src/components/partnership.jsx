import React, { useState } from "react";
import './partnership.css';
function Partner() {
    const [showRegisterPage, setShowRegisterPage] = useState(false);

    return (
        <div className="partner-container">
            <div className="partner-header">
                <h1>Partner with Yummiez</h1>
                <p>Access</p>
            </div>

            {!showRegisterPage && (
                <div className="partner-form get-started-form">
                    <h2>Get Started</h2>
                    <p>Enter a mobile number or restaurant ID to continue</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Restaurant ID / Mobile number"
                            required
                        />
                        <button type="submit" style={{ marginTop: "2px" }}>Continue</button>
                        <button
                            type="button"
                            onClick={() => setShowRegisterPage(true)}
                            style={{ marginTop: "10px" }}
                        >
                            Register
                        </button>
                    </form>
                    <p className="terms">
                        By logging in, I agree to Yummiez’s <a href="#">terms & conditions</a>
                    </p>
                </div>
            )}

            {/* Register Page */}
            {showRegisterPage && <Register onBack={() => setShowRegisterPage(false)} />}
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <div className="partner-form restaurant-details-form">
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
                                    readOnly // Make the field read-only
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
                <button type="submit">Register</button>
                <button
                    type="button"
                    onClick={onBack}
                    style={{ marginTop: "10px" }}
                >
                    Back
                </button>
            </form>
        </div>
    );
}

export default Partner;
