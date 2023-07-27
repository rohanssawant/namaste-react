import React from "react";
import ReactDOM from "react-dom/client";
import restList from "./restList.json";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="img"
          src="https://cdn.dribbble.com/users/5246351/screenshots/13929150/yummy_food_4x.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Time for delivery: {deliveryTime} minutes</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="res-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
