import React, { useEffect, useState } from "react";
import HomeBottom from "./HomeBottom";
import "./Searchbox.css";

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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (json) {
      setRestaurants(json);
    }
  }, [json]);

  async function getData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.82827636423284&lng=80.22453937679529&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setJson(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <>
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
    </>
  );
}

export default Searchbox;
