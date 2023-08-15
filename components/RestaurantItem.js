import RestaurantFood from "./RestaurantFood";

const RestaurantItem = ({ card }) => {
  return (
    <div className="menu-items">
      <ul>
        <li>
          <h3>{card?.card?.card?.title}</h3>
          <ul>
            {card?.card?.card?.itemCards ? (
              card?.card?.card?.itemCards.map((food) => {
                return <RestaurantFood food={food} />;
              })
            ) : (
              <h1>t</h1>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantItem;
