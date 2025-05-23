import { createContext, useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import "./Location.css"; // Import the CSS file

// Create a single context for both longitude and latitude,
// and potentially other location-related data
export const LocationContext = createContext(null);

function Location() {
  const [area, setArea] = useState("Chennai");
  const [temparea, setTempArea] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (area) {
      getCoordinatesFunction();
    }
  }, [area]);
  const MY_API_KEY = "682e084141260258366489xan29f9a2";

  async function getCoordinatesFunction() {
    setLoading(true); // Set loading to true when fetching starts
    setError(null); // Clear previous errors
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${area}&api_key=${MY_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.length > 0) {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      } else {
        setLatitude(null);
        setLongitude(null);
        setError("No results found for this location.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setLatitude(null);
      setLongitude(null);
      setError("Failed to fetch coordinates. Please try again."); // Set a user-friendly error
    } finally {
      setLoading(false); // Set loading to false when fetching is complete (success or error)
    }
  }

  const contextValue = {
    longitude,
    latitude,
    area,
    loading,
    error,
    setArea
  };

  return (
    // Use the LocationContext you created
    <LocationContext.Provider value={contextValue}>
      <div className="location-container">
        <input
          type="text"
          placeholder="Enter Your area name"
          value={temparea}
          onChange={(e) => setTempArea(e.target.value)}
          className="location-input"
        />
        <button
          onClick={() => {
            setArea(temparea);
          }}
          disabled={loading} // Disable button while loading
          className="location-button"
        >
          {loading ? "Searching..." : "Search"} {/* Show loading text */}
        </button>

        {/* Optional: Display loading and error messages */}
        {loading && <p className="loading-text">Loading coordinates...</p>}
        {error && <p className="error-text">{error}</p>}
        
      </div>
        {latitude && longitude && (
          <Searchbox />
        )}
    </LocationContext.Provider>
  );
}

export default Location;
