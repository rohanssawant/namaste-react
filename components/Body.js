import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/common";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfData, setFilteredListOfData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(`restaurants: ${restaurants}`);
    setListOfRestaurant(restaurants);
    setFilteredListOfData(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(listOfRestaurants);
  if (listOfRestaurants.length === 0) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRest = listOfRestaurants.filter((r) => {
                return r.info?.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setFilteredListOfData(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfData.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/res/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
