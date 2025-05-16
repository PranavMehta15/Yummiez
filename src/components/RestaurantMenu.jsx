import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import { cartItem } from "./Constant";

function getRandomNumber() {
  return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
}

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [order, setOrder] = useState([]);
  const [priceMap, setPriceMap] = useState({});
  const [addedItems, setAddedItems] = useState(new Set()); // Track added items

  useEffect(() => {
    cartItem.value = order;
  }, [order]);

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

    setRestaurant(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
    );
    setRestaurantDetails(json?.data?.cards?.[2]?.card?.card?.info || {});
  }

  const addToCart = (item) => {
    const existingItemIndex = cartItem.value.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      cartItem.value[existingItemIndex].quantity += 1;
    } else {
      cartItem.value.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    }
    setOrder([...cartItem.value]);
    setAddedItems((prev) => new Set(prev).add(item.id)); // Mark item as added
  };

  const getPrice = (itemId, originalPrice) => {
    if (priceMap[itemId]) {
      return priceMap[itemId];
    }
    const randomPrice = originalPrice
      ? (originalPrice / 100).toFixed(2)
      : getRandomNumber();
    setPriceMap((prev) => ({ ...prev, [itemId]: randomPrice }));
    return randomPrice;
  };

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-details">
        <h1>{restaurantDetails.name}</h1>
        <h2>{restaurantDetails.city}</h2>
        <h2>{restaurantDetails?.slugs?.areaName}</h2>
      </div>
      <ul className="menu-list">
        {Object.values(restaurant).map((item2, index) => (
          <div key={item2.card?.card?.title || index}>
            {Object.values(item2.card?.card?.itemCards || []).map((item) => {
              const price = getPrice(item.card.info.id, item.card.info.price);

              return (
                <li key={item.card.info.id}>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                    alt={item.card.info.name}
                  />
                  <span className="item-name">{item.card.info.name}</span>
                  <span className="item-price">₹{price}</span>
                  {addedItems.has(item.card.info.id) ? (
                    <button className="add-button" disabled>
                      Added
                    </button>
                  ) : (
                    <button
                      className="add-button"
                      onClick={() =>
                        addToCart({
                          id: item.card.info.id,
                          name: item.card.info.name,
                          price: price,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              );
            })}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
