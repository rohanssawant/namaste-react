import RestaurantFood from "./RestaurantFood";

const RestaurantItem = ({ card }) => {
  const { title, itemCards } = card;
  // return (
  //   <div className="menu-items">
  //     <ul>
  //       <li>
  //         <h3>{title}</h3>
  // <ul>
  //   {itemCards ? (
  //     itemCards.map((food) => {
  //       return <RestaurantFood food={food} />;
  //     })
  //   ) : (
  //     <h1>t</h1>
  //   )}
  // </ul>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="menu-items w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          {itemCards ? (
            itemCards.map((food) => {
              return <RestaurantFood food={food} />;
            })
          ) : (
            <h1>t</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantItem;
