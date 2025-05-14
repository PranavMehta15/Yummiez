import React from "react";
import "./HomeBottom.css";

const cloudinaryBaseUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

function HomeBottom(props) {
  return (
    <>
      <div className="card-container">
        {props.restaurant?.map((item, index) => (
          <div key={index} className="card">
            {item?.info?.cloudinaryImageId && (
              <img
                src={`${cloudinaryBaseUrl}${item.info.cloudinaryImageId}`}
                alt="Cloudinary Image"
              />
            )}
            <h2>{item?.info?.name}</h2>
            <div>
              {item?.info?.avgRating}

              {item?.info?.sla?.slaString}
            </div>
            {item?.info?.cuisines.join(", ")}
            {item.info.areaName}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeBottom;
