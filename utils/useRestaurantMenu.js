import { useState, useEffect } from "react";
import { MENU_URL } from "./common";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    const res = jsonData.data;
    setResInfo(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
