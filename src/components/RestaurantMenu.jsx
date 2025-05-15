import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [restaurantDetails, setRestaurantDetails] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8352188&lng=80.2010804&restaurantId=" +
            params.id +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        //console.log(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
        setRestaurant(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
        setRestaurantDetails(json?.data?.cards?.[2]?.card?.card?.info || {});
    }
    

    return (
        <div className="restaurant-menu-container">
            <div className="restaurant-details">
                <h1>{restaurantDetails.name}</h1>
                <h2>{restaurantDetails.city}</h2>
                <h2>{restaurantDetails?.slugs?.areaName}</h2>
            </div>
            <ul className="menu-list">
                {Object.values(restaurant).map((item2,index) => (
                    <div key={item2.card?.card?.title||index}>
                       
                        {Object.values(item2.card?.card?.itemCards || []).map((item) => (
                            <li key={item.card.info.id}>
                                <img
                                    src={
                                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                                        item.card.info.imageId
                                    }
                                    alt={item.card.info.name}
                                />
                                <span className="item-name">{item.card.info.name}</span>
                                <span className="item-price">₹{(item.card.info.price || 0) / 100}</span> {/* Price in rupees */}
                                <button>Add to Cart</button>
                            </li>
                        ))}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;