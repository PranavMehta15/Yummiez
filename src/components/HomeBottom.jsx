import React, { useState, useEffect } from "react";
import "./HomeBottom.css";
import { Link } from "react-router-dom";

const cloudinaryBaseUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

function HomeBottom(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.restaurant?.length > 0) {
      setIsLoading(false); // Stop loading when data is available
    }
  }, [props.restaurant]);

  return (
    <>
      {isLoading ? (
        <div className="card-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-subtitle"></div>
              <div className="skeleton-text skeleton-subtitle"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-container">
          {props.restaurant?.map((item, index) => (
            <Link to={`/restaurant/${item?.info?.id}`} key={index}>
              <div className="card">
                {item?.info?.cloudinaryImageId && (
                  <img
                    src={`${cloudinaryBaseUrl}${item.info.cloudinaryImageId}`}
                    alt="Cloudinary Image"
                  />
                )}
                <h2>{item?.info?.name}</h2>
                <div>{item?.info?.sla?.slaString}</div>
                {item?.info?.cuisines.join(", ")}
                <br />
                <br />
                {item.info.areaName}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default HomeBottom;
