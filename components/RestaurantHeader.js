import React from "react";

const RestaurantHeader = ({ info }) => {
  const { name, cloudinaryImageId, cuisines, costForTwoMessage, avgRating } =
    info;
  console.log(avgRating);
  return (
    <div className="header-container flex justify-between items-center">
      <div className="info-container">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="text-sm">{costForTwoMessage}</p>
      </div>
      <div className="rating-container p-[20px] max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow flex ">
        ⭐️ {avgRating}
      </div>
    </div>
  );
};

export default RestaurantHeader;
