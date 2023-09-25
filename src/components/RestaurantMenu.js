import RestaurantItemCategory from "./RestaurantItemCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeader from "./RestaurantHeader";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo);

  const info = resInfo?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const filteredCards = cards.filter((card) => {
    return card?.card?.card?.title && card?.card?.card?.itemCards;
  });
  return (
    <div className="container-res-info w-[50%] mx-auto p-[25px]">
      <div>
        <RestaurantHeader info={info} />
        {filteredCards.map((card, index) => {
          return (
            <RestaurantItemCategory
              key={card?.card?.card?.title}
              card={card?.card?.card}
              showPanel={activeIndex === index ? true : false}
              setShowPanel={() => {
                if (activeIndex === index) return setActiveIndex(null);
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
