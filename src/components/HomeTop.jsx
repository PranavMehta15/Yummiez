import React from "react";
import "./HomeTop.css";
import { dishes } from "./Constant";

const cloudinaryBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

function HomeTop() {
    
  return (
    <>
      
    <div className="slider-container2">
      <div className="card2">
        {dishes?.map((item, index) => (
          <div key={index} className="card">
            {item?.imageId && (
              <img src={`${cloudinaryBaseUrl}${item.imageId}`} alt="Cloudinary Image" />
            )}
            {/* <h2>{item?.action?.text}</h2> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HomeTop;