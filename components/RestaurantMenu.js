import RestaurantItem from "./RestaurantItem";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  const info = resInfo?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
  // cards.shift();
  // cards.shift();
  // cards.pop();
  // cards.pop();
  // console.log(cards);
  return (
    <div className="container-res-info w-[50%] mx-auto p-[25px]">
      <div>
        <RestaurantHeader info={info} />
        {cards.map((card) => {
          if (card?.card?.card?.title && card?.card?.card?.itemCards)
            return (
              <RestaurantItem
                key={card?.card?.card?.title}
                card={card?.card?.card}
              />
            );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
