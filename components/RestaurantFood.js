const RestaurantFood = ({ food }) => {
  return (
    <li>
      {food.card.info.name} -- {`Rs.${food.card.info.price / 100}`}
    </li>
  );
};

export default RestaurantFood;
