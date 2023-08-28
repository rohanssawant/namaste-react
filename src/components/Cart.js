import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import CartItemList from "./CarttItemList";
const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleOnClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <div className="w-[50%] mx-auto p-[25px]">
      <div className="cart-container flex justify-between items-center mb-4">
        <div className="cart-info-container">
          <h1 className="text-4xl font-bold">Cart</h1>
        </div>

        <button
          className="clear-btn border bg-slate-600 text-white border-zinc-600 px-10 rounded-full hover:text-slate-600 hover:bg-white p-[10px]"
          onClick={handleOnClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="flow-root">
        {cartItems ? (
          cartItems.map((food) => {
            return <CartItemList key={food.id} food={food} />;
          })
        ) : (
          <h1>t</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
