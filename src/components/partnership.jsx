import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router's navigation hook
import axios from "axios"; 
import "./partnership.css"; 

function Partner() {
    const [showRegisterPage, setShowRegisterPage] = useState(false); 
    const [restaurantId, setRestaurantId] = useState(""); 
    const navigate = useNavigate(); // React Router's navigation hook

    const handleContinue = async (e) => {
        e.preventDefault();

        try {
            // Check if the restaurant ID exists in the backend
            const response = await axios.get(`http://localhost:3000/restaurants/${restaurantId}`);
            if (response.status === 200) {
                // Navigate to the Admin Page with the restaurant ID
                navigate(`/admin/${restaurantId}`);
            } else {
                alert("Invalid Restaurant ID. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying restaurant ID:", error);
            alert("Invalid Restaurant ID. Please try again.");
        }
    };

    return (
        <div className="partner-container">
            <div className="partner-header">
                <h1>Partner with Yummiez</h1>
                <p>Access</p>
            </div>

            {/* Get Started Page */}
            {!showRegisterPage && (
                <div className="partner-form get-started-form">
                    <h2>Get Started</h2>
                    <p>Enter a mobile number or restaurant ID to continue</p>
                    <form onSubmit={handleContinue}>
                        <input
                            type="text"
                            placeholder="Enter Restaurant ID / Mobile number"
                            value={restaurantId}
                            onChange={(e) => setRestaurantId(e.target.value)}
                            required
                        />
                        <button type="submit" style={{ marginTop: "2px" }}>Continue</button>
                        <button
                            type="button"
                            onClick={() => setShowRegisterPage(true)} // Show the Register page
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

    const navigate = useNavigate(); // React Router's navigation hook

    // Function to generate a unique restaurant ID
    function generateRestaurantId() {
        return `RID-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to save the restaurant data
            const response = await axios.post("http://localhost:3000/restaurants", formData);

            if (response.status === 201) {
                alert("Restaurant registered successfully!");
                // Redirect to the Admin Panel with the restaurant ID
                navigate(`/admin/${formData.id}`);
            } else {
                alert("Failed to register the restaurant. Please try again.");
            }
        } catch (error) {
            console.error("Error registering restaurant:", error);
            alert("An error occurred while registering the restaurant.");
        }
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
                    onClick={onBack} // Go back to the Get Started page
                    style={{ marginTop: "10px" }}
                >
                    Back
                </button>
            </form>
        </div>
    );
}

export default Partner;
