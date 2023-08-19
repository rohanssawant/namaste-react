import { useState, useEffect } from "react";
import { API_URL } from "./common";

const useGetRestaurants = () => {
  // store res list
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  // make api call
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    let restaurants;
    const { cards } = jsonData?.data;

    // Iterating through whole cards array to find restaurants
    for (let i = 0; i < cards.length; i++) {
      if (
        cards[i]?.card?.card?.gridElements?.infoWithStyle &&
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      ) {
        console.log(`[HOOKS] Found rest in ${i}th place`);
        restaurants =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        break;
      }
    }

    console.log(`restaurants: ${JSON.stringify(restaurants)}`);
    setListOfRestaurant(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // return res list
  return listOfRestaurants;
};

export default useGetRestaurants;
