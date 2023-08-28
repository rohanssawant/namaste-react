import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../store/cartSlice";
import CDN_IMG_URL from "../utils/common";

const CartItemList = ({ food }) => {
  // console.log(food);
  const dispatch = useDispatch();

  const handleOnAddItem = (itemName) => {
    // dispatch(addItem(itemName));
    dispatch(clearCart());
  };
  console.log(food);
  return (
    <div role="list" className="p-2 border-b-2	mb-2 flex justify-between">
      <h6 className="food-name">{food.name}</h6>
      <p className="food-price ">{`Rs.${food.price / 100}`}</p>
    </div>
  );
};

export default CartItemList;
