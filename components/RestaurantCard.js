import CDN_IMG_URL from "../utils/common";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_IMG_URL + cloudinaryImageId}
        alt={name}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Time for delivery: {deliveryTime} minutes</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default RestaurantCard;
