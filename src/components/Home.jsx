import React from "react";
import "./Home.css";
import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";
import Searchbox from "./Searchbox";

const cloudinaryBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
function Home() {
  return (
    <div className="card-container">
      <HomeTop />
      <HomeBottom/>
      <Searchbox/>
    </div>  
  );
}

export default Home;