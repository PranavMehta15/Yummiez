import React, { useEffect, useState ,useContext} from "react";
import HomeBottom from "./HomeBottom";
import "./Searchbox.css";
import { LocationContext } from "./Location";
function filterData(searchText, restaurants) {
  const result = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
}

function Searchbox() {
  const [json, setJson] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { latitude, longitude, area, loading, error, setArea } = useContext(LocationContext);
  const [loading2, setLoading] = useState(false); // Add loading state
  const [error2, setError] = useState(null); // Add error state
  useEffect(() => {
    getData();
  }, [latitude,longitude]);

  useEffect(() => {
    if (json) {
      setRestaurants(json);
    }
  }, [json]);

  async function getData() {
    try{
      setLoading(true); // Set loading to true when fetching starts
      setError(null); // Clear previous errors
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        
      );
      const data = await response.json();
      setJson(data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error2){
      console.error("Error fetching coordinates:", error);
      setRestaurants([]);
      setSearchText("");
      setError("Failed to getting restaurant in your area. Please try again.");
    }finally {
      setLoading(false); // Set loading to false when fetching is complete (success or error)
    }
  }
  if (loading) {
    return <p>Loading location data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  return (
    <>
    {loading2 && <p className="loading-text">Loading restaurants...</p>}
    {error2 && <p className="error-text">{error}</p>}
    <h2>Location Information</h2>
      {area && <p>Searched Area: {area}</p>}
      {latitude && longitude ? (
        <div>
        <div className="slider-container">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredData = filterData(searchText, json || []);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <HomeBottom restaurant={restaurants} />
      </div>
      ) : (
        <p>No location data available. Please search for an area.</p>
      )}
      
    </>
  );
}

export default Searchbox;
