import React, { createContext, useState } from "react";

// Create the context
export const RestaurantContext = createContext();

// Create the provider component
export const RestaurantProvider = ({ children }) => {
  const [restaurantId, setRestaurantId] = useState(null); // Shared restaurant ID
  const [foodItems, setFoodItems] = useState([]); // Shared food items

  return (
    <RestaurantContext.Provider
      value={{
        restaurantId,
        setRestaurantId,
        foodItems,
        setFoodItems,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};