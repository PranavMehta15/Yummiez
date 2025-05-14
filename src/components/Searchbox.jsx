import React, { useEffect } from "react";
import { useState } from "react";
import  {data} from "./Constant";
import HomeBottom from "./HomeBottom";
import "./Searchbox.css";

function filterData(searchText, restaurants, setRestaurants) {

  const result = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return result;
}


function Searchbox() {
    
    
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(data);
 
  useEffect(()=>{
    setRestaurants(data);
    // console.log("hello");
  },[searchText])
  return (
    <>
    <div className="slider-container">
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-button"
        onClick={() => {
          const data2 = filterData(searchText, restaurants, setRestaurants);
          setRestaurants(data2);
        }}
      >
        Search
      </button>
      {/* <HomeBottom restaurant={restaurants}/> */}
      
    </div>
    <HomeBottom restaurant={restaurants}/>
    </>

    
  );
}

export default Searchbox;
