import React from "react";
import "./HomeBottom.css";
import { Link } from "react-router-dom";

const cloudinaryBaseUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

function HomeBottom(props) {
  console.log(props.restaurant);
  return (
    <>
      <div className="card-container">
        {props.restaurant?.map((item, index) => (
          <Link to={`/restaurant/${item?.info?.id}`}>
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
            <br /><br />
            {item.info.areaName}
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomeBottom;
