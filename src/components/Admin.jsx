import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import useParams for accessing URL parameters
import './Admin.css';

export default function AdminPanel() {
  const { restaurantId } = useParams(); // Get the restaurantId from the URL
  const [foodItems, setFoodItems] = useState([]); // State to store food items
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the new food item to the state
    const newFoodItem = { ...formData, restaurantId }; // Include restaurantId in the food item
    setFoodItems([...foodItems, newFoodItem]);

    // Save the data to the backend
    try {
      const response = await axios.post('http://localhost:3000/foodItems', newFoodItem);
      if (response.status === 201) {
        alert('Food item added successfully!');
        setFormData({ name: '', price: '', image: '' }); // Reset the form
      } else {
        alert('Failed to add food item. Please try again.');
      }
    } catch (error) {
      console.error('Error adding food item:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li className="menu-item">Dashboard</li>
          <li className="menu-item">
            <Link to="/manage-restaurant" >Manage Restaurants</Link> 
          </li>
     
          <li className="menu-item">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <h1>Welcome, Admin</h1>
          <p>Managing Restaurant ID: {restaurantId}</p> {/* Display the restaurantId */}
        </header>

        {/* Content Area */}
        <div className="admin-content">
          <h2>Add Food Item</h2>
          <form className="food-form" onSubmit={handleSubmit}>
            <label>
              Food Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Add Food Item</button>
          </form>

          <h2>Food Items</h2>
          <div className="food-items">
            {foodItems.map((item, index) => (
              <div key={index} className="food-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
