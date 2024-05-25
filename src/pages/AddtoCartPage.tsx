import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

const AddToCartPage = () => {
  // Example cart data
  const location = useLocation();
  const { movie } = location.state;
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <img
              src={item.poster}
              alt={item.title}
              className="w-20 h-28 mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.type}</p>
              <p>{item.year}</p>
              <p>${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-l-md"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 text-center"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <button
                  className="px-3 py-1 bg-gray-200 rounded-r-md"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      <button className="mt-6 flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
        <ShoppingCart className="w-6 h-6 mr-2" />
        Proceed to Checkout
      </button>
    </div>
  );
};

export default AddToCartPage;
