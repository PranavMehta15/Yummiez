import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageRestaurant.css';

export default function ManageRestaurant() {
  const [restaurants, setRestaurants] = useState([]); // State to store restaurant data
  const [foodItems, setFoodItems] = useState([]); // State to store food items

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch restaurants
        const restaurantResponse = await axios.get('http://localhost:3000/restaurants');
        setRestaurants(restaurantResponse.data);

        // Fetch food items
        const foodItemsResponse = await axios.get('http://localhost:3000/foodItems');
        setFoodItems(foodItemsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="manage-restaurant-container">
      <header className="manage-header">
        <h1>Manage Restaurants</h1>
        <p>Total Restaurants: {restaurants.length}</p>
      </header>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          // Filter food items for the current restaurant
          const restaurantFoodItems = foodItems.filter(
            (item) => item.restaurantId === restaurant.id
          );

          return (
            <div key={restaurant.id} className="restaurant-card">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-id">Restaurant ID: {restaurant.id}</p>
              <p className="restaurant-total-items">
                Total Items: {restaurantFoodItems.length}
              </p>
              <div className="restaurant-items">
                <h4>Items:</h4>
                <ul>
                  {restaurantFoodItems.map((item) => (
                    <li key={item.id} className="restaurant-item">
                      <p><strong>Name:</strong> {item.name}</p>
                      <p><strong>Price:</strong> ${item.price}</p>
                      <p><strong>Description:</strong> {item.description || 'N/A'}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
