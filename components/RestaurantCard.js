import CDN_IMG_URL from "../utils/common";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card max-w-sm max-h-sm bg-white border-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 place-self-center ">
      <div className="flex items-center justify-center">
        <img
          className="res-logo rounded-t-lg rounded-b-lg h-[200px] w-[200px] object-cover"
          src={CDN_IMG_URL + cloudinaryImageId}
          alt={name}
        ></img>
      </div>
      <div className="res-description-container p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {name}
        </h3>
        <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {avgRating} stars
        </h4>
        <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Time for delivery: {deliveryTime} minutes
        </h4>
        <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
