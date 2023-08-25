import CDN_IMG_URL from "../utils/common";

const RestaurantItemList = ({ food }) => {
  // console.log(food);
  return (
    <div role="list" className="p-2 border-b-2	mb-2 flex justify-between">
      <div className="food-info-container">
        <h6 className="food-header">
          {food.card.info.name} -- {`Rs.${food.card.info.price / 100}`}
        </h6>
        <p className="food-description text-xs text-gray-500">
          {food.card.info.description}
        </p>
        <button className="search-btn border bg-green-600 text-white border-zinc-600 px-4 rounded-full hover:text-green-600 hover:bg-white mt-3">
          Add +
        </button>
      </div>
      <div className="food-img-container ">
        <img
          className="max-w-[100] max-h-[100]"
          src={CDN_IMG_URL + food.card.info.imageId}
        />
      </div>
    </div>
  );
};

export default RestaurantItemList;
