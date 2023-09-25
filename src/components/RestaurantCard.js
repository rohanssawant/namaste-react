import CDN_IMG_URL from "../utils/common";

const RestaurantCard = ({ resData }) => {
  // console.log(`resData---`);
  // console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div
      data-testid="resCard"
      className="res-card max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow place-self-center hover:shadow-2xl	hover:shadow-red-1000;"
    >
      <div className="">
        <img
          className="res-logo rounded-t-lg h-[280px] w-[100%] object-fill"
          src={CDN_IMG_URL + cloudinaryImageId}
          alt={name}
        ></img>
      </div>
      <div className="res-description-container p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  truncate">
          {name}
        </h3>
        <h4 className="mb-3 font-normal text-gray-700  truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="mb-3 font-normal text-gray-700 ">{avgRating} stars</h4>
        <h4 className="mb-3 font-normal text-gray-700 ">
          Time for delivery: {deliveryTime} minutes
        </h4>
        <h4 className="mb-3 font-normal text-gray-700 ">{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return ({ resData, label }) => {
    // console.log(label);
    return (
      <div>
        <label className="absolute bg-green-600 text-white p-1 rounded-lg">
          {label}
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
