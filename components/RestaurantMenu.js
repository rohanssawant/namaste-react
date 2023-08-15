import { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/common";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    const res = jsonData.data;
    setResInfo(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //   return (
  //     <div className="menu">
  //       <h1>{name}</h1>
  //       <h2>{cuisines.join(", ")}</h2>
  //       <ul>
  //         {itemCards.map((item) => {
  //           return (
  //             <li>
  //               {item.card.info.name} - {`Rs.${item.card.info.price / 100}`}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards.length);
  cards.shift();
  cards.shift();
  cards.pop();
  cards.pop();
  console.log(cards);
  return (
    <>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p></p>
      {cards.map((card) => {
        return <RestaurantItem key={card?.card?.card?.title} card={card} />;
      })}
    </>
  );
};
export default RestaurantMenu;
