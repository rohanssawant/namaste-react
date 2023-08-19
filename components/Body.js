import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfData, setFilteredListOfData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    let restaurants;
    const { cards } = jsonData?.data;
    console.log(`fetch data called`);
    // Iterating through whole cards array to find restaurants
    for (let i = 0; i < cards.length; i++) {
      if (
        cards[i]?.card?.card?.gridElements?.infoWithStyle &&
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      ) {
        console.log(`Found rest in ${i}th place`);
        restaurants =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        break;
      }
    }

    // console.log(`restaurants: ${JSON.stringify(restaurants)}`);
    setListOfRestaurant(restaurants);
    setFilteredListOfData(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <Error msg={"Looks like you're offline!"} />;

  if (listOfRestaurants.length === 0) {
    console.log(`body w shimmer`);
    return <Shimmer />;
  }

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
