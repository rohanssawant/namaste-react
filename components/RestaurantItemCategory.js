import RestaurantItemList from "./RestaurantItemList";

const RestaurantItemCategory = ({ card, showPanel, setShowPanel }) => {
  const { title, itemCards } = card;

  // This works like a toggle feat.
  const handleClick = () => {
    setShowPanel();
  };

  return (
    <div className="menu-items w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={handleClick}
      >
        <h5 className="text-lg font-bold leading-none text-gray-900">
          {title} ({itemCards.length})
        </h5>
        {showPanel ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      {showPanel && (
        <div className="flow-root">
          {itemCards ? (
            itemCards.map((food) => {
              return <RestaurantItemList key={food.card.info.id} food={food} />;
            })
          ) : (
            <h1>t</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory;
