import React from "react";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { addToCart, clearCart, removeFromCart } from "@/redux/slice/CartSlice";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const totalPrice = cart.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);

  return (
    <div className="w-[90%] mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 && (
        <div className="flex items-center justify-center">
          <h3 className="text-lg font-semibold">No items in your cart</h3>
        </div>
      )}
      <div className="w-full">
        {cart.map((item) => (
          <div
            key={item.imdbID}
            className="flex items-center mb-4 justify-around gap-10"
          >
            <div className="w-1.5/5">
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-[300px] h-[350px] "
              />
            </div>
            <div className="w-2/5">
              <h3 className="text-lg font-semibold">{item.Title}</h3>
              <p>{item.Type}</p>
              <p>{item.Year}</p>
              <p>${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => dispatch(removeFromCart(item.imdbID))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center"
                  value={item.quantity}
                  disabled
                />
                <button
                  className="px-3 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
      <button className="mt-6 flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
        <ShoppingCart className="w-6 h-6 mr-2" />
        Proceed to Checkout
      </button>
      <button
        onClick={() => dispatch(clearCart())}
        className="mt-6 flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default AddToCartPage;
