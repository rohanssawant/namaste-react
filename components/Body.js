import RestaurantCard from "./RestaurantCard";
import restList from "../utils/restList";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(restList);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestraunt(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
